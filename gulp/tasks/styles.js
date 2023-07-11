import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const styles = () => {
	return app.gulp.src(app.path.src.styles, { sourcemaps: true })
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(sass({ 
			outputStyle: 'compressed'
		 }))
		.pipe(groupCssMediaQueries())
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserlist: ['last 3 versions'],
			cascade: true
		}))
		.pipe(cleanCss()) /* If you don`t want to constrict css-files: .pipe(app.gulp.dest(app.path.build.css)) */
		.pipe(rename({ 
			extname: '.min.css' 
		}))
		.pipe(app.gulp.dest(app.path.build.styles))
		.pipe(app.plugins.browserSync.stream())
}