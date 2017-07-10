var config          = require('./tools/config/project-config');
    gulp            = require('gulp'),
    runSequence     = require('run-sequence'),
    Server          = require('karma').Server,
    watch           = require('gulp-watch');

require('require-dir')(config.GULP_TASKS_DIR);

gulp.task('watch-src', function() {
  watch(config.SRC_DIR + '/**', function() {
    runSequence(
      'clean-app',
      'copy-src',
      'compile-sass',
      'preprocess-dev',
      'inject-dependencies',
      'reload-electron'
    );
  });
});

gulp.task('start', function(done) {
  runSequence(
    'clean-app',
    'copy-src',
    'compile-sass',
    'preprocess-dev',
    'inject-dependencies',
    'start-electron',
    'watch-src',
    done
  );
});

gulp.task('build', function(done) {
  runSequence(
    'clean-app',
    'copy-src',
    'compile-sass',
    'preprocess-prod',
    'inject-dependencies',
    'lint',
    'package',
    done
  );
});

gulp.task('test', function (done) {
  console.log(config.PROJECT_ROOT);
  new Server({
    configFile: config.PROJECT_ROOT + '/karma.conf.js',
  }, done).start();
});
