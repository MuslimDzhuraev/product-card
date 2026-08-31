function showTemperature(city, temperature) {
  console.log(
    `Сейчас в ${city} температура- ${temperature} градусов по Цельсию`,
  );
}

showTemperature("Москвe", 23);
showTemperature("Мединe", 41);
showTemperature("Ташкентe", 35);
showTemperature("Стамбуле", 33);

const speedofLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedofLight) {
    console.log("Сверхсветовая скорость");
  } else if (speed < speedofLight) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(100);
checkSpeed(300000000);
checkSpeed(299792458);

const productName = "увлажняющий мусс";

const productPrice = 2750;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const missingMoney = productPrice - budget;

    console.log(`Вам не хватает ${missingMoney}, пополняйте баланс.`);
  }
}

buyProduct(5000);
buyProduct(1000);
buyProduct(2750);

function calculateDiscount(price, discountPercent) {
  const discountAmount = (price * discountPercent) / 100;
  return discountAmount;
}
console.log("Скидка на мусс (10%):", calculateDiscount(2750, 10));
console.log("Cкидка на мусс (20%):", calculateDiscount(2750, 20));
console.log("Скидка на мусс (30%):", calculateDiscount(2750, 30));

letcartItemCount = 2;
const deliveryCity = "Москва";
const isProductInStock = true;
