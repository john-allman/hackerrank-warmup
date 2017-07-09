import Foundation

// read the integer n
let n = Int(readLine()!)!

// print the staircase
for i in 1...n {
    var line = ""
    for j in 1...n {
        if j > n - i {
            line += "#"
        } else {
            line += " "
        }
    }
    print(line)
}