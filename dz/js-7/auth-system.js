"use strict";
console.log(" ");
console.log("-----------auth-system-----------");

class AuthSystem {
  constructor() {
    //экземпляр `Map`, где ключом будет логин пользователя, а значением — объект с паролем и дополнительной информацией (например, `name`, `email`).
    this.users = new Map();
  }

  //регистрирует нового пользователя, добавляя его в `Map`.
  register(username, password, name, email) {
    if (username && password && name && email) {
      if (this.users.has(username)) {
        console.log(`choose a different username`);
      } else {
        this.users.set(username, { password, name, email });
      }
    } else {
      console.log(
        `Error, please provide correct username, password, name and email`
      );
    }
  }

  //проверяет, существует ли пользователь с таким логином и правильным паролем. Если да, возвращает сообщение об успешной авторизации, иначе — сообщение об ошибке.
  login(username, password) {
    const user = this.users.get(username);

    if (user && user.password === password) {
      console.log("Login successful");
    } else {
      console.log(`incorrect username or password`);
    }
  }

  //возвращает информацию о пользователе (имя и email) по логину.
  getUserInfo(username) {
    const user = this.users.get(username);

    user
      ? console.log(`Name: ${user.name}, Email: ${user.email}`)
      : console.log(`User ${username} not found`);
  }
}

// Пример использования класса AuthSystem
const authSystem = new AuthSystem();

// Регистрация пользователей
authSystem.register("user1", "password123", "Alice", "alice@example.com");
authSystem.register("user2", "mypassword", "Bob", "bob@example.com");

authSystem.login("user1", "password123"); //success
authSystem.login("user2", "password123"); //error

authSystem.getUserInfo("user1");
authSystem.getUserInfo("user3");
