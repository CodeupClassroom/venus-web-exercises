"use strict";

// {} our objects will have this punctuation as a wrapper around them

let blankObj = {};

console.log(blankObj);

//A blank one is cool and all - but what about that "grouping" of information and functionality that we described?

let car = {
    year: 2017,
    make: "Chevrolet",
    model: "Silverado"
}

console.log(car);

//So far, we've been using "Object Literal Notation" - {}

let customObject = new Object();

console.log("Hey ma I'm using the object constructor!" + customObject);

//Okay, so we prefer the Object Literal Notation for our work going forward - is the only way to build a functioning object on declaration?

let myHouse = {};

console.log(myHouse);

//Oops - meant to actually share some cool deets about my house, let's set up some properties[information] to do so with dot notation
myHouse.color = "Very odd gray/blue thing";
myHouse.squareFeet = 1297;
myHouse.bedrooms = 3;
myHouse.bathrooms = 2;

//Let me try telling you about my house again:
console.log(myHouse);

//WOOPS Forgot to tell you my address - hard to get to the block party without it! This time time let's use array notation to assign my property
myHouse["address"] = "8646 Sunny Oaks, SA, TX 78250";

console.log(myHouse);

//Okay - so we've set up objects with object literal, we've set properties with dot notation && array/bracket notation, but how would we grab just one part of that group of data to use?

//Let's say I want to send you my address but not all the other information about my house

console.log("Come on down to a block party at " + myHouse.address);

//Last time we had a party Cody couldn't find my house because he didn't know what color it was - let me add that in

console.log("Come on down to a block party at " + myHouse.address + ". You'll know it's my house because it is a " + myHouse.color);