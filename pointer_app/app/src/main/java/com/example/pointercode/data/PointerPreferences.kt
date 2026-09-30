package com.example.pointercode.data

import android.content.Context
import android.content.SharedPreferences

class PointerPreferences(context: Context) {
    private val prefs: SharedPreferences =
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)

    companion object {
        private const val PREFS_NAME = "pointer_code_prefs"
        private const val KEY_VEHICLE_NUMBER = "vehicle_number"
        private const val KEY_POINTER_CODE = "pointer_code"
        private const val KEY_DRIVER_NAME = "driver_name"
        private const val KEY_AUTO_CLOSE = "auto_close"
        private const val KEY_COUNTDOWN_SECONDS = "countdown_seconds"
    }

    fun getVehicleNumber(): String = prefs.getString(KEY_VEHICLE_NUMBER, "")?.trim() ?: ""

    fun getPointerCode(): String = prefs.getString(KEY_POINTER_CODE, "")?.trim() ?: ""

    fun getDriverName(): String = prefs.getString(KEY_DRIVER_NAME, "")?.trim() ?: ""

    fun isAutoClose(): Boolean = prefs.getBoolean(KEY_AUTO_CLOSE, true)

    fun getCountdownSeconds(): Int = prefs.getInt(KEY_COUNTDOWN_SECONDS, 3)

    fun isConfigured(): Boolean {
        val v = getVehicleNumber()
        val c = getPointerCode()
        return v.isNotBlank() && c.length == 4
    }

    fun save(vehicleNumber: String, code: String, driverName: String) {
        prefs.edit()
            .putString(KEY_VEHICLE_NUMBER, vehicleNumber.filter { it.isDigit() })
            .putString(KEY_POINTER_CODE, code.trim())
            .putString(KEY_DRIVER_NAME, driverName.trim())
            .apply()
    }

    fun setAutoClose(autoClose: Boolean) {
        prefs.edit().putBoolean(KEY_AUTO_CLOSE, autoClose).apply()
    }

    fun clear() {
        prefs.edit().clear().apply()
    }
}
