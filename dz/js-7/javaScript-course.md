### Задача: Управление курсами по JavaScript для студентов

**Описание**:  
Вам необходимо создать систему для управления курсами по JavaScript для студентов. Используйте класс `JavaScriptCourse`, который будет хранить список студентов и их оценки. Реализуйте методы для обработки данных о студентах с использованием методов массивов `map`, `filter` и `every`.

1. **Создайте класс `JavaScriptCourse`**:
   - **Свойства**:
     - `students` — массив объектов, каждый из которых содержит `name` (имя студента) и `grades` (массив оценок).
   - **Методы**:
     - `addStudent(name, grades)` — добавляет нового студента с его оценками.
     - `getAverageGrades()` — возвращает массив с именами студентов и их средними оценками.
     - `getStudentsAboveAverage()` — возвращает массив студентов, чьи средние оценки выше заданного порога.
     - `allStudentsPassed(passingGrade)` — принимает порог проходной оценки и возвращает `true`, если все студенты имеют оценки выше этого порога, и `false` в противном случае.

2. **Пример использования класса `JavaScriptCourse`**:
   - Создайте экземпляр класса `JavaScriptCourse`.
   - Добавьте нескольких студентов с их оценками.
   - Выведите средние оценки всех студентов.
   - Выведите студентов, чьи оценки выше заданного значения.
   - Проверьте, прошли ли все студенты курс.

### Входные данные:
- Имя студента, массив оценок, порог проходной оценки.

### Ожидаемый результат:
- Программа должна корректно добавлять студентов, вычислять их средние оценки, фильтровать студентов по среднему баллу и проверять, прошли ли все студенты курс.

### Пример использования:

```javascript
// Пример использования класса JavaScriptCourse
const jsCourse = new JavaScriptCourse();

// Добавляем студентов с их оценками
jsCourse.addStudent('Alice', [85, 90, 78]);
jsCourse.addStudent('Bob', [60, 75, 70]);
jsCourse.addStudent('Charlie', [95, 92, 88]);

// Получаем и выводим средние оценки всех студентов
console.log('Средние оценки студентов:', jsCourse.getAverageGrades());

// Получаем и выводим студентов с оценками выше 80
console.log('Студенты с оценками выше 80:', jsCourse.getStudentsAboveAverage(80));

// Проверяем, прошли ли все студенты курс с порогом 75
console.log('Все студенты прошли курс:', jsCourse.allStudentsPassed(75));