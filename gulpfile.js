'use strict'

const gulp = require('gulp');
const clean = require('gulp-rimraf');
const zip = require('gulp-zip');

const zipBuildDirectoryPath = 'archive/zip-build';


gulp.task('zip-build-clean', () => {
    return gulp.src(zipBuildDirectoryPath, { read: false })
        .pipe(clean());
});

gulp.task('zip-build', ['zip-build-clean'], () => {
    return gulp.src([
                'scripts/**',
                'manifest.json'
            ], {base: '.'})
        .pipe(gulp.dest(zipBuildDirectoryPath));
});

gulp.task('zip', ['zip-build'], () => {
    return gulp.src(zipBuildDirectoryPath + '/**', {base: 'archive'})
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});
