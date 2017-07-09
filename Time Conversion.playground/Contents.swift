import Foundation

// Read the string
let dateString = readLine()!

let formatter = DateFormatter()

formatter.dateFormat = "h:mm:ssa"
let convertedDate = formatter.date(from: dateString)

formatter.dateFormat = "HH:mm:ss"
let date24 = formatter.string(from: convertedDate!)

print(date24)