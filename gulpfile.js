// Include gulp
var gulp = require('gulp');

// automatically pull in any tasks from package.json
var plugins = require('gulp-load-plugins')();

// clean
gulp.task('clean', function(cb) {
	return gulp.src('build/**/*.*', {read: false})
		.pipe(plugins.clean());
});

// process scripts
gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(plugins.concat('app.js'))
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('build/js/'));
});

// copy libs
gulp.task('copyLibs', function() {
	return gulp.src(['node_modules/angular/angular.min.js', 'node_modules/angular/angular.min.js.map'])
		.pipe(gulp.dest('build/libs/'));
});

// copy html
gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('build/'));
});

// copy css
gulp.task('css', function() {
	return gulp.src('src/css/*.*')
		.pipe(gulp.dest('build/css/'));
});

// watch
gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/css/*.css', ['css']);
  gulp.watch('src/*.html', ['html']);
  gulp.watch('gulpfile.js', ['local']);
});

// compound tasks
gulp.task('local', ['clean'], function() {
	gulp.start('scripts', 'copyLibs', 'css', 'html');
});

// default
gulp.task('default', ['local']);
