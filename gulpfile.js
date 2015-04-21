'use strict';

var path = require('path');
var fs = require('fs');

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

var distPath = path.join(__dirname, 'dist');

gulp.task('build', ['build-js', 'build-html', 'build-css', 'build-img']);

gulp.task('build-js', function() {
	return gulp.src('src/main.js')
		.pipe(browserify({
		}))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest(path.join(distPath, 'js')));
});

gulp.task('build-html', function() {
	return gulp.src('src/index.html')
		.pipe(gulp.dest(distPath));
});

gulp.task('build-css', function() {
	return gulp.src('src/css/**/*')
	.pipe(gulp.dest(path.join(distPath, 'css')));
});

gulp.task('build-img', function() {
	return gulp.src('src/img/**/*')
		.pipe(gulp.dest(path.join(distPath, 'img')));
});


gulp.task('watch', function() {
	gulp.watch('src/**/*', ['build']);
});
