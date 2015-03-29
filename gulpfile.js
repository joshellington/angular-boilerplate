var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    tinylr;

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 4002}));
  app.use(express.static(__dirname));
  app.listen(4000);
});

gulp.task('sass', function () {
    gulp.src('./app/css/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./app/css'));
});

gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});

gulp.task('watch', function() {
  gulp.watch('app/css/*.scss', ['sass']);
  gulp.watch('app/**/*.html', notifyLiveReload);
  gulp.watch('app/css/*.css', notifyLiveReload);
  gulp.watch('app/js/**/*.js', notifyLiveReload);
});

gulp.task('default', ['express', 'livereload', 'watch'], function() {
  
});