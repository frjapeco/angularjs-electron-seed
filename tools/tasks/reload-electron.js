var electron        = require('electron-connect').server.create(),
    gulp            = require('gulp');

gulp.task('reload-electron', function() {
  return electron.reload();
});
