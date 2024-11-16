### Задача: Проверка строк на начало и конец в многострочном тексте

**Описание**:  
Создайте функцию, которая проверяет, начинается ли каждая строка в многострочном тексте с определённого символа (например, `#`), и заканчивается ли строка точкой (`.`). Используйте якоря начала и конца строки (`^` и `$`) в сочетании с флагом многострочного режима `"m"`.

### Входные данные:
- Многострочная строка, где каждая строка должна начинаться с `#` и заканчиваться на `.`.

### Ожидаемый результат:
- Функция должна возвращать `true`, если каждая строка соответствует условию, и `false` в противном случае.

### Пример использования:

```javascript
// Функция для проверки многострочного текста
function isValidMultilineText(text) {
    // Тут код должен быть
}

// Пример многострочного текста
const text1 = `
# Заголовок 1.
# Заголовок 2.
# Заголовок 3.
`;

const text2 = `
# Заголовок 1
# Заголовок 2.
Заголовок 3.
`;

// Проверка текстов
console.log(isValidMultilineText(text1));  // true
console.log(isValidMultilineText(text2));  // false