// wait for dom to load
// from https://stackoverflow.com/questions/2304941/what-is-the-non-jquery-equivalent-of-document-ready
document.addEventListener("DOMContentLoaded", function() {
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

    // ok this sucks
    document.querySelectorAll(".box").forEach(function (obj) {
        obj.style.backgroundColor = "goldenrod";
    });


});