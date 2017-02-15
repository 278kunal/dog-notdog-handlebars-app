var gulp = require('gulp');

module.exports = function() {
  gulp.src('./app/src/assets/img/*')
    .pipe(gulp.dest('./app/dist/img/'));;
};