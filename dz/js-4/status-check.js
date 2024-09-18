"use strict";
console.log("----status-check----");

function getStatusMessage(statusCode) {
  const statusMessages = {
    error: "Не известная ошибка",
    pending: "Транзакция в ожидании",
    success: "Транзакция прошла успешно",
    feild: "Транзакция не прошла успешно",
  };

  return statusMessages[statusCode] || `Неизвестный статус: ${statusCode}`;
}

// Примеры использования функции
console.log(getStatusMessage("error")); // "Не известная ошибка"
console.log(getStatusMessage("pending")); // "Транзакция в ожидании"
console.log(getStatusMessage("success")); // "Транзакция прошла успешно"
console.log(getStatusMessage("feild")); // "Транзакция не прошла успешно"
console.log(getStatusMessage("other")); // "Неизвестный статус"
