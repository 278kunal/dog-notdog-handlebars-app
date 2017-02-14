var gulp = require('gulp'),
    watch = require('./gulp/watch'),
    templates = require('./gulp/templates');

gulp.task('templates',templates);

gulp.task('watch',watch);

gulp.task('serve', ['templates','watch']);
