var gulp = require('gulp'),
    concat = require('gulp-concat'),  
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');  
    uglify = require('gulp-uglify');
    streamqueue = require('streamqueue');

module.exports = function() {
  return streamqueue({ objectMode: true },
        gulp.src('./app/src/assets/js/*.js'),
        gulp.src('./app/src/assets/js/core/dogPack.js'),
        gulp.src('./app/src/assets/js/core/helpers.js'),
        gulp.src('./app/src/assets/js/core/app.js')
    )
        .pipe(jshint())
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('./app/dist/js'));
};