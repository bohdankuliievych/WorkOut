This is a regular template compatible with GULP.
// =============================
For regular usage:
	index.html
	scss/style.scss
	js/script.js
(you need Dart Sass installed and must execute
sass --watch src/scss:src/css
at every start of your work before you run live server).
// =============================
Робота з файлами в GULP:
- Картинки в HTML вставляємо src='@img/'
- gulp буде запускати browser-sync в Google Chrome, за потреби редагуйте gulp/tasks/server.js.
- Файли шрифтів .otf кладемо в src/fonts , видаляємо src/scss/globals/_fonts.scss якщо він є.
// =============================

    Рекомендовано розпочинати макет по паттерну mobile-first, але на ваш розсуд, можна розпочати і з десктопного варіанту.
    Звертаю вашу увагу, що рожевий колір який використовується майже по всьому макету, було б оку приємно, якщо його винести в окерму змінну css.
    Планшетну версію макету робимо на своє бачення, головний критерій, щоб зберігалась цілісність контенту.
    Меню сайту в мобільній версії з'являється при наведенні курсором на бургер меню. - works using JS
    Всі елементи кнопок на макеті, робимо посиланнями, не забуваємо про це.
// =============================
logo_big - text
hero - grid
footer - grid
// =============================