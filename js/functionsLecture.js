(function() { //setting up a function expression to hide / avoid exposure of all of the code within it

    console.log("Venus - good morning, let's write some functions.");

//A no-input function to say "Hello World"

    function helloWorld() {
        //This is the body of the function - we write our instructions
        alert("Hello world!");

    }

//To use a function: We 'call' it
// helloWorld();

//A more advanced function with some parameters to allow for arguments [meaning - a place for input to come into the function of some kind]

    function sumNums(x, y) { //Now - inside our parenthesis we have TWO PARAMETERS allowing our function to take in TWO PIECES of information
        // alert("I am going to sum up " + x + " and " + y + " for you, user!")
        return x + y;
    }

//Calling a function with arguments - look at how we don't have to re-write [repeat] ourselves. Instead we call our function multiple times to run the instructions in the body

// console.log(sumNums(10, 5));
// console.log(sumNums(100, 5));
// console.log(sumNums(1000, 5));
// console.log(sumNums(11, 15));
// console.log(sumNums(101, 435));
// console.log(sumNums(102, 5.3));

//Anonymous functions - they are still set up rather similarly but lack the name/identifier piece

//The below is called a function expression vs. a function declaration [ * VOCAB PIECE *]
    let honkHorn = function () {
        alert("Beep beep!");
    }

//Hoisting - who dat?
// hoistFunction(); //Weird - I can call this declared function BEFORE [above] it seemes to be defined. <-- we're seeing hoisting

    function hoistFunction() {
        alert("Help! I've been hoisted! Where am I? I think I ended up at the top of the code :O")
    }

//An expression does not like to hoist :(

// let duckCall = function(){
//     alert("Insert duck sound here - QUACK")
// }
// duckCall();

//Let's refactor with some default parameters

    function sumNumsWithDefault(x, y = 10) { //Now - inside our parenthesis we have TWO PARAMETERS allowing our function to take in TWO PIECES of information
        // alert("I am going to sum up " + x + " and " + y + " for you, user!")
        return x + y;
    }

//Let's talk about ** S C O P E **

//Global scope
    let globalVar = "Hi! I'm globally scoped ^_^";

// function sayHi(){
//
//     alert(globalVar);
// }
//
// sayHi();
//Local scope

// function scopeComparison(){
//     let localVar = "Look, I'm a local guy!"
//     alert(localVar);
//     alert(globalVar);
//
// }
//
// scopeComparison();
//
// alert(localVar);

//A little bit more with scope

    let x = 300;
    let y = 100;
    let globalNum = 7;

    console.log("Currently globalNum is:" + globalNum);

    function scopeExample() {
        let x = 1;
        let y = 2;

        console.log("x: " + x + " | y:" + y);

        globalNum = 77;

        console.log("Currently globalNum is:" + globalNum);

        return x + y;
    }


    console.log('x: ' + x + ' y: ' + y);
    let returnValue = scopeExample();
    console.log(returnValue);

    console.log("Currently globalNum is:" + globalNum);

})();

//globalVar //cant get me here - I'm outside of the IIFE