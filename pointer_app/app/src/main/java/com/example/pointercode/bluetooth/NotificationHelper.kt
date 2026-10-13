package com.example.pointercode.bluetooth

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.media.RingtoneManager
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import com.example.pointercode.MainActivity
import com.example.pointercode.R
import com.example.pointercode.data.AppLogger

object NotificationHelper {
    private const val CHANNEL_ID = "pointer_bt_channel"
    private const val NOTIFICATION_ID = 4040

    fun createNotificationChannel(context: Context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = "ניטרול קודן פוינטר"
            val descriptionText = "התראות על ניטרול אוטומטי של קודן הרכב בעת התחברות לבלוטות'"
            val importance = NotificationManager.IMPORTANCE_HIGH
            val channel = NotificationChannel(CHANNEL_ID, name, importance).apply {
                description = descriptionText
                enableVibration(true)
                vibrationPattern = longArrayOf(0, 150, 100, 200)
                lockscreenVisibility = Notification.VISIBILITY_PUBLIC
            }
            val notificationManager: NotificationManager =
                context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }

    private fun getPendingIntent(context: Context): PendingIntent {
        val intent = Intent(context, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP
        }
        return PendingIntent.getActivity(
            context,
            0,
            intent,
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
        )
    }

    private fun getRetryPendingIntent(context: Context): PendingIntent {
        val intent = Intent(context, DisarmActionReceiver::class.java).apply {
            action = DisarmActionReceiver.ACTION_RETRY_DISARM
            putExtra("EXTRA_SOURCE", "התראה בטלפון")
        }
        return PendingIntent.getBroadcast(
            context,
            101,
            intent,
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
        )
    }

    fun showDisarmingNotification(context: Context, vehicleNumber: String, deviceName: String) {
        createNotificationChannel(context)
        val formattedVehicle = formatVehicleNumber(vehicleNumber)
        val title = "מנטרל קודן רכב $formattedVehicle..."
        val text = if (deviceName.isNotBlank()) "זוהה חיבור ל-$deviceName • שולח קוד לפוינטר" else "שולח קוד לפוינטר..."

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_stat_pointer)
            .setContentTitle(title)
            .setContentText(text)
            .setStyle(NotificationCompat.BigTextStyle().bigText(text))
            .setPriority(NotificationCompat.PRIORITY_MAX)
            .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
            .setAutoCancel(true)
            .setContentIntent(getPendingIntent(context))
            .build()

        try {
            NotificationManagerCompat.from(context).notify(NOTIFICATION_ID, notification)
            AppLogger.d("NotificationHelper", "Posted disarming notification")
        } catch (t: Throwable) {
            AppLogger.w("NotificationHelper", "Could not post disarming notification: ${t.message}")
        }
    }

    fun showRetryingNotification(
        context: Context,
        vehicleNumber: String,
        deviceName: String,
        attempt: Int,
        maxAttempts: Int,
        waitSec: Long
    ) {
        createNotificationChannel(context)
        val formattedVehicle = formatVehicleNumber(vehicleNumber)
        val title = "⚠️ בעיית תקשורת ($attempt/$maxAttempts)"
        val statusText = "ניסיון חוזר בעוד $waitSec שניות..."
        val fullText = "רכב $formattedVehicle: שרת פוינטר טרם הגיב. ניסיון נוסף ($attempt/$maxAttempts) בעוד $waitSec שניות."

        val retryAction = NotificationCompat.Action.Builder(
            R.drawable.ic_stat_pointer,
            "נסה כעת",
            getRetryPendingIntent(context)
        ).build()

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_stat_pointer)
            .setContentTitle(title)
            .setContentText(statusText)
            .setStyle(NotificationCompat.BigTextStyle().bigText(fullText))
            .setPriority(NotificationCompat.PRIORITY_MAX)
            .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
            .setAutoCancel(true)
            .setContentIntent(getPendingIntent(context))
            .addAction(retryAction)
            .build()

        try {
            NotificationManagerCompat.from(context).notify(NOTIFICATION_ID, notification)
            AppLogger.d("NotificationHelper", "Posted retry notification ($attempt/$maxAttempts)")
        } catch (t: Throwable) {
            AppLogger.w("NotificationHelper", "Could not post retry notification: ${t.message}")
        }
    }

    fun showSuccessNotification(context: Context, vehicleNumber: String, message: String) {
        createNotificationChannel(context)
        val formattedVehicle = formatVehicleNumber(vehicleNumber)
        val title = "קודן פוינטר נוטרל בהצלחה! 🚗"
        val text = "רכב $formattedVehicle: $message • נסיעה טובה!"

        val defaultSoundUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION)

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_stat_pointer)
            .setContentTitle(title)
            .setContentText(text)
            .setStyle(NotificationCompat.BigTextStyle().bigText(text))
            .setPriority(NotificationCompat.PRIORITY_MAX)
            .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
            .setSound(defaultSoundUri)
            .setVibrate(longArrayOf(0, 150, 100, 250))
            .setAutoCancel(true)
            .setContentIntent(getPendingIntent(context))
            .build()

        try {
            NotificationManagerCompat.from(context).notify(NOTIFICATION_ID, notification)
            AppLogger.d("NotificationHelper", "Posted success notification")
        } catch (t: Throwable) {
            AppLogger.w("NotificationHelper", "Could not post success notification: ${t.message}")
        }
    }

    fun showErrorNotification(context: Context, vehicleNumber: String, errorMsg: String) {
        createNotificationChannel(context)
        val formattedVehicle = formatVehicleNumber(vehicleNumber)
        val title = "התקשורת לא הצליחה ⚠️"
        val text = "רכב $formattedVehicle: $errorMsg. לחץ לניסיון חוזר."

        val retryAction = NotificationCompat.Action.Builder(
            R.drawable.ic_stat_pointer,
            "נסה שוב כעת",
            getRetryPendingIntent(context)
        ).build()

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_stat_pointer)
            .setContentTitle(title)
            .setContentText(text)
            .setStyle(NotificationCompat.BigTextStyle().bigText(text))
            .setPriority(NotificationCompat.PRIORITY_MAX)
            .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
            .setAutoCancel(true)
            .setContentIntent(getPendingIntent(context))
            .addAction(retryAction)
            .build()

        try {
            NotificationManagerCompat.from(context).notify(NOTIFICATION_ID, notification)
            AppLogger.d("NotificationHelper", "Posted error notification")
        } catch (t: Throwable) {
            AppLogger.w("NotificationHelper", "Could not post error notification: ${t.message}")
        }
    }

    fun triggerHaptic(context: Context) {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                val vibratorManager = context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
                vibratorManager?.defaultVibrator?.vibrate(
                    VibrationEffect.createWaveform(longArrayOf(0, 150, 80, 200), -1)
                )
            } else {
                @Suppress("DEPRECATION")
                val vibrator = context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
                @Suppress("DEPRECATION")
                vibrator?.vibrate(250)
            }
        } catch (_: Exception) {}
    }

    private fun formatVehicleNumber(raw: String): String {
        val digits = raw.filter { it.isDigit() }
        return when (digits.length) {
            7 -> "${digits.substring(0, 2)}-${digits.substring(2, 5)}-${digits.substring(5, 7)}"
            8 -> "${digits.substring(0, 3)}-${digits.substring(3, 5)}-${digits.substring(5, 8)}"
            else -> digits
        }
    }
}
