package com.example.pointercode

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.activity.viewModels
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.unit.LayoutDirection
import androidx.core.content.ContextCompat
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.example.pointercode.data.PointerPreferences
import com.example.pointercode.theme.PointerCodeTheme
import com.example.pointercode.ui.PointerMainScreen
import com.example.pointercode.ui.PointerViewModel
import com.example.pointercode.widget.PointerAppWidgetProvider

class MainActivity : ComponentActivity() {

    private val preferences by lazy { PointerPreferences(applicationContext) }

    private val viewModel: PointerViewModel by viewModels {
        object : ViewModelProvider.Factory {
            @Suppress("UNCHECKED_CAST")
            override fun <T : ViewModel> create(modelClass: Class<T>): T {
                return PointerViewModel(preferences, applicationContext) as T
            }
        }
    }

    private val permissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestMultiplePermissions()
    ) { _ ->
        viewModel.refreshState()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        com.example.pointercode.data.AppLogger.init(applicationContext)
        com.example.pointercode.data.AppLogger.i("MainActivity", "onCreate called, action=${intent?.action}")
        enableEdgeToEdge()

        checkAndRequestPermissions()
        handleIntent(intent)

        setContent {
            PointerCodeTheme {
                CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Rtl) {
                    Surface(
                        modifier = Modifier.fillMaxSize(),
                        color = MaterialTheme.colorScheme.background
                    ) {
                        val state by viewModel.uiState.collectAsState()
                        PointerMainScreen(
                            viewModel = viewModel,
                            state = state,
                            onCloseActivity = { finish() }
                        )
                    }
                }
            }
        }
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        setIntent(intent)
        handleIntent(intent)
    }

    private fun handleIntent(intent: Intent?) {
        if (intent == null) return

        if (intent.getBooleanExtra("OPEN_SETUP", false)) {
            viewModel.openSetup()
        } else if (intent.getBooleanExtra("AUTO_DISARM", false)) {
            val lastSuccess = preferences.getLastSuccessfulDisarmTime()
            val timePassed = System.currentTimeMillis() - lastSuccess
            if (lastSuccess > 0 && timePassed < com.example.pointercode.data.DisarmManager.SUCCESS_COOLDOWN_MS) {
                val minAgo = (timePassed / 60000L).coerceAtLeast(1)
                com.example.pointercode.data.AppLogger.i("MainActivity", "Shortcut launch suppressed by 15-min cooldown ($minAgo min ago)")
                android.widget.Toast.makeText(this, "קודן פוינטר כבר נוטרל בהצלחה לפני $minAgo דק'", android.widget.Toast.LENGTH_SHORT).show()
                finish()
            } else {
                viewModel.disarmNow(source = "קיצור דרך", onFinish = { finish() })
            }
        }
    }

    private fun checkAndRequestPermissions() {
        val permissionsToRequest = mutableListOf<String>()
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
                permissionsToRequest.add(Manifest.permission.BLUETOOTH_CONNECT)
            }
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                permissionsToRequest.add(Manifest.permission.POST_NOTIFICATIONS)
            }
        }
        if (permissionsToRequest.isNotEmpty()) {
            permissionLauncher.launch(permissionsToRequest.toTypedArray())
        }
    }

    override fun onStop() {
        super.onStop()
        PointerAppWidgetProvider.updateAllWidgets(applicationContext)
    }
}
