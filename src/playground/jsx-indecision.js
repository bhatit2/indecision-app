const app ={
    title : 'Indecision App',
    subtitle : '',
    options : [],
    selectedOption : ''
};
const onFormSubmit = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        renderTemplate();
    }
}

const onMakeDecision = () => {
    let random = Math.floor(Math.random() * app.options.length);
    console.log(random);
    app.selectedOption = app.options[random];
    renderTemplate();
}

const onRemoveAll = () => {
    app.options = [];
    renderTemplate();
}

const numbers = [1,2,3,4];

const appRoot = document.getElementById('app');
const renderTemplate = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options to display'}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <p> Do {app.selectedOption}</p>
            {/*numbers.map((val,i)=> <p key={i}> Number : {val}</p>)*/}
            <ul>
                {app.options.map((option, index) => <li key={index}>{option}</li>)}
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderTemplate();




