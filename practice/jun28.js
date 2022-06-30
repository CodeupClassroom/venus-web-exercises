"use strict";


(function() {

    let myValue = 1;
    let done = false;


    /*
    COMMAND LOOPS

    a loop that:
     1. accepts a command from the user
     2. acts on the command if the command is valid
     3. continues looping, waiting for the next command
     4. EXITS when the user issues an exit command

     */

    // start the command loop. loop until done is TRUE
    while(!done) {
        printMenu();

        // wait for user to pick
        // get input from the user
        const userChoice = prompt("Enter you choice");

        // process the userChoice
        processUserChoice(userChoice);
    }

    // after quitting keep going from here
    console.log("program is over");

    function printMenu() {
        // show a menu of options (FINISHED)
        console.log("Hi there");
        console.log("enter 'quit' to exit");
        console.log("enter '1' to print myValue");
        console.log("enter '2' to increment myValue");
    }

    function processUserChoice(userChoice) {
        if (userChoice === "quit" || userChoice === "stop") {
            done = true;
        } else if (userChoice === "1") {
            console.log(`myValue = ${myValue}`);
        } else if (userChoice === "2") {
            myValue++;
        } else {
            console.log("Did not understand your choice: " + userChoice);
        }
        return done;
    }
})();
