//* Импортирование
var { series, parallel, src, dest, watch } = require('gulp'); //? Запрашиваем gulp для серий и параллельного выполнения
var sass = require('gulp-sass'); //? Запрашиваем gulp-sass для операций с sass, scss
var reload = require('gulp-livereload'); //? Подключаем плагин перезагрузки страницы
var injection = require('gulp-file-include'); //? Плагин для вставки файлов в файл
var htmlMinify = require('gulp-htmlmin'); //? Плагин для минимимзации HTML
var cssClean = require('gulp-clean-css'); //? Плагин для минимимзации CSS
var jsMinify = require('gulp-minify'); //? Плагин для минимимзации JS
// var pug = require('gulp-pug')

//* Функции

//! Функция для обработки SASS
function sassTranslate(EOT) {
	src('src/sass/*').pipe(sass()).pipe(dest('output/css/'));
	reload();
	EOT();
}

//! Функция для обработки HTML
function htmlInject(EOT) {
	src('src/html/*.html')
		.pipe(injection({ prefix: '@@', basepath: '@file' }))
		.pipe(dest('./'));
	EOT();
}

//! Функция для минифицирования кода
function minify(EOT) {
	// Minify HTML
	src('./*.html')
		.pipe(htmlMinify({ collapseWhitespace: true }))
		.pipe(dest('./'));
	// Minify CSS
	src('src/output/css/*')
		.pipe(cssClean({ compability: 'ie8' }))
		.pipe(dest('output/css/'));
	// Minify JS
	src('output/js/*').pipe(jsMinify()).pipe(dest('output/js/'));
	EOT();
}

//* Watch-function
function watchFunc(EOT) {
	//? Наблюдаем за SASS, Pug
	reload.listen(); // Прослушка для live-reload
	watch('src/sass/*', sassTranslate);
	watch('src/html/*', htmlInject);
	EOT();
}

exports.default = parallel(htmlInject, sassTranslate); //? Экпортируем задачу по умолчанию
exports.build = series(parallel(htmlInject, sassTranslate), minify); //! Задача для билда
exports.watch = watchFunc; //! Задача для наблюдения
