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
import com.example.pointercode.data.PointerApi
import com.example.pointercode.data.PointerPreferences
import com.example.pointercode.data.PointerResult
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

sealed class ScreenMode {
    data object Disarm : ScreenMode()
    data object Setup : ScreenMode()
}

sealed class DisarmStatus {
    data object Idle : DisarmStatus()
    data object Loading : DisarmStatus()
    data class Success(val message: String, val countdown: Int) : DisarmStatus()
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
    val shortcutCreated: Boolean = false
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
            setupDriverName = preferences.getDriverName()
        )
    )
    val uiState: StateFlow<PointerUiState> = _uiState.asStateFlow()

    private var countdownJob: Job? = null

    init {
        // If already configured on launch, automatically disarm immediately!
        if (preferences.isConfigured()) {
            disarmNow()
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

        disarmNow(onFinish)
    }

    fun disarmNow(onFinish: (() -> Unit)? = null) {
        countdownJob?.cancel()
        val vNumber = preferences.getVehicleNumber()
        val code = preferences.getPointerCode()
        val name = preferences.getDriverName()

        if (vNumber.isBlank() || code.length != 4) {
            openSetup()
            return
        }

        _uiState.value = _uiState.value.copy(
            disarmStatus = DisarmStatus.Loading,
            screenMode = ScreenMode.Disarm
        )

        viewModelScope.launch {
            val result = PointerApi.checkCode(vNumber, code, name)
            when (result) {
                is PointerResult.Success -> {
                    triggerHapticSuccess()
                    startAutoCloseCountdown(result.message, onFinish)
                }
                is PointerResult.Failure -> {
                    _uiState.value = _uiState.value.copy(
                        disarmStatus = DisarmStatus.Error(
                            message = result.message,
                            rc = result.rc,
                            isNetwork = false
                        )
                    )
                }
                is PointerResult.NetworkError -> {
                    _uiState.value = _uiState.value.copy(
                        disarmStatus = DisarmStatus.Error(
                            message = result.errorMsg,
                            rc = -1,
                            isNetwork = true
                        )
                    )
                }
            }
        }
    }

    private fun startAutoCloseCountdown(message: String, onFinish: (() -> Unit)?) {
        countdownJob?.cancel()
        countdownJob = viewModelScope.launch {
            var seconds = preferences.getCountdownSeconds()
            while (seconds > 0) {
                _uiState.value = _uiState.value.copy(
                    disarmStatus = DisarmStatus.Success(message, seconds)
                )
                delay(1000)
                seconds--
            }
            _uiState.value = _uiState.value.copy(
                disarmStatus = DisarmStatus.Success(message, 0)
            )
            onFinish?.invoke()
        }
    }

    fun cancelCountdown() {
        countdownJob?.cancel()
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
                    .setIcon(Icon.createWithResource(context, R.drawable.ic_tarsier))
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
}
