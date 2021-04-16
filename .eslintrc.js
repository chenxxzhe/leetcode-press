module.exports = {
  root: true,

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  extends: [
    'eslint:recommended',
  ],

};
