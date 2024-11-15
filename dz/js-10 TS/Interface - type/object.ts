// let user: { name: string; age: number };
//
// user = { name: "Alice", age: 30 }; // OK
// user = { name: "Bob" };         // Ошибка
// user = { name: "Bob", age:24, address:"test" };  // Ошибка


// let user: { name: string; age?: number };
// //
// user = { name: "Alice", age: 30 }; // OK
// user = { name: "Bob" };         // OK
// // user = { name: "Bob", age:24, address:"test" };  // Ошибка
// const toStr:string = user.age?.toString();



let user: {
    id: number;
    readonly name: string;
    age: number;
    address: {
        street: string;
        city: string;
        zipCode?: string;
    },
    isActive: boolean;
    greet: () => void;
    showInfo(name:string): void;
} = {
    id: 1,
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zipCode: "12345",
    },
    isActive: true,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },

    showInfo(name: string):void {
        console.log(name)
    }
};

user.name = 'test';
user.greet();
