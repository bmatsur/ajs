'use strict';
console.log(' ')
console.log('-----------reel-----------')

class Reel {
    title;
    duration;
    likes = 0;
    views = 0;

    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }

    like() {
        this.likes++;
        console.log(`Рилс "${this.title}" получил лайк! Общее количество лайков: ${this.likes}`)
    }

    addView() {
        this.views++;
        console.log(`Рилс "${this.title}" просмотрен! Общее количество просмотров: ${this.views}`)
    }

    getInfo() {
        return `Рилс: ${this.title}
            Длительность: ${this.duration} секунд
            Лайков: ${this.likes}
            Просмотров: ${this.views}`;
    }
}

const myReel = new Reel('Мой первый рилс', 30);

// Лайкнуть рилс
myReel.like(); 
// Ожидаемый вывод: Рилс "Мой первый рилс" получил лайк! Общее количество лайков: 1

// Добавить просмотр
myReel.addView();
// Ожидаемый вывод: Рилс "Мой первый рилс" просмотрен! Общее количество просмотров: 1

// Отобразить информацию о рилсе
console.log(myReel.getInfo());
// Ожидаемый вывод:
// Рилс: Мой первый рилс
// Длительность: 30 секунд
// Лайков: 1
// Просмотров: 1