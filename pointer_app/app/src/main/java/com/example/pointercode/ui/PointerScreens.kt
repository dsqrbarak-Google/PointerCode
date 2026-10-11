package com.example.pointercode.ui

import android.Manifest
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.widget.Toast
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AddCircle
import androidx.compose.material.icons.filled.Bluetooth
import androidx.compose.material.icons.filled.BluetoothConnected
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.DirectionsCar
import androidx.compose.material.icons.filled.History
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Language
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Pause
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.filled.Warning
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Switch
import androidx.compose.material3.SwitchDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.core.content.ContextCompat
import com.example.pointercode.R
import com.example.pointercode.bluetooth.BluetoothDeviceInfo

val PointerRed = Color(0xFFE44126)
val PointerDark = Color(0xFF0F172A)
val PlateYellow = Color(0xFFFFD600)
val SuccessGreen = Color(0xFF2E7D32)
const val APP_VERSION = "1.4.1"

@Composable
fun pointerTextFieldColors() = OutlinedTextFieldDefaults.colors(
    focusedTextColor = Color(0xFF0F172A),
    unfocusedTextColor = Color(0xFF0F172A),
    focusedContainerColor = Color(0xFFF8FAFC),
    unfocusedContainerColor = Color(0xFFF8FAFC),
    focusedBorderColor = Color(0xFF0284C7),
    unfocusedBorderColor = Color(0xFFCBD5E1),
    focusedLabelColor = Color(0xFF0284C7),
    unfocusedLabelColor = Color(0xFF475569),
    focusedPlaceholderColor = Color(0xFF94A3B8),
    unfocusedPlaceholderColor = Color(0xFF94A3B8),
    cursorColor = Color(0xFF0284C7)
)

