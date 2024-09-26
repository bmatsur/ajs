"use strict";
console.log(" ");
console.log("-----------post-----------");

class Post {
  likes = 0;
  //   title = null;
  //   content = null;
  //   author = null;

  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
  }

  updateContent(newContent) {
    this.content = newContent;
    console.log(`Текст поста обновлен: ${this.content}`);
  }

  addLike() {
    this.likes++;
    console.log(`Посту добавлен лайк. Всего лайков: ${this.likes}`);
  }

  deletePost() {
    this.title = null;
    this.author = null;
    this.content = null;
    this.likes = 0;
    console.log(`Пост удален.`);
  }

  displayPost() {
    if (this.title) {
      console.log(`Пост: ${this.title}
            Автор: ${this.author}
            Текст: ${this.content}
            Лайков: ${this.likes}`);
    } else {
      console.log(`Пост был удален.`);
    }
  }
}

const post1 = new Post(
  "Мой первый пост",
  "Это мой первый пост в социальной сети!",
  "Иван Иванов"
);

post1.displayPost();
// Ожидаемый вывод:
// Пост: Мой первый пост
// Автор: Иван Иванов
// Текст: Это мой первый пост в социальной сети!
// Лайков: 0

// Добавление лайка
post1.addLike();
// Ожидаемый вывод: Посту добавлен лайк. Всего лайков: 1

// Обновление текста поста
post1.updateContent("Обновленный текст моего первого поста.");

post1.displayPost();
// Ожидаемый вывод:
// Текст поста обновлен: Обновленный текст моего первого поста.
// Пост: Мой первый пост
// Автор: Иван Иванов
// Текст: Обновленный текст моего первого поста.
// Лайков: 1

// Удаление поста
post1.deletePost();
post1.displayPost(); // Ожидаемый вывод: Пост был удален.
