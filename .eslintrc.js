module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['tui/es6', 'plugin:prettier/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {}
};
