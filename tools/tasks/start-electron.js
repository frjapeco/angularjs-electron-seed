var electron        = require('electron-connect').server.create(),
    gulp            = require('gulp');

gulp.task('start-electron', function () {
  return electron.start();
});
