// GULP // --------------------------------------------------------------  //
var gulp = require('gulp');

// Concatenate & Minify JS// --------------------------------------------  //
var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
gulp.task('scripts', function() {
    return gulp.src('public/js/*.js')
      .pipe(concat('main.js'))
        // .pipe(rename({suffix: '.min'}))
        // .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});


// ---SASS-----------------------------------------------------------  //
var sass = require('gulp-sass');
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
gulp.task('sass', function () {
  return gulp
    .src('public/scss/**/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/dist'));
});


// ---WATCH-----------------------------------------------------------  //
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('public/js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('public/scss/*.scss', ['sass'])
  .on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
 });


 // Default Task // --------------------------------------------------------------  //
gulp.task('default', ['scripts', 'sass', 'watch']);




// ----------------- Gulp PRODUCTION---------------------------------------------  //
// gulp.task('prod', ['sassdoc'], function () {
//   return gulp
//     .src(input)
//     .pipe(sass({ outputStyle: 'compressed' }))
//     .pipe(autoprefixer(autoprefixerOptions))
//     .pipe(gulp.dest(output));
// });

// - autoprefixer
// - Generating CSS Image Sprites
// - img optimization
