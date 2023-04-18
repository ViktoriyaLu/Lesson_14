const contentEl = document.querySelector('.content');
const data = [{
        number: '1. ',
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        topRatedFilm: 'Список Шиндлера'
    },
    {
        number: '2. ',
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        topRatedFilm: 'Начало'
    },
    {
        number: '3. ',
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        topRatedFilm: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        number: '4. ',
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        topRatedFilm: 'Брат'
    },
    {
        number: '5. ',
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        topRatedFilm: 'Зелёная книга'
    },
    {
        number: '6. ',
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        topRatedFilm: 'Дурак'
    },
    {
        number: '7. ',
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        topRatedFilm: 'Далласский клуб покупателей'
    },
];

data.forEach(element => {

    const directorEl = document.createElement('div');
    directorEl.classList.add('director');
    const blockFirst = document.createElement('div');
    blockFirst.classList.add('block__first');
    const number = document.createElement('p');
    number.classList.add('block__first-number');
    number.textContent = element.number;
    const firstName = document.createElement('p');
    firstName.classList.add('block__first-name');
    firstName.textContent = element.name;

    const blockSecond = document.createElement('div');
    blockSecond.classList.add('block__second');


    const career = document.createElement('p');
    career.classList.add('block__second-career');
    career.textContent = element.career;

    const films = document.createElement('a');
    films.classList.add('block__second-films');
    films.textContent =   "Фильмография";
    films.href = element.films;

    const filmsEl = document.createElement('div');
    filmsEl.classList.add('films');

    const topRatedFilm = document.createElement('p');
    topRatedFilm.classList.add('topRatedFilm');
    topRatedFilm.textContent = element.topRatedFilm;

    contentEl.appendChild(directorEl);
    directorEl.appendChild(blockFirst);
    directorEl.appendChild(blockSecond);
    blockFirst.appendChild(number);
    blockFirst.appendChild(firstName);
    blockSecond.appendChild(career);
    blockSecond.appendChild(films);
    filmsEl.appendChild(topRatedFilm);

})







 