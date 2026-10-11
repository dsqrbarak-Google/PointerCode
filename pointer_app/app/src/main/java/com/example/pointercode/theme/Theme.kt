package com.example.pointercode.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

val PointerRed = Color(0xFFE44126)
val PointerDark = Color(0xFF0F172A)
val PointerBlue = Color(0xFF0284C7)
val AppBackground = Color(0xFFF7F7F9)
val TextPrimary = Color(0xFF0F172A)
val TextSecondary = Color(0xFF64748B)

private val AppColorScheme = lightColorScheme(
    primary = PointerRed,
    onPrimary = Color.White,
    secondary = PointerBlue,
    onSecondary = Color.White,
    background = AppBackground,
    onBackground = TextPrimary,
    surface = Color.White,
    onSurface = TextPrimary,
    surfaceVariant = Color(0xFFF1F5F9),
    onSurfaceVariant = TextSecondary,
    outline = Color(0xFFCBD5E1)
)

@Composable
fun PointerCodeTheme(
    content: @Composable () -> Unit,
) {
    MaterialTheme(
        colorScheme = AppColorScheme,
        typography = Typography,
        content = content
    )
}
