import Foundation


let n = Int(readLine()!)!

var arr: [[Int]] = []

for _ in 0..<n {
    arr.append(readLine()!.components(separatedBy: " ").map{ Int($0)! })
}



var primarySum = 0
var secondarySum = 0

var primaryIndex = 0
var secondaryIndex = arr[0].count - 1

for (index,array) in arr.enumerated(){
    primarySum += arr[index][primaryIndex]
    primaryIndex += 1
    
    secondarySum += arr[index][secondaryIndex]
    secondaryIndex -= 1
}

print(abs(primarySum - secondarySum))
