

// HTML function
export default function DogFactsView(props) {
    console.log(props);

    let html = buildTopHTML();

    html += buildDogFactsHTML(props.dogFacts);

    html += buildBottomHTML();

    return html;
}

function buildTopHTML() {
    return `
        <h1>Dog Facts</h1>
        <div class="container-fluid">`;
}

function buildDogFactsHTML(dogFacts) {
    let html = "";
    for (let i = 0; i < dogFacts.length; i++) {
        html += buildDogFactHTML(dogFacts[i]);
    }
    return html;
}

function buildDogFactHTML(dogFact) {
    return `
            <div class="card">
                <div class="card-body">
                    <p class="dog-fact" style="visibility: hidden">${dogFact}</p>
                </div>
            </div>
        `;
}

function buildBottomHTML() {
    return `
            <button class="form-control" id="show-fact-btn">Show Facts</button>
            <a data-link href="/insert-dog-fact">Insert Dog Fact</a>
        </div>
`;
}


// JS function
export function DogFactsEvents() {
    const button = document.querySelector("#show-fact-btn");
    button.addEventListener("click", function(event) {
        let dogFacts = document.querySelectorAll(".dog-fact");
        for (let i = 0; i < dogFacts.length; i++) {
            dogFacts[i].style.visibility = "visible";
        }
    });
}
