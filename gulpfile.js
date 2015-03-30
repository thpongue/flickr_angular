// Include gulp
var gulp = require('gulp');

// automatically pull in any tasks from package.json
var plugins = require('gulp-load-plugins')();

// clean
gulp.task('clean', function() {
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

// copy html
gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(plugins.replace(/(\w*)(\.js)/g, '$1.min$2'))
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
});

// compound tasks
gulp.task('local', ['clean', 'scripts', 'html', 'css']);

// default
gulp.task('default', ['local']);
