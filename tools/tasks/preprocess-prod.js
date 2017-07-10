var config          = require('../config/project-config'),
    electron        = require('electron-connect').server.create(),
    gulp            = require('gulp'),
    preprocess      = require('gulp-preprocess');

gulp.task('preprocess-prod', function() {
  var src = [
    config.APP_DIR + '/**/*.html',
    config.APP_DIR + '/**/*.js'
  ];

  return gulp
    .src(src)
    .pipe(preprocess({ context: { ENVIROMENT: 'production'} }))
    .pipe(gulp.dest(config.APP_DIR));
});
