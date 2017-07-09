process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    var primarySum = 0;
    var secondarySum = 0;

    var primaryIndex = 0;
    var secondaryIndex = a[0].length - 1;

    for (let [index,val] of a.entries()) {
        primarySum += a[index][primaryIndex];
        primaryIndex += 1;
    
        secondarySum += a[index][secondaryIndex];
        secondaryIndex -= 1;
    }

    console.log(Math.abs(primarySum - secondarySum));
}


