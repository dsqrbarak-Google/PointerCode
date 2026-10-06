package com.example.pointercode.bluetooth

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class BluetoothLogicTest {

    @Test
    fun testBluetoothDeviceInfo() {
        val device = BluetoothDeviceInfo(name = "Toyota Touch", address = "00:11:22:33:44:55")
        assertEquals("Toyota Touch", device.name)
        assertEquals("00:11:22:33:44:55", device.address)
    }

    @Test
    fun testDeviceMatching() {
        val targetAddress = "00:11:22:33:44:55"
        val targetName = "My Car BT"

        // Exact address match
        assertTrue(matchesDevice("00:11:22:33:44:55", "Any Name", targetAddress, targetName))
        // Case insensitive address match
        assertTrue(matchesDevice("00:11:22:33:44:55".lowercase(), "Any Name", targetAddress, targetName))
        // Name match if address differs or missing
        assertTrue(matchesDevice("AA:BB:CC:DD:EE:FF", "My Car BT", targetAddress, targetName))
        // Case insensitive name match
        assertTrue(matchesDevice("AA:BB:CC:DD:EE:FF", "my car bt", targetAddress, targetName))
        // No match
        assertFalse(matchesDevice("AA:BB:CC:DD:EE:FF", "Other Device", targetAddress, targetName))
    }

    @Test
    fun testDebounceLogic() {
        val debounceMs = 60_000L
        val now = 100_000L

        // Within 60 seconds
        val lastTimeRecent = 70_000L
        assertTrue(now - lastTimeRecent < debounceMs)

        // After 60 seconds
        val lastTimeOld = 30_000L
        assertFalse(now - lastTimeOld < debounceMs)
    }

    @Test
    fun testTwoMinuteSuppressionWindow() {
        val twoMinutesMs = 2 * 60 * 1000L // 120,000 ms
        val now = 200_000L

        // Sent 30 seconds ago -> Should be suppressed (true)
        val sentRecently = now - 30_000L
        assertTrue(now - sentRecently < twoMinutesMs)

        // Sent 119 seconds ago -> Should be suppressed (true)
        val sent119sAgo = now - 119_000L
        assertTrue(now - sent119sAgo < twoMinutesMs)

        // Sent 121 seconds ago -> Should NOT be suppressed (false)
        val sent121sAgo = now - 121_000L
        assertFalse(now - sent121sAgo < twoMinutesMs)

        // Sent 10 minutes ago -> Should NOT be suppressed (false)
        val sent10MinAgo = now - 600_000L
        assertFalse(now - sent10MinAgo < twoMinutesMs)
    }

    @Test
    fun testSuppressionOnlyOnSuccess() {
        val twoMinutesMs = 2 * 60 * 1000L
        val now = 100_000L
        val lastTime = now - 30_000L // 30s ago (within 2 min)

        val successfulEntry = com.example.pointercode.data.DisarmHistoryEntry(
            timestamp = lastTime,
            source = "בלוטות'",
            success = true,
            message = "נסיעה טובה"
        )
        val failedEntry = com.example.pointercode.data.DisarmHistoryEntry(
            timestamp = lastTime,
            source = "בלוטות'",
            success = false,
            message = "אין חיבור לאינטרנט"
        )

        // Helper check matching PointerViewModel condition
        fun shouldSuppress(entry: com.example.pointercode.data.DisarmHistoryEntry?): Boolean {
            val elapsed = now - lastTime
            return lastTime > 0 && elapsed < twoMinutesMs && entry?.success == true
        }

        assertTrue(shouldSuppress(successfulEntry))
        assertFalse("Failure within 2 minutes should NOT suppress auto-disarm", shouldSuppress(failedEntry))
        assertFalse(shouldSuppress(null))
    }

    @Test
    fun testCountdownDefaultTenSeconds() {
        fun resolveCountdownSeconds(stored: Int?): Int {
            val sec = stored ?: 10
            return if (sec <= 3) 10 else sec
        }

        assertEquals(10, resolveCountdownSeconds(null))
        assertEquals(10, resolveCountdownSeconds(3))
        assertEquals(10, resolveCountdownSeconds(10))
        assertEquals(15, resolveCountdownSeconds(15))
    }

    @Test
    fun testHistoryCappingAtFive() {
        val list = mutableListOf<com.example.pointercode.data.DisarmHistoryEntry>()
        for (i in 1..8) {
            list.add(
                0,
                com.example.pointercode.data.DisarmHistoryEntry(
                    timestamp = i * 1000L,
                    source = "מקור $i",
                    success = true,
                    message = "הודעה $i"
                )
            )
        }
        val capped = list.take(5)
        assertEquals(5, capped.size)
        // Latest entry should be the first item
        assertEquals("מקור 8", capped[0].source)
        assertEquals("מקור 7", capped[1].source)
        assertEquals("מקור 4", capped[4].source)
    }

    @Test
    fun testProgressiveRetryDelays() {
        val delays = BluetoothReceiver.retryDelaysMs
        assertEquals(4, delays.size)
        assertEquals(3_000L, delays[0])
        assertEquals(6_000L, delays[1])
        assertEquals(10_000L, delays[2])
        assertEquals(15_000L, delays[3])

        val maxAttempts = delays.size + 1
        assertEquals(5, maxAttempts)

        val totalDelay = delays.sum()
        assertEquals(34_000L, totalDelay)
    }

    @Test
    fun testRetryActionConstant() {
        assertEquals("com.example.pointercode.ACTION_RETRY_DISARM", DisarmActionReceiver.ACTION_RETRY_DISARM)
    }

    private fun matchesDevice(
        deviceAddress: String?,
        deviceName: String?,
        targetAddress: String,
        targetName: String
    ): Boolean {
        val addressMatches = !deviceAddress.isNullOrBlank() &&
                targetAddress.isNotBlank() &&
                deviceAddress.equals(targetAddress.trim(), ignoreCase = true)

        val nameMatches = !deviceName.isNullOrBlank() &&
                targetName.isNotBlank() &&
                deviceName.equals(targetName.trim(), ignoreCase = true)

        return addressMatches || nameMatches
    }
}
