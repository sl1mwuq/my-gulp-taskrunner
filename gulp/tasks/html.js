import fileInclude from 'gulp-file-include'
import prettyHtml from 'gulp-pretty-html'

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(fileInclude())
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(prettyHtml())
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browserSync.stream())
}