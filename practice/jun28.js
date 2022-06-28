/*
COMMAND LOOPS

a loop that:
 1. accepts a command from the user
 2. acts on the command if the command is valid
 3. continues looping, waiting for the next command
 4. EXITS when the user issues an exit command

 */

let myValue = 1;

let done = false;

// start the command loop
while(!done) {
    // show a menu of options (FINISHED)
    console.log("Hi there");
    console.log("enter 'quit' to exit");
    console.log("enter '1' to print myValue");
    console.log("enter '2' to increment myValue");

    // wait for user to pick
    // get input from the user
    const userChoice = prompt("Enter you choice");

    // process the userChoice
    if(userChoice === "quit" || userChoice === "stop") {
        done = true;
    } else if(userChoice === "1") {
        console.log(`myValue = ${myValue}`);
    } else if(userChoice === "2") {
        myValue++;
    } else {
        console.log("Did not understand your choice: " + userChoice);
    }

    // start loop over if we didnt exit
}

// after quitting keep going from here
console.log("program is over")