@Composable
fun PointerMainScreen(
    viewModel: PointerViewModel,
    state: PointerUiState,
    onCloseActivity: () -> Unit
) {
    val context = LocalContext.current
    var showHelpDialog by remember { mutableStateOf(false) }

    CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Rtl) {
        when (state.screenMode) {
            is ScreenMode.Disarm -> {
                DisarmScreen(
                    state = state,
                    onDisarmNow = { viewModel.disarmNow(source = "ידני", onFinish = onCloseActivity) },
                    onOpenSetup = { viewModel.openSetup() },
                    onRequestPinShortcut = { ctx ->
                        val res = viewModel.requestPinShortcut(ctx)
                        if (res) {
                            Toast.makeText(ctx, "קיצור דרך נוסף למסך הבית", Toast.LENGTH_SHORT).show()
                        }
                    },
                    onToggleCountdownPause = { viewModel.toggleCountdownPause() },
                    onOpenLogs = { viewModel.openLogsDialog() },
                    onOpenHelpGuide = { showHelpDialog = true }
                )
            }
            is ScreenMode.Setup -> {
                SetupScreen(
                    state = state,
                    onVehicleNumberChanged = viewModel::onSetupVehicleNumberChanged,
                    onCodeChanged = viewModel::onSetupCodeChanged,
                    onDriverNameChanged = viewModel::onSetupDriverNameChanged,
                    onToggleBtAutoDisarm = viewModel::toggleBtAutoDisarm,
                    onOpenBtDevicePicker = viewModel::openBtDevicePicker,
                    onClearBtDevice = viewModel::clearBtDevice,
                    onSimulateBtTrigger = viewModel::simulateBluetoothTrigger,
                    onSave = { viewModel.saveAndDisarm(onCloseActivity) },
                    onCancel = viewModel::cancelSetup,
                    onOpenLogs = { viewModel.openLogsDialog() },
                    onCopyLogs = {
                        val ok = viewModel.copyLogsToClipboard(context)
                        if (ok) {
                            Toast.makeText(context, "יומן האבחון הועתק ללוח!", Toast.LENGTH_SHORT).show()
                        }
                    },
                    onOpenHelpGuide = { showHelpDialog = true }
                )
            }
        }

        if (state.showBtDevicePicker) {
            BluetoothDevicePickerDialog(
                devices = state.pairedDevices,
                onSelectDevice = { device ->
                    viewModel.setBtDevice(device)
                },
                onDismiss = { viewModel.dismissBtDevicePicker() },
                onRefresh = { viewModel.refreshPairedDevices() }
            )
        }

        if (state.showLogsDialog) {
            DiagnosticLogsDialog(
                logsText = state.logsText,
                onCopy = {
                    val ok = viewModel.copyLogsToClipboard(context)
                    if (ok) {
                        Toast.makeText(context, "יומן האבחון הועתק ללוח!", Toast.LENGTH_SHORT).show()
                    }
                },
                onClear = {
                    viewModel.clearLogs()
                    Toast.makeText(context, "היומן נוקה", Toast.LENGTH_SHORT).show()
                },
                onDismiss = { viewModel.dismissLogsDialog() }
            )
        }

        if (showHelpDialog) {
            HelpGuideDialog(onDismiss = { showHelpDialog = false })
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DisarmScreen(
    state: PointerUiState,
    onDisarmNow: () -> Unit,
    onOpenSetup: () -> Unit,
    onRequestPinShortcut: (Context) -> Unit,
    onToggleCountdownPause: () -> Unit,
    onOpenLogs: () -> Unit,
    onOpenHelpGuide: () -> Unit
) {
    val context = LocalContext.current
    val scrollState = rememberScrollState()
    var menuExpanded by remember { mutableStateOf(false) }
    var isHistoryExpanded by remember { mutableStateOf(false) }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier
                            .fillMaxWidth()
                            .clickable {
                                val browserIntent = Intent(Intent.ACTION_VIEW, Uri.parse("https://barak.rocks/"))
                                context.startActivity(browserIntent)
                            }
                    ) {
                        Image(
                            painter = painterResource(id = R.drawable.ic_tarsier),
                            contentDescription = "4S Monkey Logo",
                            modifier = Modifier
                                .size(38.dp)
                                .clip(CircleShape)
                        )
                        Spacer(modifier = Modifier.width(10.dp))
                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = "4S Pointer Code",
                                fontWeight = FontWeight.ExtraBold,
                                color = Color.White,
                                fontSize = 18.sp,
                                maxLines = 1
                            )
                            Text(
                                text = "4S • Smart Solutions for Silly Situations",
                                color = Color(0xFF38BDF8),
                                fontSize = 10.5.sp,
                                fontWeight = FontWeight.Medium,
                                maxLines = 1,
                                softWrap = false
                            )
                        }
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = PointerDark
                ),
                actions = {
                    Box {
                        IconButton(onClick = { menuExpanded = true }) {
                            Icon(
                                imageVector = Icons.Default.Menu,
                                contentDescription = "תפריט אפשרויות",
                                tint = Color.White,
                                modifier = Modifier.size(26.dp)
                            )
                        }

                        DropdownMenu(
                            expanded = menuExpanded,
                            onDismissRequest = { menuExpanded = false },
                            modifier = Modifier.background(Color.White)
                        ) {
                            DropdownMenuItem(
                                leadingIcon = {
                                    Icon(Icons.Default.Settings, contentDescription = null, tint = PointerDark, modifier = Modifier.size(20.dp))
                                },
                                text = { Text("הגדרות רכב וקוד", color = PointerDark, fontWeight = FontWeight.SemiBold) },
                                onClick = {
                                    menuExpanded = false
                                    onOpenSetup()
                                }
                            )
                            DropdownMenuItem(
                                leadingIcon = {
                                    Icon(Icons.Default.History, contentDescription = null, tint = Color(0xFF0284C7), modifier = Modifier.size(20.dp))
                                },
                                text = { Text("יומן פעולות ואבחון", color = PointerDark, fontWeight = FontWeight.SemiBold) },
                                onClick = {
                                    menuExpanded = false
                                    onOpenLogs()
                                }
                            )
                            DropdownMenuItem(
                                leadingIcon = {
                                    Icon(Icons.Default.AddCircle, contentDescription = null, tint = SuccessGreen, modifier = Modifier.size(20.dp))
                                },
                                text = { Text("הוסף קיצור דרך למסך הבית", color = PointerDark, fontWeight = FontWeight.SemiBold) },
                                onClick = {
                                    menuExpanded = false
                                    onRequestPinShortcut(context)
                                }
                            )
                            DropdownMenuItem(
                                leadingIcon = {
                                    Icon(Icons.Default.Info, contentDescription = null, tint = Color(0xFF0284C7), modifier = Modifier.size(20.dp))
                                },
                                text = { Text("מדריך והסברים על המערכת", color = PointerDark, fontWeight = FontWeight.SemiBold) },
                                onClick = {
                                    menuExpanded = false
                                    onOpenHelpGuide()
                                }
                            )
                            DropdownMenuItem(
                                leadingIcon = {
                                    Icon(Icons.Default.Language, contentDescription = null, tint = Color(0xFF0284C7), modifier = Modifier.size(20.dp))
                                },
                                text = { Text("לאתר הבית barak.rocks", color = Color(0xFF0284C7), fontWeight = FontWeight.SemiBold) },
                                onClick = {
                                    menuExpanded = false
                                    val browserIntent = Intent(Intent.ACTION_VIEW, Uri.parse("https://barak.rocks/"))
                                    context.startActivity(browserIntent)
                                }
                            )
                        }
                    }
                }
            )
        },
        containerColor = Color(0xFFF7F7F9)
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .verticalScroll(scrollState)
                .padding(horizontal = 20.dp, vertical = 16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.fillMaxWidth()
            ) {
                Spacer(modifier = Modifier.height(6.dp))

                // License Plate View
                IsraeliLicensePlate(vehicleNumber = state.vehicleNumber)

                if (state.driverName.isNotBlank()) {
                    Spacer(modifier = Modifier.height(6.dp))
                    Text(
                        text = "נהג: ${state.driverName}",
                        style = MaterialTheme.typography.bodyMedium,
                        color = Color.Gray
                    )
                }

                // Bluetooth Auto-Disarm Status Pill
                val hasBtPermission = com.example.pointercode.bluetooth.BluetoothHelper.hasBluetoothPermission(context)
                if (state.isBtAutoDisarmEnabled && !hasBtPermission) {
                    Spacer(modifier = Modifier.height(10.dp))
                    Surface(
                        shape = RoundedCornerShape(12.dp),
                        color = Color(0xFFFEF3C7),
                        border = BorderStroke(1.dp, Color(0xFFF59E0B)),
                        modifier = Modifier.clickable { onOpenSetup() }
                    ) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            modifier = Modifier.padding(horizontal = 12.dp, vertical = 8.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Default.Warning,
                                contentDescription = null,
                                tint = Color(0xFFD97706),
                                modifier = Modifier.size(18.dp)
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Column {
                                Text(
                                    text = "נדרשת הרשאת בלוטות' לזיהוי הרכב!",
                                    fontSize = 12.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = Color(0xFF92400E)
                                )
                                Text(
                                    text = "לחץ כאן להענקת ההרשאה בהגדרות",
                                    fontSize = 11.sp,
                                    color = Color(0xFFB45309)
                                )
                            }
                        }
                    }
                } else if (state.isBtAutoDisarmEnabled && state.btDeviceName.isNotBlank()) {
                    Spacer(modifier = Modifier.height(10.dp))
                    Surface(
                        shape = RoundedCornerShape(14.dp),
                        color = Color(0xFFE0F2FE),
                        border = BorderStroke(1.dp, Color(0xFFBAE6FD)),
                        modifier = Modifier.clickable { onOpenSetup() }
                    ) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            modifier = Modifier.padding(horizontal = 14.dp, vertical = 8.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Default.BluetoothConnected,
                                contentDescription = null,
                                tint = Color(0xFF0284C7),
                                modifier = Modifier.size(20.dp)
                            )
                            Spacer(modifier = Modifier.width(10.dp))
                            Column(modifier = Modifier.weight(1f)) {
                                Text(
                                    text = "ניטרול אוטומטי פעיל ברכב:",
                                    fontSize = 12.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = Color(0xFF0369A1)
                                )
                                Spacer(modifier = Modifier.height(2.dp))
                                CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Ltr) {
                                    Text(
                                        text = state.btDeviceName,
                                        fontSize = 13.sp,
                                        fontWeight = FontWeight.ExtraBold,
                                        color = Color(0xFF0284C7),
                                        textAlign = TextAlign.Left,
                                        modifier = Modifier.fillMaxWidth()
                                    )
                                }
                            }
                        }
                    }
                } else {
                    Spacer(modifier = Modifier.height(8.dp))
                    Surface(
                        shape = RoundedCornerShape(12.dp),
                        color = Color(0xFFF1F5F9),
                        modifier = Modifier.clickable { onOpenSetup() }
                    ) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            modifier = Modifier.padding(horizontal = 10.dp, vertical = 5.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Default.Bluetooth,
                                contentDescription = null,
                                tint = Color(0xFF64748B),
                                modifier = Modifier.size(14.dp)
                            )
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(
                                text = "הגדר ניטרול אוטומטי בעת כניסה לרכב (BT) ↗",
                                fontSize = 11.sp,
                                color = Color(0xFF475569)
                            )
                        }
                    }
                }
            }

            // Central Status Card
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 16.dp)
                    .then(
                        if (state.disarmStatus is DisarmStatus.Success && state.disarmStatus.countdown > 0) {
                            Modifier.clickable(onClick = onToggleCountdownPause)
                        } else Modifier
                    ),
                shape = RoundedCornerShape(24.dp),
                colors = CardDefaults.cardColors(containerColor = Color.White),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(24.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    when (val status = state.disarmStatus) {
                        is DisarmStatus.Loading -> {
                            CircularProgressIndicator(
                                modifier = Modifier.size(64.dp),
                                color = PointerRed,
                                strokeWidth = 5.dp
                            )
                            Spacer(modifier = Modifier.height(20.dp))
                            Text(
                                text = "מנטרל קודן רכב...",
                                fontSize = 20.sp,
                                fontWeight = FontWeight.Bold,
                                color = PointerDark
                            )
                            Spacer(modifier = Modifier.height(6.dp))
                            Text(
                                text = "שולח קוד לשרת פוינטר ומבצע ניטרול",
                                fontSize = 14.sp,
                                color = Color.Gray,
                                textAlign = TextAlign.Center
                            )
                        }

                        is DisarmStatus.Success -> {
                            val scale by animateFloatAsState(
                                targetValue = 1f,
                                animationSpec = tween(durationMillis = 400, easing = FastOutSlowInEasing),
                                label = "scale"
                            )
                            Icon(
                                imageVector = Icons.Default.CheckCircle,
                                contentDescription = "הצלחה",
                                tint = SuccessGreen,
                                modifier = Modifier
                                    .size(72.dp)
                                    .scale(scale)
                            )
                            Spacer(modifier = Modifier.height(16.dp))
                            Text(
                                text = "נסיעה טובה!",
                                fontSize = 24.sp,
                                fontWeight = FontWeight.ExtraBold,
                                color = SuccessGreen
                            )
                            Spacer(modifier = Modifier.height(6.dp))
                            Text(
                                text = status.message,
                                fontSize = 16.sp,
                                color = PointerDark,
                                textAlign = TextAlign.Center
                            )

                            Spacer(modifier = Modifier.height(16.dp))
                            if (status.countdown > 0) {
                                Surface(
                                    color = if (status.isPaused) Color(0xFFFFF3E0) else Color(0xFFE8F5E9),
                                    shape = RoundedCornerShape(14.dp),
                                    border = BorderStroke(
                                        1.dp,
                                        if (status.isPaused) Color(0xFFFFB74D) else Color(0xFFA5D6A7)
                                    ),
                                    onClick = onToggleCountdownPause,
                                    modifier = Modifier.padding(horizontal = 8.dp)
                                ) {
                                    Row(
                                        verticalAlignment = Alignment.CenterVertically,
                                        horizontalArrangement = Arrangement.Center,
                                        modifier = Modifier.padding(horizontal = 14.dp, vertical = 8.dp)
                                    ) {
                                        Icon(
                                            imageVector = if (status.isPaused) Icons.Default.PlayArrow else Icons.Default.Pause,
                                            contentDescription = if (status.isPaused) "המשך ספירה" else "השהה ספירה",
                                            tint = if (status.isPaused) Color(0xFFE65100) else SuccessGreen,
                                            modifier = Modifier.size(16.dp)
                                        )
                                        Spacer(modifier = Modifier.width(6.dp))
                                        Text(
                                            text = if (status.isPaused) {
                                                "הספירה נעצרה (${status.countdown} שניות) • גע להמשך"
                                            } else {
                                                "החלון ייסגר בעוד ${status.countdown} שניות • גע לעצירה"
                                            },
                                            fontSize = 13.sp,
                                            color = if (status.isPaused) Color(0xFFE65100) else SuccessGreen,
                                            fontWeight = FontWeight.SemiBold
                                        )
                                    }
                                }
                            }
                        }

                        is DisarmStatus.Error -> {
                            Icon(
                                imageVector = Icons.Default.Warning,
                                contentDescription = "שגיאה",
                                tint = PointerRed,
                                modifier = Modifier.size(68.dp)
                            )
                            Spacer(modifier = Modifier.height(16.dp))
                            Text(
                                text = "ניטרול הקודן נכשל",
                                fontSize = 20.sp,
                                fontWeight = FontWeight.Bold,
                                color = PointerRed
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                text = status.message,
                                fontSize = 15.sp,
                                color = PointerDark,
                                textAlign = TextAlign.Center
                            )
                        }

                        is DisarmStatus.Idle -> {
                            if (state.recentlyDisarmedNotice != null) {
                                Icon(
                                    imageVector = Icons.Default.CheckCircle,
                                    contentDescription = "הרכב נוטרל לאחרונה",
                                    tint = SuccessGreen,
                                    modifier = Modifier.size(68.dp)
                                )
                                Spacer(modifier = Modifier.height(14.dp))
                                Text(
                                    text = "קודן נוטרל לאחרונה",
                                    fontSize = 21.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = SuccessGreen
                                )
                                Spacer(modifier = Modifier.height(6.dp))
                                Text(
                                    text = state.recentlyDisarmedNotice,
                                    fontSize = 14.sp,
                                    color = PointerDark,
                                    textAlign = TextAlign.Center,
                                    fontWeight = FontWeight.Medium
                                )
                                Spacer(modifier = Modifier.height(10.dp))
                                Surface(
                                    color = Color(0xFFF0FDF4),
                                    shape = RoundedCornerShape(8.dp)
                                ) {
                                    Text(
                                        text = "השליחה האוטומטית דולגה כדי לא לשלוח שוב תוך 15 דקות",
                                        fontSize = 12.sp,
                                        color = SuccessGreen,
                                        fontWeight = FontWeight.Medium,
                                        modifier = Modifier.padding(horizontal = 10.dp, vertical = 4.dp)
                                    )
                                }
                            } else {
                                Icon(
                                    imageVector = Icons.Default.Lock,
                                    contentDescription = "מוכן לניטרול",
                                    tint = PointerRed,
                                    modifier = Modifier.size(64.dp)
                                )
                                Spacer(modifier = Modifier.height(16.dp))
                                Text(
                                    text = "קודן מוכן לניטרול",
                                    fontSize = 20.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = PointerDark
                                )
                            }
                        }
                    }
                }
            }

            // Main Disarm Button Area (Immediately below status!)
            Column(
                modifier = Modifier.fillMaxWidth(),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                when (state.disarmStatus) {
                    is DisarmStatus.Success -> {
                        // Handled by countdown tap
                    }

                    is DisarmStatus.Error -> {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(10.dp)
                        ) {
                            Button(
                                onClick = onDisarmNow,
                                modifier = Modifier.weight(1f).height(50.dp),
                                colors = ButtonDefaults.buttonColors(
                                    containerColor = PointerRed,
                                    contentColor = Color.White
                                ),
                                shape = RoundedCornerShape(14.dp)
                            ) {
                                Icon(Icons.Default.Refresh, contentDescription = null, tint = Color.White)
                                Spacer(modifier = Modifier.width(6.dp))
                                Text("נסה שוב", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White)
                            }
                            OutlinedButton(
                                onClick = onOpenSetup,
                                modifier = Modifier.weight(1f).height(50.dp),
                                shape = RoundedCornerShape(14.dp)
                            ) {
                                Icon(Icons.Default.Settings, contentDescription = null)
                                Spacer(modifier = Modifier.width(6.dp))
                                Text("שנה הגדרות", fontSize = 15.sp)
                            }
                        }
                        Spacer(modifier = Modifier.height(8.dp))
                        TextButton(
                            onClick = {
                                val browserIntent = Intent(
                                    Intent.ACTION_VIEW,
                                    Uri.parse("https://fleet.pointer4u.co.il/code/")
                                )
                                context.startActivity(browserIntent)
                            }
                        ) {
                            Text("פתח באתר פוינטר בדפדפן ↗", color = Color(0xFF64748B), fontSize = 13.sp)
                        }
                    }

                    else -> {
                        val buttonText = if (state.recentlyDisarmedNotice != null) "נטרל קודן שוב" else "נטרל קודן עכשיו"
                        Button(
                            onClick = onDisarmNow,
                            modifier = Modifier.fillMaxWidth().height(52.dp),
                            colors = ButtonDefaults.buttonColors(
                                containerColor = PointerRed,
                                contentColor = Color.White
                            ),
                            shape = RoundedCornerShape(14.dp),
                            enabled = state.disarmStatus !is DisarmStatus.Loading
                        ) {
                            Icon(Icons.Default.Lock, contentDescription = null, tint = Color.White)
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(buttonText, fontSize = 17.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Collapsible History Card (Moved to bottom!)
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(18.dp),
                colors = CardDefaults.cardColors(containerColor = Color.White),
                elevation = CardDefaults.cardElevation(defaultElevation = 1.5.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    // Header Title Row
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            imageVector = Icons.Default.History,
                            contentDescription = null,
                            tint = Color(0xFF0284C7),
                            modifier = Modifier.size(20.dp)
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = "היסטוריית שליחות אחרונות",
                            fontSize = 15.sp,
                            fontWeight = FontWeight.Bold,
                            color = PointerDark
                        )
                        if (state.disarmHistory.isNotEmpty()) {
                            Spacer(modifier = Modifier.width(8.dp))
                            Surface(
                                color = Color(0xFFF1F5F9),
                                shape = RoundedCornerShape(8.dp)
                            ) {
                                Text(
                                    text = "${state.disarmHistory.size}",
                                    fontSize = 11.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = Color(0xFF475569),
                                    modifier = Modifier.padding(horizontal = 7.dp, vertical = 2.dp)
                                )
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(10.dp))

                    // Toggle Button Placed UNDER the Text
                    OutlinedButton(
                        onClick = { isHistoryExpanded = !isHistoryExpanded },
                        modifier = Modifier.fillMaxWidth().height(40.dp),
                        shape = RoundedCornerShape(10.dp),
                        border = BorderStroke(1.dp, Color(0xFF0284C7)),
                        colors = ButtonDefaults.outlinedButtonColors(
                            containerColor = if (isHistoryExpanded) Color(0xFFF1F5F9) else Color(0xFFF0F9FF)
                        )
                    ) {
                        Text(
                            text = if (isHistoryExpanded) "הסתר היסטוריית שליחות ▲" else "הצג היסטוריית שליחות (${state.disarmHistory.size}) ▼",
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Bold,
                            color = Color(0xFF0284C7)
                        )
                    }

                    AnimatedVisibility(visible = isHistoryExpanded) {
                        Column(modifier = Modifier.padding(top = 12.dp)) {
                            if (state.disarmHistory.isEmpty()) {
                                Surface(
                                    color = Color(0xFFF8FAFC),
                                    shape = RoundedCornerShape(10.dp),
                                    modifier = Modifier.fillMaxWidth()
                                ) {
                                    Text(
                                        text = "טרם נרשמו שליחות קוד מהמכשיר.",
                                        fontSize = 13.sp,
                                        color = Color.Gray,
                                        modifier = Modifier.padding(12.dp)
                                    )
                                }
                            } else {
                                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                                    state.disarmHistory.take(5).forEachIndexed { index, entry ->
                                        val isLatest = index == 0
                                        Surface(
                                            shape = RoundedCornerShape(12.dp),
                                            color = if (isLatest) Color(0xFFF0FDF4) else Color(0xFFF8FAFC),
                                            border = BorderStroke(
                                                1.dp,
                                                if (isLatest) Color(0xFF86EFAC) else Color(0xFFE2E8F0)
                                            ),
                                            modifier = Modifier.fillMaxWidth()
                                        ) {
                                            Row(
                                                modifier = Modifier
                                                    .fillMaxWidth()
                                                    .padding(horizontal = 12.dp, vertical = 10.dp),
                                                verticalAlignment = Alignment.CenterVertically
                                            ) {
                                                Icon(
                                                    imageVector = if (entry.success) Icons.Default.CheckCircle else Icons.Default.Warning,
                                                    contentDescription = null,
                                                    tint = if (entry.success) SuccessGreen else PointerRed,
                                                    modifier = Modifier.size(20.dp)
                                                )
                                                Spacer(modifier = Modifier.width(10.dp))
                                                Column(modifier = Modifier.weight(1f)) {
                                                    Row(
                                                        modifier = Modifier.fillMaxWidth(),
                                                        horizontalArrangement = Arrangement.SpaceBetween,
                                                        verticalAlignment = Alignment.CenterVertically
                                                    ) {
                                                        Text(
                                                            text = formatHistoryTimestamp(entry.timestamp),
                                                            fontSize = 13.sp,
                                                            fontWeight = FontWeight.Bold,
                                                            fontFamily = FontFamily.Monospace,
                                                            color = PointerDark
                                                        )
                                                        Text(
                                                            text = formatRelativeTime(entry.timestamp),
                                                            fontSize = 11.sp,
                                                            color = if (isLatest) SuccessGreen else Color.Gray,
                                                            fontWeight = if (isLatest) FontWeight.Bold else FontWeight.Normal
                                                        )
                                                    }
                                                    Spacer(modifier = Modifier.height(2.dp))
                                                    Row(
                                                        modifier = Modifier.fillMaxWidth(),
                                                        horizontalArrangement = Arrangement.SpaceBetween,
                                                        verticalAlignment = Alignment.CenterVertically
                                                    ) {
                                                        Text(
                                                            text = entry.source,
                                                            fontSize = 12.sp,
                                                            color = if (entry.source.contains("בלוטות'")) Color(0xFF0284C7) else Color(0xFF475569),
                                                            fontWeight = FontWeight.Medium
                                                        )
                                                        Text(
                                                            text = entry.message,
                                                            fontSize = 12.sp,
                                                            color = if (entry.success) SuccessGreen else PointerRed,
                                                            maxLines = 1
                                                        )
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(18.dp))

            // 4S Brand Footer Card - Sleek & Compact
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .clickable {
                        val browserIntent = Intent(
                            Intent.ACTION_VIEW,
                            Uri.parse("https://barak.rocks/")
                        )
                        context.startActivity(browserIntent)
                    },
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF0F172A)),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 14.dp, vertical = 10.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier.weight(1f)
                    ) {
                        Image(
                            painter = painterResource(id = R.drawable.ic_tarsier),
                            contentDescription = "4S Monkey Logo",
                            modifier = Modifier
                                .size(36.dp)
                                .clip(CircleShape)
                        )
                        Spacer(modifier = Modifier.width(10.dp))
                        Column {
                            Text(
                                text = "4S • Smart Solutions for Silly Situations",
                                fontSize = 12.sp,
                                fontWeight = FontWeight.Bold,
                                color = Color(0xFF38BDF8)
                            )
                            Text(
                                text = "דוד (דידי) ברק • גרסה $APP_VERSION",
                                fontSize = 10.sp,
                                color = Color(0xFF94A3B8)
                            )
                        }
                    }

                    Button(
                        onClick = {
                            val browserIntent = Intent(
                                Intent.ACTION_VIEW,
                                Uri.parse("https://barak.rocks/")
                            )
                            context.startActivity(browserIntent)
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0284C7)),
                        shape = RoundedCornerShape(10.dp),
                        contentPadding = PaddingValues(horizontal = 10.dp, vertical = 4.dp)
                    ) {
                        Text(
                            text = "barak.rocks ↗",
                            color = Color.White,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SetupScreen(
    state: PointerUiState,
    onVehicleNumberChanged: (String) -> Unit,
    onCodeChanged: (String) -> Unit,
    onDriverNameChanged: (String) -> Unit,
    onToggleBtAutoDisarm: (Boolean) -> Unit,
    onOpenBtDevicePicker: () -> Unit,
    onClearBtDevice: () -> Unit,
    onSimulateBtTrigger: () -> Unit,
    onSave: () -> Unit,
    onCancel: () -> Unit,
    onOpenLogs: () -> Unit,
    onCopyLogs: () -> Unit,
    onOpenHelpGuide: () -> Unit
) {
    val context = LocalContext.current
    val scrollState = rememberScrollState()

    val btPermissionLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { isGranted ->
        if (isGranted) {
            onOpenBtDevicePicker()
        } else {
            Toast.makeText(context, "נדרשת הרשאת בלוטות' כדי לאתר את מכשירי הרכב", Toast.LENGTH_SHORT).show()
        }
    }

    val notifPermissionLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { _ -> }

    fun requestPermissionsAndPickDevice() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (ContextCompat.checkSelfPermission(context, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                notifPermissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS)
            }
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            if (ContextCompat.checkSelfPermission(context, Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
                btPermissionLauncher.launch(Manifest.permission.BLUETOOTH_CONNECT)
                return
            }
        }
        onOpenBtDevicePicker()
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier.clickable {
                            val browserIntent = Intent(Intent.ACTION_VIEW, Uri.parse("https://barak.rocks/"))
                            context.startActivity(browserIntent)
                        }
                    ) {
                        Image(
                            painter = painterResource(id = R.drawable.ic_tarsier),
                            contentDescription = "4S Monkey Logo",
                            modifier = Modifier
                                .size(36.dp)
                                .clip(CircleShape)
                        )
                        Spacer(modifier = Modifier.width(10.dp))
                        Column {
                            Text(
                                text = "הגדרת קודן פוינטר",
                                fontWeight = FontWeight.ExtraBold,
                                color = Color.White,
                                fontSize = 18.sp
                            )
                            Text(
                                text = "4S • Smart Solutions for Silly Situations",
                                color = Color(0xFF38BDF8),
                                fontSize = 10.5.sp,
                                fontWeight = FontWeight.Medium,
                                maxLines = 1,
                                softWrap = false
                            )
                        }
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = PointerDark
                ),
                navigationIcon = {
                    if (state.isConfigured) {
                        IconButton(onClick = onCancel) {
                            Icon(Icons.Default.Close, contentDescription = "חזור", tint = Color.White)
                        }
                    }
                },
                actions = {
                    IconButton(onClick = onOpenHelpGuide) {
                        Icon(
                            imageVector = Icons.Default.Info,
                            contentDescription = "מדריך והסברים",
                            tint = Color(0xFF38BDF8)
                        )
                    }
                }
            )
        },
        containerColor = Color(0xFFF7F7F9)
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .verticalScroll(scrollState)
                .padding(horizontal = 20.dp, vertical = 16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // Card 1: Vehicle & Code Inputs
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(containerColor = Color.White),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
            ) {
                Column(
                    modifier = Modifier.padding(20.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "פרטי רכב וקוד",
                        fontSize = 18.sp,
                        fontWeight = FontWeight.Bold,
                        color = PointerDark,
                        modifier = Modifier.fillMaxWidth()
                    )

                    Spacer(modifier = Modifier.height(14.dp))

                    // Vehicle Number Field
                    OutlinedTextField(
                        value = state.setupVehicleNumber,
                        onValueChange = onVehicleNumberChanged,
                        label = { Text("מספר רכב (ספרות בלבד)") },
                        placeholder = { Text("לדוגמה: 12345678") },
                        singleLine = true,
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp),
                        colors = pointerTextFieldColors()
                    )

                    Spacer(modifier = Modifier.height(14.dp))

                    // 4-Digit Code Field
                    OutlinedTextField(
                        value = state.setupCode,
                        onValueChange = onCodeChanged,
                        label = { Text("קוד רכב (4 ספרות: 1 עד 5)") },
                        placeholder = { Text("לדוגמה: 1324") },
                        singleLine = true,
                        visualTransformation = PasswordVisualTransformation(),
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp),
                        colors = pointerTextFieldColors()
                    )

                    // Helper indicator for 1-5 keys
                    Spacer(modifier = Modifier.height(8.dp))
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = "ספרות 1 עד 5 בלבד",
                            fontSize = 12.sp,
                            color = Color(0xFF64748B)
                        )
                        Surface(
                            color = if (state.setupCode.length == 4) Color(0xFFDCFCE7) else Color(0xFFFEE2E2),
                            shape = RoundedCornerShape(6.dp)
                        ) {
                            Text(
                                text = "${state.setupCode.length}/4 ספרות",
                                fontSize = 11.5.sp,
                                fontWeight = FontWeight.Bold,
                                color = if (state.setupCode.length == 4) SuccessGreen else PointerRed,
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp),
                                maxLines = 1,
                                softWrap = false
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(14.dp))

                    // Driver Name (Optional)
                    OutlinedTextField(
                        value = state.setupDriverName,
                        onValueChange = onDriverNameChanged,
                        label = { Text("שם לקוח / נהג (אופציונלי)") },
                        placeholder = { Text("לדוגמה: דוד") },
                        singleLine = true,
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp),
                        colors = pointerTextFieldColors()
                    )

                    AnimatedVisibility(visible = state.setupErrorMessage != null) {
                        Column {
                            Spacer(modifier = Modifier.height(12.dp))
                            Surface(
                                color = Color(0xFFFFEBEE),
                                shape = RoundedCornerShape(8.dp),
                                modifier = Modifier.fillMaxWidth()
                            ) {
                                Row(
                                    modifier = Modifier.padding(10.dp),
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Icon(
                                        Icons.Default.Warning,
                                        contentDescription = null,
                                        tint = PointerRed,
                                        modifier = Modifier.size(18.dp)
                                    )
                                    Spacer(modifier = Modifier.width(8.dp))
                                    Text(
                                        text = state.setupErrorMessage ?: "",
                                        color = PointerRed,
                                        fontSize = 13.sp
                                    )
                                }
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(20.dp))

                    Button(
                        onClick = onSave,
                        modifier = Modifier.fillMaxWidth().height(50.dp),
                        colors = ButtonDefaults.buttonColors(
                            containerColor = PointerRed,
                            contentColor = Color.White
                        ),
                        shape = RoundedCornerShape(14.dp),
                        enabled = state.setupVehicleNumber.length >= 6 && state.setupCode.length == 4
                    ) {
                        Text(
                            text = "שמור והפעל כעת",
                            fontSize = 16.sp,
                            fontWeight = FontWeight.Bold,
                            color = Color.White
                        )
                    }

                    if (state.isConfigured) {
                        Spacer(modifier = Modifier.height(10.dp))
                        OutlinedButton(
                            onClick = onCancel,
                            modifier = Modifier.fillMaxWidth().height(48.dp),
                            shape = RoundedCornerShape(14.dp)
                        ) {
                            Text("חזור למסך ניטרול", fontSize = 15.sp)
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Card 2: Bluetooth Auto-Disarm Card (Clean & uncluttered)
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(containerColor = Color.White),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
            ) {
                Column(
                    modifier = Modifier.padding(20.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            modifier = Modifier.weight(1f)
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(42.dp)
                                    .background(Color(0xFFE0F2FE), CircleShape),
                                contentAlignment = Alignment.Center
                            ) {
                                Icon(
                                    imageVector = Icons.Default.DirectionsCar,
                                    contentDescription = null,
                                    tint = Color(0xFF0284C7),
                                    modifier = Modifier.size(24.dp)
                                )
                            }
                            Spacer(modifier = Modifier.width(12.dp))
                            Column {
                                Text(
                                    text = "ניטרול אוטומטי ברכב (Bluetooth)",
                                    fontSize = 16.sp,
                                    fontWeight = FontWeight.Bold,
                                    color = PointerDark
                                )
                                Text(
                                    text = "שליחת קוד אוטומטית בעת התחברות לרכב",
                                    fontSize = 12.sp,
                                    color = Color.Gray
                                )
                            }
                        }

                        Switch(
                            checked = state.isBtAutoDisarmEnabled,
                            onCheckedChange = { enabled ->
                                if (enabled && state.btDeviceAddress.isBlank()) {
                                    requestPermissionsAndPickDevice()
                                } else {
                                    onToggleBtAutoDisarm(enabled)
                                }
                            },
                            colors = SwitchDefaults.colors(
                                checkedThumbColor = Color.White,
                                checkedTrackColor = Color(0xFF0284C7)
                            )
                        )
                    }

                    Spacer(modifier = Modifier.height(14.dp))

                    if (state.btDeviceName.isNotBlank()) {
                        Surface(
                            shape = RoundedCornerShape(14.dp),
                            color = Color(0xFFF8FAFC),
                            border = BorderStroke(1.dp, Color(0xFFE2E8F0)),
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Column(modifier = Modifier.padding(14.dp)) {
                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.SpaceBetween,
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Row(
                                        verticalAlignment = Alignment.CenterVertically,
                                        modifier = Modifier.weight(1f)
                                    ) {
                                        Icon(
                                            imageVector = Icons.Default.BluetoothConnected,
                                            contentDescription = null,
                                            tint = Color(0xFF0284C7),
                                            modifier = Modifier.size(22.dp)
                                        )
                                        Spacer(modifier = Modifier.width(10.dp))
                                        Column {
                                            Text(
                                                text = state.btDeviceName,
                                                fontSize = 15.sp,
                                                fontWeight = FontWeight.Bold,
                                                color = PointerDark
                                            )
                                            if (state.btDeviceAddress.isNotBlank()) {
                                                Text(
                                                    text = state.btDeviceAddress,
                                                    fontSize = 11.sp,
                                                    color = Color.Gray
                                                )
                                            }
                                        }
                                    }

                                    Row {
                                        TextButton(onClick = { requestPermissionsAndPickDevice() }) {
                                            Text("החלף", fontSize = 13.sp)
                                        }
                                        IconButton(onClick = onClearBtDevice) {
                                            Icon(
                                                imageVector = Icons.Default.Delete,
                                                contentDescription = "הסר מכשיר",
                                                tint = PointerRed,
                                                modifier = Modifier.size(20.dp)
                                            )
                                        }
                                    }
                                }

                                Spacer(modifier = Modifier.height(10.dp))

                                OutlinedButton(
                                    onClick = onSimulateBtTrigger,
                                    modifier = Modifier.fillMaxWidth().height(42.dp),
                                    shape = RoundedCornerShape(10.dp)
                                ) {
                                    Icon(
                                        imageVector = Icons.Default.PlayArrow,
                                        contentDescription = null,
                                        modifier = Modifier.size(18.dp)
                                    )
                                    Spacer(modifier = Modifier.width(6.dp))
                                    Text("בדוק ניטרול ברקע כעת (סימולציה)", fontSize = 13.sp)
                                }
                            }
                        }
                    } else {
                        OutlinedButton(
                            onClick = { requestPermissionsAndPickDevice() },
                            modifier = Modifier.fillMaxWidth().height(46.dp),
                            shape = RoundedCornerShape(12.dp)
                        ) {
                            Icon(
                                imageVector = Icons.Default.Bluetooth,
                                contentDescription = null,
                                modifier = Modifier.size(20.dp)
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text("בחר מכשיר בלוטות' של הרכב", fontSize = 14.sp)
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Card 3: Diagnostics Log Card
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(containerColor = Color.White),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
            ) {
                Column(
                    modifier = Modifier.padding(18.dp)
                ) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Box(
                            modifier = Modifier
                                .size(40.dp)
                                .background(Color(0xFFFEF3C7), CircleShape),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                imageVector = Icons.Default.History,
                                contentDescription = null,
                                tint = Color(0xFFD97706),
                                modifier = Modifier.size(22.dp)
                            )
                        }
                        Spacer(modifier = Modifier.width(12.dp))
                        Column {
                            Text(
                                text = "יומן פעולות ואבחון (Log)",
                                fontSize = 15.sp,
                                fontWeight = FontWeight.Bold,
                                color = PointerDark
                            )
                            Text(
                                text = "מעקב אחר זיהוי בלוטות' ושליחת קוד במכשיר",
                                fontSize = 11.5.sp,
                                color = Color.Gray
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        Button(
                            onClick = onCopyLogs,
                            modifier = Modifier.weight(1f).height(44.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0284C7)),
                            shape = RoundedCornerShape(12.dp)
                        ) {
                            Text("העתק יומן ללוח 📋", fontSize = 13.sp, fontWeight = FontWeight.Bold, color = Color.White)
                        }
                        OutlinedButton(
                            onClick = onOpenLogs,
                            modifier = Modifier.weight(1f).height(44.dp),
                            shape = RoundedCornerShape(12.dp)
                        ) {
                            Text("צפה ביומן מלא", fontSize = 13.sp)
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Help & Guide Button (Replaces wall of text!)
            OutlinedButton(
                onClick = onOpenHelpGuide,
                modifier = Modifier.fillMaxWidth().height(48.dp),
                shape = RoundedCornerShape(12.dp),
                border = BorderStroke(1.dp, Color(0xFF0284C7))
            ) {
                Icon(
                    imageVector = Icons.Default.Info,
                    contentDescription = null,
                    tint = Color(0xFF0284C7),
                    modifier = Modifier.size(20.dp)
                )
                Spacer(modifier = Modifier.width(8.dp))
                Text(
                    text = "מדריך והסברים על המערכת ℹ️",
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color(0xFF0284C7)
                )
            }

            Spacer(modifier = Modifier.height(16.dp))

            // 4S Brand Footer Card
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .clickable {
                        val browserIntent = Intent(
                            Intent.ACTION_VIEW,
                            Uri.parse("https://barak.rocks/")
                        )
                        context.startActivity(browserIntent)
                    },
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF0F172A)),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 14.dp, vertical = 10.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier.weight(1f)
                    ) {
                        Image(
                            painter = painterResource(id = R.drawable.ic_tarsier),
                            contentDescription = "4S Monkey Logo",
                            modifier = Modifier
                                .size(36.dp)
                                .clip(CircleShape)
                        )
                        Spacer(modifier = Modifier.width(10.dp))
                        Column {
                            Text(
                                text = "4S • Smart Solutions for Silly Situations",
                                fontSize = 12.sp,
                                fontWeight = FontWeight.Bold,
                                color = Color(0xFF38BDF8)
                            )
                            Text(
                                text = "דוד (דידי) ברק • גרסה $APP_VERSION",
                                fontSize = 10.sp,
                                color = Color(0xFF94A3B8)
                            )
                        }
                    }

                    Button(
                        onClick = {
                            val browserIntent = Intent(
                                Intent.ACTION_VIEW,
                                Uri.parse("https://barak.rocks/")
                            )
                            context.startActivity(browserIntent)
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0284C7)),
                        shape = RoundedCornerShape(10.dp),
                        contentPadding = PaddingValues(horizontal = 10.dp, vertical = 4.dp)
                    ) {
                        Text(
                            text = "barak.rocks ↗",
                            color = Color.White,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun HelpGuideDialog(
    onDismiss: () -> Unit
) {
    val scrollState = rememberScrollState()

    AlertDialog(
        onDismissRequest = onDismiss,
        title = {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        imageVector = Icons.Default.Info,
                        contentDescription = null,
                        tint = Color(0xFF0284C7),
                        modifier = Modifier.size(24.dp)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = "מדריך והסברים על המערכת",
                        fontSize = 17.sp,
                        fontWeight = FontWeight.Bold,
                        color = PointerDark
                    )
                }
                IconButton(onClick = onDismiss) {
                    Icon(Icons.Default.Close, contentDescription = "סגור", modifier = Modifier.size(20.dp))
                }
            }
        },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(scrollState)
            ) {
                GuideSectionItem(
                    icon = "🚗",
                    title = "זיהוי וניטרול אוטומטי (Bluetooth)",
                    body = "כאשר אתה נכנס לרכב והטלפון מתחבר לדיבורית או למערכת המולטימדיה, האפליקציה שולחת את הקוד ישירות לפוינטר ברקע. בסיום נשמע צליל אישור ומתקבלת התראה שהקודן נוטרל."
                )

                Spacer(modifier = Modifier.height(14.dp))

                GuideSectionItem(
                    icon = "📱",
                    title = "הפעלה ידנית וקיצור דרך",
                    body = "לחיצה על כפתור 'נטרל קודן עכשיו' באפליקציה או לחיצה על קיצור הדרך במסך הבית שולחת את הקוד באופן מיידי ללא עיכוב."
                )

                Spacer(modifier = Modifier.height(14.dp))

                GuideSectionItem(
                    icon = "🛡️",
                    title = "חוקי מניעת כפילויות",
                    body = "• ניטרול יחיד בנסיעה: כל זמן שחיבור הבלוטות' לרכב פעיל, הקוד יישלח פעם אחת בלבד.\n• השהיית 15 דקות: בפתיחת האפליקציה, הקוד לא יישלח שוב אם כבר נשלח בהצלחה ברבע השעה האחרונה."
                )

                Spacer(modifier = Modifier.height(14.dp))

                GuideSectionItem(
                    icon = "🚙",
                    title = "תמיכה ב-Android Auto",
                    body = "האפליקציה מציגה התראות חיות על גבי מסך הרכב ב-Android Auto. אם קיימת בעיית קליטה בכניסה לרכב, מופיעה התראה עם כפתור לניסיון חוזר ישירות ממסך הרכב."
                )

                Spacer(modifier = Modifier.height(14.dp))

                GuideSectionItem(
                    icon = "🔒",
                    title = "פרטיות ואבטחה מלאה",
                    body = "מספר הרכב והקוד מוצפנים ונשמרים אך ורק במכשיר שלך. הם אינם נשלחים לאף שרת למעט שרתי פוינטר לצורך פתיחת הרכב."
                )
            }
        },
        confirmButton = {
            Button(
                onClick = onDismiss,
                colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0284C7)),
                shape = RoundedCornerShape(10.dp)
            ) {
                Text("הבנתי, תודה", color = Color.White, fontWeight = FontWeight.Bold, fontSize = 13.sp)
            }
        }
    )
}

@Composable
fun GuideSectionItem(
    icon: String,
    title: String,
    body: String
) {
    Surface(
        shape = RoundedCornerShape(12.dp),
        color = Color(0xFFF8FAFC),
        border = BorderStroke(1.dp, Color(0xFFE2E8F0)),
        modifier = Modifier.fillMaxWidth()
    ) {
        Column(modifier = Modifier.padding(12.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(text = icon, fontSize = 18.sp)
                Spacer(modifier = Modifier.width(8.dp))
                Text(
                    text = title,
                    fontWeight = FontWeight.Bold,
                    fontSize = 14.sp,
                    color = PointerDark
                )
            }
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = body,
                fontSize = 12.5.sp,
                color = Color(0xFF334155),
                lineHeight = 17.sp
            )
        }
    }
}

@Composable
fun IsraeliLicensePlate(vehicleNumber: String) {
    val formatted = formatLicensePlate(vehicleNumber)

    Box(
        modifier = Modifier
            .background(PlateYellow, RoundedCornerShape(10.dp))
            .border(2.5.dp, Color.Black, RoundedCornerShape(10.dp))
            .padding(horizontal = 4.dp, vertical = 4.dp)
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp)
        ) {
            // Blue IL strip on Israeli plates
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(4.dp))
                    .background(Color(0xFF0038A8))
                    .padding(horizontal = 4.dp, vertical = 2.dp)
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(text = "IL", color = Color.White, fontSize = 9.sp, fontWeight = FontWeight.Bold)
                    Text(text = "ישראל", color = Color.White, fontSize = 7.sp)
                }
            }

            Spacer(modifier = Modifier.width(14.dp))

            Text(
                text = formatted,
                fontSize = 24.sp,
                fontWeight = FontWeight.Black,
                fontFamily = FontFamily.Monospace,
                color = Color.Black,
                letterSpacing = 2.sp
            )
        }
    }
}

