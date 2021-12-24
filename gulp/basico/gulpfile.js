const gulp = require('gulp');
const { series, parallel } = require('gulp');

const antes1 = cb => {
  console.log('antes 1')
  return cb();
}

const antes2 = cb => {
  console.log('antes 2')
  return cb();
}

const fim = cb => {
  console.log('fim')
  return cb();
}

function copy(cb) {
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'));
  return cb();
}

module.exports.default = series(
  parallel(
    antes1,
    antes2,
  ),
  copy,
  fim,
);