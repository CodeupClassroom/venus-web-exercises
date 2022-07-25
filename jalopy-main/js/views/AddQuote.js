import createView from "../createView.js"
import {showNotification} from "../messaging.js";

export default function insetQuoteView(props) {
    return `
        <form class="container">
            <h1>New Quote</h1>
            <h1>New Quote</h1>
            <form>
                <label for="quoteInput" class="form-label">Quote</label>
                <input class="form-control" list="datalistOptions" id="quoteInput" placeholder="Enter the new quote">

                <label for="authorInput" class="form-label">Author</label>
                <input class="form-control" list="datalistOptions" id="authorInput" placeholder="Enter the author">

                <button class="form-control" id="insert-btn">Insert Quote</button>
            </form>
        </div>
`;
}

export function insertQuoteEvents() {
    const addButton = document.querySelector("#insert-btn");
    addButton.addEventListener("click", insertQuote);
}

function insertQuote() {
    // 1. validate the data (quote and author)
    const quoteInput = document.querySelector("#quoteInput");
    const quoteText = quoteInput.value.trim();

    const authorInput = document.querySelector("#authorInput");
    let authorText = authorInput.value.trim();

    if(quoteText.length < 1) {
        showNotification("Hey there, quote cannot be blank", "danger");
        return;
    }
    if(authorText.length < 1) {
        authorText = "Anonymous";
    }

    const newQuote = {
        quote: quoteText,
        author: authorText
    }

    // 2. if we get here, we can insert a new quote
    // console.log(quoteText + " | " + authorText );
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': DOG_QUOTE_API_KEY
        },
        body: JSON.stringify([newQuote])
    }
    fetch("https://dogfacts.fulgentcorp.com:12250/v1/quotes", requestOptions)
        .then(function(response) {
            if(!response.ok) {
                console.log("insert quote error: " + response.status);
            } else {
                console.log("insert quote ok");
                createView("/quotes");
            }
        });

}
