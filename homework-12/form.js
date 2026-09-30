export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }
  getValues() {
    return Object.fromEntries(new FormData(this.form));
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}
