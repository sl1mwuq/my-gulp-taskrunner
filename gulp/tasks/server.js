export const server = () => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.path.server}`
		},
		notify: false,
		port: 3000
	})
}