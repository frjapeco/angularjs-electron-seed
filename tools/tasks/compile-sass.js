var config          = require('../config/project-config');
var gulp            = require('gulp');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');

gulp.task('compile-sass', function() {
  var src = config.SRC_DIR + '/**/*.scss';
  var dest = config.APP_DIR;

  return gulp
    .src(src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest));
});
