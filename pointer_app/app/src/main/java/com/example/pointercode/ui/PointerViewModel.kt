package com.example.pointercode.ui

import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.ShortcutInfo
import android.content.pm.ShortcutManager
import android.graphics.drawable.Icon
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.pointercode.MainActivity
import com.example.pointercode.R
import com.example.pointercode.data.DisarmManager
import com.example.pointercode.data.PointerApi
import com.example.pointercode.data.PointerPreferences
import com.example.pointercode.data.PointerResult
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

import com.example.pointercode.bluetooth.BluetoothDeviceInfo
import com.example.pointercode.bluetooth.BluetoothHelper
import com.example.pointercode.bluetooth.BluetoothReceiver
import com.example.pointercode.data.DisarmHistoryEntry

sealed class ScreenMode {
    data object Disarm : ScreenMode()
    data object Setup : ScreenMode()
}

sealed class DisarmStatus {
    data object Idle : DisarmStatus()
    data object Loading : DisarmStatus()
    data class Success(val message: String, val countdown: Int, val isPaused: Boolean = false) : DisarmStatus()
    data class Error(val message: String, val rc: Int, val isNetwork: Boolean) : DisarmStatus()
}

data class PointerUiState(
    val screenMode: ScreenMode = ScreenMode.Disarm,
    val isConfigured: Boolean = false,
    val vehicleNumber: String = "",
    val code: String = "",
    val driverName: String = "",
    val disarmStatus: DisarmStatus = DisarmStatus.Idle,
    val setupVehicleNumber: String = "",
    val setupCode: String = "",
    val setupDriverName: String = "",
    val setupErrorMessage: String? = null,
    val isTestingSetup: Boolean = false,
    val shortcutCreated: Boolean = false,
    val isBtAutoDisarmEnabled: Boolean = false,
    val btDeviceName: String = "",
    val btDeviceAddress: String = "",
    val pairedDevices: List<BluetoothDeviceInfo> = emptyList(),
    val showBtDevicePicker: Boolean = false,
    val disarmHistory: List<DisarmHistoryEntry> = emptyList(),
    val recentlyDisarmedNotice: String? = null
)

