export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.closeBtn = this.modal.querySelector(".modal__close");
    this.initCloseListener();
  }

  open() {
    this.modal.classList.add("modal-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
  }
  
  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  initCloseListener() {
    this.closeBtn.addEventListener("click", () => {
      this.close();
    });
  }
}
