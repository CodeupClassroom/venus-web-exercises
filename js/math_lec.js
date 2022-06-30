let x = 3.14159;


console.log(roundToDecimal(x, 10000));

function roundToDecimal(number, decimalPlace) {
    let y = number * decimalPlace; // changes y to 314.159
    y = Math.round(y); // round(314.159) -> 314
    y = y / decimalPlace; // changes y to 3.14
    return y;
}

let z = Math.pow(2, 16);
z = 2 ** 16;

