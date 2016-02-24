var gulp = require('gulp');
var sass = require('gulp-sass');
// var concat = require('gulp-concat');

// ----------------- Gulp CONCATINAT---------------------------------------------  //
// gulp.task('scripts', function() {
//     return gulp.src('public/js/*.js')
//       .pipe(concat('ajax.js'))
//       .pipe(gulp.dest('public/dist/'));
// });


// ----------------- Gulp SASS---------------------------------------------  //
var input = './public/sass/**/*.scss';
var output = './public/dist';

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src('./public/sass/**/*.scss')
    // Run Sass on those files
    .pipe(sass())
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});


// ----------------- Gulp WATCH---------------------------------------------  //
gulp.task('watch', function() {
  return gulp

    //  // Watch .js files
    //  gulp.watch('src/js/*.js', ['scripts']);

    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


// ----------------- Gulp RUN---------------------------------------------  //
gulp.task('default', ['sass', 'watch']);





// ----------------- Gulp PRODUCTION---------------------------------------------  //
// gulp.task('prod', ['sassdoc'], function () {
//   return gulp
//     .src(input)
//     .pipe(sass({ outputStyle: 'compressed' }))
//     .pipe(autoprefixer(autoprefixerOptions))
//     .pipe(gulp.dest(output));
// });



// ----------------- Gulp Conctinat---------------------------------------------  //
// var concat = require('gulp-concat');
//
// gulp.task('scripts', function() {
//   return gulp.src(['./lib/file3.js', './lib/file1.js', './lib/file2.js'])
//     .pipe(concat({ path: 'new.js', stat: { mode: 0666 }}))
//     .pipe(gulp.dest('./dist'));
// });
