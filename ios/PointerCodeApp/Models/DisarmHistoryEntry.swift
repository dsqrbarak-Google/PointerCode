import Foundation

public struct DisarmHistoryEntry: Identifiable, Codable, Equatable {
    public var id: UUID = UUID()
    public let timestamp: Date
    public let source: String
    public let success: Bool
    public let message: String

    public init(id: UUID = UUID(), timestamp: Date = Date(), source: String, success: Bool, message: String) {
        self.id = id
        self.timestamp = timestamp
        self.source = source
        self.success = success
        self.message = message
    }

    public var formattedTime: String {
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "he_IL")
        formatter.dateFormat = "HH:mm:ss"
        return formatter.string(from: timestamp)
    }

    public var formattedDate: String {
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "he_IL")
        formatter.dateFormat = "dd/MM/yyyy"
        return formatter.string(from: timestamp)
    }

    public var relativeTimeDescription: String {
        let secondsAgo = Int(Date().timeIntervalSince(timestamp))
        if secondsAgo < 60 {
            return "לפני \(max(1, secondsAgo)) שניות"
        } else if secondsAgo < 3600 {
            return "לפני \(secondsAgo / 60) דקות"
        } else if secondsAgo < 86400 {
            return "לפני \(secondsAgo / 3600) שעות"
        } else {
            return "\(formattedDate) \(formattedTime)"
        }
    }
}
