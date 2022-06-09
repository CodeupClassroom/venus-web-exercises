(function(){
    "use strict";

    // alert("Hello world - this is array manip")
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    let theSunAndPluto = planets.shift();
    console.log("I have you now, sun - " + theSunAndPluto);
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    theSunAndPluto += planets.pop();
    console.log("Did I get em both? - " + theSunAndPluto);
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log("Here's indexOf working to find Earth: " + planets.indexOf("Earth"));

    console.log("Here's lastIndexOf working to find Earth: " + planets.lastIndexOf("Earth"));

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();
