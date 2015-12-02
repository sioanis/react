var gulp        = require('gulp'),
  	gutil       = require('gulp-util'),
  	sass        = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
});
 
gulp.task('default', function () {
  gulp.watch('*.scss', ['sass'])
});
 