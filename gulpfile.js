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
import { html } from './gulp/tasks/html.js'
import { styles } from './gulp/tasks/styles.js'
import { scripts } from './gulp/tasks/scripts.js'

function watcher () {
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.styles, styles)
	gulp.watch(path.watch.scripts, scripts)
}

const mainTasks = gulp.parallel(html, styles, scripts)
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

gulp.task('default', dev)