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
`babel src/app.js --out-file=public/scripts/app.js --presets=env,react`

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
