package com.example.pointercode.bluetooth

import android.Manifest
import android.bluetooth.BluetoothAdapter
import android.bluetooth.BluetoothManager
import android.content.Context
import android.content.pm.PackageManager
import android.os.Build
import androidx.core.content.ContextCompat

object BluetoothHelper {

    fun hasBluetoothPermission(context: Context): Boolean {
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            ContextCompat.checkSelfPermission(
                context,
                Manifest.permission.BLUETOOTH_CONNECT
            ) == PackageManager.PERMISSION_GRANTED
        } else {
            true
        }
    }

    fun isBluetoothEnabled(context: Context): Boolean {
        val bluetoothManager = context.getSystemService(Context.BLUETOOTH_SERVICE) as? BluetoothManager
        val adapter = bluetoothManager?.adapter ?: @Suppress("DEPRECATION") BluetoothAdapter.getDefaultAdapter()
        return adapter?.isEnabled == true
    }

    fun getPairedDevices(context: Context): List<BluetoothDeviceInfo> {
        val bluetoothManager = context.getSystemService(Context.BLUETOOTH_SERVICE) as? BluetoothManager
        val adapter = bluetoothManager?.adapter ?: @Suppress("DEPRECATION") BluetoothAdapter.getDefaultAdapter() ?: return emptyList()

        if (!hasBluetoothPermission(context)) {
            return emptyList()
        }

        return try {
            adapter.bondedDevices?.map { device ->
                val deviceName = try {
                    device.name?.takeIf { it.isNotBlank() } ?: "מכשיר ללא שם (${device.address})"
                } catch (_: SecurityException) {
                    device.address ?: "מכשיר BT"
                }
                BluetoothDeviceInfo(
                    name = deviceName,
                    address = device.address ?: ""
                )
            }?.sortedBy { it.name } ?: emptyList()
        } catch (_: SecurityException) {
            emptyList()
        }
    }
}
