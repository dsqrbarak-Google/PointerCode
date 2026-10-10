package com.example.pointercode.car

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import androidx.car.app.connection.CarConnection
import com.example.pointercode.data.DisarmManager
import com.example.pointercode.data.PointerPreferences

/**
 * Listens for Android Auto connection state changes.
 * When phone connects to car screen (Android Auto Projection), triggers disarm safely via DisarmManager.
 */
class CarConnectionReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent?) {
        if (intent?.action != CarConnection.ACTION_CAR_CONNECTION_UPDATED) return

        val prefs = PointerPreferences(context)
        if (!prefs.isConfigured() || !prefs.isBtAutoDisarmEnabled()) return

        val connectionType = try {
            CarConnection(context).type.value
        } catch (_: Exception) {
            null
        }

        if (connectionType == CarConnection.CONNECTION_TYPE_PROJECTION || connectionType == CarConnection.CONNECTION_TYPE_NATIVE) {
            DisarmManager.triggerDisarm(
                context = context,
                prefs = prefs,
                source = "חיבור Android Auto",
                forceManual = false
            )
        }
    }
}
