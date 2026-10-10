package com.example.pointercode.bluetooth

import android.bluetooth.BluetoothA2dp
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothHeadset
import android.bluetooth.BluetoothProfile
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.Build
import com.example.pointercode.data.DisarmManager
import com.example.pointercode.data.PointerPreferences

/**
 * Listens for vehicle Bluetooth connection events and automatically disarms Pointer code.
 */
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
        val deviceName = try { rawDevice.name?.takeIf { it.isNotBlank() } } catch (_: SecurityException) { null }
        val deviceAlias = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            try { rawDevice.alias?.takeIf { it.isNotBlank() } } catch (_: SecurityException) { null }
        } else null

        // 1. MAC Address matching (normalized: case-insensitive, colons and hyphens stripped)
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
            return
        }

        val resolvedName = candidateNames.firstOrNull() ?: targetName
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
