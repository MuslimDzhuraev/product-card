import { products } from "./products.js";

function createCardTemplate(product) {
  const compositionHTML = product.composition
    .map((item) => `<li class="composition__item">${item}</li>`)
    .join("");

  const priceHTML = product.price.toLocaleString("ru-RU") + " ₽";

  return `
    <div class="product-card">
      <img class="product-card__image" src="${product.image}" alt="${product.alt}" />
      <div class="product-header">
        <p class="product-card__category">${product.category}</p>
        <h2 class="product-card__name">${product.name}</h2>
        <p class="product-card__description">${product.description}</p>
      </div>
       <div class="composition">
        <h3 class="composition__title">Состав:</h3>
        <ul class="composition__list">${compositionHTML}</ul>
      </div>
      <div class="price">
        <span class="price__label">Цена</span>
        <span class="price__value">${priceHTML}</span>
      </div>
    </div>
  `;
}

const productsByName = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

console.log("Справочник по названию:", productsByName);

function askCardsCount() {
  const answer = prompt("Сколько карточек отобразить? От 1 до 5");

  if (answer === null) return 0;

  const count = Number(answer);

  if (!Number.isInteger(count) || count < 1 || count > 5) {
    alert("Нужно ввести целое число от 1 до 5");
    return askCardsCount(); // переспросить
  }

  return count;
}

function renderCards(list) {
  const container = document.querySelector(".page");
  container.innerHTML = ""; // очистим на всякий случай
  container.insertAdjacentHTML(
    "beforeend",
    list.map(createCardTemplate).join(""),
  );
}

const count = askCardsCount();

if (count > 0) {
  renderCards(products.slice(0, count));
}
