"use strict";

// alert("Sanity test - is this working HELLO WORLD")

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
// function analyzeColor(color){
//     let message = "";
//
//     color = color.toLowerCase();
//
//     if(color === "red"){
//         message = "Red is a common color associated with stop signs! Or more deliciously apples";
//     } else if (color === "orange"){
//         message = color + " is associated with a famous royal family from Europe as well as the eponymous fruit!";
//     } else if (color === "yellow") {
//         message = "Yellow sounds like a lemon to me - pretty good for a hot day when you make some lemonade!";
//     } else {
//         message = color + "? I'd have to look up " + color + ".";
//     }
//
//     return message;
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor)); //Passing "randomColor" as argument to "analyzeColor" who returns a string into the .log function :D

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(color){
    console.log("The color is " + color);

    let message = "";

    color = color.toLowerCase();

    switch(color){
        case "red":
            message = "Red is a common color associated with stop signs! Or more deliciously apples";
            break;
        case "orange":
            message = color + " is associated with a famous royal family from Europe as well as the eponymous fruit!"
            break;
        case "yellow":
            message = "Yellow sounds like a lemon to me - pretty good for a hot day when you make some lemonade!"
            break;
        default:
            message = color + "? I'd have to look up " + color + ".";
            break;

    }

    return message;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let userInput = prompt("Would you please tell me your favorite color? :)")

// alert(analyzeColor(userInput)) //We're feeding userInput into analyzeColor - then feeding return [the results] of analyzeColor into the alert

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, totalPrice){

    if (luckyNum === 0){ // no discount
        return totalPrice;
    } else if (luckyNum === 1) { //ten percent
        return totalPrice - (totalPrice * .10);
    } else if (luckyNum === 2){ //25 percent off
        return totalPrice - (totalPrice * .25);
    } else if (luckyNum === 3){ //35 percent
        return totalPrice - (totalPrice * .35);
    } else if (luckyNum === 4){ //50% off
        return totalPrice - (totalPrice * .50);
    } else if (luckyNum === 5){ //Free :o
        return 0;
    }


}



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

//Prompt - alert of what luckyNum was, total was, and price after was

// let userTotal = prompt("Why hello there - thanks for shopping with us today, what was your total bill?")
//
// alert("Wow! Okay, well, today you drew a lucky number of " + luckyNumber +". Your total today was $" + userTotal + ". That means you actually owe us $" + calculateTotal(luckyNumber, userTotal))

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function numberGame() {
    let userStart = confirm("Would you like to enter a number?");

    if (userStart) {
        //Happy path where user wanted to give us a number
        let userNum = prompt("Okay! Cool - gimme a number please!");

        userNum = Number(userNum);

        if (isNaN(userNum)) { //If I convert the input to a Number did I get NaN [true] or a numeric false [false - it is a number I got]
            alert("Incorrect data type - you entered a value that was not a number. Please run the application and try again.")

        } else {
            alert("Your number plus 100 is " + (userNum + 100));

            if (userNum % 2 === 0) {
                alert("Your number was even :D")
            } else {
                alert("Your number was odd :D")
            }

            if (userNum >= 0) {
                alert("You were feeling POSITIVE today with your number")
            } else {
                alert("You were feeling negative today with your number")
            }
        }
    } else {
        //Unhappy path where user is against numbers? Did not want to play? Just did not give us a "true" to continue
        alert("Sorry to ask - just wanted to see if you wanted to enter a number. TTYL :)")
    }
}