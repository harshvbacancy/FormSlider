import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    
    const inputClasses = [classes.InputElement];

    let inputElement = <input
        className={inputClasses.join(' ')}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value} />;

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            <div className={classes.Container}>
                {inputElement}
                {/* {validationError} */}
            </div>

        </div>
    );

};

export default Input;