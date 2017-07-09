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
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var minArray = arr.slice();
    var maxArray = arr.slice();

    minArray = minArray.sort().reverse();
    minArray.splice(0,1);

    maxArray = maxArray.sort();
    maxArray.splice(0,1);

    var minSum = minArray.reduce( ( acc, cur ) => acc + cur, 0 );
    var maxSum = maxArray.reduce( ( acc, cur ) => acc + cur, 0 );
    console.log(minSum,maxSum);
}
