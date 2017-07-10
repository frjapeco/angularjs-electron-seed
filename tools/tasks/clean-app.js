var clean           = require('gulp-clean');
var config          = require('../config/project-config');
var gulp            = require('gulp');

gulp.task('clean-app', function() {
  return gulp
    .src(config.APP_DIR + '/*',{read: false})
    .pipe(clean({force: true}));
});
