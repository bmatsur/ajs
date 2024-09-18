"use strict";
console.log("----format-string----");

//lekciyu xorosho slushal
const formatString = (stroka) => stroka.trim().toUpperCase();

console.log(formatString("   hello world   ")); // Ожидаемый вывод: "HELLO WORLD"
console.log(formatString("  JavaScript   ")); // Ожидаемый вывод: "JAVASCRIPT"
console.log(formatString("    openai  ")); // Ожидаемый вывод: "OPENAI"
