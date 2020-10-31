var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

gulp.task('css', function() {
	gulp.src([
		'./css/bootstrap.min.css',
		'./css/masterslider.css',
		'./css/default-style.css',
		'./css/masterslider-slider-style.css',
		'./css/cubeportfolio.min.css',
		'./css/slick.css',
		'./css/slick-theme.css',
		'./css/font-awesome.min.css',
		'./css/style.css'
	])
		.pipe(concat('app.css'))
		.pipe(cssMin())
		.pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
	gulp.src([
		'./js/jquery.min.js'
	])
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'));

	gulp.src([
		'./js/bootstrap.min.js',
		'./js/masterslider/jquery.easing.min.js',
		'./js/masterslider/masterslider.min.js',
		'./js/cubeportfolio/jquery-latest.min.js',
		'./js/cubeportfolio/jquery.cubeportfolio.min.js',
		'./js/cubeportfolio/main1.js',
		'./js/slick.min.js',
		'./js/custom.js'
	])
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'));
});

gulp.task('default', ['css', 'scripts']);