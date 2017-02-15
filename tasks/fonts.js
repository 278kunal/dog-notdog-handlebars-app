var gulp = require('gulp');

module.exports = function() {
  gulp.src('./app/src/assets/fonts/*')
    .pipe(gulp.dest('./app/dist/fonts/'));;
};