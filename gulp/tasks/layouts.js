import fileInclude from 'gulp-file-include'
import prettyHtml from 'gulp-pretty-html'

export const layouts = () => {
	return app.gulp.src(app.path.dev.layouts)
		.pipe(fileInclude())
		.pipe(app.plugins.replace(/@images\//g, 'images/'))
		.pipe(prettyHtml())
		.pipe(app.gulp.dest(app.path.build.layouts))
		.pipe(app.plugins.browserSync.stream())
}