var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: './site' //replace this line with the next line
                            // proxy: "local.dev" 
                            // or whatever the vhost site URL should be
  });
  gulp.watch('site/*.htm*', ['serve']).on('change', browserSync.reload);
  gulp.watch('site/styles/*.css', ['serve']).on('change', browserSync.reload);
  gulp.watch('site/scripts/*.js*', ['serve']).on('change', browserSync.reload);
  gulp.watch('site/images/*', ['serve']).on('change', browserSync.reload);
  gulp.watch('_sass/*.scss').on('change', ['sass']);
});

gulp.task('sass', function(){

  return gulp.src('_sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('site/styles'))
    .pipe(browserSync.reload);
  });

gulp.task('default',['serve']);
