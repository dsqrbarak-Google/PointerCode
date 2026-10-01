import SwiftUI

public struct DisarmHistoryView: View {
    public let history: [DisarmHistoryEntry]
    
    public init(history: [DisarmHistoryEntry]) {
        self.history = history
    }
    
    public var body: some View {
        VStack(alignment: .trailing, spacing: 12) {
            HStack {
                Text("\(history.count)/5 אחרונות")
                    .font(.caption)
                    .foregroundColor(.secondary)
                
                Spacer()
                
                HStack(spacing: 6) {
                    Text("היסטוריית שליחות")
                        .font(.headline)
                        .fontWeight(.bold)
                    Image(systemName: "clock.arrow.circlepath")
                        .foregroundColor(.blue)
                }
            }
            .padding(.horizontal, 4)
            
            if history.isEmpty {
                VStack(spacing: 8) {
                    Image(systemName: "tray")
                        .font(.system(size: 32))
                        .foregroundColor(.secondary.opacity(0.6))
                    Text("טרם נשלחו קודים")
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 24)
                .background(Color(UIColor.secondarySystemBackground))
                .cornerRadius(12)
            } else {
                VStack(spacing: 8) {
                    ForEach(history) { entry in
                        DisarmHistoryRow(entry: entry)
                    }
                }
            }
        }
        .environment(\.layoutDirection, .rightToLeft)
    }
}

struct DisarmHistoryRow: View {
    let entry: DisarmHistoryEntry
    
    private var sourceBadgeColor: Color {
        switch entry.source {
        case "בלוטות'", "אוטומציית בלוטות'":
            return .blue
        case "פתיחת אפליקציה":
            return .purple
        case "קיצור דרך":
            return .indigo
        default:
            return .teal
        }
    }
    
    var body: some View {
        HStack(spacing: 12) {
            // Success / Failure Icon
            Image(systemName: entry.success ? "checkmark.circle.fill" : "xmark.circle.fill")
                .foregroundColor(entry.success ? .green : .red)
                .font(.system(size: 22))
            
            VStack(alignment: .trailing, spacing: 3) {
                HStack {
                    Text(entry.relativeTimeDescription)
                        .font(.caption2)
                        .foregroundColor(.secondary)
                    
                    Spacer()
                    
                    // Source Badge
                    Text(entry.source)
                        .font(.caption2)
                        .fontWeight(.semibold)
                        .padding(.horizontal, 6)
                        .padding(.vertical, 2)
                        .background(sourceBadgeColor.opacity(0.12))
                        .foregroundColor(sourceBadgeColor)
                        .cornerRadius(6)
                    
                    Text("\(entry.formattedTime) | \(entry.formattedDate)")
                        .font(.caption)
                        .fontWeight(.medium)
                        .foregroundColor(.primary)
                }
                
                Text(entry.message)
                    .font(.subheadline)
                    .foregroundColor(entry.success ? .primary : .red)
                    .lineLimit(1)
            }
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
        .background(Color(UIColor.secondarySystemBackground))
        .cornerRadius(10)
    }
}

#Preview {
    DisarmHistoryView(history: [
        DisarmHistoryEntry(source: "בלוטות'", success: true, message: "נסיעה טובה!"),
        DisarmHistoryEntry(source: "פתיחת אפליקציה", success: true, message: "נוטרל בהצלחה"),
        DisarmHistoryEntry(source: "ידני", success: false, message: "שגיאת תקשורת")
    ])
    .padding()
}
