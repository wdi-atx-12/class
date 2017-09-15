'use strict';

// general
var gulp = require('gulp');
var runSequence = require('run-sequence');

// sass
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// flags
var env = 'dev'; // default
var gulpif = require('gulp-if');

/**
 * Variables
 */

var destDir = 'public';

var config = {
  cssSrcDir: 'scss',
  autoprefixer: {
    browsers: ['> 1%', 'last 2 versions'],
    cascade: true,
    remove: true
  }
};

/**
 * Primary Tasks
 */

gulp.task('build', function(cb) {
  runSequence(['styles'], cb);
});

gulp.task('watch', ['build'], function() {
  gulp.watch(config.cssSrcDir + '/**/*.*', ['styles']);
});

gulp.task('deploy', function() {
  env = 'prod';
  gulp.start('build');
});

gulp.task('default', function() {
  console.log('');
  console.log('To do a basic build, run \"gulp build\"');
  console.log('');
  console.log('To build and rebuild on changes, run \"gulp watch\"');
  console.log('');
  console.log('To build for production, run \"gulp deploy\"');
  console.log('');
});

/**
 * Task Details
 */

gulp.task('styles', function() {
  var files = config.cssSrcDir + '/**/*.scss';

  var sassOptions = {
    outputStyle: (env === 'dev') ? 'nested' : 'compressed'
  };

  return gulp.src(files)
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulpif(env === 'dev', sourcemaps.write('maps')))
    .pipe(gulp.dest(destDir + '/css'));
});
