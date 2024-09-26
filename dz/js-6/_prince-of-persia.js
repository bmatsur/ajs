'use strict';
console.log(' ');
console.log('-----------_prince-of-persia-----------')

class Character {
    #name
    #health

    constructor(name, health) {
        this.#name = name;
        this.#health = health;
    }

    getName() {
        return this.#name;
    }

    attack() {
        console.log(`${this.#name} is attacking`);
    }
}

class Prince extends Character {
    constructor(name, health) {
        super(name, health);
    }

    attack() {
        console.log(`${this.getName()} striking with a sword!`)
    }
}


class Enemy extends Character {
    constructor(name, health) {
        super(name, health);
    }

    attack() {
        console.log(`${this.getName()} striking with a magic`)
    }
}


const executeAttack = (char) => char.attack();


const prince = new Prince('Принц', 100);
const enemy = new Enemy('Враг', 80);

// Вызываем метод attack() для каждого персонажа
executeAttack(prince); // Ожидаемый вывод: Принц наносит удар мечом!
executeAttack(enemy);  // Ожидаемый вывод: Враг атакует с помощью заклинания!

