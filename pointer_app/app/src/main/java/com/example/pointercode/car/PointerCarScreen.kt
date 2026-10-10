package com.example.pointercode.car

import androidx.car.app.CarContext
import androidx.car.app.CarToast
import androidx.car.app.Screen
import androidx.car.app.model.Action
import androidx.car.app.model.CarColor
import androidx.car.app.model.Header
import androidx.car.app.model.Pane
import androidx.car.app.model.PaneTemplate
import androidx.car.app.model.Row
import androidx.car.app.model.Template
import com.example.pointercode.data.DisarmManager
import com.example.pointercode.data.PointerPreferences
import com.example.pointercode.data.PointerResult

/**
 * Android Auto Screen providing in-car control and real-time status of vehicle code disarming.
 * Guaranteed to display immediately without an empty loading spinner or frozen hourglass.
 */
class PointerCarScreen(carContext: CarContext) : Screen(carContext) {

    private val prefs = PointerPreferences(carContext)
    private var isDisarming: Boolean = false
    private var statusMessage: String? = null
    private var isSuccess: Boolean = false
    private var isError: Boolean = false

    init {
        // Read recent disarm state from history
        val latest = prefs.getDisarmHistory().firstOrNull()
        val lastTime = prefs.getLastDisarmTime()
        val elapsedMinutes = if (lastTime > 0) (System.currentTimeMillis() - lastTime) / 60000L else 999L

        if (latest?.success == true && elapsedMinutes < 15) {
            isSuccess = true
            isError = false
            statusMessage = "קודן נוטרל בהצלחה (${latest.message}) • לפני $elapsedMinutes דק'"
        } else if (latest?.success == false && elapsedMinutes < 5) {
            isSuccess = false
            isError = true
            statusMessage = "שגיאה קודמת: ${latest.message}"
        } else {
            statusMessage = "קודן מוכן לנטרול"
        }
    }

    override fun onGetTemplate(): Template {
        val paneBuilder = Pane.Builder()

        if (!prefs.isConfigured()) {
            paneBuilder.addRow(
                Row.Builder()
                    .setTitle("הגדרת קודן פוינטר")
                    .addText("נא לפתוח את האפליקציה בטלפון ולהגדיר מספר רכב וקוד סודי.")
                    .build()
            )
            return buildPaneTemplate(paneBuilder.build(), "4S Pointer Code")
        }

        val vNumber = prefs.getVehicleNumber()
        val formattedPlate = formatVehicleNumber(vNumber)
        val driverName = prefs.getDriverName()

        // 1. Vehicle info row
        val vehicleRow = Row.Builder()
            .setTitle("🚗 רכב: $formattedPlate")
            .apply {
                if (driverName.isNotBlank()) {
                    addText("נהג: $driverName")
                }
            }
            .build()
        paneBuilder.addRow(vehicleRow)

        // 2. Status row
        val currentlyExecuting = isDisarming || DisarmManager.isDisarmInProgress()
        val statusTitle = when {
            currentlyExecuting -> "⏳ שולח קוד לפוינטר..."
            isSuccess -> "✅ קודן נוטרל בהצלחה!"
            isError -> "⚠️ התקשורת עדיין לא הצליחה"
            else -> "קודן מוכן לנטרול"
        }

        val statusDetails = statusMessage ?: "לחץ על הכפתור לנטרול הקודן"

        val statusRow = Row.Builder()
            .setTitle(statusTitle)
            .addText(statusDetails)
            .build()
        paneBuilder.addRow(statusRow)

        // 3. Action button (never blocks the entire screen with a loading spinner)
        val actionTitle = when {
            currentlyExecuting -> "שולח קוד..."
            isError -> "🔄 נסה שוב כעת"
            isSuccess -> "🔄 שלח קוד שוב"
            else -> "🚗 שלח קוד פוינטר כעת"
        }

        val actionColor = when {
            isError -> CarColor.YELLOW
            currentlyExecuting -> CarColor.SECONDARY
            else -> CarColor.GREEN
        }

        val action = Action.Builder()
            .setTitle(actionTitle)
            .setBackgroundColor(actionColor)
            .setOnClickListener {
                if (!isDisarming && !DisarmManager.isDisarmInProgress()) {
                    performDisarm()
                }
            }
            .build()

        paneBuilder.addAction(action)

        return buildPaneTemplate(paneBuilder.build(), "4S Pointer Code")
    }

    private fun buildPaneTemplate(pane: Pane, title: String): PaneTemplate {
        return if (carContext.carAppApiLevel >= 5) {
            val header = Header.Builder()
                .setTitle(title)
                .setStartHeaderAction(Action.APP_ICON)
                .build()
            PaneTemplate.Builder(pane)
                .setHeader(header)
                .build()
        } else {
            @Suppress("DEPRECATION")
            PaneTemplate.Builder(pane)
                .setTitle(title)
                .setHeaderAction(Action.APP_ICON)
                .build()
        }
    }

    private fun performDisarm() {
        val vNumber = prefs.getVehicleNumber()
        val code = prefs.getPointerCode()

        if (vNumber.isBlank() || code.length != 4) {
            statusMessage = "פרטי רכב חסרים או לא תקינים"
            invalidate()
            return
        }

        isDisarming = true
        isError = false
        statusMessage = "שולח קוד פוינטר לרכב כעת..."
        invalidate()

        DisarmManager.triggerDisarm(
            context = carContext,
            prefs = prefs,
            source = "מסך הרכב (Android Auto)",
            forceManual = true
        ) { result ->
            isDisarming = false
            when (result) {
                is PointerResult.Success -> {
                    isSuccess = true
                    isError = false
                    statusMessage = "הרכב נוטרל: ${result.message} • נסיעה טובה!"
                    CarToast.makeText(carContext, "קודן פוינטר נוטרל בהצלחה! 🚗", CarToast.LENGTH_SHORT).show()
                }
                is PointerResult.Failure -> {
                    isSuccess = false
                    isError = true
                    statusMessage = "שגיאה: ${result.message}"
                    CarToast.makeText(carContext, "שגיאה: ${result.message}", CarToast.LENGTH_LONG).show()
                }
                is PointerResult.NetworkError -> {
                    isSuccess = false
                    isError = true
                    statusMessage = "אין קליטה סלולרית ברכב (${result.errorMsg})"
                    CarToast.makeText(carContext, "בעיית תקשורת ברכב. לחץ לניסיון חוזר", CarToast.LENGTH_LONG).show()
                }
            }
            invalidate()
        }
    }

    private fun formatVehicleNumber(raw: String): String {
        val digits = raw.filter { it.isDigit() }
        return when (digits.length) {
            7 -> "${digits.substring(0, 2)}-${digits.substring(2, 5)}-${digits.substring(5, 7)}"
            8 -> "${digits.substring(0, 3)}-${digits.substring(3, 5)}-${digits.substring(5, 8)}"
            else -> digits
        }
    }
}
