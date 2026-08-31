const cards = document.querySelectorAll(".product-card");

const changeColorFirstButton = document.querySelector(
  ".change-color-first-button",
);
const changeColorSecondButton = document.querySelector(
  ".change-color-second-button",
);

const changeColorThirdButton = document.querySelector(
  ".change-color-third-button",
);

changeColorFirstButton.addEventListener("click", () => {
  if (cards[0].style.backgroundColor === "pink") {
    cards[0].style.backgroundColor = "orange";
  } else {
    cards[0].style.backgroundColor = "pink";
  }
});

changeColorSecondButton.addEventListener("click", () => {
  if (cards[1].style.backgroundColor === "green") {
    cards[1].style.backgroundColor = "gold";
  } else {
    cards[1].style.backgroundColor = "green";
  }
});

changeColorThirdButton.addEventListener("click", () => {
  if (cards[2].style.backgroundColor === "olive") {
    cards[2].style.backgroundColor = "teal";
  } else {
    cards[2].style.backgroundColor = "olive";
  }
});

const changeColorGoogleButton = document.querySelector(
  ".change-color-google-button",
);

changeColorGoogleButton.addEventListener("click", () => {
  window.open("https://www.google.com", "_blank");
});