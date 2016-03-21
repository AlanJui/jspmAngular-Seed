'use strict';

var browserSync = require('browser-sync').create();
var	gulp = require('gulp');
var	nodemon = require('gulp-nodemon');
var	reload = browserSync.reload;

gulp.task('serve', [ 'browser-sync' ], function () {
		gulp.watch('client/index.html').on('change', reload);
		gulp.watch('client/**/*.js').on('change', reload);
		gulp.watch('**/*.css').on('change', reload);
		gulp.watch('**/*.tpl.html').on('change', reload);
	}
);

gulp.task('browser-sync', [ 'nodemon' ], function() {
		browserSync.init(null, {
			proxy: 'http://localhost:20080',
			browser: 'google-chrome',
			port: 10080
		});
	}
);

gulp.task('nodemon', [], function (done) {
		var running = false;

		return nodemon({
			script: 'server/server.js',
			watch: ['server/**/*.*']
		})
			.on('start', function () {
				if (!running) {
					done();
				}
				running = true;
			})
			.on('restart', function () {
				setTimeout(function () {
					reload();
				}, 500);
			});
	}
);
