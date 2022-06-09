// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

let userNumber = prompt("Hello user - can you give me a number between ONE and FIFTY plz");

while(true){

    if(userNumber % 2 !== 0 && userNumber >= 1 && userNumber <= 50){
        console.log("Odd number above one and below fifty detected - user allowed through");
        break;
    }

    userNumber = prompt("Haha - that is not an odd number :) Try again! Can you give me an odd number between 1 - 50?")

}


//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

userNumber = Number(userNumber);

for(let i = 1; i <= 50; i++){

    if(i % 2 === 0){
        continue;
    } else if (i === userNumber){
   
        console.log("Woops! Skipping " + userNumber)
    }
    console.log(i)
}