class PointerViewModel(
    private val preferences: PointerPreferences,
    private val appContext: Context
) : ViewModel() {

    private val _uiState = MutableStateFlow(
        PointerUiState(
            isConfigured = preferences.isConfigured(),
            screenMode = if (preferences.isConfigured()) ScreenMode.Disarm else ScreenMode.Setup,
            vehicleNumber = preferences.getVehicleNumber(),
            code = preferences.getPointerCode(),
            driverName = preferences.getDriverName(),
            setupVehicleNumber = preferences.getVehicleNumber().ifBlank { "11727004" },
            setupCode = preferences.getPointerCode().ifBlank { "4141" },
            setupDriverName = preferences.getDriverName(),
            isBtAutoDisarmEnabled = preferences.isBtAutoDisarmEnabled(),
            btDeviceName = preferences.getBtDeviceName(),
            btDeviceAddress = preferences.getBtDeviceAddress(),
            disarmHistory = preferences.getDisarmHistory()
        )
    )
    val uiState: StateFlow<PointerUiState> = _uiState.asStateFlow()

    private var countdownJob: Job? = null
    private var savedOnFinish: (() -> Unit)? = null

    init {
        val history = preferences.getDisarmHistory()
        val lastTime = preferences.getLastDisarmTime()
        val timePassedMs = System.currentTimeMillis() - lastTime
        val twoMinutesMs = 2 * 60 * 1000L // 120 seconds

        val latest = history.firstOrNull()

        if (preferences.isConfigured()) {
            if (lastTime > 0 && timePassedMs < twoMinutesMs && latest?.success == true) {
                // If sent successfully less than 2 minutes ago, don't send again automatically on app launch
                // so the user can verify history and see that BT disarm worked.
                val secondsAgo = (timePassedMs / 1000).coerceAtLeast(1)
                val sourceLabel = latest.source
                val notice = "הקוד כבר נשלח בהצלחה לפני $secondsAgo שניות ($sourceLabel) • הרכב פתוח"
                _uiState.value = _uiState.value.copy(
                    disarmHistory = history,
                    recentlyDisarmedNotice = notice
                )
            } else {
                // If never sent, sent > 2 min ago, OR previous attempt was a failure:
                // Automatically send code on launch as requested ("וכמובן משלוח")!
                val source = if (latest != null && !latest.success && timePassedMs < twoMinutesMs) {
                    "פתיחת אפליקציה (לאחר שגיאה)"
                } else {
                    "פתיחת אפליקציה"
                }
                disarmNow(source = source)
            }
        } else {
            _uiState.value = _uiState.value.copy(disarmHistory = history)
        }
    }

    fun onSetupVehicleNumberChanged(vNumber: String) {
        val filtered = vNumber.filter { it.isDigit() }.take(8)
        _uiState.value = _uiState.value.copy(setupVehicleNumber = filtered, setupErrorMessage = null)
    }

    fun onSetupCodeChanged(code: String) {
        // Only numbers 1 to 5 are on Pointer code keypad!
        val filtered = code.filter { it in '1'..'5' }.take(4)
        _uiState.value = _uiState.value.copy(setupCode = filtered, setupErrorMessage = null)
    }

    fun onSetupDriverNameChanged(name: String) {
        _uiState.value = _uiState.value.copy(setupDriverName = name, setupErrorMessage = null)
    }

    fun openSetup() {
        countdownJob?.cancel()
        _uiState.value = _uiState.value.copy(
            screenMode = ScreenMode.Setup,
            setupVehicleNumber = preferences.getVehicleNumber(),
            setupCode = preferences.getPointerCode(),
            setupDriverName = preferences.getDriverName(),
            setupErrorMessage = null
        )
    }

    fun cancelSetup() {
        if (preferences.isConfigured()) {
            _uiState.value = _uiState.value.copy(screenMode = ScreenMode.Disarm)
        }
    }

    fun saveAndDisarm(onFinish: (() -> Unit)? = null) {
        val vNumber = _uiState.value.setupVehicleNumber.trim()
        val code = _uiState.value.setupCode.trim()
        val name = _uiState.value.setupDriverName.trim()

        if (vNumber.length < 6) {
            _uiState.value = _uiState.value.copy(setupErrorMessage = "נא להזין מספר רכב תקין (6-8 ספרות)")
            return
        }
        if (code.length != 4) {
            _uiState.value = _uiState.value.copy(setupErrorMessage = "נא להזין קוד בן 4 ספרות (ספרות 1 עד 5)")
            return
        }

        preferences.save(vNumber, code, name)
        _uiState.value = _uiState.value.copy(
            isConfigured = true,
            screenMode = ScreenMode.Disarm,
            vehicleNumber = vNumber,
            code = code,
            driverName = name,
            setupErrorMessage = null
        )

        disarmNow(source = "הגדרה ראשונית", onFinish = onFinish)
    }

    fun refreshState() {
        _uiState.value = _uiState.value.copy(
            isConfigured = preferences.isConfigured(),
            vehicleNumber = preferences.getVehicleNumber(),
            code = preferences.getPointerCode(),
            driverName = preferences.getDriverName(),
            isBtAutoDisarmEnabled = preferences.isBtAutoDisarmEnabled(),
            btDeviceName = preferences.getBtDeviceName(),
            btDeviceAddress = preferences.getBtDeviceAddress(),
            disarmHistory = preferences.getDisarmHistory()
        )
    }

    fun disarmNow(source: String = "ידני", onFinish: (() -> Unit)? = null) {
        countdownJob?.cancel()
        val vNumber = preferences.getVehicleNumber()
        val code = preferences.getPointerCode()

        if (vNumber.isBlank() || code.length != 4) {
            openSetup()
            return
        }

        _uiState.value = _uiState.value.copy(
            disarmStatus = DisarmStatus.Loading,
            screenMode = ScreenMode.Disarm,
            recentlyDisarmedNotice = null
        )

        DisarmManager.triggerDisarm(
            context = appContext,
            prefs = preferences,
            source = source,
            forceManual = true
        ) { result ->
            when (result) {
                is PointerResult.Success -> {
                    _uiState.value = _uiState.value.copy(
                        disarmHistory = preferences.getDisarmHistory()
                    )
                    triggerHapticSuccess()
                    startAutoCloseCountdown(result.message, onFinish)
                }
                is PointerResult.Failure -> {
                    _uiState.value = _uiState.value.copy(
                        disarmStatus = DisarmStatus.Error(
                            message = result.message,
                            rc = result.rc,
                            isNetwork = false
                        ),
                        disarmHistory = preferences.getDisarmHistory()
                    )
                }
                is PointerResult.NetworkError -> {
                    _uiState.value = _uiState.value.copy(
                        disarmStatus = DisarmStatus.Error(
                            message = result.errorMsg,
                            rc = -1,
                            isNetwork = true
                        ),
                        disarmHistory = preferences.getDisarmHistory()
                    )
                }
            }
        }
    }

    private fun startAutoCloseCountdown(message: String, onFinish: (() -> Unit)?) {
        savedOnFinish = onFinish
        countdownJob?.cancel()
        countdownJob = viewModelScope.launch {
            var seconds = preferences.getCountdownSeconds()
            while (seconds > 0) {
                _uiState.value = _uiState.value.copy(
                    disarmStatus = DisarmStatus.Success(message, seconds, isPaused = false)
                )
                delay(1000)
                seconds--
            }
            _uiState.value = _uiState.value.copy(
                disarmStatus = DisarmStatus.Success(message, 0, isPaused = false)
            )
            savedOnFinish?.invoke()
        }
    }

    fun toggleCountdownPause() {
        val currentStatus = _uiState.value.disarmStatus as? DisarmStatus.Success ?: return
        if (currentStatus.countdown <= 0) return

        if (!currentStatus.isPaused) {
            // Pause countdown
            countdownJob?.cancel()
            _uiState.value = _uiState.value.copy(
                disarmStatus = currentStatus.copy(isPaused = true)
            )
        } else {
            // Resume countdown
            resumeCountdown(currentStatus.message, currentStatus.countdown)
        }
    }

    private fun resumeCountdown(message: String, remainingSeconds: Int) {
        countdownJob?.cancel()
        countdownJob = viewModelScope.launch {
            var seconds = remainingSeconds
            while (seconds > 0) {
                _uiState.value = _uiState.value.copy(
                    disarmStatus = DisarmStatus.Success(message, seconds, isPaused = false)
                )
                delay(1000)
                seconds--
            }
            _uiState.value = _uiState.value.copy(
                disarmStatus = DisarmStatus.Success(message, 0, isPaused = false)
            )
            savedOnFinish?.invoke()
        }
    }

    fun cancelCountdown() {
        countdownJob?.cancel()
        val currentStatus = _uiState.value.disarmStatus as? DisarmStatus.Success
        if (currentStatus != null) {
            _uiState.value = _uiState.value.copy(
                disarmStatus = currentStatus.copy(isPaused = true)
            )
        }
    }

    private fun triggerHapticSuccess() {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                val vibratorManager = appContext.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
                vibratorManager?.defaultVibrator?.vibrate(
                    VibrationEffect.createWaveform(longArrayOf(0, 100, 80, 150), -1)
                )
            } else {
                @Suppress("DEPRECATION")
                val vibrator = appContext.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
                @Suppress("DEPRECATION")
                vibrator?.vibrate(180)
            }
        } catch (_: Exception) {}
    }

    fun requestPinShortcut(context: Context): Boolean {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val shortcutManager = context.getSystemService(ShortcutManager::class.java) ?: return false
            if (shortcutManager.isRequestPinShortcutSupported) {
                val intent = Intent(context, MainActivity::class.java).apply {
                    action = Intent.ACTION_VIEW
                    putExtra("AUTO_DISARM", true)
                }
                val pinShortcutInfo = ShortcutInfo.Builder(context, "shortcut_quick_disarm")
                    .setShortLabel("נטרל פוינטר")
                    .setLongLabel("נטרל קודן פוינטר לרכב")
                    .setIcon(Icon.createWithResource(context, R.mipmap.ic_launcher))
                    .setIntent(intent)
                    .build()

                val pinnedShortcutCallbackIntent = shortcutManager.createShortcutResultIntent(pinShortcutInfo)
                val successCallback = PendingIntent.getBroadcast(
                    context, 0, pinnedShortcutCallbackIntent,
                    PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
                )

                val success = shortcutManager.requestPinShortcut(pinShortcutInfo, successCallback.intentSender)
                if (success) {
                    _uiState.value = _uiState.value.copy(shortcutCreated = true)
                }
                return success
            }
        }
        return false
    }

    fun toggleBtAutoDisarm(enabled: Boolean) {
        preferences.setBtAutoDisarmEnabled(enabled)
        _uiState.value = _uiState.value.copy(isBtAutoDisarmEnabled = enabled)
    }

    fun setBtDevice(device: BluetoothDeviceInfo) {
        preferences.setBtDevice(device.name, device.address)
        preferences.setBtAutoDisarmEnabled(true)
        _uiState.value = _uiState.value.copy(
            btDeviceName = device.name,
            btDeviceAddress = device.address,
            isBtAutoDisarmEnabled = true,
            showBtDevicePicker = false
        )
    }

    fun clearBtDevice() {
        preferences.clearBtDevice()
        preferences.setBtAutoDisarmEnabled(false)
        _uiState.value = _uiState.value.copy(
            btDeviceName = "",
            btDeviceAddress = "",
            isBtAutoDisarmEnabled = false
        )
    }

    fun openBtDevicePicker() {
        refreshPairedDevices()
        _uiState.value = _uiState.value.copy(showBtDevicePicker = true)
    }

    fun dismissBtDevicePicker() {
        _uiState.value = _uiState.value.copy(showBtDevicePicker = false)
    }

    fun refreshPairedDevices() {
        val devices = BluetoothHelper.getPairedDevices(appContext)
        _uiState.value = _uiState.value.copy(pairedDevices = devices)
    }

    fun refreshHistory() {
        _uiState.value = _uiState.value.copy(
            disarmHistory = preferences.getDisarmHistory()
        )
    }

    fun simulateBluetoothTrigger() {
        val deviceName = preferences.getBtDeviceName().ifBlank { "הרכב המצומד" }
        DisarmManager.triggerDisarm(
            context = appContext,
            prefs = preferences,
            source = "בלוטות' ($deviceName)",
            forceManual = true
        ) {
            refreshHistory()
        }
    }
}
