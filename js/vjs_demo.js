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
    console.log(parent.parentElement);

    // children()
    console.log(parent.children);

    // first()
    console.log(parent.children[0]);
    console.log(parent.firstElementChild);
    parent.firstElementChild.style.backgroundColor = "blue";
    parent.children[0].style.color = "red";

    // last()
    parent.children[parent.children.length - 1].style.backgroundColor = "green";
    console.log(parent.children[parent.children.length - 1]);

    // next()
    console.log(parent.children[0].nextElementSibling);

    // fetch instead of ajax. not as simple as ajax
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then(function(response) {
            // console.log(response);
            return response.json();
        }).then(data => console.log(data));

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
            console.log(response);
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

    const OPEN_WEATHER_APPID = "59e1b99e68e6d9bdb350bf932c7ac068";
    let queryParams = new URLSearchParams({
        APPID: OPEN_WEATHER_APPID,
        q: "San Antonio, US"
    });
    fetch("http://api.openweathermap.org/data/2.5/weather?" + queryParams, {
        method: "GET"
        }
    ).then(async function(response) {
        console.log(await response.json());
    });

    queryParams = new URLSearchParams({
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    });
// concat the query parameters onto the URL
    fetch("http://api.openweathermap.org/data/2.5/onecall?" + queryParams, {
            method: "GET"
        }
    ).then(async function(response) {
        // use await to wait for the json data and then do something with it
        const data = await response.json();
        console.log('The entire response:', data);
        console.log('Diving in - here is current information: ', data.current);
        console.log('A step further - information for tomorrow: ', data.daily[1]);
    });

});