"use strict";

// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray);
//
// for (let myNumber of myArray) {
//     if(myNumber === 5) {
//         myNumber = 50;
//     }
//     console.log("currently on element value " + myNumber);
// }
// // i want myArray to end up as [1, 2, 3, 4, 50]
//
// console.log(myArray);
//
// // named function
// // no arrow function
// function foo() {
//     console.log("hello");
// }
// foo();
//
// // function object
// const foo2 = function() {
//     console.log("hello");
// }
// foo2();
//
// const foo3 = () => {
//     console.log("hello");
// };
//
// const foo4 = _ => {
//     console.log("hello");
// };

const foo4 =  _ => void console.log("hello");
foo4();
//
// const foo5 = _ => "hello";
//
//
//
// // anonymous function
// const myDiv = document.querySelector("#mydiv");
// myDiv.addEventListener("click", function(event) {
//     console.log("hello");
// });
//
// myDiv.addEventListener("click", (event) => "hello");

const person = { name: 'codeup', age: 4 };
const { age, name } = person;
// console.log(name); // 'codeup'
// console.log(age); // 4

const myArray = [1, 2, 3, 4, 5];
const [y, x] = myArray;
console.log(x); // 1
console.log(y); // 2