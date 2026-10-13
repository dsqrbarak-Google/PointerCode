package com.example.pointercode.data

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.util.Log
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import java.util.concurrent.ConcurrentLinkedDeque

/**
 * On-device diagnostic logger for tracking Bluetooth events,
 * network disarm requests, retry attempts, and duplicate suppression.
 * Survives across app restarts via SharedPreferences.
 */
object AppLogger {
    private const val TAG = "PointerCode"
    private const val PREFS_NAME = "pointer_diagnostic_logs"
    private const val KEY_SAVED_LOGS = "saved_logs_content"
    private const val MAX_LOG_ENTRIES = 150

    private val logQueue = ConcurrentLinkedDeque<String>()
    private val timeFormat = SimpleDateFormat("dd/MM HH:mm:ss.SSS", Locale.getDefault())
    private var appContext: Context? = null

    @Synchronized
    fun init(context: Context) {
        if (appContext == null) {
            appContext = context.applicationContext
            loadPersistedLogs()
            i("SYSTEM", "=== App started (v1.4.3) ===")
        }
    }

    private fun loadPersistedLogs() {
        try {
            val ctx = appContext ?: return
            val prefs = ctx.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            val saved = prefs.getString(KEY_SAVED_LOGS, null)
            if (!saved.isNullOrBlank()) {
                val lines = saved.split("\n")
                logQueue.clear()
                lines.filter { it.isNotBlank() }.takeLast(MAX_LOG_ENTRIES).forEach {
                    logQueue.add(it)
                }
            }
        } catch (_: Throwable) {}
    }

    private fun persistLogs() {
        try {
            val ctx = appContext ?: return
            val prefs = ctx.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            val fullText = logQueue.joinToString("\n")
            prefs.edit().putString(KEY_SAVED_LOGS, fullText).apply()
        } catch (_: Throwable) {}
    }

    fun d(tag: String, message: String) {
        addEntry("DEBUG", tag, message)
        Log.d("$TAG/$tag", message)
    }

    fun i(tag: String, message: String) {
        addEntry("INFO", tag, message)
        Log.i("$TAG/$tag", message)
    }

    fun w(tag: String, message: String) {
        addEntry("WARN", tag, message)
        Log.w("$TAG/$tag", message)
    }

    fun e(tag: String, message: String, throwable: Throwable? = null) {
        val extra = throwable?.let { " [${it.javaClass.simpleName}: ${it.localizedMessage}]" } ?: ""
        addEntry("ERROR", tag, "$message$extra")
        Log.e("$TAG/$tag", message, throwable)
    }

    private fun addEntry(level: String, tag: String, message: String) {
        val time = timeFormat.format(Date())
        val entry = "[$time] [$level/$tag] $message"
        logQueue.add(entry)
        while (logQueue.size > MAX_LOG_ENTRIES) {
            logQueue.poll()
        }
        persistLogs()
    }

    fun getLogs(): List<String> = logQueue.toList()

    fun getAllLogsText(): String {
        return if (logQueue.isEmpty()) {
            "אין רישומי יומן עדיין."
        } else {
            logQueue.joinToString("\n")
        }
    }

    fun copyLogsToClipboard(context: Context): Boolean {
        return try {
            val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as? ClipboardManager
            val clip = ClipData.newPlainText("PointerCode Diagnostic Log", getAllLogsText())
            clipboard?.setPrimaryClip(clip)
            true
        } catch (_: Throwable) {
            false
        }
    }

    fun clearLogs() {
        logQueue.clear()
        persistLogs()
    }
}
