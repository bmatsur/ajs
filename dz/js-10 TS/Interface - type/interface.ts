// interface IUser {
//     name: string;
//     age: number;
// }
//
//
// let user: User = {
//     name: "Alice",
//     age: 30
// };


// interface User {
//     name: string;
//     age?: number;  // Опциональное свойство
// }
//
// let user1: User = { name: "Alice" };       // OK
// let user2: User = { name: "Bob", age: 30 }; // OK
//
// interface User {
//     name: string;
//     age: number;
//     greet(): void;  // Метод без возвращаемого значения
// }

// let user: User = {
//     name: "Alice",
//     age: 30,
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
//
// user.greet();  // "Hello, my name is Alice"
//
//
interface Person {
    name: string;
}

interface Employee extends Person {
    company: string;
}

let employee: Employee = {
    name: "Alice",
    company: "OpenAI"
};


interface CanFly {
    fly(): void;
}

interface CanSwim {
    swim(): void;
}

interface SuperHero extends CanFly, CanSwim {
    reterert
}

let hero: SuperHero = {
    fly() {
        console.log("Flying!");
    },
    swim() {
        console.log("Swimming!");
    }
};

hero.fly();  // "Flying!"
// hero.swim(); // "Swimming!"
//
//
interface StringDictionary {
    [key: string]: string;  // Все ключи должны быть строками, а значения — строками
}

let dictionary: StringDictionary = {
    firstName: "Alice",
    lastName: "Smith"
};

// dictionary["age"] = "30"; // Ошибка: значение должно быть строкой
//
//
// interface Cat {
//     name: string;
//     purrs: boolean;
// }
//
// interface Dog {
//     name: string;
//     barks: boolean;
// }
//
// // type Pet = Cat | Dog;
// //
// // let pet1: Pet = { name: "Whiskers", purrs: true};  // OK
// // let pet2: Pet = { name: "Whiskers", barks: true };  // OK
//
// // type Pet = Cat & Dog;
// //
// // let pet1: Pet = { name: "Whiskers", purrs: true, barks:true};  // OK
// // let pet2: Pet = { name: "Whiskers", purrs: true, barks: true };  // OK
//
//
// interface Counter {
//     (start: number): string; // Функция
//     interval: number;        // Свойство
//     reset(): void;           // Метод
// }
//
// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) {
//         return `Started at ${start}`;
//     };
//     counter.interval = 1000;
//     counter.reset = function () {
//         console.log("Counter reset");
//     };
//     return counter;
// }
//
// let counter = getCounter();
// console.log(counter(10));  // "Started at 10"
// counter.reset();           // "Counter reset"
// counter.interval = 2000;   // OK
//
//
