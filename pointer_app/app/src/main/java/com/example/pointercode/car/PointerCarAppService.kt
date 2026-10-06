package com.example.pointercode.car

import androidx.car.app.CarAppService
import androidx.car.app.Session
import androidx.car.app.validation.HostValidator

/**
 * Entry point for Android Auto integration.
 * Declared with androidx.car.app.category.IOT to allow in-car vehicle security control.
 */
class PointerCarAppService : CarAppService() {

    override fun createHostValidator(): HostValidator {
        // Allow all hosts (essential for development, testing, and sideloaded installations)
        return HostValidator.ALLOW_ALL_HOSTS_VALIDATOR
    }

    override fun onCreateSession(): Session {
        return PointerCarSession()
    }
}
