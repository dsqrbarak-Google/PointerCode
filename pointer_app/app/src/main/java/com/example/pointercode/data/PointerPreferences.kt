package com.example.pointercode.data

import android.content.Context
import android.content.SharedPreferences

import org.json.JSONArray
import org.json.JSONObject

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
        private const val KEY_BT_AUTO_DISARM = "bt_auto_disarm"
        private const val KEY_BT_DEVICE_NAME = "bt_device_name"
        private const val KEY_BT_DEVICE_ADDRESS = "bt_device_address"
        private const val KEY_LAST_BT_DISARM_TIME = "last_bt_disarm_time"
        private const val KEY_LAST_DISARM_TIME = "last_disarm_time"
        private const val KEY_DISARM_HISTORY = "disarm_history"
    }

    fun getVehicleNumber(): String = prefs.getString(KEY_VEHICLE_NUMBER, "")?.trim() ?: ""

    fun getPointerCode(): String = prefs.getString(KEY_POINTER_CODE, "")?.trim() ?: ""

    fun getDriverName(): String = prefs.getString(KEY_DRIVER_NAME, "")?.trim() ?: ""

    fun isAutoClose(): Boolean = prefs.getBoolean(KEY_AUTO_CLOSE, true)

    fun getCountdownSeconds(): Int {
        val sec = prefs.getInt(KEY_COUNTDOWN_SECONDS, 10)
        return if (sec <= 3) 10 else sec
    }

    fun setCountdownSeconds(seconds: Int) {
        prefs.edit().putInt(KEY_COUNTDOWN_SECONDS, seconds).apply()
    }

    fun isBtAutoDisarmEnabled(): Boolean = prefs.getBoolean(KEY_BT_AUTO_DISARM, false)

    fun setBtAutoDisarmEnabled(enabled: Boolean) {
        prefs.edit().putBoolean(KEY_BT_AUTO_DISARM, enabled).apply()
    }

    fun getBtDeviceName(): String = prefs.getString(KEY_BT_DEVICE_NAME, "")?.trim() ?: ""

    fun getBtDeviceAddress(): String = prefs.getString(KEY_BT_DEVICE_ADDRESS, "")?.trim() ?: ""

    fun setBtDevice(name: String, address: String) {
        prefs.edit()
            .putString(KEY_BT_DEVICE_NAME, name.trim())
            .putString(KEY_BT_DEVICE_ADDRESS, address.trim())
            .apply()
    }

    fun clearBtDevice() {
        prefs.edit()
            .remove(KEY_BT_DEVICE_NAME)
            .remove(KEY_BT_DEVICE_ADDRESS)
            .apply()
    }

    fun getLastBtDisarmTime(): Long = prefs.getLong(KEY_LAST_BT_DISARM_TIME, 0L)

    fun setLastBtDisarmTime(time: Long) {
        prefs.edit().putLong(KEY_LAST_BT_DISARM_TIME, time).apply()
    }

    fun getLastDisarmTime(): Long = prefs.getLong(KEY_LAST_DISARM_TIME, 0L)

    fun setLastDisarmTime(time: Long) {
        prefs.edit().putLong(KEY_LAST_DISARM_TIME, time).apply()
    }

    fun getDisarmHistory(): List<DisarmHistoryEntry> {
        val jsonStr = prefs.getString(KEY_DISARM_HISTORY, null) ?: return emptyList()
        return try {
            val jsonArray = JSONArray(jsonStr)
            val list = mutableListOf<DisarmHistoryEntry>()
            for (i in 0 until jsonArray.length()) {
                val obj = jsonArray.getJSONObject(i)
                list.add(
                    DisarmHistoryEntry(
                        timestamp = obj.optLong("timestamp", 0L),
                        source = obj.optString("source", "ידני"),
                        success = obj.optBoolean("success", true),
                        message = obj.optString("message", "")
                    )
                )
            }
            list
        } catch (_: Exception) {
            emptyList()
        }
    }

    fun addDisarmHistory(entry: DisarmHistoryEntry) {
        val currentList = getDisarmHistory().toMutableList()
        currentList.add(0, entry)
        val trimmed = currentList.take(5) // Keep up to 5 latest disarms
        val jsonArray = JSONArray()
        for (item in trimmed) {
            val obj = JSONObject().apply {
                put("timestamp", item.timestamp)
                put("source", item.source)
                put("success", item.success)
                put("message", item.message)
            }
            jsonArray.put(obj)
        }
        prefs.edit()
            .putString(KEY_DISARM_HISTORY, jsonArray.toString())
            .putLong(KEY_LAST_DISARM_TIME, entry.timestamp)
            .apply()
    }

    fun clearDisarmHistory() {
        prefs.edit().remove(KEY_DISARM_HISTORY).apply()
    }

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
