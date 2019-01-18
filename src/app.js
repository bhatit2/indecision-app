var app ={
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer'
};
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ul>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ul>
    </div>
);
var user = {
    name : 'Tanvi Bhatia!',
    age : 27,
    location : 'Hyderabad'
};
var templateTwo = (
<div>
    <h1>{user.name}</h1>
    <p>Age : {user.age}</p>
    <p>City : {user.location}</p>
</div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
