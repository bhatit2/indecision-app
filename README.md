#A sample app for React practice

*Live server* - a development module for appshaving live reload feature too.
run command live-server public where __public__ is the director we want to serve from.

*JSX* -Javascript XML
By default, browser iwll not understand jsx syntax. In ordr to make it understandale by browser, we 
have to install babel and babel presets which will transpile jsx into browser understandable syntax.
Apart from babel we need to install react and env presets.

run following commands :
`npm install -g babel-cli`
`npm install --save-dev babel-preset-env babel-preset-react`

In order to compile jsx into plain old js, run following command :
`babel src/app.js --out-file=public/scripts/app.js --presets=env,react`