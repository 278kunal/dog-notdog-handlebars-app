var gulp = require('gulp'),
    watch = require('./tasks/watch'),
    templates = require('./tasks/templates');
    lint = require('./tasks/lint');
    server = require('./tasks/server');

gulp.task('templates',templates);

gulp.task('lint',lint);

gulp.task('watch',watch);

gulp.task('server',server);

gulp.task('serve', ['server']);
