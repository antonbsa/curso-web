const { series, dest } = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function transformTs() {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(dest('build'))
}

exports.default = series(transformTs);
