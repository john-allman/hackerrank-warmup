import Foundation;

// Enter your code here

let n = Int(readLine()!)!

let candles = readLine()!.components(separatedBy: " ").map{ Int($0)! }

let maxHeight = candles.max()
var result = 0

for candle in candles {
    if candle == maxHeight {
        result += 1
    }
}

print(result)