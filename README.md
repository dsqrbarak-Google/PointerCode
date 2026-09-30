# 🚗 4S Pointer Code
> **4S • Smart Solutions for Silly Situations**  
> מאת: **דוד (דידי) ברק** | [barak.rocks](https://barak.rocks/)  
> גרסה: **1.0**

---

## 📖 אודות הפרויקט
אפליקציית אנדרואיד Native מהירה ומעוצבת המאפשרת נטרול בלחיצה אחת של קודן הרכב במערכת **Pointer** (במקום לפתוח דפדפן, להמתין לטעינת אתר `https://fleet.pointer4u.co.il/code/`, ולהקליד את הקוד ידנית בכל נסיעה).

### ✨ תכונות עיקריות
- ⚡ **ניטרול נייטיב מיידי**: שליחת הקוד ישירות מול שרתי פוינטר דרך קריאת HTTP מהירה תוך ~200 אלפיות השנייה – ללא דפדפן, ללא טעינת סקריפטים וללא פרסומות.
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
  - חיווי הצלחה עם וי ירוק מונפש, פידבק רטט (Haptic Feedback) וסגירה אוטומטית תוך 3 שניות.

---

## 🛠️ טכנולוגיות וארכיטקטורה
- **שפה**: Kotlin
- **UI Toolkit**: Jetpack Compose, Material 3, Google Fonts (Rubik)
- **ארכיטקטורה**: MVVM + StateFlow + Clean Architecture
- **רשת**: OkHttp 4 עם טיפול ייעודי ב-XML Response ו-UTF-8 BOM
- **אחסון מקומי**: SharedPreferences (שמירה מוצפנת ומקומית בלבד במכשיר)
- **תאימות מינימלית**: Android 8.0 (API 26) ומעלה

---

## 🚀 הורדה והתקנה
קובץ ההתקנה העדכני ביותר (APK) זמין להורדה ישירה מתוך הריפו:
- [PointerQuickCode.apk](PointerQuickCode.apk) (גרסה 1.0)

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
