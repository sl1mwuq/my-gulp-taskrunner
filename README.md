**My Gulp Taskrunner** is a repository designed to automate routine actions and increase the efficiency of the layout process.

##

### What set of actions does taskrunner simplify?
1. Organized component layout approach both in the structure of the catalog system and with the help of additional plugins that allow you to `import` / `export` parts of `html` / `css` / `js` code and reuse them.
1. The `SCSS preprocessor` speeds up stylesheet writing with element nesting and additional features like mixins and loops, and performs browser optimization by prefixing properties and minifying media queries into one.
1. There is an optimization of raster images and a simplified way to search for them, using the method of the custom alias `@images`.
1. Real-time code compilation without the need to refresh the browser page.

##

### How to install taskrunner?
To begin with, you need to have installed [**NodeJS**](https://nodejs.org/en) and [**git**](https://git-scm.com/downloads). Then clone the repository to your device using any method convenient for you (`SSH` or `HTTPS`):

```url
git clone git@github.com:sl1mwuq/my-gulp-taskrunner.git
```

or

```url
git clone https://github.com/sl1mwuq/my-gulp-taskrunner.git
```

\
Then initialize the project and load the node modules:
```url
npm install
```

\
Download the plugin [**Path Autocomplete**](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete) in your **IDE** to create custom paths using the alias method. After downloading the plugin, go to the **user settings json** file in your **IDE** and paste this code snippet at the end:

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

```url
npm run dev
```

\
If you want to build your project:
```
npm run build
```

##

### How to properly scale an assembly relative to project requirements?

First of all, the directory structure of the development looks like this:

```
dev
├── images
│   └── ...
├── layouts
│   ├── components
│   │   ├── head.html
│   │   └── ...
│   └── pages
│       ├── index.html
│       └── ...
├── scripts
│   ├── modules
│   │   └── ...
│   ├── utils
│   │   ├── getters.js
│   │   └── ...
│   └── main.js
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

`images` - folder for images of any format and type.

`layouts` - folder for everything related to html-layout.

`layouts / components` - folder for the sections to the main pages and parts that can be used repeatedly.

`layouts / pages` - folder for all pages of the website.

`scripts` - folder for everything related to scripts.

`scripts / modules` - folder for logic integers.

`scripts / utils` - folder for auxiliary functions.

`styles` - folder for everything related to cascade style sheets.

`styles / components` - folder for styles to html-components.

`styles / pages` - folder for styles to html-pages.

`styles / utils` - auxiliary variables, nullable styles and functions.