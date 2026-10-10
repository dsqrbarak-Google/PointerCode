package com.example.pointercode.data

import android.content.Context
import com.example.pointercode.bluetooth.NotificationHelper
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.util.concurrent.atomic.AtomicBoolean

/**
 * Unified, atomic disarming manager.
 * Single source of truth for:
 * 1. Concurrency control (prevents race conditions across Bluetooth, Android Auto, and manual triggers).
 * 2. Deduplication (strictly enforces cooldowns to prevent double sends).
 * 3. Smart retry on network failures.
 * 4. State updates and persistence.
 */
object DisarmManager {

    private val isExecuting = AtomicBoolean(false)
    private const val SUCCESS_COOLDOWN_MS = 60_000L   // 60 seconds cooldown after successful disarm
    private const val RAPID_COOLDOWN_MS = 5_000L     // 5 seconds cooldown between any rapid attempts

    fun isDisarmInProgress(): Boolean = isExecuting.get()

    /**
     * Triggers disarming with atomic execution lock and cross-source deduplication.
     *
     * @param context Application context
     * @param prefs User preferences
     * @param source Name of the trigger source (e.g. "בלוטות' (XPENG)", "מסך הרכב (Android Auto)")
     * @param forceManual True when explicitly requested by user (e.g. screen tap, app button, shortcut)
     * @param onComplete Optional callback on main thread with the final result
     */
    fun triggerDisarm(
        context: Context,
        prefs: PointerPreferences,
        source: String,
        forceManual: Boolean = false,
        onComplete: ((PointerResult) -> Unit)? = null
    ) {
        val vNumber = prefs.getVehicleNumber().trim()
        val code = prefs.getPointerCode().trim()
        val driverName = prefs.getDriverName().trim()

        if (vNumber.isBlank() || code.length != 4) {
            val err = PointerResult.Failure("פרטי רכב חסרים או קוד שגוי", -1)
            onComplete?.invoke(err)
            return
        }

        // Concurrency Guard: Atomic lock prevents multiple coroutines executing simultaneously
        if (!isExecuting.compareAndSet(false, true)) {
            // Already executing a disarm request in-flight right now! Drop duplicate.
            return
        }

        val now = System.currentTimeMillis()
        val lastDisarmTime = prefs.getLastDisarmTime()
        val latestHistory = prefs.getDisarmHistory().firstOrNull()

        if (!forceManual) {
            // Check rapid debounce (5 seconds across all broadcast receivers)
            if (now - lastDisarmTime < RAPID_COOLDOWN_MS) {
                isExecuting.set(false)
                return
            }

            // Check success cooldown (60 seconds if already successfully disarmed recently)
            if (latestHistory?.success == true && (now - lastDisarmTime < SUCCESS_COOLDOWN_MS)) {
                isExecuting.set(false)
                return
            }
        }

        // Immediately update persistent timestamps to block any race condition
        prefs.setLastDisarmTime(now)
        prefs.setLastBtDisarmTime(now)

        CoroutineScope(Dispatchers.IO).launch {
            try {
                // Show in-progress notification on phone
                NotificationHelper.showDisarmingNotification(context, vNumber, source)

                var attempt = 1
                val maxAttempts = 3
                var result: PointerResult? = null

                while (attempt <= maxAttempts) {
                    result = PointerApi.checkCode(vNumber, code, driverName)

                    val isNetworkError = result is PointerResult.NetworkError ||
                            (result is PointerResult.Failure && result.rc == -99)

                    if (!isNetworkError || attempt == maxAttempts) {
                        break
                    }

                    val delayMs = 3000L * attempt
                    NotificationHelper.showRetryingNotification(
                        context,
                        vNumber,
                        source,
                        "ניסיון תקשורת נוסף ($attempt/$maxAttempts)..."
                    )
                    delay(delayMs)
                    attempt++
                }

                val finalResult = result ?: PointerResult.Failure("שגיאה לא ידועה", -1)
                val executionTime = System.currentTimeMillis()

                when (finalResult) {
                    is PointerResult.Success -> {
                        prefs.setLastDisarmTime(executionTime)
                        prefs.addDisarmHistory(
                            DisarmHistoryEntry(
                                timestamp = executionTime,
                                source = source,
                                success = true,
                                message = finalResult.message
                            )
                        )
                        NotificationHelper.showSuccessNotification(context, vNumber, finalResult.message)
                        NotificationHelper.triggerHaptic(context)
                    }
                    is PointerResult.Failure -> {
                        prefs.addDisarmHistory(
                            DisarmHistoryEntry(
                                timestamp = executionTime,
                                source = source,
                                success = false,
                                message = finalResult.message
                            )
                        )
                        NotificationHelper.showErrorNotification(context, vNumber, finalResult.message)
                    }
                    is PointerResult.NetworkError -> {
                        val msg = "בעיית קליטה ברכב (${finalResult.errorMsg})"
                        prefs.addDisarmHistory(
                            DisarmHistoryEntry(
                                timestamp = executionTime,
                                source = source,
                                success = false,
                                message = msg
                            )
                        )
                        NotificationHelper.showErrorNotification(context, vNumber, msg)
                    }
                }

                withContext(Dispatchers.Main) {
                    onComplete?.invoke(finalResult)
                }

            } catch (t: Throwable) {
                val err = PointerResult.Failure("שגיאה: ${t.localizedMessage ?: "שגיאה לא ידועה"}", -1)
                withContext(Dispatchers.Main) {
                    onComplete?.invoke(err)
                }
            } finally {
                isExecuting.set(false)
            }
        }
    }
}
