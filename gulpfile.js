const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const minifycss = require('gulp-minify-css')
const rename = require('gulp-rename')



gulp.task('default', ['assets', 'css'])

gulp.task('assets', () => {
    return gulp.src('src/fonts/*.*')
               .pipe(gulp.dest('dist/fonts'))
})

gulp.task('css', () => {
    return gulp.src('src/octocat.scss')
           .pipe(sass().on('error', sass.logError))
           .pipe(autoprefixer({ browsers: ['> 5%'], cascade: false }))
           .pipe(gulp.dest('dist'))
           .pipe(rename({ suffix: '.min' }))
           .pipe(minifycss())
           .pipe(gulp.dest('dist'))
})

gulp.task('watch', ['default'], (done) => {
    gulp.watch('src/fonts/*.*', ['assets'])
    gulp.watch('src/*.scss', ['css'])
})