'use strict';
console.log(' ')
console.log('-----------real-madrid-----------')


class Player {
    #name;
    #position;
    #number;

    constructor(name, position, number) {
        this.#name = name;
        this.#position = position;
        this.#number = number;
    };

    getInfo() {
        return `Player: ${this.#name}, 
            Position: ${this.#position}, 
            Number: ${this.#number}`
    };
}


class RealMadridPlayer extends Player {
    #contractYears;

    constructor(name, position, number, contractYears) {
        super(name, position, number);
        this.#contractYears=contractYears;
    };

    getContractInfo() {
       return `Contract for ${this.#contractYears} year(s) with Real Madrid`
    }
}


const player1 = new RealMadridPlayer('Карим Бензема', 'Нападающий', 9, 3);
const player2 = new RealMadridPlayer('Лука Модрич', 'Полузащитник', 10, 2);

// Получить информацию о первом игроке
console.log(player1.getInfo());
// Ожидаемый вывод:
// Игрок: Карим Бензема
// Позиция: Нападающий
// Номер: 9

// Получить информацию о контракте первого игрока
console.log(player1.getContractInfo());
// Ожидаемый вывод: Контракт на 3 лет с Real Madrid

// Получить информацию о втором игроке
console.log(player2.getInfo());
// Ожидаемый вывод:
// Игрок: Лука Модрич
// Позиция: Полузащитник
// Номер: 10

// Получить информацию о контракте второго игрока
console.log(player2.getContractInfo());
// Ожидаемый вывод: Контракт на 2 лет с Real Madrid