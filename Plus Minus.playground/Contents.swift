import Foundation

// number of elements
let n = Int(readLine()!)!

// read array and map the elements to integer
let arr = readLine()!.components(separatedBy: " ").map{ Int($0)! }


var positive:Double = 0
var negative:Double = 0
var zeros:Double = 0

for number in arr {
    switch number {
    case _ where number < 0:
        negative += 1
    case _ where number > 0:
        positive += 1
    case _ where number == 0:
        zeros += 1
    default:
        continue
    }
}

let positiveResult = positive/Double(arr.count)
let negativeResult = negative/Double(arr.count)
let zerosResult = zeros/Double(arr.count)

print(round(positiveResult * 100000)/100000)
print(round(negativeResult * 1000000)/1000000)
print(round(zerosResult * 1000000)/1000000)