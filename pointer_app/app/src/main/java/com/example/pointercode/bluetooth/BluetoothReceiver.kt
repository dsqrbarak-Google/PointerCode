package com.example.pointercode.bluetooth

import android.bluetooth.BluetoothA2dp
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothHeadset
import android.bluetooth.BluetoothProfile
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.Build
import android.os.PowerManager
import com.example.pointercode.data.DisarmHistoryEntry
import com.example.pointercode.data.PointerApi
import com.example.pointercode.data.PointerPreferences
import com.example.pointercode.data.PointerResult
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class BluetoothReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent?) {
        if (intent == null) return

        val action = intent.action ?: return

        // Verify action is one of our interested Bluetooth connection events
        val isAclConnected = action == BluetoothDevice.ACTION_ACL_CONNECTED
        val isA2dpConnected = action == BluetoothA2dp.ACTION_CONNECTION_STATE_CHANGED &&
                intent.getIntExtra(BluetoothProfile.EXTRA_STATE, -1) == BluetoothProfile.STATE_CONNECTED
        val isHeadsetConnected = action == BluetoothHeadset.ACTION_CONNECTION_STATE_CHANGED &&
                intent.getIntExtra(BluetoothProfile.EXTRA_STATE, -1) == BluetoothProfile.STATE_CONNECTED

        if (!isAclConnected && !isA2dpConnected && !isHeadsetConnected) {
            return
        }

        val prefs = PointerPreferences(context)
        if (!prefs.isBtAutoDisarmEnabled() || !prefs.isConfigured()) {
            return
        }

        val targetAddress = prefs.getBtDeviceAddress().trim()
        val targetName = prefs.getBtDeviceName().trim()
        if (targetAddress.isBlank() && targetName.isBlank()) {
            return
        }

        val rawDevice = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE, BluetoothDevice::class.java)
        } else {
            @Suppress("DEPRECATION")
            intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE)
        } ?: return

        val deviceAddress = try { rawDevice.address } catch (_: SecurityException) { null }
        val deviceName = try { rawDevice.name } catch (_: SecurityException) { null }
        val deviceAlias = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            try { rawDevice.alias } catch (_: SecurityException) { null }
        } else null
        val resolvedDeviceName = deviceAlias ?: deviceName

        val addressMatches = !deviceAddress.isNullOrBlank() &&
                targetAddress.isNotBlank() &&
                deviceAddress.equals(targetAddress, ignoreCase = true)

        val nameMatches = !resolvedDeviceName.isNullOrBlank() &&
                targetName.isNotBlank() &&
                (resolvedDeviceName.equals(targetName, ignoreCase = true) ||
                 resolvedDeviceName.contains(targetName, ignoreCase = true) ||
                 targetName.contains(resolvedDeviceName, ignoreCase = true))

        if (!addressMatches && !nameMatches) {
            return
        }

        // Prevent duplicate disarms across all profiles and sources
        val now = System.currentTimeMillis()
        val lastBtTime = prefs.getLastBtDisarmTime()
        val lastDisarmTime = prefs.getLastDisarmTime()
        val latestHistory = prefs.getDisarmHistory().firstOrNull()
        val twoMinutesMs = 2 * 60 * 1000L

        // Debounce simultaneous firing across multiple profiles within 4 seconds,
        // or suppress within 60 seconds if already successfully disarmed
        if ((now - lastBtTime < 4_000L) || (latestHistory?.success == true && (now - lastBtTime < DEBOUNCE_MS))) {
            return
        }

        // Suppress if the vehicle was already successfully disarmed in the last 2 minutes (e.g. via shortcut, app, or widget)
        if (lastDisarmTime > 0 && (now - lastDisarmTime) < twoMinutesMs && latestHistory?.success == true) {
            return
        }

        prefs.setLastBtDisarmTime(now)

        val resolvedName = resolvedDeviceName ?: targetName
        executeDisarm(context, prefs, resolvedName, goAsync())
    }

    companion object {
        private const val DEBOUNCE_MS = 60_000L // 60 seconds cooldown between disarms
        internal var retryDelaysMs: List<Long> = listOf(3_000L, 6_000L, 10_000L, 15_000L)

        fun isNetworkConnected(context: Context): Boolean {
            return try {
                val cm = context.getSystemService(Context.CONNECTIVITY_SERVICE) as? android.net.ConnectivityManager
                val network = cm?.activeNetwork ?: return false
                val caps = cm.getNetworkCapabilities(network) ?: return false
                caps.hasCapability(android.net.NetworkCapabilities.NET_CAPABILITY_INTERNET)
            } catch (_: Exception) {
                false
            }
        }

        fun executeDisarm(
            context: Context,
            prefs: PointerPreferences,
            deviceName: String,
            pendingResult: PendingResult? = null
        ) {
            val vNumber = prefs.getVehicleNumber()
            val code = prefs.getPointerCode()
            val driverName = prefs.getDriverName()

            CoroutineScope(Dispatchers.IO).launch {
                val sourceLabel = if (deviceName.isNotBlank()) "בלוטות' ($deviceName)" else "בלוטות' ברכב"
                var wakeLock: PowerManager.WakeLock? = null
                var attempt = 1
                val maxAttempts = retryDelaysMs.size + 1
                var executionTime = System.currentTimeMillis()

                try {
                    val powerManager = context.getSystemService(Context.POWER_SERVICE) as? PowerManager
                    wakeLock = powerManager?.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "PointerCode:DisarmRetryWakeLock")
                    wakeLock?.acquire(90_000L) // Safe auto-release

                    NotificationHelper.showDisarmingNotification(context, vNumber, deviceName)

                    var result: PointerResult? = null

                    while (attempt <= maxAttempts) {
                        executionTime = System.currentTimeMillis()
                        prefs.setLastBtDisarmTime(executionTime)

                        if (attempt > 1) {
                            NotificationHelper.showDisarmingNotification(context, vNumber, "$deviceName (ניסיון $attempt/$maxAttempts)")
                        }

                        result = PointerApi.checkCode(vNumber, code, driverName)

                        val isNetworkError = result is PointerResult.NetworkError ||
                                (result is PointerResult.Failure && result.rc == -99)

                        if (!isNetworkError || attempt == maxAttempts) {
                            // If success, definitive server failure, or final attempt reached: exit loop
                            break
                        }

                        // Release PendingResult so BroadcastReceiver doesn't timeout / ANR during subsequent delays
                        try {
                            pendingResult?.finish()
                        } catch (_: Exception) {}

                        val delayMs = retryDelaysMs[attempt - 1]
                        val delaySec = (delayMs / 1000).toInt()

                        NotificationHelper.showRetryingNotification(
                            context = context,
                            vehicleNumber = vNumber,
                            deviceName = deviceName,
                            statusText = "התקשורת עדיין לא הצליחה (ניסיון $attempt/$maxAttempts) • ניסיון נוסף בעוד $delaySec שניות..."
                        )

                        // Smart adaptive wait: Wait up to delayMs, but check if validated internet becomes available earlier
                        val checkIntervalMs = 500L
                        var elapsedMs = 0L
                        while (elapsedMs < delayMs) {
                            delay(checkIntervalMs)
                            elapsedMs += checkIntervalMs
                            if (elapsedMs >= 1500L && isNetworkConnected(context)) {
                                // Active internet detected, proceed immediately!
                                break
                            }
                        }

                        attempt++
                    }

                    // Process final result
                    val finalSource = if (attempt > 1) "$sourceLabel (ניסיון $attempt/$maxAttempts)" else sourceLabel

                    when (val finalResult = result) {
                        is PointerResult.Success -> {
                            prefs.addDisarmHistory(
                                DisarmHistoryEntry(
                                    timestamp = executionTime,
                                    source = finalSource,
                                    success = true,
                                    message = finalResult.message
                                )
                            )
                            NotificationHelper.showSuccessNotification(context, vNumber, finalResult.message)
                            NotificationHelper.triggerHaptic(context)
                        }
                        is PointerResult.Failure -> {
                            val failureMsg = if (finalResult.rc == -99) {
                                "התקשורת לא הצליחה לאחר $maxAttempts ניסיונות (בעיית קליטה ברכב)"
                            } else {
                                finalResult.message
                            }
                            prefs.addDisarmHistory(
                                DisarmHistoryEntry(
                                    timestamp = executionTime,
                                    source = finalSource,
                                    success = false,
                                    message = failureMsg
                                )
                            )
                            NotificationHelper.showErrorNotification(context, vNumber, failureMsg)
                        }
                        is PointerResult.NetworkError -> {
                            val errorMsg = "התקשורת לא הצליחה לאחר $maxAttempts ניסיונות (${finalResult.errorMsg})"
                            prefs.addDisarmHistory(
                                DisarmHistoryEntry(
                                    timestamp = executionTime,
                                    source = finalSource,
                                    success = false,
                                    message = errorMsg
                                )
                            )
                            NotificationHelper.showErrorNotification(context, vNumber, errorMsg)
                        }
                        null -> {}
                    }
                } catch (t: Throwable) {
                    val errorMsg = "שגיאה: ${t.localizedMessage ?: "שגיאה לא ידועה"}"
                    val now = System.currentTimeMillis()
                    val finalSource = if (attempt > 1) "$sourceLabel (ניסיון $attempt/$maxAttempts)" else sourceLabel
                    prefs.addDisarmHistory(
                        DisarmHistoryEntry(
                            timestamp = now,
                            source = finalSource,
                            success = false,
                            message = errorMsg
                        )
                    )
                    NotificationHelper.showErrorNotification(context, vNumber, errorMsg)
                } finally {
                    try {
                        if (wakeLock?.isHeld == true) {
                            wakeLock.release()
                        }
                    } catch (_: Exception) {}

                    try {
                        pendingResult?.finish()
                    } catch (_: Exception) {}
                }
            }
        }
    }
}
