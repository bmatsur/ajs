"use strict";
console.log("-----------barbie-ken-----------");

class Doll {
  #name = "";
  #age;
  #outfit = "";

  constructor(name, age, outfit) {
    this.#name = name;
    this.#age = age;
    this.#outfit = outfit;
  }

  getInfo() {
    return `Имя: ${this.#name}, Возраст: ${this.#age}, Наряд: ${this.#outfit}`;
  }

  changeOutfit(newOutfit) {
    this.#outfit = newOutfit;
  }
}

const barbie = new Doll("Барби", 25, "розовое платье");
const ken = new Doll("Кен", 26, "костюм");

console.log(barbie.getInfo());
console.log(ken.getInfo());

barbie.changeOutfit("blue dress");
console.log(barbie.getInfo());