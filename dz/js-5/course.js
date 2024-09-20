"use strict";
console.log("-----------course-----------");

const course = {
  title: "Advanced JS",
  instructor: "Farrukh Gulboev",
  duration: 250,
  price: 600,
};

const info = Object.values(course);

info.forEach((element) => console.log(element));
