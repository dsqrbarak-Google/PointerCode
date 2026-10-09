package com.example.pointercode.car

import android.content.Intent
import android.media.RingtoneManager
import android.os.Bundle
import android.support.v4.media.MediaBrowserCompat
import android.support.v4.media.MediaDescriptionCompat
import android.support.v4.media.MediaMetadataCompat
import android.support.v4.media.session.MediaSessionCompat
import android.support.v4.media.session.PlaybackStateCompat
import androidx.media.MediaBrowserServiceCompat
import com.example.pointercode.data.DisarmHistoryEntry
import com.example.pointercode.data.PointerApi
import com.example.pointercode.data.PointerPreferences
import com.example.pointercode.data.PointerResult
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

/**
 * Android Auto MediaBrowserService implementation.
 * Sideloaded media services are 100% permitted by Android Auto Developer Mode (Unknown Sources)
 * on ALL real vehicle head units, bypassing Google's restrictions on sideloaded CarAppService template apps.
 *
 * This provides interactive, one-touch disarming directly from the car's screen and media controls!
 */
class PointerMediaBrowserService : MediaBrowserServiceCompat() {

    private lateinit var mediaSession: MediaSessionCompat
    private lateinit var prefs: PointerPreferences

    companion object {
        const val ROOT_ID = "root_pointer"
        const val CATEGORY_ACTIONS = "cat_actions"
        const val CATEGORY_HISTORY = "cat_history"

        const val MEDIA_ID_DISARM_NOW = "action_disarm_now"
        const val MEDIA_ID_RETRY = "action_retry"
        const val MEDIA_ID_STATUS = "status_info"
    }

    override fun onCreate() {
        super.onCreate()
        prefs = PointerPreferences(this)

        mediaSession = MediaSessionCompat(this, "PointerMediaSession").apply {
            setFlags(
                MediaSessionCompat.FLAG_HANDLES_MEDIA_BUTTONS or
                        MediaSessionCompat.FLAG_HANDLES_TRANSPORT_CONTROLS
            )

            setCallback(object : MediaSessionCompat.Callback() {
                override fun onPlay() {
                    handleDisarmAction("מסך הרכב (כפתור הפעלה)")
                }

                override fun onPlayFromMediaId(mediaId: String?, extras: Bundle?) {
                    handleDisarmAction("מסך הרכב (Android Auto)")
                }

                override fun onPlayFromSearch(query: String?, extras: Bundle?) {
                    handleDisarmAction("מסך הרכב (חיפוש קולי)")
                }

                override fun onCustomAction(action: String?, extras: Bundle?) {
                    handleDisarmAction("מסך הרכב (פעולה)")
                }

                override fun onSkipToNext() {
                    handleDisarmAction("מסך הרכב (הבא)")
                }

                override fun onSkipToPrevious() {
                    handleDisarmAction("מסך הרכב (הקודם)")
                }
            })

            // Set initial state without any error message!
            updatePlaybackState(PlaybackStateCompat.STATE_PAUSED, "קודן מוכן לנטרול")
            isActive = true
        }

        sessionToken = mediaSession.sessionToken
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        return START_NOT_STICKY
    }

    override fun onGetRoot(
        clientPackageName: String,
        clientUid: Int,
        rootHints: Bundle?
    ): BrowserRoot {
        return BrowserRoot(ROOT_ID, null)
    }

