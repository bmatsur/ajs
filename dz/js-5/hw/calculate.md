### Задача: Объекты и методы в контексте `this`

**Описание**:  
Создайте объект `calculator`, который представляет собой простой калькулятор. У этого объекта должно быть два свойства для хранения чисел и методы для выполнения арифметических операций. Используйте ключевое слово `this` для доступа к свойствам объекта внутри методов.

1. Создайте объект `calculator` с двумя свойствами `num1` и `num2`, которые будут хранить числа.
2. Добавьте методы `setNumbers(a, b)`, которые устанавливают значения для `num1` и `num2`, и методы для выполнения операций:
    - `add()` — возвращает сумму чисел.
    - `subtract()` — возвращает разность чисел.
    - `multiply()` — возвращает произведение чисел.
    - `divide()` — возвращает результат деления чисел.
3. Используйте `this` внутри методов для доступа к значениям `num1` и `num2`.

### Входные данные:
- Значения для двух чисел, передаваемые в метод `setNumbers()`.

### Ожидаемый результат:
- Результаты арифметических операций с использованием методов объекта.

### Пример использования:

```javascript
// Пример использования объекта и методов
calculator.setNumbers(10, 5);
console.log(calculator.add());      // Ожидаемый вывод: 15
console.log(calculator.subtract()); // Ожидаемый вывод: 5
console.log(calculator.multiply()); // Ожидаемый вывод: 50
console.log(calculator.divide());   // Ожидаемый вывод: 2
