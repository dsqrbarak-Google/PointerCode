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

        val addressMatches = !deviceAddress.isNullOrBlank() &&
                targetAddress.isNotBlank() &&
                deviceAddress.equals(targetAddress, ignoreCase = true)

        val nameMatches = !deviceName.isNullOrBlank() &&
                targetName.isNotBlank() &&
                deviceName.equals(targetName, ignoreCase = true)

        if (!addressMatches && !nameMatches) {
            return
        }

        // Prevent duplicate disarms if multiple Bluetooth profiles connect in close succession
        val now = System.currentTimeMillis()
        val lastTime = prefs.getLastBtDisarmTime()
        if (now - lastTime < DEBOUNCE_MS) {
            return
        }
        prefs.setLastBtDisarmTime(now)

        val resolvedName = deviceName ?: targetName
        executeDisarm(context, prefs, resolvedName, goAsync())
    }

    companion object {
        private const val DEBOUNCE_MS = 60_000L // 60 seconds cooldown between disarms
        internal var retryDelayMs = 60_000L // 1 minute retry delay on network failure

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
                var executionTime = System.currentTimeMillis()

                try {
                    NotificationHelper.showDisarmingNotification(context, vNumber, deviceName)

                    // Attempt 1
                    var result = PointerApi.checkCode(vNumber, code, driverName)

                    // Check if failure is due to network / connectivity issues (e.g. edge of Wi-Fi / no cellular data yet)
                    val isNetworkError = result is PointerResult.NetworkError ||
                            (result is PointerResult.Failure && result.rc == -99)

                    if (isNetworkError) {
                        // Release PendingResult so BroadcastReceiver doesn't timeout / ANR during the 60s wait
                        try {
                            pendingResult?.finish()
                        } catch (_: Exception) {}

                        // Acquire temporary WakeLock to keep CPU awake during the 1-minute delay
                        try {
                            val powerManager = context.getSystemService(Context.POWER_SERVICE) as? PowerManager
                            wakeLock = powerManager?.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "PointerCode:DisarmRetryWakeLock")
                            wakeLock?.acquire(85_000L) // Safe auto-release
                        } catch (_: Exception) {}

                        // Show intermediate notification informing that retry will occur in 1 minute
                        NotificationHelper.showRetryingNotification(
                            context = context,
                            vehicleNumber = vNumber,
                            deviceName = deviceName,
                            statusText = "אין חיבור לאינטרנט • ניסיון שני יתבצע בעוד דקה..."
                        )

                        // Wait 1 minute (60 seconds)
                        delay(retryDelayMs)

                        // Attempt 2
                        attempt = 2
                        executionTime = System.currentTimeMillis()
                        prefs.setLastBtDisarmTime(executionTime)
                        NotificationHelper.showDisarmingNotification(context, vNumber, "$deviceName (ניסיון 2)")
                        result = PointerApi.checkCode(vNumber, code, driverName)
                    }

                    // Process final result (after 1st attempt if success/definitive failure, or after 2nd attempt)
                    val finalSource = if (attempt == 2) "$sourceLabel (ניסיון 2)" else sourceLabel

                    when (result) {
                        is PointerResult.Success -> {
                            prefs.addDisarmHistory(
                                DisarmHistoryEntry(
                                    timestamp = executionTime,
                                    source = finalSource,
                                    success = true,
                                    message = result.message
                                )
                            )
                            NotificationHelper.showSuccessNotification(context, vNumber, result.message)
                            NotificationHelper.triggerHaptic(context)
                        }
                        is PointerResult.Failure -> {
                            prefs.addDisarmHistory(
                                DisarmHistoryEntry(
                                    timestamp = executionTime,
                                    source = finalSource,
                                    success = false,
                                    message = result.message
                                )
                            )
                            NotificationHelper.showErrorNotification(context, vNumber, result.message)
                        }
                        is PointerResult.NetworkError -> {
                            prefs.addDisarmHistory(
                                DisarmHistoryEntry(
                                    timestamp = executionTime,
                                    source = finalSource,
                                    success = false,
                                    message = result.errorMsg
                                )
                            )
                            NotificationHelper.showErrorNotification(context, vNumber, result.errorMsg)
                        }
                    }
                } catch (t: Throwable) {
                    val errorMsg = "שגיאה: ${t.localizedMessage ?: "שגיאה לא ידועה"}"
                    val now = System.currentTimeMillis()
                    val finalSource = if (attempt == 2) "$sourceLabel (ניסיון 2)" else sourceLabel
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
