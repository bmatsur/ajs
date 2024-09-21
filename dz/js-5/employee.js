"use strict";
console.log("-----------employee-----------");

const employee = {
  name: "Suhrob Pahlavon",
  position: "Security Analyst",
  salary: 16000,
  isFullTime: true,
};

employee.position = "Security Engineer";
employee.hireDate = new Date(2018, 10, 10);
deleteProperty(employee, "salary");

console.log(employee);
