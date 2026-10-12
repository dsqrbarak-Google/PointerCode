package com.example.pointercode.data

import android.content.Context
import android.net.ConnectivityManager
import android.net.Network
import android.net.NetworkCapabilities
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.BufferedReader
import java.io.InputStreamReader
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

sealed class PointerResult {
    data class Success(val message: String, val rc: Int = 100) : PointerResult()
    data class Failure(val message: String, val rc: Int) : PointerResult()
    data class NetworkError(val errorMsg: String, val throwable: Throwable? = null) : PointerResult()
}

object PointerApi {
    private const val API_URL = "https://fleet.pointer4u.co.il/code/ws/checkcode.ashx"
    private const val TIMEOUT_MS = 6000

    suspend fun checkCode(
        vehicleNumber: String,
        code: String,
        name: String = "",
        context: Context? = null
    ): PointerResult = withContext(Dispatchers.IO) {
        val cleanVehicleNumber = vehicleNumber.filter { it.isDigit() }
        val cleanCode = code.trim()

        if (cleanVehicleNumber.isBlank()) {
            return@withContext PointerResult.Failure("חסר מספר רכב", -1)
        }
        if (cleanCode.length != 4) {
            return@withContext PointerResult.Failure("הקוד חייב להכיל 4 ספרות", -1)
        }

        var connection: HttpURLConnection? = null
        try {
            val url = URL(API_URL)

            // Smart In-Car Network Routing:
            // When entering a modern car (e.g. XPENG Motor DD), the phone connects to the car's local
            // Wi-Fi hotspot for Wireless Android Auto projection. This local Wi-Fi hotspot has NO internet access.
            // Android's default DNS tries to resolve over the local Wi-Fi hotspot, resulting in UnknownHostException.
            // By finding a network with validated internet or CELLULAR transport, we route directly through mobile data!
            val targetNetwork = findInternetNetwork(context)
            connection = if (targetNetwork != null) {
                AppLogger.d("PointerApi", "Routing HTTP request via selected network: $targetNetwork")
                targetNetwork.openConnection(url) as HttpURLConnection
            } else {
                url.openConnection() as HttpURLConnection
            }

            connection.apply {
                requestMethod = "POST"
                connectTimeout = TIMEOUT_MS
                readTimeout = TIMEOUT_MS
                doInput = true
                doOutput = true
                useCaches = false
                setRequestProperty("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
                setRequestProperty("User-Agent", "Mozilla/5.0 (Linux; Android 14; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36")
                setRequestProperty("Accept", "*/*")
                setRequestProperty("Origin", "https://fleet.pointer4u.co.il")
                setRequestProperty("Referer", "https://fleet.pointer4u.co.il/code/")
            }

            val postData = buildString {
                append("VNumber=").append(URLEncoder.encode(cleanVehicleNumber, "UTF-8"))
                append("&PhoneNumber=")
                append("&Name=").append(URLEncoder.encode(name, "UTF-8"))
                append("&keypadType=")
                append("&Password=").append(URLEncoder.encode(cleanCode, "UTF-8"))
                append("&GCMKey=---")
                append("&IMEI=00000000")
            }

            OutputStreamWriter(connection.outputStream, Charsets.UTF_8).use { writer ->
                writer.write(postData)
                writer.flush()
            }

            val responseCode = connection.responseCode
            val inputStream = if (responseCode in 200..299) {
                connection.inputStream
            } else {
                connection.errorStream ?: connection.inputStream
            }

            val responseBody = BufferedReader(InputStreamReader(inputStream, Charsets.UTF_8)).use { reader ->
                reader.readText()
            }

            parseResponse(responseBody)
        } catch (e: java.net.SocketTimeoutException) {
            PointerResult.NetworkError("פסק זמן בחיבור לשרת פוינטר (Timeout)", e)
        } catch (e: java.net.UnknownHostException) {
            PointerResult.NetworkError("אין חיבור לאינטרנט או ששרת פוינטר אינו זמין", e)
        } catch (e: Throwable) {
            PointerResult.NetworkError("שגיאת תקשורת: ${e.localizedMessage ?: "שגיאה לא ידועה"}", e)
        } finally {
            connection?.disconnect()
        }
    }

    private fun findInternetNetwork(context: Context?): Network? {
        if (context == null) return null
        try {
            val cm = context.getSystemService(Context.CONNECTIVITY_SERVICE) as? ConnectivityManager ?: return null
            val allNetworks = cm.allNetworks
            if (allNetworks.isEmpty()) return null

            // 1. First priority: Network with validated internet access
            for (net in allNetworks) {
                val caps = cm.getNetworkCapabilities(net) ?: continue
                if (caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET) &&
                    caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED)) {
                    return net
                }
            }

            // 2. Second priority (in car): Cellular data (bypasses unvalidated in-car Wi-Fi hotspot!)
            for (net in allNetworks) {
                val caps = cm.getNetworkCapabilities(net) ?: continue
                if (caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET) &&
                    caps.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR)) {
                    return net
                }
            }

            // 3. Fallback: Any network claiming internet
            for (net in allNetworks) {
                val caps = cm.getNetworkCapabilities(net) ?: continue
                if (caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)) {
                    return net
                }
            }

            return cm.activeNetwork
        } catch (t: Throwable) {
            AppLogger.w("PointerApi", "Failed to inspect networks: ${t.message}")
            return null
        }
    }

    internal fun parseResponse(rawBody: String): PointerResult {
        // Strip BOM or whitespace if present
        val cleanBody = rawBody.trim().removePrefix("\uFEFF")

        val rcMatch = Regex("<RC>(.*?)</RC>", RegexOption.DOT_MATCHES_ALL).find(cleanBody)
        val remarkMatch = Regex("<Remark>(.*?)</Remark>", RegexOption.DOT_MATCHES_ALL).find(cleanBody)

        val rc = rcMatch?.groupValues?.get(1)?.trim()?.toIntOrNull()
        val remark = remarkMatch?.groupValues?.get(1)?.trim() ?: ""

        if (rc == null) {
            return PointerResult.Failure("תגובה לא מזוהה משרת פוינטר: $cleanBody", -99)
        }

        return if (rc == 100) {
            val successMsg = if (remark.isNotBlank()) remark else "נסיעה טובה!"
            PointerResult.Success(successMsg, rc)
        } else {
            val errorMsg = if (remark.isNotBlank()) remark else "שגיאה משרת פוינטר (קוד $rc)"
            PointerResult.Failure(errorMsg, rc)
        }
    }
}
