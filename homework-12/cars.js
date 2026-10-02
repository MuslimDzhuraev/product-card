export class Vehicle {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  getInfo() {
    return `${this.brand} стоит ${this.price}$`;
  }
}

export class Car extends Vehicle {
  constructor(brand, price, doors) {
    super(brand, price);
    this.doors = doors;
  }

  getInfo() {
    return `${super.getInfo()}, дверей: ${this.doors}`;
  }
}

export class Motorcycle extends Vehicle {
  constructor(brand, price, hasSidecar, engineVolume) {
    super(brand, price);
    this.hasSidecar = hasSidecar;
    this.engineVolume = engineVolume;
  }

  getInfo() {
    return `${super.getInfo()}, объем двигателя: ${this.engineVolume}л, коляска:${this.hasSidecar}`;
  }
}
