### Задача: Паттерн Фабрика (Factory Pattern)

**Описание**:  
Создайте простой пример использования паттерна "Фабрика" для создания различных типов транспортных средств. Используйте функцию-фабрику для создания объектов на основе переданного типа транспортного средства.

1. Создайте функцию-фабрику `VehicleFactory`, которая принимает тип транспортного средства и возвращает соответствующий объект с его характеристиками:
    - `Car` (объект с свойствами `type`, `wheels` и `engine`)
    - `Bike` (объект с свойствами `type` и `wheels`)
    - `Truck` (объект с свойствами `type`, `wheels` и `loadCapacity`)

2. Продемонстрируйте использование функции-фабрики для создания различных транспортных средств и выводите их свойства.

### Входные данные:
- Тип транспортного средства (`"Car"`, `"Bike"`, `"Truck"`).

### Ожидаемый результат:
- Созданные объекты с соответствующими свойствами в зависимости от переданного типа транспортного средства.