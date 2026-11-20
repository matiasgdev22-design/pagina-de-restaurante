
import "./styles.css";

import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadContact from "./pages/contact.js";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

function changeTab(pageFunction, activeButton) {
  // Elimina el contenido de la pestaña anterior.
  content.replaceChildren();

  // Carga el contenido de la nueva pestaña.
  pageFunction();

  // Actualiza el botón seleccionado.
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.remove("active");
  });

  activeButton.classList.add("active");
}

// Eventos de navegación.
homeButton.addEventListener("click", () => {
  changeTab(loadHome, homeButton);
});

menuButton.addEventListener("click", () => {
  changeTab(loadMenu, menuButton);
});

contactButton.addEventListener("click", () => {
  changeTab(loadContact, contactButton);
});

// Página inicial.
loadHome();