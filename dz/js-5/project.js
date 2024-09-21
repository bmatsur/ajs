"use strict";
console.log("-----------project-----------");

const project = {
  name: "eCommerce1",
  team: ["Suhrob", "Tahmine"],
  status: "ongoing",
};

//preventing the addition or deletion of properties, while it is Mutable: allowing the modification of existing properties.
Object.seal(project);
project.name = "eCommerse1 upgraded";
// deleteProperty(project, "name"); //error
// project.status = 'done'; //error
console.log("isSealed:", Object.isSealed(project));
console.log(project);

// FREEZE
const project2 = {
  name: "eCommerce2",
  team: ["Suhrob", "Tahmine"],
  status: "ongoing",
};

//Freezes an object, making it completely immutable.
Object.freeze(project2);
// project2.name = "whatever"; //error

//Prevent Extensions
//static method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It also prevents the object's prototype from being re-assigned.

const project3 = {
  name: "eCommerce3",
  team: ["Suhrob", "Tahmine"],
  status: "ongoing",
};

Object.preventExtensions(project3);
// project.dueDate = "11/11/2025"; //error
