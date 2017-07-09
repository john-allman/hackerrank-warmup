import Foundation;

// Enter your code here
let arr = readLine()!.components(separatedBy: " ").map{ Int($0)! }

var minArray = Array(arr.sorted().reversed())
var maxArray = arr.sorted()

minArray.remove(at: 0)
maxArray.remove(at: 0)

print(minArray.reduce(0, +), maxArray.reduce(0, +))