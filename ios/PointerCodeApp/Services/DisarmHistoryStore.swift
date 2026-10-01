import Foundation
import SwiftUI

@MainActor
public class DisarmHistoryStore: ObservableObject {
    public static let shared = DisarmHistoryStore()
    
    // App Group identifier allowing widget and App Intents to share settings
    private let appGroupSuite = "group.rocks.barak.pointercode"
    private let defaults: UserDefaults
    
    private let keyVehicleNumber = "vehicle_number"
    private let keyPointerCode = "pointer_code"
    private let keyDriverName = "driver_name"
    private let keyLastDisarmTime = "last_disarm_time"
    private let keyHistory = "disarm_history"
    private let keyAutoClose = "auto_close"
    
    @Published public var vehicleNumber: String = ""
    @Published public var pointerCode: String = ""
    @Published public var driverName: String = ""
    @Published public var lastDisarmDate: Date? = nil
    @Published public var history: [DisarmHistoryEntry] = []
    @Published public var autoClose: Bool = true
    
    public init() {
        self.defaults = UserDefaults(suiteName: appGroupSuite) ?? UserDefaults.standard
        loadAll()
    }
    
    public func loadAll() {
        self.vehicleNumber = defaults.string(forKey: keyVehicleNumber) ?? "75647002"
        self.pointerCode = defaults.string(forKey: keyPointerCode) ?? "7564"
        self.driverName = defaults.string(forKey: keyDriverName) ?? "דוד ברק"
        self.autoClose = defaults.object(forKey: keyAutoClose) as? Bool ?? true
        
        let lastTimeEpoch = defaults.double(forKey: keyLastDisarmTime)
        if lastTimeEpoch > 0 {
            self.lastDisarmDate = Date(timeIntervalSince1970: lastTimeEpoch)
        } else {
            self.lastDisarmDate = nil
        }
        
        if let data = defaults.data(forKey: keyHistory),
           let decoded = try? JSONDecoder().decode([DisarmHistoryEntry].self, from: data) {
            self.history = decoded
        } else {
            self.history = []
        }
    }
    
    public func saveSettings(vehicleNumber: String, code: String, driverName: String, autoClose: Bool) {
        self.vehicleNumber = vehicleNumber.filter { $0.isNumber }
        self.pointerCode = code.trimmingCharacters(in: .whitespacesAndNewlines)
        self.driverName = driverName.trimmingCharacters(in: .whitespacesAndNewlines)
        self.autoClose = autoClose
        
        defaults.setValue(self.vehicleNumber, forKey: keyVehicleNumber)
        defaults.setValue(self.pointerCode, forKey: keyPointerCode)
        defaults.setValue(self.driverName, forKey: keyDriverName)
        defaults.setValue(self.autoClose, forKey: keyAutoClose)
    }
    
    public func addEntry(source: String, success: Bool, message: String) {
        let now = Date()
        let entry = DisarmHistoryEntry(
            id: UUID(),
            timestamp: now,
            source: source,
            success: success,
            message: message
        )
        
        var updated = history
        updated.insert(entry, at: 0)
        if updated.count > 5 {
            updated = Array(updated.prefix(5))
        }
        
        self.history = updated
        self.lastDisarmDate = now
        
        defaults.set(now.timeIntervalSince1970, forKey: keyLastDisarmTime)
        if let encoded = try? JSONEncoder().encode(updated) {
            defaults.set(encoded, forKey: keyHistory)
        }
    }
    
    /// Checks if a disarm was sent within the suppression window (default: 2 minutes = 120s)
    public func shouldSuppressAutoDisarm(windowSeconds: TimeInterval = 120) -> Bool {
        guard let last = lastDisarmDate else { return false }
        let elapsed = Date().timeIntervalSince(last)
        return elapsed < windowSeconds
    }
    
    public func secondsSinceLastDisarm() -> Int? {
        guard let last = lastDisarmDate else { return nil }
        return max(0, Int(Date().timeIntervalSince(last)))
    }
}
