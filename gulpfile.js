var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');

gulp.task('sassComponents', function() {

	return gulp.src('sassComponents/**/mainScss/*.scss', {base: "./"})
		.pipe(sass({
			'sourcemap=none': true,
			 errLogToConsole: true
		})).on('error', notify.onError({
	        title: "mistake: ",
	        message: "<%= error.message %>"
	    }))
		//.pipe(concat('cg-story-main.css'))
		.pipe(rename({dirname:''}))
		.pipe(gulp.dest('public/stylesheets/'));
});

/*gulp.task('html', function() {

	return gulp.src('Src/*.html')
		.pipe(gulp.dest('Prod/'));

});*/
/*gulp.task('js', function() {

	return gulp.src('Src/js/*.js')
		.pipe(gulp.dest('Prod/js/'));

});*/

gulp.task('watch', function() {
	//gulp.watch('source-css/*.scss', ['styles']);
	gulp.watch('sassComponents/**/mainScss/*.scss', ['sassComponents']);
	//gulp.watch('Src/*.html', ['html']);
	//gulp.watch('Src/js/*.js', ['js']);
});