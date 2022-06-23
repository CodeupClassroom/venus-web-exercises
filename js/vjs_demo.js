// wait for dom to load
// from https://stackoverflow.com/questions/2304941/what-is-the-non-jquery-equivalent-of-document-ready
document.addEventListener("DOMContentLoaded", async function () {
    console.log("DOM has loaded");

    // select an element by id
    let element = document.querySelector("#box1");
    console.log(element);

    // select the boxes with white-text class
    // note: don't use .querySelecetor() here
    let elements = document.querySelectorAll(".white-text");
    console.log(elements);

    // select all divs
    elements = document.querySelectorAll("div");
    console.log(elements);

    // multiple selectors
    elements = document.querySelectorAll("head, body");
    console.log(elements);

    // all selector
    elements = document.querySelectorAll("*");
    console.log(elements);

    console.log(elements[0]);
    console.log(elements[0].parentElement);
    console.log(elements[0].parentNode);

    // mouse events
    document.querySelector("#box1").addEventListener("click", function (event) {
        const objectClicked = event.target;
        console.log("you clicked: " + objectClicked.id);
    });

    document.querySelector("#box2").addEventListener("dblclick", function (event) {
        console.log("you double-clicked: " + this.id);
    });

    // this is where vanilla js sucks and jquery rocks
    // cannot do this
    // document.querySelectorAll(".white-text").addEventListener("mouseenter", function(event) {
    //     console.log("mouse enter happens");
    // });
    // must instead do this
    document.querySelectorAll(".white-text").forEach(function (obj) {
        obj.addEventListener("mouseenter", function (event) {
            console.log("mouse enter happens");
        });
    });


    // document.querySelectorAll(".white-text").addEventListener("mouseleave", function(event) {
    //     console.log("mouse leave happens");
    // });

    function myKeyPressFunction(event) {
        console.log("key press: " + event.code);
    }

    // keyboard events
    // note that addEventListener is effectively jquery's "on" function
    // vanilla js does not have handler-specific add functions like jquery
    document.querySelector("body").addEventListener("keydown", function (event) {
        console.log("key down: " + event.code);
    });
    document.querySelector("body").addEventListener("keyup", function (event) {
        console.log("key up: " + event.code);
    });
    document.querySelector("body").addEventListener("keypress", myKeyPressFunction);
    document.querySelector("body").removeEventListener("keypress", myKeyPressFunction);

    // attributes
    document.querySelector("#box3").innerText = "<p>Box 3</p>";
    // document.querySelector("#box3").innerHTML = "<p>Box 3</p>";

    // css
    document.querySelector("#box3").style.width = "200px";

    // ok this isn't as nice as jquery, but it's not too bad
    document.querySelectorAll(".box").forEach(function (obj) {
        obj.style.backgroundColor = "goldenrod";
    });

    document.querySelector("#box3").classList.add("white-text");
    document.querySelector("#box3").classList.remove("white-text");
    document.querySelector("#box3").classList.toggle("white-text");
    document.querySelector("#box3").classList.toggle("white-text");

    // traversing

    // each() is like document.querySelectorAll("...").forEach(function(...

    // parent()
    let parent = document.querySelector("#box3").parentElement;
    console.log(parent);

    // children()
    console.log(parent.children);

    // first()
    console.log(parent.children[0]);

    // last()
    console.log(parent.children[parent.children.length - 1]);
    parent.children[parent.children.length - 1].style

    // next()
    console.log(parent.children[0].nextElementSibling);

    // fetch instead of ajax. not as simple as ajax
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then(response => response.json())
        .then(data => console.log(data));

    // use async/await to make it a simpler function
    async function getPokeStats(pokeName) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName);
        return response.json();
    }

    getPokeStats("pikachu").then(function(pokeStats) {
        console.log(pokeStats);
    });
    // or this
    // console.log(await getPokeStats("pikachu"));

    // catch and finally
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then(function(response) {
            console.log("response code received: " + response.status);
            // console.log("response status text received: " + response.statusText);
            return response.json();
        }).then(function(data) {
            console.log(data);
        }).catch(function(error) {
            console.error('Error:', error);
        }).finally(function() {
            console.log("do some cleanup here if necessary");
        });

});