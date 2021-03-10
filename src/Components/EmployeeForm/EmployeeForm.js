import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './EmployeeForm.module.css';

const EmployeeForm = (props) => {
    
    return (
        <div className={classes.EmployeeForm}>
            <h2>Employee Information</h2>
            <form>
                <Input type="text"
                    placeholder="Enter your name...."
                    name="name"
                    label="Employee Name:"
                    value={props.recordToEdit.name || ''}
                    onChange={props.changeInput} />
                <Input type="text"
                    placeholder="Enter job title...."
                    name="jobTitle"
                    label="Employee Job Title: "
                    value={props.recordToEdit.jobTitle || ''}
                    onChange={props.changeInput} />
                <Input type="number"
                    placeholder="Enter mobile number..."
                    name="mobileNumber"
                    label="Employee Mobile Number: "
                    value={props.recordToEdit.mobileNumber || ''}
                    onChange={props.changeInput} />
                <Button
                    btnType="Success"
                    clicked={props.Record}
                >
                    {props.pressedEditButton ? 'Update' : 'Add'}
                </Button>
         
            </form>
        </div>
    );
}

export default EmployeeForm;