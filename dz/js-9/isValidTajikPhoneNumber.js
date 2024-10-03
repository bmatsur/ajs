"use strict";
console.log(" ");
console.log("-----------isValidTajikPhoneNumber-----------");


function isValidTajikPhoneNumber(str) {
    const regex = /^\+992\d{9}$/
    return regex.test(str)
}

// Примеры строк
const phoneNumbers = [
    '+992123456789',       // соответствует
    '+992987654321',       // соответствует
    '992123456789',        // не соответствует (без знака +)
    '+99212345',           // не соответствует (недостаточно цифр)
    '+9921234567890',      // не соответствует (слишком много цифр)
    '+993123456789',       // не соответствует (неправильный код страны)
    '+99212345678abc',     // не соответствует (содержит буквы)
];

// Проверка номеров
phoneNumbers.forEach(num => {
    console.log(`Номер: "${num}", Валидный таджикский номер: ${isValidTajikPhoneNumber(num)}`);
});
