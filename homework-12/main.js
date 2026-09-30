import "./cars.js";
import { Modal } from "./modal.js";
import { Form } from "./form.js";

const myModal = new Modal("modal");

const openBtn = document.getElementById("open-modal-btn");
openBtn.addEventListener("click", () => {
  myModal.open();
});

const registerForm = new Form("register-form");

registerForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (registerForm.isValid()) {
    console.log("Данные формы:", registerForm.getValues());
    registerForm.reset();
    myModal.close();
  } else {
    console.log("Форма заполнена неверно");
  }
});
