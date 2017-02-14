var gulp = require('gulp'),
    watch = require('./gulp/watch'),
    templates = require('./gulp/templates');
    lint = require('./gulp/lint');
    server = require('./gulp/server');

gulp.task('templates',templates);

gulp.task('lint',lint);

gulp.task('watch',watch);

gulp.task('server',server);

gulp.task('serve', ['server']);
