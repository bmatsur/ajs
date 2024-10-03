"use strict";
console.log(" ");
console.log("-----------startsWithUpperCase-----------");


function startsWithCapitalLetter(str) {
    const regex = /^[A-Z]/
    return regex.test(str)

}

// Примеры строк
const strings8 = [
    'Hello world',   // начинается с заглавной буквы
    'hello world',   // не начинается с заглавной буквы
    'JavaScript is fun', // начинается с заглавной буквы
    '123abc',        // не начинается с заглавной буквы
    'Good Morning!',  // начинается с заглавной буквы
    ' Good Morning!',  // ne начинается с заглавной буквы
    '',              // пустая строка
];

// Проверка строк
strings8.forEach(s => {
    console.log(`Строка: "${s}", Начинается с заглавной буквы: ${startsWithCapitalLetter(s)}`);
});