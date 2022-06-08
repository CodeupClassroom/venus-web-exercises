"use strict";

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num){
       for(let i = 1; i <= 10; i++){
           //stuff to do during a for loop
           console.log(num + " x " + i + " = " + (num * i))
       }

}
//
// showMultiplicationTable(7)
// showMultiplicationTable(42)
// showMultiplicationTable(-4)

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

// for(let i = 0; i < 10; i++){
//     let randomNum = Math.floor(Math.random() * (200 - 20) ) + 20;
//
//     if(randomNum % 2 === 0){
//         console.log(randomNum + "! Nice, that is an even number.")
//     } else {
//         console.log(randomNum + "! Pretty cool odd number.")
//
//     }
// }

// Create a for loop that uses console.log to create the output shown below.

// for (let i = 1; i <= 9; i++){
//     let iAsString = i.toString();
//     console.log(iAsString.repeat(i));
//
// }

// Create a for loop that uses console.log to create the output shown below.

for(let i = 100; i > 0; i -= 5){
    console.log(i);
}