var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var bower = require('main-bower-files');
var connect = require('gulp-connect');
var react = require('gulp-react');
var requirejs = require('./build/gulp-requirejs');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

/*
CSS Build
*/

gulp.task('css.build', function () {
  return gulp
    .src('./src/css/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

/*
HTML Build

A no-transform copy of root HTML files from src directory
to the output (dist) directory.
*/

gulp.task('html.build', function () {
  return gulp
    .src('./src/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

/*
JS Staging

Transforming the files from React/JSX to common ES5 in to 
the temporary staging area.
*/

gulp.task('js.app.stage', function () {
  return gulp
    .src('./src/js/**/*.js')
    .pipe(react())
    .pipe(gulp.dest('./temp/js/app'));
});

gulp.task('js.lib.stage', function () {
  return gulp
    .src(bower())
    .pipe(gulp.dest('./temp/js/lib'));
});

gulp.task('js.stage', [
  'js.app.stage',
  'js.lib.stage'
]);

/*
JS Build

Using require.js to transform the staged JS files, both app 
and lib in to a single bundle and copy to the output (dist)
directory.
*/

gulp.task('js.build', ['js.stage'], function () {
  return requirejs({
    baseUrl: './temp/js/app',
    name: 'components/Root',
    out: 'app.js',
    paths: {
      lib: '../lib'
    },
    optimize: 'none',
    include: [
      'lib/require'
    ]
  })
    //.pipe(sourcemaps.init())
    .pipe(uglify())
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
});

/*
Common Build

Running both the CSS, HTML and JS build processes,
producing a complete application in the output (dist)
directory.
*/

gulp.task('build', [
  'css.build',
  'html.build',
  'js.build'
]);

/*
Development

Tasks for use during development, such as serving development
versions of the site, and auto-stage/build on file change.
*/

gulp.task('serve', function () {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./src/css/**/*.scss'], ['css.build']);
  gulp.watch(['./src/*.html'], ['html.build']);
  gulp.watch(['./src/js/**/*.js'], ['js.build']);
});

gulp.task('dev', [
  'build',
  'serve',
  'watch'
]);
