var gulp        = require('gulp'),
  	gutil       = require('gulp-util'),
  	sass        = require('gulp-sass'),
  	react 		= require('gulp-react');

gulp.task('react', function () {
  gulp.src('jsx/index.jsx')
    .pipe(react())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  gulp.src('sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'))
});
 
gulp.task('default', function () {
  gulp.watch('sass/*.scss', ['sass'])
  gulp.watch('jsx/*.jsx', ['react'])
});