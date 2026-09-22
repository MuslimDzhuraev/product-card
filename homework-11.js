const form = document.getElementById("subscribe-form");

const emailInput = document.getElementById("email-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;

  console.log({ email: email });
});

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const overlay = document.querySelector(".overlay");

openModalBtn.addEventListener("click", function () {
  modal.classList.add("modal-showed");
});

closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("modal-showed");
});

overlay.addEventListener("click", function () {
  modal.classList.remove("modal-showed");
});

const registerForm = document.getElementById("register-form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

let user = null;

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!registerForm.checkValidity()) {
    alert("Форма заполнена неверно. Проверьте все поля.");
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Пароли не совпадают. Регистрация отклонена.");
    return;
  }

  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);

  data.createdOn = new Date();

  user = data;

  console.log(user);

  modal.classList.remove("modal-showed");

  registerForm.reset();
});
