"use strict";

const main = () => {
    // 1. Add the "big" class to the "grow-me" paragraph.
    document.querySelector("#grow-me").classList.add("big");

    // 2. Remove the "big" class from the "shrink-me" paragraph.
    document.querySelector("#shrink-me").classList.remove("big");

    // 3. Find all the <li>s and log their text content to the console.
    for (let listItems of document.querySelectorAll("li")) {
        console.log(listItems.textContent);
    }

    // 4. Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
    document.querySelector(".link").href = "https://www.example.com";
    document.querySelector(".link").innerText = "somewhere";

    // 5. Set the "display" CSS property of the "hide-me" paragraph to "none".
    document.querySelector("#hide-me").style.display = "none";
    
    // 6. Set the "display" CSS property of the "show-me" paragraph to "block".
    document.querySelector("#show-me").style.display = "block";
    
    // 7. Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".
    let userText = document.querySelector("#name").value;
    // console.log(userText);
    document.querySelector("h1").innerText = `Welcome, ${userText}`;
}
