// type UserID = string;
// type Age = number
//
// const userId: UserID = "abc123";
// const age: Age = 25;

// ==================================

// type Color = 'red'
// let red: Color = 'red'
//
// let a: 2 = 4

type User = {
    readonly name: string;
    age: number;
    address?: string
};

let user1: User = {
    name: "Alice",
    age: 30
};

let user2: User = {
    name: "Jon",
    age: 24,
    address:'street 1'
};

/**
 * Типы объединения
 */

let value: string | number;
value = "Hello"; // ОК
value = 123;     // ОК
//
//
function printId(id: string | number) {
    console.log("ID:", id);
}

// printId(123);    // OK
// printId("abc");  // OK
// printId(true); // Ошибка: тип boolean не допустим

type Returns = string | null

type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
function getStattu(status:Status) {
    return status
}
//

type Cat = {
    name: string;
    purrs: boolean;
};

type Dog = {
    name: string;
    barks: boolean;
};

type Pet = Cat | Dog;

let pet1: Pet = { name: "Whiskers", purrs: true }; // OK
let pet2: Pet = { name: "Rover", barks: true };    // OK

/**
 * Типы пересечение
 */

type Person = {
    name: string;
};

type Employee = {
    company: string;
};

type EmployeeDetails = Person & Employee;

let employee: EmployeeDetails = {
    name: "Alice",
    company: "OpenAI"
};
