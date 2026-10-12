class Drink {
  name;
  size;
  price;
  #temperature;

  constructor(name, size, price) {
    if (new.target === Drink) {
      throw new Error("Drink нельзя создать напрямую");
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = 20;
  }

  getInfo() {
    return `Напиток ${this.name}, размер - ${this.size}, цена - ${this.price}, температура: ${this.getTemperature()}°C`;
  }

  getTemperature() {
    return this.#temperature;
  }

  getServingTemperature() {
    return 60;
  }

  setTemperature(newTemp) {
    if (newTemp < -50 || newTemp > 100) {
      console.log("Ошибка: температура вне диапазона");
      return;
    }
    this.#temperature = newTemp;
    console.log(`Температура обновлена: ${newTemp}°C`);
  }

  #prepare() {
    console.log(`Готовим ${this.name}`);
  }

  serve() {
    this.#prepare();
    this.setTemperature(this.getServingTemperature());
    console.log("Напиток подан");
    return this.getInfo();
  }
}

class Coffee extends Drink {
  beanType;
  milkType;
  constructor(name, size, price, beanType, milkType) {
    super(name, size, price);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  getServingTemperature() {
    return 75;
  }
  getInfo() {
    return `${super.getInfo()}, зёрна: ${this.beanType}, молоко: ${this.milkType}`;
  }
}

class Tea extends Drink {
  sort;
  syrup;
  constructor(name, size, price, sort, syrup) {
    super(name, size, price);
    this.sort = sort;
    this.syrup = syrup;
  }

  getServingTemperature() {
    return 85;
  }

  getInfo() {
    return `${super.getInfo()}, сорт: ${this.sort}, сироп: ${this.syrup}`;
  }
}

class Lemonade extends Drink {
  flavor;
  isSparkling;
  constructor(name, size, price, flavor, isSparkling) {
    super(name, size, price);
    this.flavor = flavor;
    this.isSparkling = isSparkling;
  }

  getServingTemperature() {
    return 5;
  }

  getInfo() {
    return `${super.getInfo()}, вкус: ${this.flavor}, ${this.isSparkling ? "с газом" : "без газа"}`;
  }
}

class Cafe {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе "${this.name}", адрес: ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Кафе ${this.name} принимает заказ: ${drink.name}`);
    const result = drink.serve();
    console.log(`Заказ выполнен`);
    return result;
  }
}

const cafe = new Cafe("Кофейня №1", "Москва, Тверская 1");
console.log(cafe.getInfo());

const cappuccino = new Coffee("Капучино", "средний", 300, "арабика", "обычное");
cafe.orderDrink(cappuccino);

const lemonade = new Lemonade("Лимонад", "большой", 250, "лимон", true);
cafe.orderDrink(lemonade);

const orderTea = new Tea("Зелёный чай", "средний", 200, "зелёный", "мята");
cafe.orderDrink(orderTea);

cappuccino.setTemperature(500);
