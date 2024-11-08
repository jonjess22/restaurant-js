import "./styles.css";
import pizzaImg from "./pizza.png";
import { loadMenuTab } from "./menu-tab.js";

export const init = () => {
    const content = document.getElementById("content");
    if (!content) return;

    while (content.firstChild) content.removeChild(content.firstChild);
    
    const title = document.createElement("h1");
    title.textContent = "Pizzeria Tralala";

    const description = document.createElement("p");
    description.textContent = "Pizza, pasta, tralala!";

    const pizzaImage = document.createElement("img");
    pizzaImage.src = pizzaImg;

    // Append Elements to the DOM
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(pizzaImage);
};

export const initHeader = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const btnMenu = document.createElement("button");
    const btnOpeningHours = document.createElement("button");
    const btnContact = document.createElement("button");
    const btnHome = document.createElement("button");
    const content = document.createElement("div");
    content.id = "content";

    btnHome.textContent = "Home";
    btnMenu.textContent = "Menü";
    btnOpeningHours.textContent = "Öffnungszeiten";
    btnContact.textContent = "Kontakt";

    nav.appendChild(btnHome);
    nav.appendChild(btnMenu);
    nav.appendChild(btnOpeningHours);
    nav.appendChild(btnContact);
    header.appendChild(nav);

    document.querySelector("body").appendChild(header);
    document.querySelector("body").appendChild(content);

    btnMenu.addEventListener("click", () => {
        loadMenuTab();
    });

    btnHome.addEventListener("click", () => {
        init();
    });
};