    override fun onLoadChildren(
        parentId: String,
        result: Result<List<MediaBrowserCompat.MediaItem>>
    ) {
        val items = mutableListOf<MediaBrowserCompat.MediaItem>()
        val vNumber = prefs.getVehicleNumber()
        val formattedPlate = formatVehicleNumber(vNumber)
        val driverName = prefs.getDriverName()
        val history = prefs.getDisarmHistory()
        val latest = history.firstOrNull()

        when (parentId) {
            ROOT_ID -> {
                // Android Auto REQUIRES root children to be PURELY FLAG_BROWSABLE to build its navigation tabs/categories!
                // 1. Actions Category
                val actionsDesc = MediaDescriptionCompat.Builder()
                    .setMediaId(CATEGORY_ACTIONS)
                    .setTitle("🚗 נטרול קודן ($formattedPlate)")
                    .setSubtitle(if (driverName.isNotBlank()) "נהג: $driverName • לחץ לפתיחה או נטרול" else "לחץ לנטרול הקודן ברכב")
                    .build()
                items.add(
                    MediaBrowserCompat.MediaItem(
                        actionsDesc,
                        MediaBrowserCompat.MediaItem.FLAG_BROWSABLE
                    )
                )

                // 2. History & Status Category
                val statusPreview = when {
                    latest?.success == true -> "נוטרל בהצלחה (${latest.message})"
                    latest?.success == false -> "שגיאה: ${latest.message}"
                    else -> "מוכן לשליחה"
                }
                val historyDesc = MediaDescriptionCompat.Builder()
                    .setMediaId(CATEGORY_HISTORY)
                    .setTitle("📋 היסטוריה וסטטוס")
                    .setSubtitle(statusPreview)
                    .build()
                items.add(
                    MediaBrowserCompat.MediaItem(
                        historyDesc,
                        MediaBrowserCompat.MediaItem.FLAG_BROWSABLE
                    )
                )
            }

            CATEGORY_ACTIONS -> {
                // Action Items inside the primary category (FLAG_PLAYABLE)
                // 1. Primary Action: Disarm Now
                val disarmDesc = MediaDescriptionCompat.Builder()
                    .setMediaId(MEDIA_ID_DISARM_NOW)
                    .setTitle("🚗 לחץ לנטרול קודן כעת ($formattedPlate)")
                    .setSubtitle(if (driverName.isNotBlank()) "נהג: $driverName • שלח קוד פוינטר" else "שלח קוד פוינטר מיידית")
                    .build()
                items.add(MediaBrowserCompat.MediaItem(disarmDesc, MediaBrowserCompat.MediaItem.FLAG_PLAYABLE))

                // 2. Quick Retry / Re-send
                val retryDesc = MediaDescriptionCompat.Builder()
                    .setMediaId(MEDIA_ID_RETRY)
                    .setTitle("🔄 שלח קוד שוב")
                    .setSubtitle("שליחה יזומה נוספת לפוינטר")
                    .build()
                items.add(MediaBrowserCompat.MediaItem(retryDesc, MediaBrowserCompat.MediaItem.FLAG_PLAYABLE))

                // 3. Status Row
                val statusTitle = when {
                    latest?.success == true -> "✅ נוטרל בהצלחה: ${latest.message}"
                    latest?.success == false -> "⚠️ שגיאה: ${latest.message}"
                    else -> "ℹ️ קודן מוכן לשליחה"
                }
                val statusDesc = MediaDescriptionCompat.Builder()
                    .setMediaId(MEDIA_ID_STATUS)
                    .setTitle(statusTitle)
                    .setSubtitle("לחץ לבדיקה ונטרול חוזר")
                    .build()
                items.add(MediaBrowserCompat.MediaItem(statusDesc, MediaBrowserCompat.MediaItem.FLAG_PLAYABLE))
            }

            CATEGORY_HISTORY -> {
                if (history.isEmpty()) {
                    val emptyDesc = MediaDescriptionCompat.Builder()
                        .setMediaId(MEDIA_ID_STATUS)
                        .setTitle("ℹ️ אין היסטוריית פעולות עדיין")
                        .setSubtitle("לחץ לנטרול ראשוני")
                        .build()
                    items.add(MediaBrowserCompat.MediaItem(emptyDesc, MediaBrowserCompat.MediaItem.FLAG_PLAYABLE))
                } else {
                    history.take(6).forEachIndexed { idx, entry ->
                        val hDesc = MediaDescriptionCompat.Builder()
                            .setMediaId("history_$idx")
                            .setTitle("${if (entry.success) "✅" else "⚠️"} ${entry.message}")
                            .setSubtitle("${entry.source} • ${formatTimestamp(entry.timestamp)}")
                            .build()
                        items.add(MediaBrowserCompat.MediaItem(hDesc, MediaBrowserCompat.MediaItem.FLAG_PLAYABLE))
                    }
                }
            }

            else -> {
                // Fallback for any other parent: provide the disarm action so UI never hangs
                val disarmDesc = MediaDescriptionCompat.Builder()
                    .setMediaId(MEDIA_ID_DISARM_NOW)
                    .setTitle("🚗 נטרל קודן כעת ($formattedPlate)")
                    .setSubtitle("לחץ לנטרול הקודן ברכב")
                    .build()
                items.add(MediaBrowserCompat.MediaItem(disarmDesc, MediaBrowserCompat.MediaItem.FLAG_PLAYABLE))
            }
        }

        result.sendResult(items)
    }

