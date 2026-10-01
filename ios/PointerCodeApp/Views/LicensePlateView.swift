import SwiftUI

public struct LicensePlateView: View {
    public let vehicleNumber: String
    
    public init(vehicleNumber: String) {
        self.vehicleNumber = vehicleNumber
    }
    
    private var formattedNumber: String {
        let clean = vehicleNumber.filter { $0.isNumber }
        if clean.count == 7 {
            // XX-XXX-XX
            let p1 = clean.prefix(2)
            let p2 = clean.dropFirst(2).prefix(3)
            let p3 = clean.suffix(2)
            return "\(p1)-\(p2)-\(p3)"
        } else if clean.count == 8 {
            // XXX-XX-XXX
            let p1 = clean.prefix(3)
            let p2 = clean.dropFirst(3).prefix(2)
            let p3 = clean.suffix(3)
            return "\(p1)-\(p2)-\(p3)"
        }
        return clean.isEmpty ? "000-00-000" : clean
    }
    
    public var body: some View {
        HStack(spacing: 0) {
            // Left Blue Strip (Israeli Euro-style band)
            ZStack {
                Color(red: 0.08, green: 0.35, blue: 0.75)
                VStack(spacing: 2) {
                    Image(systemName: "flag.fill")
                        .font(.system(size: 9))
                        .foregroundColor(.white)
                    Text("IL")
                        .font(.system(size: 11, weight: .black, design: .rounded))
                        .foregroundColor(.white)
                    Text("ישראל")
                        .font(.system(size: 7, weight: .bold))
                        .foregroundColor(.white)
                }
                .padding(.horizontal, 4)
            }
            .frame(width: 32)
            
            // Yellow Main Plate Area
            ZStack {
                Color(red: 1.0, green: 0.81, blue: 0.0) // #FFCF00 Israeli Plate Yellow
                
                Text(formattedNumber)
                    .font(.system(size: 28, weight: .black, design: .monospaced))
                    .foregroundColor(.black)
                    .tracking(2)
                    .padding(.horizontal, 16)
                    .padding(.vertical, 8)
            }
        }
        .frame(height: 54)
        .cornerRadius(8)
        .overlay(
            RoundedRectangle(cornerRadius: 8)
                .stroke(Color.black, lineWidth: 3)
        )
        .shadow(color: Color.black.opacity(0.18), radius: 6, x: 0, y: 3)
    }
}

#Preview {
    LicensePlateView(vehicleNumber: "75647002")
        .padding()
}
