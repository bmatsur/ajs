"use strict";
console.log("----http-status----");

const getHttpStatusMessage = (statusCode) => {
  switch (statusCode) {
    case 200:
      return "OK: Запрос выполнен успешно";
    case 201:
      return "Created: Ресурс был создан успешно";
    case 204:
      return "No Content: Запрос выполнен успешно, но нет содержимого";
    case 400:
      return "Bad Request: Неверный запрос";
    case 401:
      return "Unauthorized: Неавторизованный доступ";
    case 403:
      return "Forbidden: Доступ запрещен";
    case 404:
      return "Not Found: Ресурс не найден";
    case 500:
      return "Internal Server Error: Внутренняя ошибка сервера";
    case 502:
      return "Bad Gateway: Неверный шлюз";
    case 503:
      return "Service Unavailable: Сервис недоступен";
    default:
      return `Unknown Status Code: Неизвестный статус-код ${statusCode}`;
  }
};

// Примеры использования функции
console.log(getHttpStatusMessage(200)); // Ожидаемый вывод: "OK: Запрос выполнен успешно"
console.log(getHttpStatusMessage(404)); // Ожидаемый вывод: "Not Found: Ресурс не найден"
console.log(getHttpStatusMessage(500)); // Ожидаемый вывод: "Internal Server Error: Внутренняя ошибка сервера"
console.log(getHttpStatusMessage(123)); // Ожидаемый вывод: "Unknown Status Code: Неизвестныйстатус-код
