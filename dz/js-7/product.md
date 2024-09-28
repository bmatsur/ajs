### Задача: Управление товарами в интернет-магазине

**Описание**:  
Вы разрабатываете систему управления товарами для интернет-магазина. У вас есть несколько типов товаров (например, электроника, одежда, книги), и вам нужно реализовать классы для каждого типа товара, а также управлять списком всех товаров.

Реализуйте класс `Product` и дочерние классы для различных типов товаров, таких как `Electronics`, `Clothing`, и `Book`. Также создайте класс для управления товарами — `Store`, который будет содержать методы для перебора товаров с использованием методов массива (`forEach`, `map`, `filter`).

1. **Класс `Product`:**
   - Поля: `name` (название товара), `price` (цена), `category` (категория товара).
   - Метод `getDetails()` — возвращает строку с описанием товара.

2. **Дочерние классы:**
   - `Electronics`, `Clothing`, `Book` — наследуют класс `Product` и могут добавлять дополнительные свойства (например, `warranty` для электроники, `size` для одежды, `author` для книг).

3. **Класс `Store`:**
   - Поле: `products` — массив товаров.
   - Методы:
     - `addProduct(product)` — добавляет новый товар в список товаров.
     - `listProducts()` — выводит список всех товаров с помощью метода `forEach`.
     - `filterByCategory(category)` — возвращает товары определенной категории с помощью метода `filter`.
     - `mapProducts()` — создает новый массив с информацией о каждом товаре (например, только названия и цены) с помощью метода `map`.

### Входные данные:
- Информация о товарах: название, цена, категория, дополнительные свойства (например, гарантия для электроники).

### Ожидаемый результат:
- Программа должна корректно управлять списком товаров, выводить их, фильтровать по категории и создавать новые массивы с информацией о товарах.

```javascript
// Пример использования классов
const store = new Store();

// Добавляем товары
store.addProduct(new Electronics('Ноутбук', 1500, 2));
store.addProduct(new Clothing('Футболка', 20, 'M'));
store.addProduct(new Book('JavaScript для начинающих', 30, 'Джон Доу'));

// Вывод всех товаров
store.listProducts();

// Фильтрация товаров по категории
store.filterByCategory('Electronics');

// Создание нового массива с названиями