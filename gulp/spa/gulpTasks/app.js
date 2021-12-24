const gulp = require('gulp');
const { dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('node-sass'));
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

function appHtml() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('build'));
}

function appCss() {
  return gulp.src('src/assets/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifyCss({ 'uglyComments': true }))
    .pipe(concat('app.min.css'))
    .pipe(dest('build/assets/css'));
}

function appJs() {
  return gulp.src('src/assets/js/**/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(dest('build/assets/js'))
}

function appImg() {
  return gulp.src('src/assets/imgs/**/*.*')
    .pipe(dest('build/assets/imgs'))
}

gulp.task('appHtml', appHtml);
gulp.task('appCss', appCss);
gulp.task('appJs', appJs);
gulp.task('appImg', appImg);

module.exports = {
  appHtml,
  appCss,
  appJs,
  appImg,
}
