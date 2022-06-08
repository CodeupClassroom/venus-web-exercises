




// TODO # 1 Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

//Solution

while(true){

    let userInput = prompt("Please enter an Odd Number between 1 and 50");

    userInput =  parseInt(userInput);

    if(isNaN(userInput)){
        alert("Input is not a number. Try again. ");
        continue;
    }

    if(userInput % 2 === 0){
        alert("Input is Even. Try again. ");
        continue;
    }

    if(userInput < 1){
        alert("Input is less than 1. Try again. ");
        continue;

    }

    if(userInput > 50){
        alert("Input is greater than 50. Try again. ");
        continue;
    }

    break;

}
// alternate solution using || operators
while(true){
    let userInput = prompt("Please enter an Odd Number between 1 and 50");
    userInput =  parseInt(userInput);

    if(isNaN(userInput) || userInput % 2 === 0 || userInput < 1 || userInput > 50){
        alert("Input is Invalid. Try again. ");
        continue;
    }

    break;
}




//  TODO # 2  Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.