
function loadContact() {
  const content = document.querySelector("#content");

  const page = document.createElement("section");
  page.classList.add("contact-page");

  const title = document.createElement("h1");
  title.textContent = "Vení a visitarnos";

  const subtitle = document.createElement("p");
  subtitle.classList.add("description");
  subtitle.textContent =
    "Nos encanta recibirte. Acercate y compartí una buena comida con nosotros.";

  const information = document.createElement("div");
  information.classList.add("contact-information");

  const address = document.createElement("article");
  address.innerHTML = `
    <span>📍</span>
    <h2>Dirección</h2>
    <p>Av. Principal 123, Tucumán</p>
  `;

  const hours = document.createElement("article");
  hours.innerHTML = `
    <span>🕒</span>
    <h2>Horarios</h2>
    <p>Martes a domingo</p>
    <p>12:00 a 15:00 y 20:00 a 00:00</p>
  `;

  const phone = document.createElement("article");
  phone.innerHTML = `
    <span>☎️</span>
    <h2>Teléfono</h2>
    <p>+54 381 555 1234</p>
  `;

  information.append(address, hours, phone);
  page.append(title, subtitle, information);
  content.appendChild(page);
}

export default loadContact;