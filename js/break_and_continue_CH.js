




// TODO # 1 Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

//Solution using While, Continue, Break, If's with no else statements.

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

//alternate solution using do while but doesn't include a break statement. Accomplishes task but doesn't meet the break statement requirement of the question.

do {
    var userInput = prompt("Please enter an Odd Number between 1 and 50");
    userInput =  parseInt(userInput);
}while(isNaN(userInput) || userInput % 2 === 0 || userInput < 1 || userInput > 50);




//  TODO # 2  Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

for (let i = 1; i <= 50; i++){
    if(userInput === i){
        console.log("Yikes Skipping " + i);
        continue;
    }

    if(i % 2 !== 0){
        console.log(i + " is an odd number")
    }

}