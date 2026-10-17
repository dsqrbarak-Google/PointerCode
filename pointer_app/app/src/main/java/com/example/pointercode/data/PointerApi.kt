package com.example.pointercode.data

import android.content.Context
import android.net.ConnectivityManager
import android.net.Network
import android.net.NetworkCapabilities
import android.net.NetworkRequest
import android.os.Build
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlinx.coroutines.withContext
import kotlinx.coroutines.withTimeoutOrNull
import java.io.BufferedReader
import java.io.InputStreamReader
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder
import kotlin.coroutines.resume

sealed class PointerResult {
    data class Success(val message: String, val rc: Int = 100) : PointerResult()
    data class Failure(val message: String, val rc: Int) : PointerResult()
    data class NetworkError(val errorMsg: String, val throwable: Throwable? = null) : PointerResult()
}

internal data class NetworkBinding(
    val network: Network?,
    val cleanup: (() -> Unit)? = null
)

object PointerApi {
    private const val API_URL = "https://fleet.pointer4u.co.il/code/ws/checkcode.ashx"
    private const val TIMEOUT_MS = 12000

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
        var binding: NetworkBinding? = null
        try {
            val url = URL(API_URL)

            // Direct Cellular Network Routing:
            // When connecting to in-car Wi-Fi (such as XPENG Motor DD for Android Auto projection),
            // the in-car Wi-Fi does NOT have internet access. Android's default DNS tries to resolve
            // over the local Wi-Fi hotspot, resulting in UnknownHostException.
            // By explicitly prioritizing and binding to the Cellular network, we route directly through
            // the phone's mobile data, bypassing the in-car Wi-Fi completely!
            binding = findCellularOrInternetNetwork(context)
            val targetNetwork = binding?.network

            connection = if (targetNetwork != null) {
                AppLogger.i("PointerApi", "Routing HTTP request via selected network: $targetNetwork")
                targetNetwork.openConnection(url) as HttpURLConnection
            } else {
                AppLogger.i("PointerApi", "Routing HTTP request via default URL.openConnection()")
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
            binding?.cleanup?.invoke()
        }
    }

    @Suppress("DEPRECATION")
    private suspend fun findCellularOrInternetNetwork(context: Context?): NetworkBinding? {
        if (context == null) return null
        try {
            val cm = context.getSystemService(Context.CONNECTIVITY_SERVICE) as? ConnectivityManager ?: return null
            val allNetworks = cm.allNetworks
            if (allNetworks.isEmpty()) return null

            // 1. HIGHEST PRIORITY: Mobile Cellular Data (active in allNetworks)
            // When connecting to in-car Wi-Fi, this bypasses the dead in-car hotspot immediately.
            for (net in allNetworks) {
                val caps = cm.getNetworkCapabilities(net) ?: continue
                if (caps.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) &&
                    caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)) {
                    AppLogger.i("PointerApi", "Found active Cellular data network: $net")
                    return NetworkBinding(network = net)
                }
            }

            // 2. SECOND PRIORITY: Request Cellular network from OS if in standby
            val requested = requestCellularNetwork(cm, timeoutMs = 2500L)
            if (requested != null) {
                AppLogger.i("PointerApi", "Acquired Cellular network via requestNetwork: ${requested.network}")
                return requested
            }

            // 3. THIRD PRIORITY: Fallback to network with VALIDATED internet (e.g. Home Wi-Fi when testing)
            for (net in allNetworks) {
                val caps = cm.getNetworkCapabilities(net) ?: continue
                if (caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET) &&
                    caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED)) {
                    AppLogger.i("PointerApi", "Found validated internet network: $net")
                    return NetworkBinding(network = net)
                }
            }

            // 4. FOURTH PRIORITY: Default active network fallback
            val activeNet = cm.activeNetwork
            AppLogger.d("PointerApi", "Using activeNetwork fallback: $activeNet")
            return NetworkBinding(network = activeNet)
        } catch (t: Throwable) {
            AppLogger.w("PointerApi", "Failed to inspect networks: ${t.message}")
            return null
        }
    }

    private suspend fun requestCellularNetwork(cm: ConnectivityManager, timeoutMs: Long): NetworkBinding? {
        return try {
            withTimeoutOrNull(timeoutMs) {
                suspendCancellableCoroutine<NetworkBinding?> { cont ->
                    val request = NetworkRequest.Builder()
                        .addTransportType(NetworkCapabilities.TRANSPORT_CELLULAR)
                        .addCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
                        .build()

                    var callbackRegistered = false
                    val callback = object : ConnectivityManager.NetworkCallback() {
                        override fun onAvailable(network: Network) {
                            if (cont.isActive) {
                                cont.resume(
                                    NetworkBinding(
                                        network = network,
                                        cleanup = {
                                            try {
                                                cm.unregisterNetworkCallback(this)
                                            } catch (_: Throwable) {}
                                        }
                                    )
                                )
                            }
                        }

                        override fun onUnavailable() {
                            if (cont.isActive) cont.resume(null)
                        }
                    }

                    try {
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                            cm.requestNetwork(request, callback, timeoutMs.toInt())
                        } else {
                            cm.requestNetwork(request, callback)
                        }
                        callbackRegistered = true
                    } catch (e: Throwable) {
                        AppLogger.w("PointerApi", "requestNetwork failed: ${e.message}")
                        if (cont.isActive) cont.resume(null)
                    }

                    cont.invokeOnCancellation {
                        if (callbackRegistered) {
                            try {
                                cm.unregisterNetworkCallback(callback)
                            } catch (_: Throwable) {}
                        }
                    }
                }
            }
        } catch (t: Throwable) {
            AppLogger.w("PointerApi", "requestCellularNetwork error: ${t.message}")
            null
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
