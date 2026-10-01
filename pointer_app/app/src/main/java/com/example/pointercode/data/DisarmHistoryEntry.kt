package com.example.pointercode.data

data class DisarmHistoryEntry(
    val timestamp: Long,
    val source: String,
    val success: Boolean,
    val message: String
)
