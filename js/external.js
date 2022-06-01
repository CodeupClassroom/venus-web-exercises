// Our external file with some code to run:


// console.log("Hey wazzup - this is the external js file loaded in and executing this code :D ")
//
// console.log("thx and bai")

//Why console.log? Error tracking! Messages to ourselves! Whatever you might need it for

// console.log("Super complicated code inserted here");
//
// console.log("Is this working? Line 11");

//Use strict

//Okay. Let's add 'use strict' and see if it still works [we ran the example and saw it working :D]
// "use strict";
//
// myAge = 25;
//
// console.log(myAge + " was my age!")
//
// Alert / Confirm / Prompt examples;

alert("Hey User - sign up for my NEW IMPROVED COOL DISCOUNT INFORMATIVE NEWSLETTER by CLICKING HERE")
alert("I put a message inside of the parenthesis and it causes a pop up window to appear :D")

let secretMessage = "Hey - if you see this message, you're MILLIONTH VISITOR TO KENHOWELL.COM and YOU GOT A FREE KOOZIE"

alert(secretMessage)

let userResponse = confirm("Would you like to sign up for super cool newsletter related media directly to your inbox today?? [click ok]")

console.log(userResponse);

userResponse = confirm("Would you like to sign up for super cool newsletter related media directly to your inbox today?? [click cancel]")

console.log(userResponse);

let userInput = prompt("What is your favorite food to eat on a Wednesday?")

console.log(userInput);

userInput = prompt("What is your favorite food to eat on a Wednesday?")

console.log(userInput);

alert("Our friend Cody said for lunch today that he wanted " + userInput)