// class Person {
//     name: string;
//     age: number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greet(): void {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }
//
// const person:Person = new Person("Alice", 25);
// person.greet();


/**
 * Модификаторы доступа
 * TypeScript поддерживает три модификатора доступа:
 *
 * public: доступ открыт везде (по умолчанию).
 * private: доступ только внутри класса.
 * protected: доступ внутри класса и подклассов.
 */

// class Employee {
//     public name: string;
//     private salary: number;
//     protected position: string;
//
//     constructor(name: string, salary: number, position: string) {
//         this.name = name;
//         this.salary = salary;
//         this.position = position;
//     }
//
//     public getSalary(): number {
//         return this.salary;
//     }
// }


// Сокращенная инициализация свойств

// class Car {
//     constructor(public make: string, private year: number) {}
// }
//
// const myCar = new Car("Toyota", 2020);


/**
 * Наследование
 */

// class Animal {
//     constructor(public name: string) {}
//
//     move(): void {
//         console.log(`${this.name} is moving`);
//     }
// }
//
// class Dog extends Animal {
//     bark(): void {
//         console.log("Woof! Woof!");
//     }
// }
//
// const dog = new Dog("Rex");
// dog.move(); // "Rex is moving"
// dog.bark(); // "Woof! Woof!"


/**
 * Абстрактные классы
 */

// abstract class Shape {
//     abstract getArea(): number;
//
//     printArea(): void {
//         console.log(`Area: ${this.getArea()}`);
//     }
// }
//
// class Circle extends Shape {
//     constructor(public radius: number) {
//         super();
//     }
//
//     getArea(): number {
//         return Math.PI * this.radius ** 2;
//     }
// }
//
// const circle = new Circle(5);
// circle.printArea(); // "Area: 78.53981633974483"


/**
 * Интерфейсы и классы
 */

// interface Drivable {
//     speed: number;
//     drive(): void;
// }
//
// class Car implements Drivable {
//     speed: number;
//
//     constructor(speed: number) {
//         this.speed = speed;
//     }
//
//     drive(): void {
//         console.log(`Driving at ${this.speed} km/h`);
//     }
// }


/**
 * Статические свойства и методы
 */

// class MathUtil {
//     static PI = 3.14159;
//
//     static calculateCircumference(radius: number): number {
//         return 2 * MathUtil.PI * radius;
//     }
// }
//
// console.log(MathUtil.calculateCircumference(5)); // 31.4159

/**
 * Свойства и методы "readonly"
 */

// class Book {
//     readonly title: string;
//
//     constructor(title: string) {
//         this.title = title;
//     }
// }
//
// const myBook = new Book("TypeScript Basics");
// // myBook.title = "New Title"; // Ошибка

/**
 * Generic Classes
 */

// class Box<Type> {
//     contents: Type;
//     constructor(value: Type) {
//         this.contents = value;
//     }
// }
//
// const b = new Box("hello!");
