// // if example
// if (condition) {
//     // code here gets executed if condition evaluates to true
// }

// if/else example
// if (condition) {
//     // code here gets executed if condition evaluates to true
// } else {
//     // code here gets executed if condition evaluates to false
// }

// Example 1
// let weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("Everything has been deleted");
// } else {
//     alert("Operation Canceled!");
// }

// let pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

let pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}







// let message;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
//
// // the above if/else can be re-written as:
// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";

