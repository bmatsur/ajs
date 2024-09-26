'use strict';
console.log(' ')
console.log('-----------YouTube-----------')


class YouTubeVideo {
    #title
    #likes = 0;
    #dislikes = 0;
    #views = 0;

    constructor(title){
        this.#title = title;
    }

    like() {
        this.#likes++;
        console.log(`Видео "${this.#title}" получило лайк! Общее количество лайков: ${this.#likes}`)
    }

    dislike () {
        this.#dislikes++;
        console.log(`Видео "${this.#title}" получило лайк! Общее количество disлайков: ${this.#dislikes}`)
    }
    
    addView() {
        this.#views++;
        console.log(`Видео "${this.#title}" получило лайк! Общее количество просмотров: ${this.#views}`)
    }
    
    getInfo() {
        return `Видео: ${this.#title}
        Лайков: ${this.#likes}
        Дизлайков: ${this.#dislikes}
        Просмотров: ${this.#views}`
    }
}

const myVideo = new YouTubeVideo('Урок JavaScript');

// Лайкнуть видео
myVideo.like(); 
// Ожидаемый вывод: Видео "Урок JavaScript" получило лайк! Общее количество лайков: 1

// Дизлайкнуть видео
myVideo.dislike();
// Ожидаемый вывод: Видео "Урок JavaScript" получило дизлайк! Общее количество дизлайков: 1

// Добавить просмотр
myVideo.addView();
// Ожидаемый вывод: Видео "Урок JavaScript" просмотрено! Общее количество просмотров: 1

// Отобразить информацию о видео
console.log(myVideo.getInfo());
// Ожидаемый вывод:
// Видео: Урок JavaScript
// Лайков: 1
// Дизлайков: 1
// Просмотров: 1