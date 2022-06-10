//Setting up my first Codeup Array [this was you during the intro exercise]

let myCats = ["Peanut", "Pumpkin", "Pinch"];

//Wheres that first cat at - ah, index 0!

// console.log("This cat likes to yell at 4:30 in the morning = " + myCats[0]);

//We need to learn more complicated ways to actually manipulate our arrays beyond this

// The push and unshift methods can be used to add items to an array. The primary difference is that push adds an item to the end of an array, and unshift adds an item to the beginning of an array.

//ROYGBIV - red orange yellow green blue indigo violet
let colorsOfTheRainbow = ["Orange", "Yellow", "Green", "Blue"];
//Our rainbow needs work :|

// console.log(colorsOfTheRainbow);

//We are missing "red" - let's get red in the front of this rainbow

colorsOfTheRainbow.unshift("Red")

// console.log(colorsOfTheRainbow);

//We wanna get some indigo and some violet going - sounds like a job for .push!

colorsOfTheRainbow.push("Indigo", "Violet");
//
// console.log(colorsOfTheRainbow);

// The pop and shift methods can be used to remove items from an array. Both methods will return the removed item.

let favoriteShows = ["Dexter", "Over the Garden Wall", "Battlestar Galactica", "Game of Thrones"];

// console.log("My favorite shows list: ");
// console.log(favoriteShows);
//
// console.log("Actually, I changed my mind about this last one - " + favoriteShows[favoriteShows.length - 1])

let removedLastShow = favoriteShows.pop();

// console.log("Removed the last show - it was " + removedLastShow);
//
// console.log("Now my favorite shows are " + favoriteShows);

//Let's take care of Dexter - that show also ended a little funky :(

let removedFirstShow = favoriteShows.shift();

// console.log("Okay bud - got rid of that first element for ya, here it is - 'removedFirstShow' = " + removedFirstShow);
// console.log(favoriteShows);

// //The indexOf and lastIndexOf array methods provide the capability to find the index of an item.
//
// let panamaArray = ["a", "man", "a", "plan", "a", "canal", "panama"];
//
// let indexOfPlan = panamaArray.indexOf("plan");
//
// console.log("Here's what I found looking for what you asked - the index is = " + indexOfPlan);

//What if we look for something not in the array? Maybe we mixed up our neighboring American countries :o
//
// let indexOfVenezuela = panamaArray.indexOf("Venezuela");
//
// console.log("Here's what I found looking for what you asked - the index is = " + indexOfVenezuela);

//How about our multiple strings of "a"?
// console.log("---------------------");
// console.log( panamaArray);
//
// let firstCharacterA = panamaArray.indexOf("a");
//
// console.log("The first string of 'a' we hit is at the index of " + firstCharacterA);
//
// let lastCharacterA = panamaArray.lastIndexOf("a");
//
// console.log("The last string of 'a' we hit is at the index of " + lastCharacterA);

//The .slice method allows us to copy a portion of an array. The slice method optionally takes two arguments to define where the portion we want starts and stops. .slice will not modify the original array; it will return a new array.

let someTexasCities = ["Del Rio", "Austin", "San Angelo", "San Antonio", "Houston", "Dallas", "Waco"];

// console.log(someTexasCities);

let myHomeTown = someTexasCities.slice(3,4)
let placesMyDadLived = someTexasCities.slice(1,4)
let placesIHitTrafficAlot = someTexasCities.slice(3)
// console.log("This is my home town - born in methodist hospital! Woo : " + myHomeTown);
// console.log("My pops has lived in " + placesMyDadLived);
// console.log("I often hit traffic travelling in " + placesIHitTrafficAlot);

//Sort and Reverse

let petNames = ["Pumpkin", "Phoenix",   "Peanut", "Pinch"]

petNames.sort();

let listFruits = ["apple", "bananas", "dragonfruit", "peaches"];

listFruits.reverse();

// console.log(petNames);

//Join and Split

let cohortsTaught = "Apex,Bash,Bio,Marco, Quasar,Sirius,Venus";

let cohortsTaughtAsArray = cohortsTaught.split(",")

// cohortsTaughtAsArray.forEach(function(cohort){
//     console.log("I had some fun teaching with the folks in " + cohort);
// })

let exampleVariable = "Super Smash Brothers | Goldeneye | Pilotwings | Super Mario 64 | Super Mario Kart 64";

let nintendo64Array = exampleVariable.split(" | ")

// nintendo64Array.forEach((function (game) {
//     console.log("Here's a cool old game " + game);
// }))

let openingLineOfABook = ["It", " was ", " a ", " pleasure ", " to ", " burn."]

// console.log(openingLineOfABook);

let lineAsString = openingLineOfABook.join("");
console.log(lineAsString);

let groceriesAsArray = ["packaged tuna", "one minute meal", "blueberries", "queso"]

let groceriesString = groceriesAsArray.join("; ");

console.log(groceriesString);