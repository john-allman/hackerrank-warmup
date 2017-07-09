import Foundation;

// Enter your code here

let alice = readLine()!.components(separatedBy: " ").map{ Int($0)! }
let bob = readLine()!.components(separatedBy: " ").map{ Int($0)! }

var aliceResult = 0
var bobResult = 0

for (index,number) in alice.enumerated() {
    aliceResult += number > bob[index] ? 1 : 0
}

for (index,number) in bob.enumerated() {
    bobResult += number > alice[index] ? 1 : 0
}


print(aliceResult,bobResult)