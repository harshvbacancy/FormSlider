import React from "react";
import classes from './DisplayDetails.module.css'
import Button from '../UI/Button/Button'

const DisplayDetails = (props) => {
    let details = [...props.Details];
    let data = details.map((user, i) => (
        <tr key={i}>
            <td style={{ width: '30%' }}>{user.name}</td>
            <td style={{ width: '20%' }}>{user.jobTitle}</td>
            <td style={{ width: '20%' }}>{user.mobileNumber}</td>
            <td style={{ width: '30%' }}>
                <Button clicked={() => { props.onSetSidebarOpen(true); props.onPressAddOrEditRecord(user, i, true) }} btnType='Success'>
                    Edit
            </Button>
                <Button clicked={() => { props.deleteRecord(i) }} btnType='Danger'>
                    Delete
            </Button>
            </td>
        </tr>
    ))

    return (
        <div>
            <table className={classes.DisplayDetail}>
                <tbody>
                    <tr>
                        <th>Employee Name</th><th>Job Title</th><th>Phone Number</th><th>Actions</th>
                    </tr>
                    {data}
                </tbody>
            </table>

            <Button clicked={() => { props.onSetSidebarOpen(true); props.onPressAddOrEditRecord({}, -1, false) }} btnType='Primary'>
                + Add
            </Button>
        </div>


    );
}
export default DisplayDetails;