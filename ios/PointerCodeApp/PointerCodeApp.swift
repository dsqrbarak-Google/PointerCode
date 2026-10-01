import SwiftUI
import UserNotifications

@main
struct PointerCodeApp: App {
    @StateObject private var store = DisarmHistoryStore.shared

    init() {
        requestNotificationPermission()
    }

    var body: some Scene {
        WindowGroup {
            MainDisarmView()
                .onOpenURL { url in
                    handleIncomingURL(url)
                }
        }
    }

    private func requestNotificationPermission() {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
            if granted {
                print("Notification permission granted")
            } else if let error = error {
                print("Notification permission error: \(error.localizedDescription)")
            }
        }
    }

    private func handleIncomingURL(_ url: URL) {
        if url.scheme == "pointercode" && url.host == "disarm" {
            Task { @MainActor in
                let vehicle = store.vehicleNumber
                let code = store.pointerCode
                let name = store.driverName
                
                let result = await PointerApiClient.shared.checkCode(
                    vehicleNumber: vehicle,
                    code: code,
                    driverName: name
                )
                
                switch result {
                case .success(let message, _):
                    store.addEntry(source: "קישור מערכת", success: true, message: message)
                case .failure(let message, let rc):
                    store.addEntry(source: "קישור מערכת", success: false, message: "שגיאה \(rc): \(message)")
                case .networkError(let errorMsg):
                    store.addEntry(source: "קישור מערכת", success: false, message: errorMsg)
                }
            }
        }
    }
}
