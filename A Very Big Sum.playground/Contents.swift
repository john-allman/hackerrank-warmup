import Foundation


let n = Int(readLine()!)!

let arr = readLine()!.components(separatedBy: " ").map{ Int($0)! }


print(arr.reduce(0,+))