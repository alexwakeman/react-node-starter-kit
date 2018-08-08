let gulp = require('gulp');
let sass = require('gulp-sass');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let karma = require('karma');
let gutil = require('gutil');
let react = require('gulp-react');

let libs = ['react', 'react-dom', 'redux', 'react-redux'];

gulp.task('app', function () {
	let bundler = browserify({entries: './src/js/bootstrap.jsx', extensions: ['.jsx'], debug: true});

	libs.forEach(function(lib) {
		bundler.external(require.resolve(lib, { expose: lib }));
	});

	return bundler.transform('babelify', {presets: ['es2015', 'react']})
		.bundle()
		.on('error', gutil.log)
		.pipe(source('app.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('libs', function () {
	let bundler = browserify({
		debug: false
	});

	libs.forEach(function(lib) {
		bundler.require(lib);
	});

	bundler.bundle()
		.pipe(source('libs.js'))
		// .pipe(buffer())
		// .pipe(uglify())
		.on('error', gutil.log)
		.pipe(gulp.dest('dist/js'));
});

gulp.task('sass', () => {
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['libs', 'app', 'sass']);

gulp.task('watch', ['build'], function() {
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['app']);
});

gulp.task('test', (done) => {
	let server = new karma.Server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, function() {
		done();
	});
	server.start();
});
