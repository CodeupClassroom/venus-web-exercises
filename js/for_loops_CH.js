




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

for(let i = 1; i <= 9; i++){
    console.log(i)
}


// TODO: Create a for loop that uses console.log to create the output shown below.

