const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

function server() {
  return gulp.src('build')
    .pipe(webserver({
      port: 8080,
      open: true,
      livereload: true,
    }))
}

function monitorFiles(cb) {
  watch('src/**/*.html', () => gulp.series('appHtml')());
  watch('src/**/*.scss', () => gulp.series('appCss')());
  watch('src/**/*.js', () => gulp.series('appJs')());
  watch('src/**/*.img', () => gulp.series('appImg')());
  return cb();
}

module.exports = {
  server,
  monitorFiles,
}
