//----------------------------------------------------------------
// Include gulp
//----------------------------------------------------------------
var gulp = require('gulp');


//----------------------------------------------------------------
// automatically pull in any tasks from package.json
//----------------------------------------------------------------
var plugins = require('gulp-load-plugins')();


//----------------------------------------------------------------
// clean
//----------------------------------------------------------------
gulp.task('clean', function(cb) {
	return gulp.src('build/**/*.*', {read: false})
		.pipe(plugins.clean());
});


//----------------------------------------------------------------
// process scripts
//----------------------------------------------------------------
gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(plugins.concat('app.js'))
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('build/js/'));
});


//----------------------------------------------------------------
// copy libs
//----------------------------------------------------------------
gulp.task('libs', function() {
	return gulp.src(['node_modules/angular/angular.min.js', 'node_modules/angular/angular.min.js.map'])
		.pipe(gulp.dest('build/libs/'));
});


//----------------------------------------------------------------
// copy html
//----------------------------------------------------------------
gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('build/'));
});


//----------------------------------------------------------------
// copy css
//----------------------------------------------------------------
gulp.task('css', function() {
	return gulp.src('src/css/*.*')
		.pipe(gulp.dest('build/css/'));
});


//----------------------------------------------------------------
// integration tests (webdriver and protractor)
//----------------------------------------------------------------
var gprotractor = require('gulp-protractor');

// The protractor task
var gulpProtractorAngular = require('gulp-angular-protractor');

// Start a standalone server
var webdriver_standalone = gprotractor.webdriver_standalone;

// Download and update the selenium driver
var webdriver_update = gprotractor.webdriver_update;

// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);

// Start the standalone selenium server
gulp.task('webdriver_standalone', webdriver_standalone);

// main integration task - run protractor then stop server
gulp.task('integration', ["stop_server"], function(cb) {
});

// stop server once protractor has run
gulp.task('stop_server', ["protractor"], function() {
	plugins.connect.serverClose();
});

// start server then run protractor
gulp.task('protractor', ['start_server'], function(cb) {
	gulp
		.src(['tests/integration/**/*.*'])
		.pipe(gulpProtractorAngular({
			'configFile': 'protractor.config.js',
			'debug': false,
			'autoStartStopServer': true
		}))
		.on('error', function(e) {
			console.log(e);
		})
		.on('end', cb);
});

// start http://localhost:8000 pointing to our build folder
gulp.task('start_server', function() {
	plugins.connect.server({
		root: 'build',
		port: 8000
	});
});


//----------------------------------------------------------------
// watch
//----------------------------------------------------------------
gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/css/*.css', ['css']);
  gulp.watch('src/*.html', ['html']);
  gulp.watch('gulpfile.js', ['local']);
});


//----------------------------------------------------------------
// compound tasks
//----------------------------------------------------------------
// tests
gulp.task('tests', ["localBuild"], function() {
	gulp.start('integration');
});

// local build
gulp.task('localBuild', ['clean'], function() {
	gulp.start('scripts', 'libs', 'css', 'html');
});


//----------------------------------------------------------------
// default
//----------------------------------------------------------------
gulp.task('default', ['tests']);
