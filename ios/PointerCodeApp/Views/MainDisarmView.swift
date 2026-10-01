import SwiftUI

public struct MainDisarmView: View {
    @StateObject private var store = DisarmHistoryStore.shared
    @State private var isExecuting = false
    @State private var statusMessage: String = ""
    @State private var isSuccess: Bool = false
    @State private var suppressionNotice: String? = nil
    @State private var showSettings = false
    
    // Countdown timer state
    @State private var countdownRemaining = 3
    @State private var isCountingDown = false
    @State private var timer: Timer? = nil
    
    public init() {}
    
    public var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 20) {
                    // Header / Branding
                    VStack(spacing: 4) {
                        Text("4S Pointer Code")
                            .font(.system(size: 26, weight: .black, design: .rounded))
                            .foregroundColor(.blue)
                        Text("ניטרול מהיר • barak.rocks")
                            .font(.caption)
                            .foregroundColor(.secondary)
                    }
                    .padding(.top, 8)
                    
                    // Israeli License Plate
                    LicensePlateView(vehicleNumber: store.vehicleNumber)
                        .padding(.vertical, 4)
                    
                    // Driver & Code Info
                    HStack(spacing: 16) {
                        Label(store.driverName.isEmpty ? "נהג לא הוגדר" : store.driverName, systemImage: "person.circle")
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                        
                        Label("קוד: ••••", systemImage: "lock.shield")
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                    }
                    
                    // 2-Minute Suppression Banner (if opened shortly after Bluetooth / prior disarm)
                    if let notice = suppressionNotice {
                        HStack(spacing: 10) {
                            Image(systemName: "hand.raised.fill")
                                .foregroundColor(.orange)
                                .font(.title3)
                            
                            VStack(alignment: .trailing, spacing: 2) {
                                Text("השהיית שליחה אוטומטית (2 דקות)")
                                    .font(.footnote)
                                    .fontWeight(.bold)
                                    .foregroundColor(.orange)
                                Text(notice)
                                    .font(.caption)
                                    .foregroundColor(.secondary)
                            }
                            
                            Spacer()
                        }
                        .padding(12)
                        .background(Color.orange.opacity(0.12))
                        .cornerRadius(10)
                        .overlay(
                            RoundedRectangle(cornerRadius: 10)
                                .stroke(Color.orange.opacity(0.3), lineWidth: 1)
                        )
                    }
                    
                    // Status Alert Banner (if execution just finished)
                    if !statusMessage.isEmpty {
                        HStack(spacing: 10) {
                            Image(systemName: isSuccess ? "checkmark.circle.fill" : "exclamationmark.triangle.fill")
                                .foregroundColor(isSuccess ? .green : .red)
                                .font(.title3)
                            
                            Text(statusMessage)
                                .font(.subheadline)
                                .fontWeight(.medium)
                                .foregroundColor(isSuccess ? .green : .red)
                            
                            Spacer()
                        }
                        .padding(12)
                        .background((isSuccess ? Color.green : Color.red).opacity(0.12))
                        .cornerRadius(10)
                    }
                    
                    // Disarm Now Button
                    Button(action: {
                        Task {
                            await triggerDisarm(source: "ידני")
                        }
                    }) {
                        HStack(spacing: 12) {
                            if isExecuting {
                                ProgressView()
                                    .progressViewStyle(CircularProgressViewStyle(tint: .white))
                            } else {
                                Image(systemName: "key.fill")
                                    .font(.headline)
                            }
                            
                            Text(isExecuting ? "שולח קוד..." : "שלח קוד ניטרול עכשיו")
                                .font(.headline)
                                .fontWeight(.bold)
                        }
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .frame(height: 52)
                        .background(Color.blue)
                        .cornerRadius(12)
                        .shadow(color: Color.blue.opacity(0.3), radius: 6, x: 0, y: 3)
                    }
                    .disabled(isExecuting)
                    .padding(.horizontal, 4)
                    
                    Divider()
                        .padding(.vertical, 4)
                    
                    // Disarm History (Last 5)
                    DisarmHistoryView(history: store.history)
                        .padding(.horizontal, 4)
                }
                .padding()
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarLeading) {
                    Button(action: { showSettings = true }) {
                        Image(systemName: "gearshape")
                    }
                }
            }
            .sheet(isPresented: $showSettings) {
                SettingsSheetView()
            }
            .onAppear {
                handleLaunchLogic()
            }
        }
        .navigationViewStyle(StackNavigationViewStyle())
        .environment(\.layoutDirection, .rightToLeft)
    }
    
    private func handleLaunchLogic() {
        if store.shouldSuppressAutoDisarm(windowSeconds: 120) {
            let seconds = store.secondsSinceLastDisarm() ?? 0
            suppressionNotice = "הקוד נשלח לפני \(seconds) שניות. השליחה האוטומטית בוטלה כדי לאפשר לך לצפות בהיסטוריה."
        } else {
            suppressionNotice = nil
        }
    }
    
    private func triggerDisarm(source: String) async {
        isExecuting = true
        statusMessage = ""
        
        let result = await PointerApiClient.shared.checkCode(
            vehicleNumber: store.vehicleNumber,
            code: store.pointerCode,
            driverName: store.driverName
        )
        
        isExecuting = false
        
        switch result {
        case .success(let message, _):
            isSuccess = true
            statusMessage = "נוטרל בהצלחה: \(message)"
            store.addEntry(source: source, success: true, message: message)
            
        case .failure(let message, let rc):
            isSuccess = false
            statusMessage = "שגיאה (\(rc)): \(message)"
            store.addEntry(source: source, success: false, message: statusMessage)
            
        case .networkError(let errorMsg):
            isSuccess = false
            statusMessage = errorMsg
            store.addEntry(source: source, success: false, message: errorMsg)
        }
    }
}

struct SettingsSheetView: View {
    @Environment(\.presentationMode) var presentationMode
    @StateObject private var store = DisarmHistoryStore.shared
    
    @State private var vehicleNumber = ""
    @State private var code = ""
    @State private var driverName = ""
    @State private var autoClose = true
    
    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("פרטי רכב וקודן")) {
                    TextField("מספר רכב (ספרות בלבד)", text: $vehicleNumber)
                        .keyboardType(.numberPad)
                    
                    SecureField("קוד פוינטר (4 ספרות)", text: $code)
                        .keyboardType(.numberPad)
                    
                    TextField("שם הנהג", text: $driverName)
                }
                
                Section(header: Text("התנהגות אפליקציה")) {
                    Toggle("סגירה אוטומטית לאחר ניטרול מוצלח", isOn: $autoClose)
                }
            }
            .navigationTitle("הגדרות")
            .navigationBarItems(
                leading: Button("ביטול") { presentationMode.wrappedValue.dismiss() },
                trailing: Button("שמור") {
                    store.saveSettings(
                        vehicleNumber: vehicleNumber,
                        code: code,
                        driverName: driverName,
                        autoClose: autoClose
                    )
                    presentationMode.wrappedValue.dismiss()
                }
            )
            .onAppear {
                vehicleNumber = store.vehicleNumber
                code = store.pointerCode
                driverName = store.driverName
                autoClose = store.autoClose
            }
        }
        .environment(\.layoutDirection, .rightToLeft)
    }
}
