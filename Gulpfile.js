
// GULP // --------------------------------------------------------------  //
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Concatenate JS// --------------------------------------------  //
gulp.task('scripts', function() {
    return gulp
      .src('public/js/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('public/dist'));
});

// --- SASS -----------------------------------------------------------  //
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
gulp.task('sass', function () {
  return gulp
    .src('public/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
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




// ---- Gulp PRODUCTION---------------------------------------------  //
// gulp.task('prod', ['sassdoc'], function () {
//   return gulp
//     .src('public/scss/**/*.scss')
//     .pipe(sass({ outputStyle: 'compressed' }))
//     .pipe(autoprefixer(autoprefixerOptions))
//     .pipe(gulp.dest(public/dist));
// });

// - Generating CSS Image Sprites
// - autoprefixer
// - minimize css

// - uglify
// - rename to .min
// - img optimization
// - mordinizer seperate js file on the top (in the head tag)
// - Avoid any sourcemaps!
