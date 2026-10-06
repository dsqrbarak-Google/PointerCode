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
import com.example.pointercode.bluetooth.BluetoothReceiver
import com.example.pointercode.data.DisarmHistoryEntry
import com.example.pointercode.data.PointerApi
import com.example.pointercode.data.PointerPreferences
import com.example.pointercode.data.PointerResult
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

/**
 * Android Auto Screen providing in-car control and real-time status of vehicle code disarming.
 */
class PointerCarScreen(carContext: CarContext) : Screen(carContext) {

    private val prefs = PointerPreferences(carContext)
    private var isLoading: Boolean = false
    private var statusMessage: String? = null
    private var isSuccess: Boolean = false
    private var isNetworkError: Boolean = false

    init {
        // When screen is created in Android Auto:
        // Check if car was already disarmed recently. If not, trigger disarm!
        val lastTime = prefs.getLastDisarmTime()
        val elapsed = System.currentTimeMillis() - lastTime
        val twoMinutesMs = 2 * 60 * 1000L
        val history = prefs.getDisarmHistory()
        val latest = history.firstOrNull()

        if (prefs.isConfigured()) {
            if (lastTime > 0 && elapsed < twoMinutesMs && latest?.success == true) {
                // Already disarmed recently
                statusMessage = "קודן נוטרל בהצלחה (${latest.message})"
                isSuccess = true
                isNetworkError = false
            } else {
                // Auto-disarm on Android Auto start
                performDisarm(source = "Android Auto")
            }
        } else {
            statusMessage = "נדרשת הגדרה ראשונית בטלפון"
            isSuccess = false
            isNetworkError = false
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

        if (isLoading) {
            paneBuilder.setLoading(true)
            return buildPaneTemplate(paneBuilder.build(), "מנטרל קודן רכב $formattedPlate...")
        }

        // Vehicle info row
        val vehicleRow = Row.Builder()
            .setTitle("מספר רכב: $formattedPlate")
            .apply {
                if (driverName.isNotBlank()) {
                    addText("נהג: $driverName")
                }
            }
            .build()
        paneBuilder.addRow(vehicleRow)

        // Status row
        val statusTitle = when {
            isSuccess -> "קודן נוטרל בהצלחה! 🚗"
            isNetworkError -> "⚠️ התקשורת עדיין לא הצליחה"
            statusMessage != null -> "סטטוס ניטרול"
            else -> "קודן מוכן לניטרול"
        }

        val statusDetails = statusMessage ?: "לחץ על הכפתור לניטרול הקודן"

        val statusRow = Row.Builder()
            .setTitle(statusTitle)
            .addText(statusDetails)
            .build()
        paneBuilder.addRow(statusRow)

        // Action button on car screen
        val actionTitle = if (isNetworkError) "נסה שוב כעת" else if (isSuccess) "נטרל שוב" else "נטרל קודן כעת"
        val action = Action.Builder()
            .setTitle(actionTitle)
            .setBackgroundColor(if (isNetworkError) CarColor.YELLOW else CarColor.GREEN)
            .setOnClickListener {
                performDisarm(source = "מסך הרכב (Android Auto)")
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

    private fun performDisarm(source: String) {
        val vNumber = prefs.getVehicleNumber()
        val code = prefs.getPointerCode()
        val driverName = prefs.getDriverName()

        if (vNumber.isBlank() || code.length != 4) {
            statusMessage = "פרטי רכב חסרים או לא תקינים"
            invalidate()
            return
        }

        isLoading = true
        invalidate()

        CoroutineScope(Dispatchers.IO).launch {
            // Also delegate through smart retry in BluetoothReceiver
            val now = System.currentTimeMillis()
            val result = PointerApi.checkCode(vNumber, code, driverName)

            withContext(Dispatchers.Main) {
                isLoading = false
                when (result) {
                    is PointerResult.Success -> {
                        isSuccess = true
                        isNetworkError = false
                        statusMessage = "הרכב פתוח • ${result.message} • נסיעה טובה!"
                        prefs.addDisarmHistory(
                            DisarmHistoryEntry(
                                timestamp = now,
                                source = source,
                                success = true,
                                message = result.message
                            )
                        )
                        CarToast.makeText(carContext, "קודן פוינטר נוטרל בהצלחה! נסיעה טובה", CarToast.LENGTH_SHORT).show()
                    }
                    is PointerResult.Failure -> {
                        isSuccess = false
                        isNetworkError = false
                        statusMessage = "שגיאה: ${result.message}"
                        prefs.addDisarmHistory(
                            DisarmHistoryEntry(
                                timestamp = now,
                                source = source,
                                success = false,
                                message = result.message
                            )
                        )
                        CarToast.makeText(carContext, "שגיאה בניטרול: ${result.message}", CarToast.LENGTH_LONG).show()
                    }
                    is PointerResult.NetworkError -> {
                        isSuccess = false
                        isNetworkError = true
                        statusMessage = "אין חיבור לאינטרנט ברכב כרגע. מתבצעים ניסיונות חוזרים..."
                        prefs.addDisarmHistory(
                            DisarmHistoryEntry(
                                timestamp = now,
                                source = source,
                                success = false,
                                message = result.errorMsg
                            )
                        )
                        CarToast.makeText(carContext, "התקשורת עדיין לא הצליחה - לחץ לניסיון חוזר", CarToast.LENGTH_LONG).show()
                        // Run smart retry in background
                        BluetoothReceiver.executeDisarm(carContext, prefs, source)
                    }
                }
                invalidate()
            }
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
