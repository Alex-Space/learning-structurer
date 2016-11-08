const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const debug = require('gulp-debug');

const isDevelopment = (process.env.NODE_ENV === 'production') ? false : true;

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(debug({title: 'src'}))
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(debug({title: 'sass'}))
        // .pipe(concat('eye-candy-light.css'))
        .pipe(debug({title: 'concat'}))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('css'));

    // Exit from task when all finished
    callback();
});

gulp.task('watch', function () {
    return watch('sass/*.scss', function () {
        gulp.start('sass');
    });
});

gulp.task('default', ['sass','watch']);
