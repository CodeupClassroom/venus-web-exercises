(function(){

"use strict";

// If you want to quickly 'comment' out - try cmd + /
// alert("Sanity check - is this hooked up to the html file?")

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

//Step 1: I need to write a function named 'sayHello'
//Step 2: That function needs 1 parameter named 'name'
//Step 3: The body [the instructions] for the function need to RETURN a message
//Step 4: That message is a STRING that says hello to 'name'

function sayHello(name){


    return "Hello, " + name;
}


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Kenneth");

console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


let myName = "Kendawg";

console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random

var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 */

// i. function name = isTwo
// ii. take in one param of num
// iii. return boolean
// iv. boolean modified on T/F whether num === 2

function isTwo(num){

    return num === 2; //Is the thing I got the same value AND data type as the number 2? Let me know and give me back a TRUE or FALSE
}


 /** Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
//
// console.log("The random number is currently = " + random);
// console.log(isTwo(random));;

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// i. function named calculateTip
// ii. sounds like a two parameter kind of show "a tip" and "the bill"
// iii. return number
// iv. the number is the math of the amount to tip based on bill total

function calculateTip(tipAmount, billTotal){

    let tipInDollars = tipAmount * billTotal;

    // return tipAmount * billTotal; Maybe instead of returning the math directly, you used a variable instead:

    return tipInDollars;
}

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

alert("Thank you for eating at Ken's Krazy Fish Fry - let's see what your bill is and how much you want to tip!")

let totalAmount = prompt("How much was your bill today at Ken's Krazy Fish Fry?")

let tipAsDecimal = prompt("Alright, cool! How much would you like to tip for your bill of $" + totalAmount + "?")

alert("Alright, using my super cool javascript function, I have calculated that you will tip $" + calculateTip(tipAsDecimal, totalAmount))

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(originalPrice, discountAsDeci){

    // return originalPrice - (originalPrice * discountAsDeci);
    //Below: A more advanced thought, we can call calculateTip into the mix here to D R Y - do our math that we want to do without rewriting it :D
    return originalPrice - calculateTip(discountAsDeci, originalPrice);
}

})();