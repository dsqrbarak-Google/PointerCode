package com.example.pointercode.car

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import androidx.car.app.connection.CarConnection
import com.example.pointercode.bluetooth.BluetoothReceiver
import com.example.pointercode.data.PointerPreferences

/**
 * Listens for Android Auto connection state changes.
 * When phone connects to car screen (Android Auto Projection), triggers disarm if not already disarmed recently.
 */
class CarConnectionReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent?) {
        if (intent?.action != CarConnection.ACTION_CAR_CONNECTION_UPDATED) return

        val prefs = PointerPreferences(context)
        if (!prefs.isConfigured()) return

        val connectionType = try {
            CarConnection(context).type.value
        } catch (_: Exception) {
            null
        }

        if (connectionType == CarConnection.CONNECTION_TYPE_PROJECTION || connectionType == null) {
            val now = System.currentTimeMillis()
            val lastTime = prefs.getLastBtDisarmTime()
            val elapsed = now - lastTime
            val twoMinutesMs = 2 * 60 * 1000L

            val latest = prefs.getDisarmHistory().firstOrNull()
            if (lastTime > 0 && elapsed < twoMinutesMs && latest?.success == true) {
                // Suppressed: Already disarmed successfully within 2 minutes
                return
            }

            prefs.setLastBtDisarmTime(now)
            BluetoothReceiver.executeDisarm(context, prefs, "חיבור Android Auto", goAsync())
        }
    }
}
