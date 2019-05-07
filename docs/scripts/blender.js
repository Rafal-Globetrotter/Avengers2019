
 gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    var pathstoCopy = [
     './Mega/packages/**/*',
     './Mega/customers/**/*',
     './Mega/start-hosting/**/*',
    ]
    return gulp.src(pathstoCopy)
    .pipe(gulp.dest("dist"));
  })


  <link rel="stylesheet" href="_packages.css">
  <link rel="stylesheet" href="_start-hosting.css">
  <link rel="stylesheet" href="_customers.css">



  gulp.task('styles', function() {
    return gulp.src('./Mega/packages/_packages.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./Mega/temp/styles'));
  });


  gulp.task('styles', function() {
    return gulp.src('./Mega/customers/_customers.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./Mega/temp/styles'));
  });

  
  gulp.task('styles', function() {
    return gulp.src('./Mega/start-hosting/_start-hosting.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./Mega/temp/styles'));
  });


  <style>

body {

    background: url("../images/Tony.jpg");
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1;
}

</style>
