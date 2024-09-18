"use strict";

console.log(" ");
console.log("---- str-methods-1 ----");

function toUpperCase(str) {
  return str.toUpperCase();
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function replaceSubstring(str, oldSubstring, newSubstring) {
  return str.replace(oldSubstring, newSubstring);
}

function splitString(str, separator) {
  return str.split(separator);
}

function trimString(str) {
  return str.trim();
}

let str = "Hello, World!";

// верхний и нижний регистр
console.log(toUpperCase(str)); // HELLO, WORLD!
console.log(toLowerCase(str)); // hello, world!

// Замена подстроки
console.log(replaceSubstring(str, "World", "Universe")); // Hello, Universe!

const words = splitString(str, " ");
console.log(words); // ["Hello,", "World!"]

const trimmedStr = "   Hello, World!   ".trim();
console.log(trimmedStr); // Hello, World!
