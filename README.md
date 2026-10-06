# 🚗 4S Pointer Code
> **4S • Smart Solutions for Silly Situations**  
> מאת: **דוד (דידי) ברק** | [barak.rocks](https://barak.rocks/)  
> גרסה: **1.3.0**

---

## 📖 אודות הפרויקט
אפליקציית אנדרואיד Native מהירה ומעוצבת המאפשרת נטרול בלחיצה אחת של קודן הרכב במערכת **Pointer** (במקום לפתוח דפדפן, להמתין לטעינת אתר `https://fleet.pointer4u.co.il/code/`, ולהקליד את הקוד ידנית בכל נסיעה).

### ✨ תכונות עיקריות
- ⚡ **ניטרול נייטיב מיידי**: שליחת הקוד ישירות מול שרתי פוינטר דרך קריאת HTTP מהירה תוך ~200 אלפיות השנייה – ללא דפדפן, ללא טעינת סקריפטים וללא פרסומות.
- 🚗 **תמיכה מלאה ב-Android Auto**:
  - אפליקציה ייעודית למסך המולטימדיה ברכב (`Android for Cars App Library`).
  - התראות Heads-Up מתפרצות במסך הרכב (`MessagingStyle`) עם כפתור "נסה שוב כעת" בעת כשל או השהיית תקשורת.
  - שליטה בלחיצה אחת ישירות ממסך המגע ברכב.
  - ניטרול אוטומטי בעת חיבור חוטי או אלחוטי לרכב (`CarConnection`).
- 📶 **מנגנון Smart Network Retry עמיד לרשת**:
  - פתרון מקיף לבעיות קליטה בכניסה לרכב (מעבר בין Wi-Fi חלש לחיבור סלולרי).
  - קיצור פסק זמן ל-6 שניות ומנגנון השהיה פרוגרסיבי (3s ➔ 6s ➔ 10s ➔ 15s) עם זיהוי אקטיבי של חזרת הרשת.
- 👆 **חוויית One-Tap**: בהפעלה ראשונה מזינים פעם אחת את מספר הרכב והקוד (1–5). בכל הפעלה עתידית – האפליקציה שולחת את הקוד מיד בלחיצה אחת.
- 📱 **קיצורי דרך וווידג'טים**:
  - אפשרות לנעיצת קיצור דרך במסך הבית (Pinned Shortcut).
  - ווידג'ט 1x1 למסך הבית עם מספר הרכב.
  - תמיכה ב-App Shortcuts (לחיצה ארוכה על סמל האפליקציה).
- 🐒 **מיתוג 4S מלא**:
  - סמליל הקופיף (Tarsier Monkey Logo) מתוך [barak.rocks](https://barak.rocks/) כסמל האפליקציה, הווידג'ט והקיצור.
  - סלוגן 4S הרשמי וקישור ישיר וקבוע לאתר הבית.
- 🇮🇱 **עיצוב מודרני מותאם לעברית (RTL)**:
  - ממשק Jetpack Compose ו-Material 3.
  - לוחית רישוי ישראלית צהובה אותנטית.
  - חיווי הצלחה עם וי ירוק מונפש, פידבק רטט (Haptic Feedback) ושליטה בסגירה אוטומטית בנגיעה.

---

## 🛠️ טכנולוגיות וארכיטקטורה
- **שפה**: Kotlin
- **Android Auto**: Android for Cars App Library (`androidx.car.app:app` IoT category)
- **UI Toolkit**: Jetpack Compose, Material 3, Google Fonts (Rubik)
- **ארכיטקטורה**: MVVM + StateFlow + Clean Architecture
- **רשת**: HttpURLConnection עם טיפול ייעודי ב-XML Response, UTF-8 BOM, וסריקת רשת פעילה (`ConnectivityManager`)
- **אחסון מקומי**: SharedPreferences (שמירה מוצפנת ומקומית בלבד במכשיר)
- **תאימות מינימלית**: Android 7.0 (API 24) ומעלה

---

## 🚀 הורדה והתקנה
קובץ ההתקנה העדכני ביותר (APK) זמין להורדה ישירה מתוך הריפו:
- [PointerQuickCode.apk](PointerQuickCode.apk) (גרסה 1.3.0)

להתקנה:
1. הורד את קובץ ה-APK למכשיר האנדרואיד.
2. אשר התקנה ממקורות לא מוכרים (Unknown Sources) במידת הצורך.
3. פתח את האפליקציה והגדר פעם אחת את פרטי הרכב.

---

## 🏗️ בנייה מקוד מקור (Build from Source)
```bash
git clone https://github.com/dsqrbarak-Google/PointerCode.git
cd PointerCode/pointer_app

# בניית גרסת Debug
./gradlew assembleDebug

# הרצת בדיקות יחידה
./gradlew test
```
קובץ ה-APK שייווצר יישמר ב:  
`app/build/outputs/apk/debug/app-debug.apk`

---

## 📄 רישיון וזכויות
© 2026 דוד (דידי) ברק • [barak.rocks](https://barak.rocks/)  
כל הזכויות שמורות לחלקים הקנייניים של 4S.
