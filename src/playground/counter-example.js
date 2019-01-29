// let count = 0;
// const addOne = () => {
//     count +=1;
//     renderCounterApp();
// }
// const subOne = () => {
//     count -=1;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h2>Count : {count}</h2>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//         );
//         ReactDOM.render(templateTwo, appRoot);
// }
// renderCounterApp();
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        let count = parseInt(localStorage.getItem("count"));
        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        let count = this.state.count;
        if(prevState.count !== count){
            localStorage.setItem('count', count);
        }
        
    }
    handleAddOne(){
        this.setState( (prevState)=> ({count : prevState.count + 1}) );
    }
    handleSubOne(){
        this.setState( (prevState) => ({count : prevState.count - 1}) )
    }
    handleReset(){
        this.setState( () =>({ count : 0 })) 
    }
    render(){
        return (
            <div>
             <h2>Count : {this.state.count}</h2>
             <button onClick={this.handleAddOne}>+1</button>
             <button onClick={this.handleSubOne}>-1</button>
             <button onClick={this.handleReset}>Reset</button>
         </div>
        )
    }

}

var appRoot = document.getElementById('app');
ReactDOM.render(<Counter/>, appRoot);