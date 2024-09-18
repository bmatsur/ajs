"use strict";

console.log(" ");
console.log("---- Boolean ----");

const user = {
  isLoggedIn: true,
  role: "admin",
};

function checkAccess(resource, user) {
  switch (resource) {
    case "adminPanel":
      return user.isLoggedIn && user.role === "admin";
    case "userSettings":
      return user.isLoggedIn && (user.role === "admin" || user.role === "user");
    case "publicContent":
      return true; // Доступен всем
    default:
      return false; // Нет доступа по умолчанию
  }
}

// Проверка доступа к админке
const hasAdminAccess = checkAccess("adminPanel", user);
console.log("Доступ к админ-панели:", hasAdminAccess);

// Проверка доступа к настройкам пользователя
const hasUserSettingsAccess = checkAccess("userSettings", user);
console.log("Доступ к настройкам пользователя:", hasUserSettingsAccess);
