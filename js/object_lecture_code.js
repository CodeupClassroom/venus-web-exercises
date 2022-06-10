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

//Nesting other objects inside of our objects

myHouse.address = {
    streetNum: 8646,
    streetName: "Sunny Oaks",
    city: "San Antonio",
    state: "Texas"
}

console.log(myHouse.address);

myHouse.color = ["blue", "gray"]

console.log(myHouse.color);

//So even though it's nested we can still take our array material and use it here -

myHouse.color.forEach(function(color){
    console.log("Here's a color my house is : " + color);
})

console.log("This is the first color mentioned about my house: " + myHouse.color[0]);

console.log(myHouse.color.join(" | "));

let otherCar = {
    year: 2010,
    make: "Honda",
    model: "Fit",
    owner: {
        name: "A.G",
        age: 27
    }
}

console.log("I do own one other car, but it is " + otherCar.owner.name + "'s car. She is " + otherCar.owner.age + " years old and hates being examples in class :)");

otherCar.horn = function(){
    alert("HONK HONK")
}

//So we used a method to HONK - let's practice the THIS keyword

myHouse.address = "8646 Sunny Oaks, SA, TX 78250"

myHouse.blockPartyInvitation = function(){
    alert("Come on down to " + this.address)
}

let cars = [car, otherCar];

let students = [{name: "Rhiannon H."}, {name: "Jose M"}]

let food = [];

food[0] = {name: "enchiladas verdes", price: 50.00, numberOfEnchiladas: .5}

food[1] = {name: "tuna packets", price: 100.00, numberOfTunas: .01}


console.log(cars);
console.log(students);

console.log(food);

function createPokemon(pokeName, pokeType){

    return {pokemonName: pokeName, pokemonType: pokeType}
}

let pokeObj = createPokemon("Bulbasaur", "Grass")

console.log(pokeObj);