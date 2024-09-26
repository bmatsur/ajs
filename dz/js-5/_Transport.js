'use strict';
console.log(' ');
console.log('-----------Transport-----------')


class Transport {

    move() {
        console.log(`Транспорт движется`);
    }
}

class Car extends Transport {

    move () {
        console.log(`Машина едет по дороге`);
    }
}

class Bicycle extends Transport {

    move() {
        console.log(`Велосипед едет по тротуару"`);
    }
}

const startTransport = (vehicle) => {
    vehicle.move()
}


const myCar2 = new Car();
const myBicycle = new Bicycle();

// Вызываем метод move() для каждого транспортного средства
startTransport(myCar2);      // Ожидаемый вывод: Машина едет по дороге
startTransport(myBicycle);  // Ожидаемый вывод: Велосипед едет по тротуару