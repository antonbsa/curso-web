const gulp = require('gulp');
const { parallel } = require('gulp');
const sass = require('gulp-sass');
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function transformCss() {
  return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifyCss({ 'uglyComments': true }))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/css'))
}

function transformHtml() {
  return gulp.src('src/index.html')
    // .pipe(concat('app.min.html'))
    .pipe(gulp.dest('build'))
}

exports.default = parallel(transformCss, transformHtml);
