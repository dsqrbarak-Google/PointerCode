import Foundation

public enum PointerResult: Equatable {
    case success(message: String, rc: Int)
    case failure(message: String, rc: Int)
    case networkError(message: String)
}

public actor PointerApiClient {
    public static let shared = PointerApiClient()
    
    private let apiUrl = URL(string: "https://fleet.pointer4u.co.il/code/ws/checkcode.ashx")!
    private let timeoutInterval: TimeInterval = 12.0
    
    private init() {}
    
    public func checkCode(
        vehicleNumber: String,
        code: String,
        driverName: String = ""
    ) async -> PointerResult {
        let cleanVehicleNumber = vehicleNumber.filter { $0.isNumber }
        let cleanCode = code.trimmingCharacters(in: .whitespacesAndNewlines)
        
        guard !cleanVehicleNumber.isEmpty else {
            return .failure(message: "חסר מספר רכב", rc: -1)
        }
        guard cleanCode.count == 4 else {
            return .failure(message: "הקוד חייב להכיל 4 ספרות", rc: -1)
        }
        
        var request = URLRequest(url: apiUrl)
        request.httpMethod = "POST"
        request.timeoutInterval = timeoutInterval
        request.setValue("application/x-www-form-urlencoded; charset=UTF-8", forHTTPHeaderField: "Content-Type")
        request.setValue("Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1", forHTTPHeaderField: "User-Agent")
        request.setValue("https://fleet.pointer4u.co.il", forHTTPHeaderField: "Origin")
        request.setValue("https://fleet.pointer4u.co.il/code/", forHTTPHeaderField: "Referer")
        request.setValue("*/*", forHTTPHeaderField: "Accept")
        
        var components = URLComponents()
        components.queryItems = [
            URLQueryItem(name: "VNumber", value: cleanVehicleNumber),
            URLQueryItem(name: "PhoneNumber", value: ""),
            URLQueryItem(name: "Name", value: driverName),
            URLQueryItem(name: "keypadType", value: ""),
            URLQueryItem(name: "Password", value: cleanCode),
            URLQueryItem(name: "GCMKey", value: "---"),
            URLQueryItem(name: "IMEI", value: "00000000")
        ]
        
        request.httpBody = components.percentEncodedQuery?.data(using: .utf8)
        
        do {
            let (data, response) = try await URLSession.shared.data(for: request)
            
            guard let httpResponse = response as? HTTPURLResponse else {
                return .networkError(message: "תגובה לא תקינה מהשרת")
            }
            
            guard (200...299).contains(httpResponse.statusCode) else {
                return .networkError(message: "שגיאת שרת HTTP: \(httpResponse.statusCode)")
            }
            
            guard let rawBody = String(data: data, encoding: .utf8) else {
                return .networkError(message: "שגיאה בפענוח נתוני התגובה")
            }
            
            return parseResponse(rawBody)
        } catch let urlError as URLError {
            switch urlError.code {
            case .timedOut:
                return .networkError(message: "פסק זמן בחיבור לשרת פוינטר (Timeout)")
            case .notConnectedToInternet, .cannotFindHost:
                return .networkError(message: "אין חיבור לאינטרנט או ששרת פוינטר אינו זמין")
            default:
                return .networkError(message: "שגיאת תקשורת: \(urlError.localizedDescription)")
            }
        } catch {
            return .networkError(message: "שגיאה כללית: \(error.localizedDescription)")
        }
    }
    
    internal func parseResponse(_ rawBody: String) -> PointerResult {
        var cleanBody = rawBody.trimmingCharacters(in: .whitespacesAndNewlines)
        if cleanBody.hasPrefix("\u{FEFF}") {
            cleanBody.removeFirst()
        }
        
        let rc = extractTag(name: "RC", from: cleanBody).flatMap { Int($0.trimmingCharacters(in: .whitespacesAndNewlines)) }
        let remark = extractTag(name: "Remark", from: cleanBody)?.trimmingCharacters(in: .whitespacesAndNewlines) ?? ""
        
        guard let validRc = rc else {
            return .failure(message: "תגובה לא מזוהה משרת פוינטר", rc: -99)
        }
        
        if validRc == 100 {
            let successMsg = !remark.isEmpty ? remark : "נסיעה טובה!"
            return .success(message: successMsg, rc: validRc)
        } else {
            let errorMsg = !remark.isEmpty ? remark : "שגיאה משרת פוינטר (קוד \(validRc))"
            return .failure(message: errorMsg, rc: validRc)
        }
    }
    
    private func extractTag(name: String, from text: String) -> String? {
        let pattern = "<\(name)>(.*?)</\(name)>"
        guard let regex = try? NSRegularExpression(pattern: pattern, options: [.dotMatchesLineSeparators]) else {
            return nil
        }
        let nsRange = NSRange(text.startIndex..<text.endIndex, in: text)
        guard let match = regex.firstMatch(in: text, options: [], range: nsRange),
              match.numberOfRanges > 1,
              let range = Range(match.range(at: 1), in: text) else {
            return nil
        }
        return String(text[range])
    }
}
