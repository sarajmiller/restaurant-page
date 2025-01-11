import "./styles.css";
import { renderMenu } from "./menu.js";
import { renderHeader } from "./header.js";
import { renderHomepage } from "./home.js";
import { renderContact } from "./contact.js";

renderHeader();
renderHomepage();

const content = document.getElementById("content")

const home = document.getElementById("Home");
const menu = document.getElementById("Menu");
const contact = document.getElementById("Contact");

home.addEventListener("click", () => {
    content.innerHTML = "";
    renderHomepage();
})

menu.addEventListener("click", () => {
    content.innerHTML = "";
    renderMenu();
})

contact.addEventListener("click", () => {
    content.innerHTML = "";
    renderContact();
})