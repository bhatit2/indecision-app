class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Indecision App",
            subtitle: "Put your life in the hands of a computer",
            options: [],
            selectedOption: ''
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    handleDeleteOptions() {
        this.setState( () => ({ options: []}) );
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>{
            return {
                options : prevState.options.filter(opt => opt !== optionToRemove)
            }
        })
    }
    handleAddOption(option) {
        if (!option) {
            return 'Please enter a valid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists'
        }
        this.setState( (prevState) => ({ options: prevState.options.concat(option) }) );
    }
    handlePick() {
        this.setState(() => {
            return {
                selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)]
            }
        });
        alert(this.state.selectedOption);
    }
    render() {

        return (
            <div>
                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                />
                <Action
                    hasOptions={this.state.options.length}
                    onPick={this.handlePick}
                />
                <Options
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                    options={this.state.options}
                />
                <AddOption
                    addOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.onPick}>What should I do</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <ol>
                {props.options.map(opt => <li key={opt}><Option label={opt} handleDeleteOption={props.handleDeleteOption}/></li>)}
            </ol>
        </div>
    );
}
const Option = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <button 
                onClick={(e) => { 
                    props.handleDeleteOption(props.label)
                }} 
            > remove 
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: ''
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        if (!error) {
            e.target.elements.option.value = ""
        }
        this.setState( () => ({error}) );
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

var appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);