const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const karma = require('karma');
const gutil = require('gutil');
const react = require('gulp-react');

const libs = ['react', 'react-dom', 'redux', 'react-redux'];

function appTask(cb) {
    let bundler = browserify({entries: './src/js/bootstrap.jsx', extensions: ['.jsx'], debug: true});

    libs.forEach(function(lib) {
        bundler.external(require.resolve(lib, { expose: lib }));
    });

    bundler.transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', gutil.log)
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist/js'));
    cb();
}

function libsTask(cb) {
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
    cb();
}

function sassTask(done) {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
    done();
}

function testTask(done) {
	let server = new karma.Server({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, function() {
		done();
	});
	server.start();
}


function watchTask(done) {
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['app']);
    done();
}

exports.default = gulp.series(libsTask, appTask, sassTask);

exports.watch = gulp.series(libsTask, appTask, sassTask, watchTask);
