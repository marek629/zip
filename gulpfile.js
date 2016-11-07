'use strict'

const gulp = require('gulp');
const clean = require('gulp-rimraf');
const argv = require('yargs').argv;
const fs = require('fs');
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
    let manifest = JSON.parse(fs.readFileSync('manifest.json'));

    let fileName = argv.brand || 'archive';
    fileName += '-' + manifest.version;

    let environment = argv.env;
    if (environment) {
        fileName += '-' + environment;
    }
    fileName += '.zip';

    return gulp.src(zipBuildDirectoryPath + '/**', {base: 'archive'})
        .pipe(zip(fileName))
        .pipe(gulp.dest('dist'));
});
