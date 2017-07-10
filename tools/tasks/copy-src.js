var config          = require('../config/project-config');
var gulp            = require('gulp');

gulp.task('copy-src', function() {
  var src = [
    config.SRC_DIR + '/**',
    '!' + config.SRC_DIR + '/**/*.spec.js',
    '!' + config.SRC_DIR + '/**/*.scss'
  ];
  var dest = config.APP_DIR;

  return gulp.src(src).pipe(gulp.dest(dest));
});
