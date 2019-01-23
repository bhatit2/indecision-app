/*let showDetails = false;
const toggleVisibility = () => {
    showDetails = !showDetails;
    render();
} */

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDetails : false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    handleToggleVisibility(){
        console.log("Inside handle toggle visibility")
        this.setState((prevState)=>{
            return {
                showDetails : !prevState.showDetails
            }
        })
    }
    render(){
        return (
            <div>
            <h1>Visibility toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.showDetails ? 'Hide Details' : 'Show Details'}</button>
            {this.state.showDetails && <p>Here are the details</p>}
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
/*const render = () => {
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleVisibility}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
            {showDetails && <p>Here are the details</p>}
        </div> 
    )
    ReactDOM.render(template, appRoot);
}
render(); */
ReactDOM.render(<VisibilityToggle />, appRoot);