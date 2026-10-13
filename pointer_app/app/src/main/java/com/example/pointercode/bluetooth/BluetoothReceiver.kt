package com.example.pointercode.bluetooth

import android.bluetooth.BluetoothA2dp
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothHeadset
import android.bluetooth.BluetoothProfile
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.Build
import com.example.pointercode.data.AppLogger
import com.example.pointercode.data.DisarmManager
import com.example.pointercode.data.PointerPreferences

/**
 * Listens for vehicle Bluetooth connection and disconnection events.
 * Manages active drive session state and automatically disarms Pointer code.
 */
class BluetoothReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent?) {
        if (intent == null) return
        val action = intent.action ?: return

        AppLogger.init(context)

        val isAclConnected = action == BluetoothDevice.ACTION_ACL_CONNECTED
        val isAclDisconnected = action == BluetoothDevice.ACTION_ACL_DISCONNECTED
        val isA2dpConnected = action == BluetoothA2dp.ACTION_CONNECTION_STATE_CHANGED &&
                intent.getIntExtra(BluetoothProfile.EXTRA_STATE, -1) == BluetoothProfile.STATE_CONNECTED
        val isHeadsetConnected = action == BluetoothHeadset.ACTION_CONNECTION_STATE_CHANGED &&
                intent.getIntExtra(BluetoothProfile.EXTRA_STATE, -1) == BluetoothProfile.STATE_CONNECTED

        val isAnyConnection = isAclConnected || isA2dpConnected || isHeadsetConnected

        // Note: ONLY physical Bluetooth ACL disconnection indicates vehicle shutdown / walkaway.
        // Audio profile state changes (e.g. A2DP pause) must NOT end the drive session!
        if (!isAnyConnection && !isAclDisconnected) {
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
        val deviceName = try { rawDevice.name?.takeIf { it.isNotBlank() } } catch (_: SecurityException) { null }
        val deviceAlias = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            try { rawDevice.alias?.takeIf { it.isNotBlank() } } catch (_: SecurityException) { null }
        } else null

        // 1. MAC Address matching (normalized: colons and hyphens stripped)
        val cleanTargetAddress = targetAddress.replace(":", "").replace("-", "").trim()
        val cleanDeviceAddress = (deviceAddress ?: "").replace(":", "").replace("-", "").trim()
        val addressMatches = cleanTargetAddress.isNotBlank() &&
                cleanDeviceAddress.equals(cleanTargetAddress, ignoreCase = true)

        // 2. Name / Alias matching (robust contains / equality, case-insensitive)
        val candidateNames = listOfNotNull(deviceAlias, deviceName)
        val nameMatches = targetName.isNotBlank() && candidateNames.any { candidate ->
            candidate.equals(targetName, ignoreCase = true) ||
            candidate.contains(targetName, ignoreCase = true) ||
            targetName.contains(candidate, ignoreCase = true)
        }

        if (!addressMatches && !nameMatches) {
            // Unrelated bluetooth device
            return
        }

        val resolvedName = candidateNames.firstOrNull() ?: targetName
        AppLogger.i("BluetoothReceiver", "Matched vehicle BT: '$resolvedName' (action=$action)")

        if (isAclDisconnected) {
            // Physical Bluetooth disconnect -> Drive ended!
            AppLogger.i("BluetoothReceiver", "Vehicle BT physically disconnected -> Drive session ended.")
            prefs.setVehicleBtConnected(false)
            prefs.setCurrentDriveSessionId(0L)
            prefs.setDisarmedDriveSessionId(0L)
            return
        }

        if (isAnyConnection) {
            prefs.setVehicleBtConnected(true)

            // Start a new session if physical connection (ACL_CONNECTED) or no session exists
            var sessionId = prefs.getCurrentDriveSessionId()
            if (isAclConnected || sessionId == 0L) {
                sessionId = System.currentTimeMillis()
                prefs.setCurrentDriveSessionId(sessionId)
                AppLogger.i("BluetoothReceiver", "Started new drive session: $sessionId for '$resolvedName'")
            }

            // Check if this drive session was already disarmed
            val disarmedSessionId = prefs.getDisarmedDriveSessionId()
            if (sessionId != 0L && sessionId == disarmedSessionId) {
                val lastSuccess = prefs.getLastSuccessfulDisarmTime()
                val timePassed = System.currentTimeMillis() - lastSuccess
                if (lastSuccess > 0 && timePassed >= DisarmManager.SUCCESS_COOLDOWN_MS) {
                    AppLogger.i("BluetoothReceiver", "Drive session $sessionId was disarmed ${timePassed / 1000}s ago (>= 10 min). Refreshing drive session to allow re-disarm.")
                    sessionId = System.currentTimeMillis()
                    prefs.setCurrentDriveSessionId(sessionId)
                } else {
                    AppLogger.w("BluetoothReceiver", "Suppressed: Drive session $sessionId already disarmed (BT still connected)")
                    return
                }
            }

            // Short debounce (60 seconds) to avoid duplicate sends on rapid bluetooth reconnects
            val now = System.currentTimeMillis()
            val lastBtDisarm = prefs.getLastBtDisarmTime()
            if (now - lastBtDisarm < 60_000L) {
                AppLogger.w("BluetoothReceiver", "Suppressed by BT debounce: Last BT disarm was ${(now - lastBtDisarm) / 1000}s ago (< 60s)")
                return
            }

            val sourceLabel = if (resolvedName.isNotBlank()) "בלוטות' ($resolvedName)" else "בלוטות' ברכב"
            AppLogger.i("BluetoothReceiver", "Triggering BT disarm: source='$sourceLabel', session=$sessionId")

            DisarmManager.triggerDisarm(
                context = context,
                prefs = prefs,
                source = sourceLabel,
                forceManual = false,
                driveSessionId = sessionId
            )
        }
    }

    companion object {
        val retryDelaysMs = longArrayOf(3000L, 6000L, 10000L, 15000L)
    }
}