fun formatLicensePlate(raw: String): String {
    val digits = raw.filter { it.isDigit() }
    return when (digits.length) {
        7 -> "${digits.substring(0, 2)}-${digits.substring(2, 5)}-${digits.substring(5, 7)}"
        8 -> "${digits.substring(0, 3)}-${digits.substring(3, 5)}-${digits.substring(5, 8)}"
        else -> if (digits.isBlank()) "000-00-000" else digits
    }
}

@Composable
fun BluetoothDevicePickerDialog(
    devices: List<BluetoothDeviceInfo>,
    onSelectDevice: (BluetoothDeviceInfo) -> Unit,
    onDismiss: () -> Unit,
    onRefresh: () -> Unit
) {
    AlertDialog(
        onDismissRequest = onDismiss,
        title = {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(
                    imageVector = Icons.Default.DirectionsCar,
                    contentDescription = null,
                    tint = PointerRed,
                    modifier = Modifier.size(24.dp)
                )
                Spacer(modifier = Modifier.width(8.dp))
                Text(
                    text = "בחר את מכשיר הרכב (Bluetooth)",
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold
                )
            }
        },
        text = {
            Column(modifier = Modifier.fillMaxWidth()) {
                Text(
                    text = "בחר את דיבורית הרכב או מערכת המולטימדיה. כשתתחבר אליה, הקודן ינוטרל אוטומטית.",
                    fontSize = 13.sp,
                    color = Color.Gray
                )
                Spacer(modifier = Modifier.height(14.dp))

                if (devices.isEmpty()) {
                    Surface(
                        color = Color(0xFFF1F5F9),
                        shape = RoundedCornerShape(12.dp),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Column(
                            modifier = Modifier.padding(16.dp),
                            horizontalAlignment = Alignment.CenterHorizontally
                        ) {
                            Icon(
                                imageVector = Icons.Default.Bluetooth,
                                contentDescription = null,
                                tint = Color.Gray,
                                modifier = Modifier.size(36.dp)
                            )
                            Spacer(modifier = Modifier.height(8.dp))
                            Text(
                                text = "לא נמצאו מכשירי בלוטות' מצומדים",
                                fontWeight = FontWeight.Bold,
                                fontSize = 14.sp,
                                color = PointerDark
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = "ודא שהבלוטות' פועל ושהרכב מצומד בהגדרות הטלפון.",
                                fontSize = 12.sp,
                                color = Color.Gray,
                                textAlign = TextAlign.Center
                            )
                            Spacer(modifier = Modifier.height(10.dp))
                            OutlinedButton(onClick = onRefresh) {
                                Icon(Icons.Default.Refresh, contentDescription = null, modifier = Modifier.size(16.dp))
                                Spacer(modifier = Modifier.width(6.dp))
                                Text("רענן רשימה", fontSize = 12.sp)
                            }
                        }
                    }
                } else {
                    LazyColumn(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(260.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        items(devices) { dev ->
                            Surface(
                                shape = RoundedCornerShape(12.dp),
                                color = Color(0xFFF8FAFC),
                                border = BorderStroke(1.dp, Color(0xFFE2E8F0)),
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .clickable { onSelectDevice(dev) }
                            ) {
                                Row(
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .padding(12.dp),
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Box(
                                        modifier = Modifier
                                            .size(36.dp)
                                            .background(Color(0xFFE0F2FE), CircleShape),
                                        contentAlignment = Alignment.Center
                                    ) {
                                        Icon(
                                            imageVector = Icons.Default.DirectionsCar,
                                            contentDescription = null,
                                            tint = Color(0xFF0284C7),
                                            modifier = Modifier.size(20.dp)
                                        )
                                    }
                                    Spacer(modifier = Modifier.width(12.dp))
                                    Column(modifier = Modifier.weight(1f)) {
                                        Text(
                                            text = dev.name,
                                            fontWeight = FontWeight.Bold,
                                            fontSize = 15.sp,
                                            color = PointerDark
                                        )
                                        if (dev.address.isNotBlank()) {
                                            Text(
                                                text = dev.address,
                                                fontSize = 11.sp,
                                                color = Color.Gray
                                            )
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        confirmButton = {
            TextButton(onClick = onDismiss) {
                Text("ביטול", fontWeight = FontWeight.Bold)
            }
        }
    )
}

@Composable
fun DiagnosticLogsDialog(
    logsText: String,
    onCopy: () -> Unit,
    onClear: () -> Unit,
    onDismiss: () -> Unit
) {
    val scrollState = rememberScrollState()

    AlertDialog(
        onDismissRequest = onDismiss,
        title = {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "יומן פעולות ואבחון 📋",
                    fontWeight = FontWeight.Bold,
                    fontSize = 17.sp,
                    color = PointerDark
                )
                IconButton(onClick = onDismiss) {
                    Icon(Icons.Default.Close, contentDescription = "סגור", modifier = Modifier.size(20.dp))
                }
            }
        },
        text = {
            Column(modifier = Modifier.fillMaxWidth()) {
                Text(
                    text = "רישום אירועי בלוטות', שליחת קוד ותקשורת רשת במכשיר:",
                    fontSize = 12.sp,
                    color = Color.Gray
                )
                Spacer(modifier = Modifier.height(10.dp))
                Surface(
                    shape = RoundedCornerShape(10.dp),
                    color = Color(0xFF0F172A),
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(300.dp)
                ) {
                    Box(
                        modifier = Modifier
                            .fillMaxSize()
                            .verticalScroll(scrollState)
                            .padding(10.dp)
                    ) {
                        Text(
                            text = logsText,
                            fontSize = 11.sp,
                            fontFamily = FontFamily.Monospace,
                            color = Color(0xFF38BDF8),
                            lineHeight = 15.sp
                        )
                    }
                }
            }
        },
        confirmButton = {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                TextButton(onClick = onClear) {
                    Text("נקה יומן", color = PointerRed, fontSize = 13.sp)
                }
                Row {
                    Button(
                        onClick = onCopy,
                        colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0284C7)),
                        shape = RoundedCornerShape(10.dp)
                    ) {
                        Text("העתק ללוח 📋", fontWeight = FontWeight.Bold, fontSize = 13.sp, color = Color.White)
                    }
                    Spacer(modifier = Modifier.width(6.dp))
                    OutlinedButton(
                        onClick = onDismiss,
                        shape = RoundedCornerShape(10.dp)
                    ) {
                        Text("סגור", fontSize = 13.sp)
                    }
                }
            }
        }
    )
}

fun formatHistoryTimestamp(timestamp: Long): String {
    val sdf = java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss", java.util.Locale.getDefault())
    return sdf.format(java.util.Date(timestamp))
}

fun formatRelativeTime(timestamp: Long): String {
    val diffMs = System.currentTimeMillis() - timestamp
    val seconds = diffMs / 1000
    val minutes = seconds / 60
    val hours = minutes / 60
    val days = hours / 24

    return when {
        seconds < 60 -> "לפני ${seconds.coerceAtLeast(1)} שניות"
        minutes < 60 -> "לפני $minutes דקות"
        hours < 24 -> "לפני $hours שעות"
        days == 1L -> "אתמול"
        else -> "לפני $days ימים"
    }
}
