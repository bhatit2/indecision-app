import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count  + '.' + props.label}</p>
            <button 
                onClick={(e) => { 
                    props.handleDeleteOption(props.label)
                }}
                className="button button--link"
            > remove 
            </button>
        </div>
    );
}

export default Option; 