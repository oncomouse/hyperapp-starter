# @oncomouse/hyperapp-starter

Opinionated starter pack for building apps using [hyperapp](https://github.com/hyperapp/hyperapp). [hyperapp-effects](https://github.com/okwolf/hyperapp-effects) is also provided for more Elm-style goodness.

For stylesheets, [picostyle](https://github.com/picostyle/picostyle) is provided. Additionally, [node-sass](https://github.com/sass/node-sass) and a variety of [PostCSS](http://postcss.org/) plugins are installed. You can also use [CSS modules](https://github.com/css-modules/css-modules) or [tachyons](https://www.tachyons.io/) for styling components.

Testing is supported through the [Mocha](https://mochajs.org/) framework (with help from [zinserjan/mocha-webpack](https://github.com/zinserjan/mocha-webpack/)). [Chai](http://chaijs.com/) (for assertions), [Sinon](http://sinonjs.org/) (for spies, mocks, and stubs), and [JSDom](https://github.com/jsdom/jsdom) are all also provided. Check the `.spec.js` files in `components/`, `containers/`, and `actions/` to see some examples to get started writing unit tests.

## Getting Started

Run `npm install` or `yarn install` to install packages.

You may also want to reinitialize git, which can be done by running:

~~~
rm -rf .git
git init
git add .
git commit -m "Initial Commit"
~~~

## Developing

There are a number of scripts already available for supporting development:

* **Start Development Server** – `npm run start`
* **Build Production Code** – `npm run build`
* **Visualize Bundle Size** – `npm run analyze`
* **Unit Testing** – `npm run mocha`
	* `npm run mocha:watch` to live update unit tests
* **Checking Code Quality** – `npm run lint`
	* `npm run lint -- --fix` to fix errors automatically

## Deploying

Run `yarn build` or `npm run build` to build an optimized, production version of your app. It will be in the `build/` directory.

## Debugging

`npm run analyze`

Also: `env NODE_ENV=production webpack --json > stats.json` and upload to [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/)

## Adding Routing

[Click here for instructions](router.html)