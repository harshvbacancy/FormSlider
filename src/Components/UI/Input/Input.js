import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {

    // let inputElement = null;
    // let validationError = null;
     const inputClasses = [classes.InputElement];

    // if (props.inValid && props.shouldValidate && props.touched) {
    //     inputClasses.push(classes.Invalid)
    //     validationError = <p className={classes.ValidationError}>Please enter a valid {props.valueType}!</p>;
    // } else if (props.isReqMinLength && props.touched) {
    //     inputClasses.push(classes.Invalid)
    //     validationError = <p className={classes.ValidationError}>minimum {props.length} characters required!</p>;
    // }


    let inputElement = <input
                        className={inputClasses.join(' ')}
                        name={props.name}
                        type={props.type}
                        placeholder={props.placeholder}
                        onChange={props.onChange}
                        value={props.value}/>;


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