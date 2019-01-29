#A sample app for React practice

**Live server** - a development module for appshaving live reload feature too.
run command live-server public where __public__ is the director we want to serve from.

#JSX -Javascript XML
By default, browser iwll not understand jsx syntax. In ordr to make it understandale by browser, we 
have to install babel and babel presets which will transpile jsx into browser understandable syntax.
Apart from babel we need to install react and env presets.

run following commands :
`npm install -g babel-cli`
`npm install --save-dev babel-preset-env babel-preset-react`

In order to compile jsx into plain old js, run following command :
`babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`

#ReactDOM rnder
Whenever there is change in DOM, we need to rerender the dom with reactDOM.render.
Although it sounds very inefficient to rerender the entire dom for small changes but react does this 
very efficiently using shadow dom technique where it will compare old ui changes with new ui changes and only re render at the place where ui has been actually changed.

#JSX default type support
Jsx by default supports strings, numbers and arrays. It doesn't support objects. It ignores null, undefined and boolean

#es6 classes
Classes are nothing but blueprints for objects. They work exactly as constructor functions.
using class based inheritance, we can extend the parent class methods. Parent class methods are accessible via super keyword.

#React components
React components are just classes. Name should start with capital letter.
They should have a method called render.

There are 2 types of components in React : 
**Stateless functional components** - also called dumb components.
**Class based components**

#Webpack#
webpack is just a module bundler.
webpack.config.js file should be present in the app root folder.
entry - we need to tell webpack where it should start.

#import/export#

There are two types of exports :
Default exports - Every file can have only single default export. Default exports cannot be imported within curly baces. Reference Error will be thrown. Default export need not be named. We can give any name we want. export default cant be expression, it should be statement.

Eg :
utils.js

export {square as default}; or
export default square;

main.js

import square from './utils.js'

Named exports - Every file can have as many named exports as we want to define. In orderto import named 
exports, we need to give exact same name we used for importing. We cant export anything without declaring it first. Also we can use as many export statements in a file as we want.

Eg : 
utils.js

export {square};

main.js

import {square} from './utils.js'

#Setting up webpack with Babel#
We need to use loader in webpack. Loader transforms a file before using it. In our case, we transform it using babel.

Install babel-core (similar to babel-cli but used by webpack)
Install babel-loader(webpack plugin)

.babelrc - Its a json file which allows us to pass all the agruments to babel which we pass through cmd.

#SourceMaps with Webpack#
 In order to debug errors in the code, we need to set source maps. If we dont set source map in webpack,debugger will point to a line in bundle file which is not actual file but the compiled bundle file.

 #Webpack dev server#
 