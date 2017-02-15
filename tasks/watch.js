var gulp = require('gulp');
    livereload = require('gulp-livereload');

module.exports = function() {
  livereload.listen();
  gulp.watch('./app/src/templates/*.hbs', ['templates']);
  gulp.watch('./app/src/assets/js/*.js', ['js']);
  gulp.watch('./app/src/assets/css/*.css', ['css']);
  gulp.watch('./app/src/assets/img/*', ['img']);
  gulp.watch('./app/src/assets/fonts/*', ['fonts']);
};
