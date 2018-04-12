var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('reload', function(){
return gulp.src('C:/OpenServer/domains/JSlev2lesson4/**/*.*')
  .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('C:/OpenServer/domains/JSlev2lesson4/**/*.*', ['reload']);
})

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'C:/OpenServer/domains/JSlev2lesson4'
    }
  });
});
