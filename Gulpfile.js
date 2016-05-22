var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**',
  ' * ©<%= new Date().getFullYear() %> Arkadiusz Neuman',
  ' * Wszelkie prawa zastrzeżone',
  ' */',
  ''].join('\n');

gulp.task('js-dev', function () {
    return gulp.src('public/js/sh/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('sowaHomepage.min.js'))
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public/js/dist'));
});

gulp.task('js', function () {
    return gulp.src('public/js/sh/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('sowaHomepage.min.js'))
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('public/js/dist'));
});

gulp.task('default', ['js']);

gulp.task('watch', function () {
    gulp.watch(['public/js/sh/**/*.js'], ['js-dev']);
});
