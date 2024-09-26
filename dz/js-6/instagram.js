"use strict";
console.log(" ");
console.log("-----------instagram-----------");

class InstagramStory {
  #title;
  #views = 0;
  static totalStories = 0;

  constructor(title) {
    this.#title = title;
    InstagramStory.totalStories++;
  }

  static getTotalStories() {
    return `Общее количество созданных историй: ${InstagramStory.totalStories}`;
  }

  addView() {
    this.#views++;
    console.log(
      `История ${this.#title} просмотрена! Общее количество просмотров: ${
        this.#views
      }`
    );
  }

  getInfo() {
    return `Story: ${this.#title}. Views ${this.#views}`;
  }
}

const story1 = new InstagramStory("My first story");
const story2 = new InstagramStory("This is second story");

story1.addView();
// Ожидаемый вывод: История "Мой первый день на море" просмотрена! Общее количество просмотров: 1

// Лайкнуть вторую историю
story2.addView();
// Ожидаемый вывод: История "Закат на пляже" просмотрена! Общее количество просмотров: 1

// Получить информацию о первой истории
console.log(story1.getInfo());
// Ожидаемый вывод:
// История: Мой первый день на море
// Просмотров: 1

// Получить общее количество историй
console.log(InstagramStory.getTotalStories());
// Ожидаемый вывод: Общее количество созданных историй: 2
