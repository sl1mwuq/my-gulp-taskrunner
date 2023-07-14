import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins
}

import { reset } from './gulp/tasks/reset.js'
import { server } from './gulp/tasks/server.js'
import { layouts } from './gulp/tasks/layouts.js'
import { styles } from './gulp/tasks/styles.js'
import { scripts } from './gulp/tasks/scripts.js'
import { images } from './gulp/tasks/images.js'

function watcher () {
	gulp.watch(path.watch.layouts, layouts)
	gulp.watch(path.watch.styles, styles)
	gulp.watch(path.watch.scripts, scripts)
	gulp.watch(path.watch.images, images)
}

const tasks = gulp.parallel(layouts, styles, scripts, images),
		dev = gulp.series(reset, tasks, gulp.parallel(watcher, server)),
		build = gulp.series(reset, tasks)

export { dev, build }