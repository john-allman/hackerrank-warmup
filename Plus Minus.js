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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var positive = 0;
    var negative = 0;
    var zeros = 0;

    for (let [index,number] of arr.entries()) {
        if (number < 0) { negative += 1; }
        if (number > 0) { positive += 1; }
        if (number == 0) { zeros += 1; }
    }

    var positiveResult = positive/arr.length;
    var negativeResult = negative/arr.length;
    var zerosResult = zeros/arr.length;

    console.log(Math.round(positiveResult * 100000)/100000)
    console.log(Math.round(negativeResult * 1000000)/1000000)
    console.log(Math.round(zerosResult * 1000000)/1000000)
}
