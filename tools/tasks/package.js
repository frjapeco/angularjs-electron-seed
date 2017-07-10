var argv            = require('yargs').argv,
    builder         = require('electron-builder'),
    gulp            = require('gulp');

gulp.task('package', function() {
  var platform;

  switch (argv.platform) {
    case 'windows':
      platform = builder.Platform.WINDOWS.createTarget();
      break;
    case 'linux':
      platform = builder.Platform.LINUX.createTarget();
      break;
  }
  return builder.build({
    targets: platform
  }).then(function() {
  }).catch(function(error) {
    console.log(error);
  });
});
