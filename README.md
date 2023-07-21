**My Gulp Taskrunner** is a repository designed to automate routine actions and increase the efficiency of the layout process.

#

### What set of actions does taskrunner simplify?
1. Organized component layout approach both in the structure of the catalog system and with the help of additional plugins that allow you to `import` / `export` parts of `html` / `css` / `js` code and reuse them.
1. The `SCSS preprocessor` speeds up stylesheet writing with element nesting and additional features like mixins and loops, and performs browser optimization by prefixing properties and minifying media queries into one.
1. There is an optimization of raster images and a simplified way to search for them, using the method of the custom alias `@images`.
1. Real-time code compilation without the need to refresh the browser page.

#

### How to install taskrunner?
To begin with, you need to have installed [**NodeJS**](https://nodejs.org/en) and [**git**](https://git-scm.com/downloads). Then clone the repository to your device using any method convenient for you (`SSH` or `HTTPS`):

```
// Use SSH
git clone git@github.com:sl1mwuq/my-gulp-taskrunner.git

// or

// Use HTTPS
git clone https://github.com/sl1mwuq/my-gulp-taskrunner.git
```

\
Then initialize the project and load the node modules:
```url
npm install
```

\
Download the plugin [**Path Autocomplete**](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete) in your `IDE` to create custom paths using the alias method. After downloading the plugin, go to the `user settings json` file in your IDE and paste this code snippet at the end:

```url
// This alias will allow you to use a shortcut to images folder wherever you are
"path-autocomplete.pathMappings": {
	"@images": "${folder}/dev/images/"
}
```

\
You can start the build process with change tracking enabled in the project directory or simply compile the complete project into a separate folder.
\
\
If you want to start development:

```
npm run dev
```

\
If you have finished the development and want to assemble the project:
```
npm run build
```

#

### What is the structure of the repo?

A total of 4 folders, each of which is intended for its own content. Images of common formats and icons are stored in the `images` folder. The `layouts` folder contains html pages and their individual components. In the `scripts` folder, there are individual modules of potential libraries and a set of functions for a more convenient process of writing logic. In the `styles` folder, there are styles for all html parts, as for main pages and to the components.

The directory structure of the development looks like this:

```
dev
├── images
├── layouts
├── scripts
└── styles
```

\
Images of the following formats can be entered into the `images` folder: `jpg`, `jpeg`, `png`, `gif`, `webp`, `ico`, `svg`. If you want to refer to any picture from the images folder, being in the layout `HTML-file` or `SCSS-file` file, write the following path: **'@images/[path]'**.

```
dev
├── images
│   └── ...
├── layouts
├── scripts
└── styles
```

\
The layouts folder contains a set of all `HTML-files`. If you need to add a new page, then create it in the `pages` folder. However, the pages themselves often consist of sections that can be separately separated from the general content and placed in the `components` folder. This folder may also contain pieces of `HMTL code` that are used repeatedly when building pages.

```
dev
├── images
├── layouts
│   ├── components
│   │   ├── head.html
│   │   └── ...
│   └── pages
│       ├── index.html
│       └── ...
├── scripts
└── styles
```

\
When composing, interactive elements such as sliders or accordions are often a necessity on a website. There is a `scripts` folder for writing the logic of the work of such elements. If you need to download a new library or write your own algorithm that simplifies the task of your project, then there is a `utils` folder for that. If there is a need to write global business logic that will be an integral part of the site, it can be entered as a separate file in the `modules` folder. Either way, all functions will be available in the main `main.js` file, into which any function or set of modules and utilities can be imported.

```
dev
├── images
├── layouts
├── scripts
│   ├── modules
│   │   └── ...
│   ├── utils
│   │   ├── getters.js
│   │   └── ...
│   └── main.js
└── styles
```

\
Папка `styles` - джерело усіх стилів для проекту. Для більшої зручності, стилі сторінок та окремих компонентів було розділено по папках `components` та `pages`. Для зручності також були додані 3 основні утиліти: `mixins.scss`, `variables.scss` та `normalize.scss`. Файл `mixins.scss` містить функції для пришвидшення роботи при стилізації. `variables.scss` складається з переліку змінних кольорів, брейкпоінтів, шрифтів і тд. Файл `normalize.scss` імпортує попередні два та обнуляє частину стилів для комфортної роботи у сучасних браузерах. Усі стилі сторінок чи компонентів підключаються в основному файлі стилів `main.scss`.

> **Note**
> Важливим моментом є підключення файлу `normalize.scss` до кожного файлу стилів з самого початку для роботи усього функціоналу: **@import '../utils/normalize.scss';**.


```
dev
├── images
├── layouts
├── scripts
└── styles
    ├── components
    │   └── ...
    ├── pages
    │   ├── index.scss
    │   └── ...
    ├── utils
    │   ├── mixins.scss
    │   ├── normalize.scss
    │   └── variables.scss
    └── main.scss
```

#

### What plugins and packages were used for the taskrunner?

| Package | Version | Usage |
| ----- | :-----: | ----- |
| gulp | 4.0.2 | Used as a common source for automating and writing tasks for execution. |
| browser-sync | 2.29.3 | Used as a local server that is updated every time you make changes to the code. |
| del | 7.0.0 | Used as a function to remove directories and files. |
| gulp-autoprefixer | 8.0.0 | Used to optimize css properties in different browsers by adding a name prefix: `-webkit`, `-moz`, `-o`, etc. |
| gulp-clean-css | 4.3.0 | Used to minify `CSS-files`. |
| gulp-file-include | 2.3.0 | Used as advanced capabilities of the component approach for `HTML-files`. |
| gulp-group-css-media-queries | 1.2.2 | Used for grouping media-queries in `CSS-files`. |
| gulp-imagemin | 8.0.0 | Used to optimize raster images. |
| gulp-newer | 1.4.0 | Used to identify optimized images and prevent them from being re-optimized. |
| gulp-pretty-html | 2.0.10 | Used to tabulate compiled `HTML-pages`. |
| gulp-rename | 2.0.0 | Used to rename files. |
| gulp-replace | 1.1.4 | Used to replace parts of code in the selected files. |
| sass | 1.63.6 | Used to improve efficiency when writing `CSS` code by increasing the standard set of tools and capabilities that will reduce writing time and increase readability. |
| gulp-sass | 5.1.0 | Additional library for `SASS` package.
| webpack | 5.88.1 | Used to combine all `JS-files` into one minified one. |
| webpack-stream | 7.0.0 | Used to call import functions and export functions. |

#

### Is this the final version of the repo?

This assembly was primarily created for **me** and due to the need for a quick tool for automating routine work and gaining practical skills in designing such. If in the process of layout I will find points that can be optimized, then I will try to add functionality for such processing here. 

Currently, work on the repo is **in progress**.