




// TODO: Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(i + " x " + num + " = " + num * i);
    }
}

showMultiplicationTable(7);

// TODO: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:



for(let i = 1; i <= 10; i++){
    let randomNum = Math.floor(Math.random() * (200 - 20 + 1)) + 20
    if(i % 2 === 0){
        console.log(randomNum + "is even");
    } else {
        console.log(randomNum + "is odd");
    }
}




// TODO: Create a for loop that uses console.log to create the output shown below.
//
//The code below is technically correct
for(let i = 1; i <= 9; i++){
    switch (i){
        case 1: console.log("1");
            break;
        case 2: console.log("22");
            break;
        case 3: console.log("333");
            break;
        case 4: console.log("4444");
            break;
        case 5: console.log("55555");
            break;
        case 6: console.log("666666");
            break;
        case 7: console.log("7777777");
            break;
        case 8: console.log("88888888");
            break;
        case 9: console.log("999999999");
            break;
    }

}


// TODO: Create a for loop that uses console.log to create the output shown below.

for(let i = 100; i >= 5; i -= 5){
    console.log(i)
}