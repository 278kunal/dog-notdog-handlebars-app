var gulp = require('gulp'),
    watch = require('./tasks/watch'),
    templates = require('./tasks/templates'),
    js = require('./tasks/js'),
    css = require('./tasks/css'),
    img = require('./tasks/img'),
    fonts = require('./tasks/fonts');

gulp.task('templates',templates);

gulp.task('js',['templates'],js);

gulp.task('css',css);

gulp.task('img',img);

gulp.task('fonts',fonts);

gulp.task('watch',watch);

gulp.task('build', ['js','css','img','fonts','watch']);
