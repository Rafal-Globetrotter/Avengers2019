var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create(),
mixins = require('postcss-mixins'),
webpack = require('webpack');




gulp.task('styles', function() {
   return gulp.src('./Mega/styles/styles.css')
   .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
   .on('error', function(errorInfo){
     console.log(errorInfo.toString());
     this.emit('end');
   })
   .pipe(gulp.dest('./Mega/temp/styles'));
 
  });


  gulp.task('scripts', function(callback) {
    webpack(require('./webpack.config.js'), function() {
      console.log("I made it");
      callback();
    });
  });

 gulp.task('watch', function() {

    browserSync.init({
      server: {
        baseDir: "Mega"
      }
    });

   watch('./Mega/index.html', function() {
     browserSync.reload();
   });

   watch('./Mega/styles/**/*.css', function() {
     gulp.start('cssInject');

   });

      watch('./Mega/scripts/**/*.js', function() {
     gulp.start('scripts');
   });

   watch('./Mega/customers/indexc.html', function() {
    browserSync.reload();
  });

 
  watch('./Mega/customers/**/*.css', function() {
    gulp.start('cssInject');

  });


  watch('./Mega/packages/indexp.html', function() {
    browserSync.reload();
  });

 
  watch('./Mega/packages/**/*.css', function() {
    gulp.start('cssInject');

  });



    watch('./Mega/start-hosting/indexh.html', function() {
    browserSync.reload();
  });

 
  watch('./Mega/start-hosting/**/*.css', function() {
    gulp.start('cssInject');

  });


 });

 gulp.task('cssInject', ['styles'], function() {
   return gulp.src('./Mega/temp/styles/styles.css')
     .pipe(browserSync.stream());
 })
