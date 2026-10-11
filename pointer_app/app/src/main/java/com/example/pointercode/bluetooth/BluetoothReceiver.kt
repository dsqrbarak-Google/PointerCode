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
        val isA2dpDisconnected = action == BluetoothA2dp.ACTION_CONNECTION_STATE_CHANGED &&
                intent.getIntExtra(BluetoothProfile.EXTRA_STATE, -1) == BluetoothProfile.STATE_DISCONNECTED
        val isHeadsetConnected = action == BluetoothHeadset.ACTION_CONNECTION_STATE_CHANGED &&
                intent.getIntExtra(BluetoothProfile.EXTRA_STATE, -1) == BluetoothProfile.STATE_CONNECTED

        val isAnyConnection = isAclConnected || isA2dpConnected || isHeadsetConnected
        val isAnyDisconnection = isAclDisconnected || isA2dpDisconnected

        if (!isAnyConnection && !isAnyDisconnection) {
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
            // Unrelated bluetooth device (e.g. smart watch, home speaker)
            return
        }

        val resolvedName = candidateNames.firstOrNull() ?: targetName
        AppLogger.i("BluetoothReceiver", "Matched vehicle BT: '$resolvedName' (action=$action)")

        if (isAnyDisconnection) {
            // Vehicle Bluetooth disconnected -> Drive session ended!
            AppLogger.i("BluetoothReceiver", "Vehicle BT disconnected -> Resetting drive session state.")
            prefs.setVehicleBtConnected(false)
            prefs.setCurrentDriveDisarmed(false)
            return
        }

        if (isAnyConnection) {
            // Vehicle Bluetooth connected -> Mark drive active
            prefs.setVehicleBtConnected(true)

            val sourceLabel = if (resolvedName.isNotBlank()) "בלוטות' ($resolvedName)" else "בלוטות' ברכב"

            // Delegate to unified DisarmManager for atomic execution & duplicate suppression
            DisarmManager.triggerDisarm(
                context = context,
                prefs = prefs,
                source = sourceLabel,
                forceManual = false
            )
        }
    }
}
