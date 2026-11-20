
function loadMenu() {
  const content = document.querySelector("#content");

  const page = document.createElement("section");
  page.classList.add("menu-page");

  const title = document.createElement("h1");
  title.textContent = "Nuestro menú";

  const subtitle = document.createElement("p");
  subtitle.classList.add("description");
  subtitle.textContent =
    "Platos preparados con ingredientes frescos y sabores auténticos.";

  const dishes = [
    {
      name: "Pasta artesanal",
      description: "Pasta fresca con salsa de tomate y albahaca.",
      price: "$12.500",
      category: "PASTAS",
    },
    {
      name: "Risotto de hongos",
      description: "Arroz cremoso con hongos frescos y parmesano.",
      price: "$14.000",
      category: "ESPECIALIDADES",
    },
    {
      name: "Pollo al horno",
      description: "Pollo dorado acompañado de papas rústicas.",
      price: "$13.500",
      category: "PRINCIPALES",
    },
    {
      name: "Ensalada mediterránea",
      description: "Vegetales frescos, aceitunas y queso.",
      price: "$10.000",
      category: "ENSALADAS",
    },
    {
      name: "Tiramisú",
      description: "Postre italiano con café y cacao.",
      price: "$6.500",
      category: "POSTRES",
    },
    {
      name: "Limonada natural",
      description: "Limón fresco, menta y hielo.",
      price: "$4.000",
      category: "BEBIDAS",
    },
  ];

  const dishesContainer = document.createElement("div");
  dishesContainer.classList.add("dishes-container");

  dishes.forEach((dish) => {
    const card = document.createElement("article");
    card.classList.add("dish-card");

    const category = document.createElement("span");
    category.classList.add("dish-category");
    category.textContent = dish.category;

    const name = document.createElement("h2");
    name.textContent = dish.name;

    const description = document.createElement("p");
    description.textContent = dish.description;

    const price = document.createElement("strong");
    price.textContent = dish.price;

    card.append(category, name, description, price);
    dishesContainer.appendChild(card);
  });

  page.append(title, subtitle, dishesContainer);
  content.appendChild(page);
}

export default loadMenu;