// alert("Hello world - are you there? This is me loop lecture")


//While vs Do-While

//While loops asks - do I do this thing? And then proceeds to do the thing [the code instructions within the curly braces]
let i = 1;

// while (i < 5){
//     //do some stuff while i is less than 5
//     console.log("This is the " + i + " number run of this particular while loop.")
//     i++;
// }

let userPreference = confirm("Do you want to count some numbers?")

while(userPreference){
    console.log("Okay cool - I started off at 1, and we're currently on " + i);
    i++;
    userPreference = confirm("Still want to count some numbers?")
}

//Do-while - check for the condition AFTER running the code at least once [think coyote vs roadrunner]

do {
    console.log("Okay cool - I started off at 1, and we're currently on " + i);
    i++;
    userPreference = confirm("Still want to count some numbers?")
} while (userPreference)