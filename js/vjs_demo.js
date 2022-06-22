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
});