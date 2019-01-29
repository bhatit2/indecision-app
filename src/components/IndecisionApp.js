import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        title: "Indecision App",
        subtitle: "Put your life in the hands of a computer",
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState( () => ({ options: []}) );
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>{
            return {
                options : prevState.options.filter(opt => opt !== optionToRemove)
            }
        })
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Please enter a valid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists'
        }
        this.setState( (prevState) => ({ options: prevState.options.concat(option) }) );
    }
    handlePick = () => {
        let randomNumber = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({
            selectedOption: this.state.options[randomNumber]
        }));
    }
    closeModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({options}));
            }
        } catch(e){
            throw Error(e);
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    componentWillUnmount = () => {
        console.log("componentWillUnmount");
    }
    
    render() {

        return (
            <div>
                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                />
                <div className="container">
                        <Action
                            hasOptions={this.state.options.length}
                            onPick={this.handlePick}
                        />
                    <div className="widget">
                        <Options
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                            options={this.state.options}
                        />
                        <AddOption
                            addOption={this.handleAddOption}
                        />
                    </div>
                    
                    <OptionModal 
                        selectedOption={this.state.selectedOption}
                        closeModal={this.closeModal}
                        >
                    </OptionModal>
                    </div>
            </div>
        )
    }
}