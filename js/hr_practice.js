let arr = [];
arr[0] = [11, 2, 4];
arr[1] = [4, 5, 6];
arr[2] = [10, 8, -12];

function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < arr[0].length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][arr[0].length - 1 - i];

        console.log(arr[i][i] + " " + arr[i][arr[0].length - 1 - i]);
    }
    return Math.abs(sum1 - sum2);
}

function plusMinus(arr) {
    // Write your code here
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            console.log("n")
            negCount++;
        } else if(arr[i] > 0) {
            console.log("p")
            posCount++;
        } else {
            console.log("z")
            zeroCount++;
        }
    }
    console.log((posCount / arr.length).toFixed(6));
    console.log((negCount / arr.length).toFixed(6));
    console.log((zeroCount / arr.length).toFixed(6));
}

function staircase(n) {
    // Write your code here
    for(let i = 0; i < n; i++) {
        let s = "";
        for(j = 0; j < n - 1 - i; j++) {
            s += " ";
        }
        for(j = 0; j <= i; j++) {
            s += "#";
        }
        console.log(s);
    }
}

function birthdayCakeCandles(candles) {
    // Write your code here
    let maxHeight = Number.NEGATIVE_INFINITY;
    let counts = [];
    for(let i = 0; i < candles.length; i++) {
        if(isNaN(counts[candles[i]]))
            counts[candles[i]] = 0;
        counts[candles[i]]++;
        if(candles[i] > maxHeight)
            maxHeight = candles[i];
    }
    return counts[maxHeight];
}

console.log(diagonalDifference(arr));

plusMinus([-4, 3, -9, 0, 4, 1]);

staircase(5);

console.log(birthdayCakeCandles([3, 2, 1, 3]));