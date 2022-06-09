(function(){
    "use strict";
    // alert("Hello world")

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ["Kenneth", "Cody", "Laura", "DocRob"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("Logging the length of names, buddy!");
    console.log(names.length);
    console.log("--------");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("Each element logged below:");
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log("--------");

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    console.log("Using a for loop below, boss - names comin up");
    for (let i = 0; i < names.length; i++){
        console.log(names[i]);
    }
    console.log("--------");

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    console.log("Refactoring to a forEach my dude");
    names.forEach(function(name, index){
        console.log(name + " at index " + index);
    })
    console.log("--------");

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(arr){
        return arr[0];
    };

    function second(arr){
        return arr[1];
    };

    function last(arr){
        return arr[arr.length - 1];
    };

    console.log("The first element was " + first(names));

    console.log("The second element was " + second(names));

    console.log("The last element was " + last(names));


})();
