package com.example.pointercode

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
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

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

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
            viewModel.disarmNow(source = "קיצור דרך", onFinish = { finish() })
        }
    }

    override fun onStop() {
        super.onStop()
        PointerAppWidgetProvider.updateAllWidgets(applicationContext)
    }
}
