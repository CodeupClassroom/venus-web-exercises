
let hello = "hello world";
let myName = "bob";
let myLastName = "smith";

// console.log(hello);

/*
AND truth table
OR truth table
*** find a reference

 */
if(myName === "bob" && myLastName === "smith") {
    // do this if the if expression is true
    console.log("I know you");
} else {
    // do this if the if expression IS FALSE
    console.log("I don't know you");
}

// loop through last name printing out each character
// when test is false, loop is over
//      init       test                update
for (let i = 0; i <= myLastName.length; i++) {
    // print out the ith character in myLastName
    console.log(myLastName.charAt(i));
}
// after loop test is false, execution resumes here

// print the lastname backwards
//       s  m  i  t  h
// index 0  1  2  3  4
// start loop with index 4 and go down to 0
for (let i = myLastName.length - 1; i >= 0; i--) {
    console.log(myLastName.charAt(i));
}