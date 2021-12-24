const gulp = require('gulp');
const { series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformJs() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false,
      presets: ['env'],
    }))
    .pipe(uglify())
    .on('error', (err) => console.log(err))
    .pipe(concat('code.min.js'))
    .pipe(gulp.dest('build'))
}

function end(cb) {
  console.log('Fim!')
  return cb();
}

exports.default = series(transformJs, end);
