const devFolder = './dev',
		buildFolder = './build'

export const path = {
	dev: {
		layouts: `${devFolder}/layouts/pages/*.html`,
		styles: `${devFolder}/styles/main.scss`,
		scripts: `${devFolder}/scripts/main.js`,
		images_raster: `${devFolder}/images/raster/**/*.{jpg,jpeg,png,gif,webp,ico}`,
		images_vector: `${devFolder}/images/vector/**/*.svg`
	},
	build: {
		layouts: `${buildFolder}/`,
		styles: `${buildFolder}/styles/`,
		scripts: `${buildFolder}/scripts/`,
		images: `${buildFolder}/images/`
	},
	watch: {
		layouts: `${devFolder}/layouts/**/*.html`,
		styles: `${devFolder}/styles/**/*.scss`,
		scripts: `${devFolder}/scripts/**/*.js`,
		images: `${devFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`
	},
	server: `${buildFolder}/`,
	clean: buildFolder,
	devFolder: devFolder,
	buildFolder: buildFolder
}