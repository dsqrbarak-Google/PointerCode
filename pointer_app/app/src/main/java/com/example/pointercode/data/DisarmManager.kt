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
 * 1. Concurrency control (prevents race conditions across Bluetooth, shortcuts, and manual triggers).
 * 2. Deduplication (strictly enforces 15-minute cooldown for app/shortcuts and single-send per drive session for BT).
 * 3. Exponential backoff retry on communication failures (4 attempts: immediate, 3s, 6s, 12s).
 * 4. Diagnostics logging and state persistence.
 */
object DisarmManager {

    private val isExecuting = AtomicBoolean(false)
    const val SUCCESS_COOLDOWN_MS = 15 * 60 * 1000L   // 15 minutes cooldown after successful disarm
    private const val RAPID_COOLDOWN_MS = 3_000L       // 3 seconds rapid debounce between broadcasts

    fun isDisarmInProgress(): Boolean = isExecuting.get()

    /**
     * Triggers disarming with atomic execution lock and cross-source deduplication.
     *
     * @param context Application context
     * @param prefs User preferences
     * @param source Name of the trigger source (e.g. "בלוטות' (XPENG)", "מסך הטלפון")
     * @param forceManual True when explicitly requested by user via UI button tap
     * @param driveSessionId Non-zero when triggered by Bluetooth to track the active drive session
     * @param onComplete Optional callback on main thread with the final result
     */
    fun triggerDisarm(
        context: Context,
        prefs: PointerPreferences,
        source: String,
        forceManual: Boolean = false,
        driveSessionId: Long = 0L,
        onComplete: ((PointerResult) -> Unit)? = null
    ) {
        val vNumber = prefs.getVehicleNumber().trim()
        val code = prefs.getPointerCode().trim()
        val driverName = prefs.getDriverName().trim()

        AppLogger.i("DisarmManager", "Trigger requested: source='$source', forceManual=$forceManual, session=$driveSessionId, vehicle='$vNumber'")

        if (vNumber.isBlank() || code.length != 4) {
            val err = PointerResult.Failure("פרטי רכב חסרים או קוד שגוי", -1)
            AppLogger.w("DisarmManager", "Aborted: Missing vehicle number or code is not 4 digits")
            onComplete?.invoke(err)
            return
        }

        // Concurrency Guard: Atomic lock prevents multiple coroutines executing simultaneously
        if (!isExecuting.compareAndSet(false, true)) {
            AppLogger.w("DisarmManager", "Dropped: Another disarm request is currently executing in-flight!")
            return
        }

        val now = System.currentTimeMillis()
        val lastDisarmTime = prefs.getLastDisarmTime()
        val lastSuccessTime = prefs.getLastSuccessfulDisarmTime()

        if (!forceManual) {
            // 1. Rapid debounce (3 seconds) across simultaneous broadcast intents
            if (now - lastDisarmTime < RAPID_COOLDOWN_MS) {
                AppLogger.w("DisarmManager", "Suppressed by rapid debounce (${now - lastDisarmTime}ms < ${RAPID_COOLDOWN_MS}ms)")
                isExecuting.set(false)
                return
            }

            // 2. Bluetooth Drive Session Deduplication: "לא לשלוח יותר מפעם אחת בנסיעה (כל זמן שה-BT עדיין מחובר)"
            if (driveSessionId != 0L) {
                val disarmedSession = prefs.getDisarmedDriveSessionId()
                if (driveSessionId == disarmedSession) {
                    AppLogger.w("DisarmManager", "Suppressed: Drive session $driveSessionId was already successfully disarmed (BT connected)!")
                    isExecuting.set(false)
                    return
                }
            } else {
                // 3. Global 15-Minute Cooldown for app launch / shortcuts: "אם נשלח בהצלחה ברבע שעה אחרונה"
                val timeSinceSuccess = now - lastSuccessTime
                if (lastSuccessTime > 0 && timeSinceSuccess < SUCCESS_COOLDOWN_MS) {
                    val secRemaining = (SUCCESS_COOLDOWN_MS - timeSinceSuccess) / 1000
                    AppLogger.w("DisarmManager", "Suppressed by 15-min cooldown: Disarmed successfully ${timeSinceSuccess / 1000}s ago ($secRemaining sec remaining)")
                    isExecuting.set(false)
                    return
                }
            }
        } else {
            AppLogger.i("DisarmManager", "Bypassing cooldowns: forceManual=true")
        }

        // Record attempt timestamp
        prefs.setLastDisarmTime(now)
        if (driveSessionId != 0L) {
            prefs.setLastBtDisarmTime(now)
        }

        CoroutineScope(Dispatchers.IO).launch {
            try {
                // Show in-progress notification on phone and car
                NotificationHelper.showDisarmingNotification(context, vNumber, source)

                var attempt = 1
                val maxAttempts = 4
                var result: PointerResult? = null

                // Retry loop with exponential backoff: 3s, 6s, 12s
                val retryDelays = longArrayOf(3000L, 6000L, 12000L)

                while (attempt <= maxAttempts) {
                    AppLogger.i("DisarmManager", "Attempt $attempt/$maxAttempts: Contacting Pointer API for vehicle $vNumber...")
                    result = PointerApi.checkCode(vNumber, code, driverName)

                    val isNetworkError = result is PointerResult.NetworkError ||
                            (result is PointerResult.Failure && result.rc == -99)

                    if (!isNetworkError || attempt == maxAttempts) {
                        AppLogger.i("DisarmManager", "Attempt $attempt completed with result: $result")
                        break
                    }

                    val delayMs = retryDelays.getOrElse(attempt - 1) { 10000L }
                    AppLogger.w("DisarmManager", "Attempt $attempt failed with network error ($result). Retrying in ${delayMs / 1000}s...")

                    NotificationHelper.showRetryingNotification(
                        context,
                        vNumber,
                        source,
                        attempt,
                        maxAttempts,
                        delayMs / 1000
                    )
                    delay(delayMs)
                    attempt++
                }

                val finalResult = result ?: PointerResult.Failure("שגיאה לא ידועה", -1)
                val executionTime = System.currentTimeMillis()

                when (finalResult) {
                    is PointerResult.Success -> {
                        AppLogger.i("DisarmManager", "DISARM SUCCESS: ${finalResult.message}")
                        prefs.setLastSuccessfulDisarmTime(executionTime)
                        prefs.setLastDisarmTime(executionTime)
                        if (driveSessionId != 0L) {
                            prefs.setDisarmedDriveSessionId(driveSessionId)
                            prefs.setLastBtDisarmTime(executionTime)
                        }
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
                        AppLogger.e("DisarmManager", "DISARM FAILURE (rc=${finalResult.rc}): ${finalResult.message}")
                        prefs.setLastDisarmTime(executionTime)
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
                        AppLogger.e("DisarmManager", "DISARM NETWORK ERROR: $msg", finalResult.throwable)
                        prefs.setLastDisarmTime(executionTime)
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
                AppLogger.e("DisarmManager", "Unexpected exception during disarm", t)
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
