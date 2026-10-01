# 4S Pointer Code - תמיכה באייפון (iOS)

תיקייה זו מרכזת את כל הפתרונות והקוד עבור מכשירי **Apple iPhone (iOS)** לניטרול קודן פוינטר אוטומטי בעת כניסה וחיבור Bluetooth לרכב.

---

## 🚀 שתי אפשרויות זמינות:

### אפשרות 1: הגדרה מיידית בחינם (0$) באמצעות Apple Shortcuts (מומלץ)
* **ללא צורך במחשב Mac וללא צורך בחשבון מפתחים (99$)**.
* עובד ישירות מתוך אפליקציית "קיצורי דרך" של אפל המובנית בכל מכשיר אייפון.
* שולח קריאת HTTP POST ישירות לשרתי פוינטר בחיבור ל-Bluetooth של הרכב ("הפעל מיד" ללא אישור ידני).
* מקפיץ התראה ומשמיע צליל שהקודן נוטרל.
* 📄 **למדריך המלא צעד-אחר-צעד**: עיין בקובץ [SHORTCUT_GUIDE.md](file:///C:/Users/DavidBarak/.gemini/antigravity/scratch/PointerCode/ios/SHORTCUT_GUIDE.md).

---

### אפשרות 2: אפליקציית SwiftUI מקורית מלאה (`PointerCodeApp`)
הפרויקט כולל יישום מלא של אפליקציית iOS ב-`SwiftUI`:
* **לוחית רישוי ישראלית מעוצבת**: [`LicensePlateView.swift`](file:///C:/Users/DavidBarak/.gemini/antigravity/scratch/PointerCode/ios/PointerCodeApp/Views/LicensePlateView.swift)
* **היסטוריית 5 השליחות האחרונות**: [`DisarmHistoryView.swift`](file:///C:/Users/DavidBarak/.gemini/antigravity/scratch/PointerCode/ios/PointerCodeApp/Views/DisarmHistoryView.swift)
* **מנגנון השהיית 2 דקות בפתיחת אפליקציה**: [`MainDisarmView.swift`](file:///C:/Users/DavidBarak/.gemini/antigravity/scratch/PointerCode/ios/PointerCodeApp/Views/MainDisarmView.swift)
* **תמיכה ב-App Intents לאוטומציות Bluetooth ו-Siri**: [`DisarmPointerIntent.swift`](file:///C:/Users/DavidBarak/.gemini/antigravity/scratch/PointerCode/ios/PointerCodeApp/Intents/DisarmPointerIntent.swift)
* **ווידג'ט מסך הבית ומסך הנעילה (WidgetKit)**: [`PointerWidget.swift`](file:///C:/Users/DavidBarak/.gemini/antigravity/scratch/PointerCode/ios/PointerCodeApp/Widgets/PointerWidget.swift)

#### דרישות הרצה לאפליקציה:
* מחשב macOS עם `Xcode 15` או `Xcode 16`.
* יעד מינימלי: `iOS 16.0` ומעלה.
* להפצה עצמאית קבועה ללא חידוש שבועי נדרש מנוי Apple Developer Program (99$/שנה).