    override fun onLoadChildren(
        parentId: String,
        result: Result<List<MediaBrowserCompat.MediaItem>>,
        options: Bundle
    ) {
        onLoadChildren(parentId, result)
    }

    private fun handleDisarmAction(source: String) {
        val vNumber = prefs.getVehicleNumber()
        val code = prefs.getPointerCode()
        val driverName = prefs.getDriverName()

        if (vNumber.isBlank() || code.length != 4) {
            updatePlaybackState(PlaybackStateCompat.STATE_ERROR, "פרטי רכב חסרים")
            return
        }

        updatePlaybackState(PlaybackStateCompat.STATE_BUFFERING, "מנטרל קודן רכב...")

        CoroutineScope(Dispatchers.IO).launch {
            val now = System.currentTimeMillis()
            val result = PointerApi.checkCode(vNumber, code, driverName)

            withContext(Dispatchers.Main) {
                when (result) {
                    is PointerResult.Success -> {
                        prefs.addDisarmHistory(
                            DisarmHistoryEntry(
                                timestamp = now,
                                source = source,
                                success = true,
                                message = result.message
                            )
                        )
                        updatePlaybackState(PlaybackStateCompat.STATE_PLAYING, "נוטרל בהצלחה! ${result.message}")
                        playSuccessTone()

                        // After 2.5 seconds, reset state to PAUSED so car radio audio isn't hijacked
                        CoroutineScope(Dispatchers.Main).launch {
                            kotlinx.coroutines.delay(2500)
                            updatePlaybackState(PlaybackStateCompat.STATE_PAUSED, "נוטרל: ${result.message}")
                        }
                    }
                    is PointerResult.Failure -> {
                        prefs.addDisarmHistory(
                            DisarmHistoryEntry(
                                timestamp = now,
                                source = source,
                                success = false,
                                message = result.message
                            )
                        )
                        updatePlaybackState(PlaybackStateCompat.STATE_ERROR, "שגיאה: ${result.message}")
                    }
                    is PointerResult.NetworkError -> {
                        prefs.addDisarmHistory(
                            DisarmHistoryEntry(
                                timestamp = now,
                                source = source,
                                success = false,
                                message = result.errorMsg
                            )
                        )
                        updatePlaybackState(PlaybackStateCompat.STATE_ERROR, "אין קליטה: ${result.errorMsg}")
                    }
                }
                // Refresh list on car screen
                notifyChildrenChanged(ROOT_ID)
                notifyChildrenChanged(CATEGORY_ACTIONS)
                notifyChildrenChanged(CATEGORY_HISTORY)
            }
        }
    }

    private fun updatePlaybackState(state: Int, statusText: String) {
        val playbackState = PlaybackStateCompat.Builder()
            .setActions(
                PlaybackStateCompat.ACTION_PLAY or
                        PlaybackStateCompat.ACTION_PLAY_FROM_MEDIA_ID or
                        PlaybackStateCompat.ACTION_PLAY_PAUSE or
                        PlaybackStateCompat.ACTION_SKIP_TO_NEXT or
                        PlaybackStateCompat.ACTION_SKIP_TO_PREVIOUS
            )
            .setState(state, PlaybackStateCompat.PLAYBACK_POSITION_UNKNOWN, 1.0f)

        // ONLY set error message when state is actually STATE_ERROR
        if (state == PlaybackStateCompat.STATE_ERROR) {
            playbackState.setErrorMessage(PlaybackStateCompat.ERROR_CODE_APP_ERROR, statusText)
        }

        mediaSession.setPlaybackState(playbackState.build())

        val metadata = MediaMetadataCompat.Builder()
            .putString(MediaMetadataCompat.METADATA_KEY_TITLE, "4S Pointer Code")
            .putString(MediaMetadataCompat.METADATA_KEY_ARTIST, statusText)
            .putString(MediaMetadataCompat.METADATA_KEY_ALBUM, "רכב ${formatVehicleNumber(prefs.getVehicleNumber())}")
            .build()
        mediaSession.setMetadata(metadata)
    }

    private fun playSuccessTone() {
        try {
            val notificationUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION)
            val ringtone = RingtoneManager.getRingtone(applicationContext, notificationUri)
            ringtone?.play()
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

    private fun formatTimestamp(timestamp: Long): String {
        val sdf = java.text.SimpleDateFormat("dd/MM HH:mm", java.util.Locale.getDefault())
        return sdf.format(java.util.Date(timestamp))
    }

    override fun onDestroy() {
        mediaSession.release()
        super.onDestroy()
    }
}
