import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    const loggedIn = isLoggedIn();

    // everyone can see home
    let html = `
<nav class="navbar navbar-expand-lg navbar-light bg-light jalopy-nav">
    <ul class="navbar-nav">   
        <li class="nav-item">         
            <a class="nav-link active"" href="/" data-link>Home</a>
        </li>`;

    // everyone can see about
    html = html + `
        <li class="nav-item">
            <a class="nav-link" href="/about" data-link>About</a>
        </li>`;

    // only logged in can see user info and logout
    if(loggedIn) {
        html += `
        <li class="nav-item">
            <a class="nav-link" href="/users" data-link>User Info</a>
        </li>
        <li class="nav-item">
            <a href="/logout" data-link>Logout</a>
        </li>
`;
    } else {
        // if not logged in, can see login and register
        html += `
        <li class="nav-item">
            <a class="nav-link" href="/login" data-link>Login</a>
        </li>            
        <li class="nav-item">
            <a class="nav-link" href="/register" data-link>Register</a>
        </li>
`;
    }

    html += `
        <li class="nav-item">
            <a class="nav-link" href="/dogs" data-link>Dog Facts</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/quotes" data-link>Quotes</a>
        </li>
`;
    html += `
    </ul>
</nav>`;
    return html;
}