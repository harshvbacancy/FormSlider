import React from "react";
import classes from './DisplayDetails.module.css'
import Button from '../UI/Button/Button'

const DisplayDetails = (props) => {
    let details = [...props.Details];
    let data = details.map((user, i) => (
        <tr>
            <td style={{ width: '30%' }}>{user.name}</td>
            <td style={{ width: '15%' }}>{user.jobTitle}</td>
            <td style={{ width: '15%' }}>{user.mobileNumber}</td>
            <td style={{ width: '40%' }}>
                <Button clicked={() => { props.onSetSidebarOpen(true); props.onPressEditRecord(user, i) }} btnType='Success'>
                    Edit Record
            </Button>
                <Button clicked={() => { props.deleteRecord(i) }} btnType='Danger'>
                    Delete Record
            </Button>
            </td>
        </tr>
    ))
    return (
        <table className={classes.DisplayDetail} key={new Date()}>
            <tbody>
                <tr>
                    <th>Employee Name</th><th>Job Title</th><th>Phone Number</th><th>Actions</th>
                </tr>
                {data}

                <tr>
                    <td colSpan='4'>
                        <Button clicked={props.onAddMore} btnType='Primary'>
                            + Add Record
                                </Button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
export default DisplayDetails;