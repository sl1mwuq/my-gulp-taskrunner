const srcFolder = './src'
const buildFolder = './dist'

export const path = {
	src: {
		html: `${srcFolder}/pages/*.html`,
		styles: `${srcFolder}/styles/main.scss`,
		scripts: `${srcFolder}/scripts/main.js`,
		images: `${srcFolder}/assets/images/**/*.{ jpg, jpeg, png, gif, webp }`,
		icons: `${srcFolder}/assets/icons/**/*.svg`
	},
	build: {
		html: `${buildFolder}/`,
		styles: `${buildFolder}/styles/`,
		scripts: `${buildFolder}/scripts/`,
		assets: `${buildFolder}/assets/`
	},
	watch: {
		html: `${srcFolder}/pages/**/*.html`,
		styles: `${srcFolder}/styles/**/*.scss`,
		scripts: `${srcFolder}/scripts/**/*.*js`,
		assets: `${srcFolder}/assets/**/*.{ jpg, jpeg, png, gif, webp, svg, ico }`
	},
	clean: buildFolder,
	srcFolder: srcFolder,
	buildFolder: buildFolder
}