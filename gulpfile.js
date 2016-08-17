var gulp = require('gulp');
// var webpack = require('gulp-webpack');
var webpack = require('webpack-stream');
var babel = require('gulp-babel');
var config = require('./webpack.config');

gulp.task('dist', function() {
	gulp.src('src/index.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(webpack({
			config: [{
				output: {
					filename: 'build.js'
				}
			}]
		}))
		.pipe(gulp.dest('./dest/'));
});