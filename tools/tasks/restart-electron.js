var electron        = require('electron-connect').server.create(),
    gulp            = require('gulp');

gulp.task('restart-electron', function() {
  return electron.restart();
});
