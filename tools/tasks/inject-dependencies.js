var angularFilesort = require('gulp-angular-filesort'),
    config          = require('../config/project-config'),
    gulp            = require('gulp'),
    inject          = require('gulp-inject');

gulp.task('inject-dependencies', function() {
  var target      = config.APP_DIR + '/index.html',
      js          = gulp.src(config.APP_JS_DIR + '/**/*.js').pipe(angularFilesort()),
      css         = gulp.src(config.APP_DIR + '/**/*.css'),
      cssVendors  = gulp.src(config.CSS_VENDORS),
      jsVendors   = gulp.src(config.JS_VENDORS),
      dest        = config.APP_DIR

  return gulp
    .src(target)
    .pipe(inject(js, {relative: true}))
    .pipe(inject(css, {relative: true}))
    .pipe(inject(jsVendors, {name: 'vendor', relative: true}))
    .pipe(inject(cssVendors, {name: 'vendor', relative: true}))
    .pipe(gulp.dest(dest));
});
