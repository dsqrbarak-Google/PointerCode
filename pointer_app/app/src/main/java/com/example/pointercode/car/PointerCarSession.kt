package com.example.pointercode.car

import android.content.Intent
import androidx.car.app.Screen
import androidx.car.app.Session

/**
 * Manages the lifecycle of an Android Auto session for PointerCode.
 */
class PointerCarSession : Session() {

    override fun onCreateScreen(intent: Intent): Screen {
        return PointerCarScreen(carContext)
    }
}
