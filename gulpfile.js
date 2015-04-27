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
var concat = require('gulp-concat');
var gulpIgnore = require('gulp-ignore');
gulp.task('scripts', function() {
	return gulp.src(['src/js/setup.js', 'src/js/**/*.js'])
		.pipe(gulpIgnore.exclude('*.spec.js'))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('build/js/'));
});


//----------------------------------------------------------------
// copy libs
//----------------------------------------------------------------
gulp.task('libs', function() {
	return gulp.src(['node_modules/angular/angular.js', 'node_modules/angular-route/angular-route.js'])
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
// copy partials
//----------------------------------------------------------------
gulp.task('partials', function() {
	return gulp.src('src/partials/*.html')
		.pipe(gulp.dest('build/partials/'));
});


//----------------------------------------------------------------
// copy css
//----------------------------------------------------------------
gulp.task('css', function() {
	return gulp.src('src/css/*.*')
		.pipe(gulp.dest('build/css/'));
});


//----------------------------------------------------------------
// e2e tests (webdriver and protractor)
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

// main e2e task - run protractor then stop server
gulp.task('e2e', ["stop_server"], function(cb) {
});

// stop server once protractor has run
gulp.task('stop_server', ["protractor"], function() {
	plugins.connect.serverClose();
});

// start server then run protractor
gulp.task('protractor', ['start_server_port_8001'], function(cb) {
	gulp
		.src(['use the contents of protractor.config.js'])
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

// start http://localhost:8001 pointing to our build folder
gulp.task('start_server_port_8001', function() {
	startServer(8001);
});

// start http://localhost:8000 pointing to our build folder
gulp.task('start_server_port_8000', function() {
	startServer(8000);
});

function startServer(port) {
	plugins.connect.server({
		root: 'build',
		port: port
	});
}


//----------------------------------------------------------------
// unit tests (jasmine)
//----------------------------------------------------------------
var karma = require('gulp-karma');

gulp.task('unit', function() {
  // Be sure to return the stream
  // NOTE: Using the fake './foobar' so as to run the files
  // listed in karma.conf.js INSTEAD of what was passed to
  // gulp.src !
  return gulp.src('./foobar')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      console.log(err);
      this.emit('end'); //instead of erroring the stream, end it
    });
});


//----------------------------------------------------------------
// watch
//----------------------------------------------------------------
gulp.task('watch', ['start_server_port_8000'], function() {
	gulp.watch( ['gulpfile.js', './src/**/*.*', './tests/unit/**/*.*'], ['autotest']);
});


//----------------------------------------------------------------
// compound tasks
//----------------------------------------------------------------
// tests
gulp.task('tests', ["localBuild"], function() {
	gulp.start('e2e', 'unit');
});

// local build
gulp.task('localBuild', ['clean'], function() {
	gulp.start('scripts', 'libs', 'css', 'html', 'partials');
});

// build then unit tests
gulp.task('autotest', ["localBuild"], function() {
	gulp.start('unit');
});


//----------------------------------------------------------------
// default
//----------------------------------------------------------------
gulp.task('default', ['tests']);
