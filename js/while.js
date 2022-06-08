// Create a while loop that uses console.log() to create the output shown below.

// let num = 1;
//
// while(num < 65536){
//     num *= 2; //num = num * 2;
//     console.log(num);
// }

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// Math.floor(Math.random() * (max - min) ) + min;

//Setting up vars I need
let allCones = Math.floor(Math.random() * (100 - 50) ) + 50;

do {
    let conesSold = Math.floor(Math.random() * 5) + 1; //Customer buys cones

    if(allCones >= conesSold){
        //happy path
        allCones = allCones - conesSold; //Take away the cones sold from our 'total' (allCones)
        console.log(conesSold + " cones sold! I have " + allCones);
    } else {
        //unhappy path
        console.log("Oops - I only have " + allCones + " left. Sorry, I can't sell you " + conesSold + ".")
    }

} while (allCones !== 0)

console.log("ALL the CONES are SOLD! Thank you for your business :D")
//sold all cones conclusion