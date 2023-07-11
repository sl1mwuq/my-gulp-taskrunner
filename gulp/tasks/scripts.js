import webpack from 'webpack-stream'

export const scripts = () => {
	return app.gulp.src(app.path.src.scripts, { sourcemaps: true })
		.pipe(webpack({
			mode: 'development',
			output: {
				filename: 'main.min.js'
			}
		}))
		.pipe(app.gulp.dest(app.path.build.scripts))
		.pipe(app.plugins.browserSync.stream())
}