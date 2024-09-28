"use strict";
console.log(" ");
console.log("-----------javaScript-course-----------");

class JavaScriptCourse {
  constructor() {
    this.students = [];
  }
  //массив объектов, каждый из которых содержит `name` (имя студента) и `grades` (массив оценок).

  addStudent(name, grades) {
    this.students.push({ name, grades });
  }

  getAverageGrades() {
    // let sum = 0;
    return this.students.map((student) => {
      const average =
        student.grades.reduce((sum, currentValue) => sum + currentValue, 0) /
        student.grades.length;

      return { name: student.name, averageGrade: average };
    });
  }
  //возвращает массив с именами студентов и их средними оценками.

  //возвращает массив студентов, чьи средние оценки выше заданного порога.
  getStudentsAboveAverage(average) {
    return this.getAverageGrades().filter(
      (student) => student.averageGrade > average
    );
  }

  //принимает порог проходной оценки и возвращает `true`, если все студенты имеют оценки выше этого порога, и `false` в противном случае.
  allStudentsPassed(passingGrade) {
    const isBelowPassingGrade = (currentGrade) => currentGrade > passingGrade;
    return this.students.every((student) =>
      student.grades.every((grade) => grade >= passingGrade)
    );
  }
}

// Пример использования класса JavaScriptCourse
const jsCourse = new JavaScriptCourse();

// Добавляем студентов с их оценками
jsCourse.addStudent("Alice", [85, 90, 78]);
jsCourse.addStudent("ZBob", [60, 75, 70]);
jsCourse.addStudent("Charlie", [95, 92, 88]);

// console.log(jsCourse);

// Получаем и выводим средние оценки всех студентов
console.log("Средние оценки студентов:", jsCourse.getAverageGrades());

// Получаем и выводим студентов с оценками выше 80
console.log(
  "Студенты с оценками выше 80:",
  jsCourse.getStudentsAboveAverage(80)
);

// Проверяем, прошли ли все студенты курс с порогом 75
console.log("Все студенты прошли курс:", jsCourse.allStudentsPassed(75));
