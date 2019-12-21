var gulp = require("gulp");
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var path = require('path');

gulp.task('build', function () {
    return gulp.src([
          './src/styles/less/**/*.less'
      ])
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./src/styles/dist'));
  });


gulp.task('watch', function () {
    gulp.watch('./src/styles/less/**/*.less', gulp.series('build'));
});
