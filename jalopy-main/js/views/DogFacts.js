
const quotes = [
    {
        quote: "a quote",
        author: "an author"
    },
    {
        quote: "another quote",
        author: "a different author"
    }
]
// HTML function
export default function DogFactsView(props) {
    return `
    <h1>Dog Facts</h1>
    <div class="container-fluid">
    <div class="card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">Humans generally see better than dogs, but dogs see much better when there is low-light.</p>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <p class="dog-fact" style="visibility: hidden">All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.</p>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <p class="dog-fact" style="color: red; visibility: hidden">Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.</p>
        </div>
    </div>
    <button class="form-control" id="show-fact-btn">Show Facts</button>
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
