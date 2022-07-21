// import {showNotification} from "../messaging.js";
// import {getUser} from "../auth.js";

// const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

const imagePaths = [
    "assets/jalopy1.jpeg",
    "assets/jalopy2.jpeg",
    "assets/jalopy3.jpeg"
]
let currentImageIndex = 1;

export default function homeHTMLFunction(props) {
    return `
        <header>
            <h1 class="home-title">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
                <img id="home-img" src="assets/jalopy1.jpeg">
                <p>
                    Welcome to my Jalopy application!
                </p>
                
                <button id="img-button">Click this</button>    
            </div>
            
        </main>
    `;
}

export function homeJSFunction() {
    const button = document.querySelector("#img-button");
    button.addEventListener("click", function(event) {
        const img = document.querySelector("#home-img");
        img.setAttribute("src", imagePaths[currentImageIndex]);
        currentImageIndex++;
        if(currentImageIndex === 3) {
            currentImageIndex = 0;
        }
    });
}