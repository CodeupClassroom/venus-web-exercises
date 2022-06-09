// alert("Hello world from [arrays]")

//Welcome to the introduction to ARRAYS
//WHAT? Array is a FLAT, ORDERED LIST of DATA
//IN JS can mix and match our data types in the array as JS allows that [JAVA does not]

//Arrays = []
//Body / block scope = {}

// [];
//
// ["Some", "number", "of", "strings"];
//
// [1, true, "string of true", 45];

//Arrays can be assigned to be the value of a variable

let favFoods = ["hamburger", "enchiladas verdes", "thai fried rice", "bbq chicken pizza"]

// console.log(favFoods);

//So, console.logging and opening up our array in our developer pane showed the 'indices' of the array. Our elements start at 0 and count UP from 0.

//If I want to know how many elements are in my array - use .length

// console.log(favFoods.length);

//Now, I can talk to specific INDICES to get that value from that one portion of the array
// console.log(favFoods[0]);//"hamburger"

//For example: It's enchilada time!
// console.log("Hey man, that looks great I love " + favFoods[3]);

//Iteration station: How do we loop [iterate] through an array?

// for(let i = 0; i < 4; i++){
//
//
//     console.log("Currently i is the number " + i + ". That means we are going to see this from the array:" + favFoods[i]); //i will represent the number of times the loop has run [0, 1, 2, 3] times and log the appropriate index
//
// }


//.forEach only with 'element' parameter
// favFoods.forEach(function (food) {
//     console.log(food);
// });

//.forEach only with multiple parameters
favFoods.forEach(function (food, index) {
    console.log("favFoods[" + index + "] = " + food);
})

//How would I bring an array into a function?

function logElements(array){
    array.forEach(function (element) {
        console.log(element);
    })

}

