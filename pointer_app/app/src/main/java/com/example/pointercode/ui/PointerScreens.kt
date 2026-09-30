package com.example.pointercode.ui

import android.content.Intent
import android.net.Uri
import android.widget.Toast
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.ui.res.painterResource
import com.example.pointercode.R
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.clickable
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AddCircle
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Language
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.filled.Warning
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

val PointerRed = Color(0xFFE44126)
val PointerDark = Color(0xFF212121)
val PlateYellow = Color(0xFFFFD600)
val SuccessGreen = Color(0xFF2E7D32)

@Composable
fun PointerMainScreen(
    viewModel: PointerViewModel,
    state: PointerUiState,
    onCloseActivity: () -> Unit
) {
    CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Rtl) {
        when (state.screenMode) {
            is ScreenMode.Disarm -> {
                DisarmScreen(
                    state = state,
                    onDisarmNow = { viewModel.disarmNow(onCloseActivity) },
                    onOpenSetup = { viewModel.openSetup() },
                    onRequestPinShortcut = { context ->
                        val res = viewModel.requestPinShortcut(context)
                        if (res) {
                            Toast.makeText(context, "קיצור דרך נוסף למסך הבית", Toast.LENGTH_SHORT).show()
                        }
                    },
                    onCancelCountdown = { viewModel.cancelCountdown() },
                    onCloseApp = onCloseActivity
                )
            }
            is ScreenMode.Setup -> {
                SetupScreen(
                    state = state,
                    onVehicleNumberChanged = viewModel::onSetupVehicleNumberChanged,
                    onCodeChanged = viewModel::onSetupCodeChanged,
                    onDriverNameChanged = viewModel::onSetupDriverNameChanged,
                    onSave = { viewModel.saveAndDisarm(onCloseActivity) },
                    onCancel = viewModel::cancelSetup
                )
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DisarmScreen(
    state: PointerUiState,
    onDisarmNow: () -> Unit,
    onOpenSetup: () -> Unit,
    onRequestPinShortcut: (android.content.Context) -> Unit,
    onCancelCountdown: () -> Unit,
    onCloseApp: () -> Unit
) {
    val context = LocalContext.current

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
                                text = "4S Pointer Code",
                                fontWeight = FontWeight.Bold,
                                color = Color.White,
                                fontSize = 17.sp
                            )
                            Text(
                                text = "4S • Smart Solutions for Silly Situations",
                                color = Color(0xFF38BDF8),
                                fontSize = 10.sp,
                                fontWeight = FontWeight.Medium
                            )
                        }
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = PointerDark
                ),
                actions = {
                    IconButton(onClick = {
                        val browserIntent = Intent(Intent.ACTION_VIEW, Uri.parse("https://barak.rocks/"))
                        context.startActivity(browserIntent)
                    }) {
                        Icon(
                            imageVector = Icons.Default.Language,
                            contentDescription = "לאתר הבית barak.rocks",
                            tint = Color(0xFF38BDF8)
                        )
                    }
                    IconButton(onClick = { onRequestPinShortcut(context) }) {
                        Icon(
                            imageVector = Icons.Default.AddCircle,
                            contentDescription = "הוסף קיצור דרך למסך הבית",
                            tint = Color.White
                        )
                    }
                    IconButton(onClick = onOpenSetup) {
                        Icon(
                            imageVector = Icons.Default.Settings,
                            contentDescription = "הגדרות",
                            tint = Color.White
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
                .padding(20.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.SpaceBetween
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.fillMaxWidth()
            ) {
                Spacer(modifier = Modifier.height(12.dp))

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
            }

            // Central Status Area
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 16.dp),
                shape = RoundedCornerShape(24.dp),
                colors = CardDefaults.cardColors(containerColor = Color.White),
                elevation = CardDefaults.cardElevation(defaultElevation = 3.dp)
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
                                    color = Color(0xFFE8F5E9),
                                    shape = RoundedCornerShape(12.dp)
                                ) {
                                    Text(
                                        text = "החלון ייסגר בעוד ${status.countdown} שניות...",
                                        fontSize = 13.sp,
                                        color = SuccessGreen,
                                        fontWeight = FontWeight.Medium,
                                        modifier = Modifier.padding(horizontal = 14.dp, vertical = 6.dp)
                                    )
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

            // Bottom Actions Area
            Column(
                modifier = Modifier.fillMaxWidth(),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                when (state.disarmStatus) {
                    is DisarmStatus.Success -> {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(10.dp)
                        ) {
                            Button(
                                onClick = onCloseApp,
                                modifier = Modifier.weight(1f).height(50.dp),
                                colors = ButtonDefaults.buttonColors(containerColor = SuccessGreen),
                                shape = RoundedCornerShape(14.dp)
                            ) {
                                Icon(Icons.Default.Close, contentDescription = null)
                                Spacer(modifier = Modifier.width(6.dp))
                                Text("סגור כעת", fontSize = 16.sp, fontWeight = FontWeight.Bold)
                            }
                            OutlinedButton(
                                onClick = onCancelCountdown,
                                modifier = Modifier.weight(1f).height(50.dp),
                                shape = RoundedCornerShape(14.dp)
                            ) {
                                Text("השאר פתוח", fontSize = 15.sp)
                            }
                        }
                    }

                    is DisarmStatus.Error -> {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(10.dp)
                        ) {
                            Button(
                                onClick = onDisarmNow,
                                modifier = Modifier.weight(1f).height(50.dp),
                                colors = ButtonDefaults.buttonColors(containerColor = PointerRed),
                                shape = RoundedCornerShape(14.dp)
                            ) {
                                Icon(Icons.Default.Refresh, contentDescription = null)
                                Spacer(modifier = Modifier.width(6.dp))
                                Text("נסה שוב", fontSize = 16.sp, fontWeight = FontWeight.Bold)
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
                        Spacer(modifier = Modifier.height(10.dp))
                        TextButton(
                            onClick = {
                                val browserIntent = Intent(
                                    Intent.ACTION_VIEW,
                                    Uri.parse("https://fleet.pointer4u.co.il/code/")
                                )
                                context.startActivity(browserIntent)
                            }
                        ) {
                            Text("פתח באתר פוינטר בדפדפן", color = Color.Gray, fontSize = 14.sp)
                        }
                    }

                    else -> {
                        Button(
                            onClick = onDisarmNow,
                            modifier = Modifier.fillMaxWidth().height(52.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = PointerRed),
                            shape = RoundedCornerShape(14.dp),
                            enabled = state.disarmStatus !is DisarmStatus.Loading
                        ) {
                            Icon(Icons.Default.Lock, contentDescription = null)
                            Spacer(modifier = Modifier.width(8.dp))
                            Text("נטרל קודן עכשיו", fontSize = 17.sp, fontWeight = FontWeight.Bold)
                        }
                    }
                }

                Spacer(modifier = Modifier.height(14.dp))

                // 4S Brand Footer Card - ALWAYS VISIBLE
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
                                    text = "דוד (דידי) ברק • גרסה 1.0",
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
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SetupScreen(
    state: PointerUiState,
    onVehicleNumberChanged: (String) -> Unit,
    onCodeChanged: (String) -> Unit,
    onDriverNameChanged: (String) -> Unit,
    onSave: () -> Unit,
    onCancel: () -> Unit
) {
    val context = LocalContext.current
    val scrollState = rememberScrollState()

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
                                .size(34.dp)
                                .clip(CircleShape)
                        )
                        Spacer(modifier = Modifier.width(10.dp))
                        Column {
                            Text(
                                text = "הגדרת קודן פוינטר",
                                fontWeight = FontWeight.Bold,
                                color = Color.White,
                                fontSize = 17.sp
                            )
                            Text(
                                text = "4S • Smart Solutions for Silly Situations",
                                color = Color(0xFF38BDF8),
                                fontSize = 10.sp,
                                fontWeight = FontWeight.Medium
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
                            Icon(Icons.Default.Close, contentDescription = "ביטול", tint = Color.White)
                        }
                    }
                },
                actions = {
                    IconButton(onClick = {
                        val browserIntent = Intent(Intent.ACTION_VIEW, Uri.parse("https://barak.rocks/"))
                        context.startActivity(browserIntent)
                    }) {
                        Icon(
                            imageVector = Icons.Default.Language,
                            contentDescription = "לאתר הבית barak.rocks",
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
                .padding(20.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
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
                        text = "הזנת פרטי רכב וקוד",
                        fontSize = 19.sp,
                        fontWeight = FontWeight.Bold,
                        color = PointerDark,
                        modifier = Modifier.fillMaxWidth()
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "הפרטים נשמרים מקומית בטלפון בלבד. בפעמים הבאות האפליקציה תנטרל את הרכב בלחיצה אחת בלי לשאול כלום.",
                        fontSize = 13.sp,
                        color = Color.Gray,
                        lineHeight = 18.sp,
                        modifier = Modifier.fillMaxWidth()
                    )

                    Spacer(modifier = Modifier.height(20.dp))

                    // Vehicle Number Field
                    OutlinedTextField(
                        value = state.setupVehicleNumber,
                        onValueChange = onVehicleNumberChanged,
                        label = { Text("מספר רכב (ספרות בלבד)") },
                        placeholder = { Text("לדוגמה: 12345678") },
                        singleLine = true,
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp)
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
                        shape = RoundedCornerShape(12.dp)
                    )

                    // Helper indicator for 1-5 keys
                    Spacer(modifier = Modifier.height(8.dp))
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text(
                            text = "בלוח פוינטר קיימות הספרות 1 עד 5 בלבד",
                            fontSize = 12.sp,
                            color = Color(0xFF757575)
                        )
                        Text(
                            text = "${state.setupCode.length}/4 ספרות",
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (state.setupCode.length == 4) SuccessGreen else PointerRed
                        )
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
                        shape = RoundedCornerShape(12.dp)
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

                    Spacer(modifier = Modifier.height(24.dp))

                    Button(
                        onClick = onSave,
                        modifier = Modifier.fillMaxWidth().height(50.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = PointerRed),
                        shape = RoundedCornerShape(14.dp),
                        enabled = state.setupVehicleNumber.length >= 6 && state.setupCode.length == 4
                    ) {
                        Text(
                            text = "שמור והפעל כעת",
                            fontSize = 16.sp,
                            fontWeight = FontWeight.Bold
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

            Spacer(modifier = Modifier.height(20.dp))

            // Explanation Card
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFFECEFF1))
            ) {
                Row(
                    modifier = Modifier.padding(16.dp),
                    verticalAlignment = Alignment.Top
                ) {
                    Icon(
                        imageVector = Icons.Default.Info,
                        contentDescription = null,
                        tint = Color(0xFF455A64),
                        modifier = Modifier.size(24.dp)
                    )
                    Spacer(modifier = Modifier.width(12.dp))
                    Column {
                        Text(
                            text = "איך זה עובד?",
                            fontWeight = FontWeight.Bold,
                            fontSize = 14.sp,
                            color = Color(0xFF263238)
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = "המערכת מדמה את לחיצות הקודן מול אתר פוינטר ישירות דרך הרשת הנייטיבית תוך שבריר שנייה. אין צורך לחכות לטעינת הדפדפן, אין פרסומות, ואין צורך להקליד שוב.",
                            fontSize = 12.sp,
                            color = Color(0xFF455A64),
                            lineHeight = 17.sp
                        )
                    }
                }
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
                                text = "דוד (דידי) ברק • גרסה 1.0",
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
