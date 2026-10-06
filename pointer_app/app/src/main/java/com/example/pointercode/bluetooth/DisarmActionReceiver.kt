package com.example.pointercode.bluetooth

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import com.example.pointercode.data.PointerPreferences

/**
 * Handles "Retry Now" actions triggered directly from notifications on the phone or car display.
 */
class DisarmActionReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent?) {
        val prefs = PointerPreferences(context)
        if (!prefs.isConfigured()) return

        val source = intent?.getStringExtra("EXTRA_SOURCE") ?: "ניסיון חוזר מהתראה"
        BluetoothReceiver.executeDisarm(context, prefs, source, goAsync())
    }

    companion object {
        const val ACTION_RETRY_DISARM = "com.example.pointercode.ACTION_RETRY_DISARM"
    }
}
