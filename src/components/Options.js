import Option from './Option';
import React from 'react';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3>
            <button onClick={props.handleDeleteOptions} className="button button--link">Remove All</button>
        </div>
        

        {!props.options.length && <p className="widget__message">Please add an option to get started</p>}
        { props.options.map( (opt,index) =>
            <Option label={opt} 
            key={opt}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
            />
        )}
        
    </div>
);

export default Options;