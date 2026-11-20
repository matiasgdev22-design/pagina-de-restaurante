
function loadHome() {
  const content = document.querySelector("#content");

  const page = document.createElement("section");
  page.classList.add("home-page");

  const eyebrow = document.createElement("p");
  eyebrow.classList.add("eyebrow");
  eyebrow.textContent = "COCINA CASERA · INGREDIENTES FRESCOS";

  const title = document.createElement("h1");
  title.textContent = "El sabor de sentirse en casa.";

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "En La Mesa creemos que los mejores momentos suceden alrededor de una buena comida. Preparamos cada plato con dedicación, ingredientes frescos y mucho amor.";

  const button = document.createElement("button");
  button.classList.add("cta-button");
  button.textContent = "Descubrí nuestro menú";
  button.addEventListener("click", () => {
    document.querySelector("#menu").click();
  });

  const highlight = document.createElement("div");
  highlight.classList.add("home-highlight");
  highlight.textContent = "BUENA COMIDA. BUENOS MOMENTOS.";

  page.append(eyebrow, title, description, button, highlight);
  content.appendChild(page);
}

export default loadHome;