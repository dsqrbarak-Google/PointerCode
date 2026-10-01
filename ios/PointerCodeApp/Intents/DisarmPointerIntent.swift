import Foundation
import AppIntents
import UserNotifications

@available(iOS 16.0, *)
public struct DisarmPointerIntent: AppIntent {
    public static var title: LocalizedStringResource = "נטרל קודן פוינטר"
    public static var description = IntentDescription("שולח את קוד הניטרול ישירות לשרתי פוינטר ברקע")
    
    // Allows running in the background without launching the UI
    public static var openAppWhenRun: Bool = false
    
    @Parameter(title: "מקור ההפעלה", default: "אוטומציית בלוטות'")
    public var triggerSource: String
    
    public init() {
        self.triggerSource = "אוטומציית בלוטות'"
    }
    
    public init(triggerSource: String) {
        self.triggerSource = triggerSource
    }
    
    public func perform() async throws -> some ProvidesDialog & ShowsSnippetView {
        let store = await DisarmHistoryStore.shared
        let vehicleNumber = await store.vehicleNumber
        let code = await store.pointerCode
        let driverName = await store.driverName
        
        guard !vehicleNumber.isEmpty && code.count == 4 else {
            notifyUser(title: "שגיאת הגדרות", body: "חסרים פרטי רכב או קוד פוינטר באפליקציה.")
            return .result(dialog: "שגיאה: פרטי הרכב אינם מוגדרים")
        }
        
        let result = await PointerApiClient.shared.checkCode(
            vehicleNumber: vehicleNumber,
            code: code,
            driverName: driverName
        )
        
        switch result {
        case .success(let message, _):
            await store.addEntry(source: triggerSource, success: true, message: message)
            notifyUser(title: "פוינטר קוד (4S)", body: "🚗 קודן נוטרל בהצלחה! \(message)")
            return .result(dialog: "קודן נוטרל בהצלחה!")
            
        case .failure(let message, let rc):
            await store.addEntry(source: triggerSource, success: false, message: "שגיאה \(rc): \(message)")
            notifyUser(title: "שגיאה בניטרול קודן", body: "❌ שגיאה משרת פוינטר: \(message)")
            return .result(dialog: "שגיאה בניטרול קודן: \(message)")
            
        case .networkError(let errorMsg):
            await store.addEntry(source: triggerSource, success: false, message: errorMsg)
            notifyUser(title: "שגיאת תקשורת", body: "⚠️ \(errorMsg)")
            return .result(dialog: "שגיאת תקשורת: \(errorMsg)")
        }
    }
    
    private func notifyUser(title: String, body: String) {
        let content = UNMutableNotificationContent()
        content.title = title
        content.body = body
        content.sound = .default
        
        let request = UNNotificationRequest(
            identifier: UUID().uuidString,
            content: content,
            trigger: nil // Deliver immediately
        )
        UNUserNotificationCenter.current().add(request, withCompletionHandler: nil)
    }
}
