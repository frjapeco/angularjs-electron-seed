var config  = require('../config/project-config'),
    jshint  = require('gulp-jshint'),
    gulp    = require('gulp');

gulp.task('lint', function() {
  var src = config.APP_DIR + '/**/*.js';

  return gulp.src(src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
