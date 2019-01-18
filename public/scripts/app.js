'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        )
    )
);
var user = {
    name: 'Tanvi Bhatia!',
    age: 27,
    location: 'Hyderabad'
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'City : ',
        user.location
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
