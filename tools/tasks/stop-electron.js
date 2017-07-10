var electron        = require('electron-connect').server.create(),
    gulp            = require('gulp');

gulp.task('stop-electron', function () {
  return electron.stop();
});
