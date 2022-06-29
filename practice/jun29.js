"use strict";

(function() {


    // GUESSING GAME
    // computer starts with # from 1 to 10
    let answer = randomNumberInRange(1, 10);
    console.log("answer is " + answer);

    let done = false;

    /*
    COMMAND LOOPS

    a loop that:
     1. user guesses a number from 1 to 10
     2. if user choice < answer, print TOO LOW
     3. if user choice > answer, print TOO HIGH
     4. EXITS when the user guesses the # OR issues an exit command

     */

    // start the command loop. loop until done is TRUE
    while(!done) {
        // wait for user to pick
        // get input from the user
        const userChoice = prompt("Guess a number from 1 to 10. Enter 'quit' to exit");

        // process the userChoice
        processUserChoice(userChoice);
    }

    // after quitting keep going from here
    console.log("program is over");

    function randomNumberInRange (minVal, maxVal) {
        // inclusive
        return Math.floor(Math.random() * maxVal) + minVal;
    }

    function processUserChoice(userChoice) {
        if (userChoice === "quit" || userChoice === "stop") {
            done = true;
        } else if (userChoice < answer) {
            console.log(`TOO LOW`);
        } else if (userChoice > answer) {
            console.log("TOO HIGH")
        } else if (userChoice == answer) {
            console.log("CORRECT!");
            done = true;
        } else {
            console.log("Did not understand your choice: " + userChoice);
        }
    }



})();