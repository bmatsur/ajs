// function add(a: number, b: number = 2): number {
//     return a + b;
// }

// console.log(add(2, 3)); // 5
//
// function greet(name: string, age:number): string {
//     return name + age;
// }


// function greet(name: string, greeting: string = "Hello"): string {
//     return `${greeting}, ${name}!`;
// }
//
// console.log(greet("Alice")); // "Hello, Alice!"
// console.log(greet("Alice", "Good evening")); // "Good evening, Alice!"


// function sum(...numbers: number[]): number {
//     return numbers.reduce((total, num) => total + num, 0);
// }
//
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(4, 5, 6, 7)); // 22


// let multiply = function (a: number, b: number): number {
//     return a * b;
// };
//
//
// let divide: (a:number, b:number) => number = (a: number, b: number): number => a / b;


// function logMessage(message: string): void {
//     console.log(message);
// }

// function throwError(message: string): string | never {
//     if (false) {
//         throw new Error(message);
//     }
//     return 'Hello'
// }

function greeter(fn: (a: string) => string):string {
    return fn("Hello, World");

}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

// const divide: (a:number, b:number) => number = (a:number, b:number) => a / b;

