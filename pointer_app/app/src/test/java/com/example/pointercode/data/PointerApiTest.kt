package com.example.pointercode.data

import com.example.pointercode.ui.formatLicensePlate
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class PointerApiTest {

    @Test
    fun testParseResponse_success() {
        val xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><root><RC>100</RC><Remark>נסיעה טובה</Remark></root>"
        val result = PointerApi.parseResponse(xml)
        assertTrue(result is PointerResult.Success)
        assertEquals("נסיעה טובה", (result as PointerResult.Success).message)
        assertEquals(100, result.rc)
    }

    @Test
    fun testParseResponse_withBomAndSpaces() {
        val xml = "\uFEFF<?xml version=\"1.0\" encoding=\"utf-8\"?><root><RC>10</RC><Remark>   קוד זיהוי לא מוגדר </Remark></root>"
        val result = PointerApi.parseResponse(xml)
        assertTrue(result is PointerResult.Failure)
        assertEquals("קוד זיהוי לא מוגדר", (result as PointerResult.Failure).message)
        assertEquals(10, result.rc)
    }

    @Test
    fun testParseResponse_wrongCode() {
        val xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><root><RC>20</RC><Remark>קוד שגוי</Remark></root>"
        val result = PointerApi.parseResponse(xml)
        assertTrue(result is PointerResult.Failure)
        assertEquals("קוד שגוי", (result as PointerResult.Failure).message)
        assertEquals(20, result.rc)
    }

    @Test
    fun testFormatLicensePlate() {
        assertEquals("12-345-67", formatLicensePlate("1234567"))
        assertEquals("123-45-678", formatLicensePlate("12345678"))
        assertEquals("117-27-004", formatLicensePlate("11727004"))
        assertEquals("12-345-67", formatLicensePlate("12-345-67"))
    }

    @Test
    fun testLiveApi_userVehicleAndCode() = kotlinx.coroutines.runBlocking {
        val result = PointerApi.checkCode("11727004", "4141")
        assertTrue("Expected Success but got $result", result is PointerResult.Success)
        val success = result as PointerResult.Success
        assertEquals(100, success.rc)
        assertTrue(success.message.contains("נסיעה טובה"))
    }
}
