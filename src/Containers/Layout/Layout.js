import React, { Component } from 'react';

import SidePanel from '../../Components/SidePanel/SidePanel';
import DisplayDetails from '../../Components/DisplayDetails/DisplayDetails';


class Layout extends Component {
    state = {
        sidebarOpen: false,
        pressedEditButton: false,
        Details: [],
        Record: {}
    }

    onSetSidebarOpen = (sidebarState) => {
        this.setState({ sidebarOpen: sidebarState });
    }

    onPressAddOrEditRecord = (user, i, buttonPressed) => {
        console.log(user);
        let tempRecord = { ...user };
        tempRecord['index'] = i;
        this.setState({ Record: tempRecord, pressedEditButton: buttonPressed });

    }

    handleSidebarChange = (event) => {

        let updatedRecord = { ...this.state.Record };
        updatedRecord[event.target.name] = event.target.value;
        this.setState({ Record: updatedRecord })

    }

    RecordHandler = (event) => {
        event.preventDefault();

        let EmployeeName = this.state.Record.name;
        let EmployeeJobTitle = this.state.Record.jobTitle;
        let EmployeeNumber = this.state.Record.mobileNumber;
        let TempRecord = { name: EmployeeName,jobTitle: EmployeeJobTitle , mobileNumber: EmployeeNumber };
        if (EmployeeName && EmployeeName !== '' && EmployeeJobTitle && EmployeeJobTitle !== ''  && EmployeeNumber && EmployeeNumber.length === 10 ){
            let index = this.state.Record.index;
            let userRecords = [...this.state.Details];
            if(index === -1) {
                userRecords.push(TempRecord)
            }
            else {
                userRecords[index] =TempRecord
            }
            
            this.setState({ Details: userRecords });
            this.onSetSidebarOpen(false);

        }
        else
            alert('Please enter vaild input');
    }

    deleteRecord = (index) => {
        if (window.confirm('Are you sure?')) {
            let userRecords = [...this.state.Details];
            userRecords.splice(index, 1);
            this.setState({ Details: userRecords });
        }

    }

    render() {
        
        const content = (
            <div>
                <h1 style={{ marginTop: '50px' }}>Employee Details</h1>
                <DisplayDetails
                    Details={this.state.Details}
                    onSetSidebarOpen={this.onSetSidebarOpen}
                    onPressAddOrEditRecord={this.onPressAddOrEditRecord}
                    deleteRecord={this.deleteRecord} />
            </div>

        );

        return (
            <div >
                <SidePanel
                    sidebarOpen={this.state.sidebarOpen}
                    pressedEditButton={this.state.pressedEditButton}
                    onSetSidebarOpen={this.onSetSidebarOpen}
                    content={content}
                    formRecord = {this.RecordHandler}
                    recordToEdit={this.state.Record}
                    formChangeInput={(event) => this.handleSidebarChange(event)}
                    ></SidePanel>

            </div>
        )
    }

}

export default Layout