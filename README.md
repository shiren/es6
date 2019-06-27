# ES6 Boilerplate

## Included Modules

#### Webpack
* [webpack](https://webpack.js.org/)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
* [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)

#### Babel
* [babel](https://babeljs.io/)
* [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
* [@babel/plugin-proposal-object-rest-spread](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread)

#### ESLint
* [eslint](https://eslint.org/)
* [babel-eslint](https://github.com/babel/babel-eslint)
* [eslint-config-tui](https://github.com/nhnent/tui.eslint.config)
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

#### Prettier
* [prettier](https://prettier.io/)

## Browser support

#### Supports all browsers that are ES5-compliant 

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | +9 | Yes | Yes | Yes |

If you need polyfills, see the [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill).

## Getting started

1. Clone this repository.
```bash
  git clone https://github.nhnent.com/fe/es6-boilerplate.git
```
2. Run the installation from the internal repo directory.
```bash
  npm install
```
3. Start the webpack-dev-server.
```bash
  npm run dev
```
4. Open http://localhost:8080 in your browser.

## Commands
* `npm run dev` - Start webpack-dev-server.
* `npm run lint` - Run ESLint.
* `npm run build` - Bundle and minify resources into `/dist` directory.
