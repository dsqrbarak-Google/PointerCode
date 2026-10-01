import WidgetKit
import SwiftUI
import AppIntents

struct PointerWidgetEntry: TimelineEntry {
    let date: Date
    let vehicleNumber: String
    let lastDisarmText: String
    let isSuccess: Bool
}

struct PointerWidgetProvider: TimelineProvider {
    func placeholder(in context: Context) -> PointerWidgetEntry {
        PointerWidgetEntry(date: Date(), vehicleNumber: "75647002", lastDisarmText: "מוכן לניטרול", isSuccess: true)
    }

    func getSnapshot(in context: Context, completion: @escaping (PointerWidgetEntry) -> Void) {
        completion(createCurrentEntry())
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<PointerWidgetEntry>) -> Void) {
        let entry = createCurrentEntry()
        let nextUpdate = Calendar.current.date(byAdding: .minute, value: 15, to: Date()) ?? Date()
        let timeline = Timeline(entries: [entry], policy: .after(nextUpdate))
        completion(timeline)
    }
    
    private func createCurrentEntry() -> PointerWidgetEntry {
        let defaults = UserDefaults(suiteName: "group.rocks.barak.pointercode") ?? UserDefaults.standard
        let vehicle = defaults.string(forKey: "vehicle_number") ?? "75647002"
        
        var lastText = "מוכן לניטרול"
        var success = true
        if let data = defaults.data(forKey: "disarm_history"),
           let history = try? JSONDecoder().decode([DisarmHistoryEntry].self, from: data),
           let first = history.first {
            lastText = "\(first.formattedTime) (\(first.source))"
            success = first.success
        }
        
        return PointerWidgetEntry(date: Date(), vehicleNumber: vehicle, lastDisarmText: lastText, isSuccess: success)
    }
}

struct PointerWidgetEntryView: View {
    var entry: PointerWidgetProvider.Entry
    @Environment(\.widgetFamily) var family

    var body: some View {
        switch family {
        case .accessoryCircular:
            // Lock Screen Circular Widget
            ZStack {
                AccessoryWidgetBackground()
                Image(systemName: "key.fill")
                    .font(.title2)
            }
            .widgetURL(URL(string: "pointercode://disarm"))
            
        case .accessoryRectangular:
            // Lock Screen Rectangular Widget
            VStack(alignment: .leading, spacing: 2) {
                HStack {
                    Image(systemName: "car.fill")
                    Text("4S Pointer")
                        .fontWeight(.bold)
                }
                Text("רכב: \(entry.vehicleNumber)")
                    .font(.caption2)
                Text(entry.lastDisarmText)
                    .font(.caption2)
                    .foregroundColor(.secondary)
            }
            .widgetURL(URL(string: "pointercode://disarm"))
            
        default:
            // Home Screen Small/Medium Widget
            VStack(alignment: .center, spacing: 10) {
                HStack {
                    VStack(alignment: .leading, spacing: 2) {
                        Text("4S Pointer")
                            .font(.subheadline)
                            .fontWeight(.bold)
                            .foregroundColor(.blue)
                        Text(entry.vehicleNumber)
                            .font(.caption2)
                            .foregroundColor(.secondary)
                    }
                    Spacer()
                    Image(systemName: entry.isSuccess ? "shield.checkmark.fill" : "exclamationmark.triangle.fill")
                        .foregroundColor(entry.isSuccess ? .green : .orange)
                }
                
                Spacer()
                
                // Interactive Button (iOS 17+)
                if #available(iOS 17.0, *) {
                    Button(intent: DisarmPointerIntent(triggerSource: "ווידג'ט")) {
                        HStack {
                            Image(systemName: "key.fill")
                            Text("נטרל עכשיו")
                                .fontWeight(.bold)
                        }
                        .font(.footnote)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 8)
                        .background(Color.blue)
                        .cornerRadius(8)
                    }
                    .buttonStyle(.plain)
                } else {
                    Link(destination: URL(string: "pointercode://disarm")!) {
                        HStack {
                            Image(systemName: "key.fill")
                            Text("פתח ונטרל")
                                .fontWeight(.bold)
                        }
                        .font(.footnote)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 8)
                        .background(Color.blue)
                        .cornerRadius(8)
                    }
                }
            }
            .padding()
        }
    }
}

public struct PointerWidget: Widget {
    public let kind: String = "PointerWidget"

    public init() {}

    public var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: PointerWidgetProvider()) { entry in
            PointerWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("ניטרול פוינטר (4S)")
        .description("ניטרול קודן פוינטר בלחיצה אחת ממסך הבית או ממסך הנעילה.")
        .supportedFamilies([.systemSmall, .accessoryCircular, .accessoryRectangular])
    }
}
