var gulp = require('gulp'),
    concat = require('gulp-concat'),  
    rename = require('gulp-rename'),
    csslint = require('gulp-csslint');  
    cleanCSS = require('gulp-clean-css');

module.exports = function() {
  gulp.src('./app/src/assets/css/*.css')
    .pipe(csslint())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./app/dist/css/'));
};