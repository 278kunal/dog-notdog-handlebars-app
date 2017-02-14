var gulp = require('gulp');

module.exports = function() {
  gulp.src('./build/js/*.js')
    .pipe(jshint())
};
