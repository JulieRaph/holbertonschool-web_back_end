# ES6 - BASIC


### Resources:

* [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [Javascript ES6 — Iterables and Iterators](https://medium.com/data-science/javascript-es6-iterables-and-iterators-de18b54f4d4)

### Requirements:

* All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node 20.x.x and npm 9.x.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the js extension
* Your code will be tested using the Jest Testing Framework
* Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
* All of your functions must be exported

### HELP FILES:

package.json
```
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

babel.config.js
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

.eslintrc.js
```
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```
Don’t forget to run ```npm install``` from the terminal of your project folder to install all necessary project dependencies. Do not push on your repository the folder ```node_modules``` that has been created.

### Tasks:

- [x] Const or let?
- [x] Block Scope
- [x] Arrow functions
- [x] Parameter defaults
- [x] Rest parameter syntax for functions
- [x] The wonders of spread syntax
- [x] Take advantage of template literals
- [x] Object property value shorthand syntax
- [x] No need to create empty objects before adding in properties
- [x] ES6 method properties
- [x] For...of Loops
- [x] Iterator
- [x] Let's create a report object          
