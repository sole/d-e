'use strict';

var path = require('path');
var fs = require('fs');

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var jade = require('gulp-jade');

var distPath = path.join(__dirname, 'dist');

gulp.task('build', ['build-js', 'build-jade', 'build-css', 'build-lib', 'build-img']);

gulp.task('build-js', function() {
	return gulp.src('src/main.js')
		.pipe(browserify({
		}))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest(path.join(distPath, 'js')));
});

gulp.task('build-jade', function() {
	gulp.src('src/index.jade')
		.pipe(jade())
		.pipe(gulp.dest(distPath));
});

// Not using this, using build-jade instead
/*gulp.task('build-html', function() {
	return gulp.src('src/index.html')
		.pipe(gulp.dest(distPath));
});*/

gulp.task('build-css', function() {
	return gulp.src('src/css/**/*')
		.pipe(gulp.dest(path.join(distPath, 'css')));
});

gulp.task('build-lib', function() {
	return gulp.src('src/lib/**/*')
		.pipe(gulp.dest(path.join(distPath, 'lib')));
});

gulp.task('build-img', function() {
	return gulp.src('src/img/**/*')
		.pipe(gulp.dest(path.join(distPath, 'img')));
});


gulp.task('watch', function() {
	gulp.watch('src/**/*', ['build']);
});

gulp.task('default', ['build', 'watch']);
