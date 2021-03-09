import React, { Component } from 'react';

import Button from '../../Components/UI/Button/Button';
import classes from './Layout.module.css';
import Input from '../../Components/UI/Input/Input';
import SidePanel from '../../Components/SidePanel/SidePanel';
import DisplayDetails from '../../Components/DisplayDetails/DisplayDetails';
import Modal from 'react-modal';


class Layout extends Component {
    state = {
        sidebarOpen: false,
        showModal: false,
        Details: [],
        NewRecord: {},
        EditRecord: {}
    }

    onSetSidebarOpen = (sidebarState) => {
        this.setState({ sidebarOpen: sidebarState });
    }

    onPressEditRecord = (user, i) => {
        let tempRecord = { ...user };
        tempRecord['index'] = i;
        this.setState({ EditRecord: tempRecord });

    }

    handleSidebarChange = (event) => {

        let tempRecord = { ...this.state.EditRecord };
        tempRecord[event.target.name] = event.target.value;
        this.setState({ EditRecord: tempRecord })

    }

    editRecord = (event) => {
        event.preventDefault();
        //change state and close sidebar
        let EmployeeName = this.state.EditRecord.name;
        let EmployeeJobTitle = this.state.EditRecord.jobTitle;
        let EmployeeNumber = this.state.EditRecord.mobileNumber;
        let editRecord = { name: EmployeeName,jobTitle: EmployeeJobTitle , mobileNumber: EmployeeNumber };
        if (EmployeeName && EmployeeName !== '' && EmployeeJobTitle && EmployeeJobTitle !== ''  && EmployeeNumber && EmployeeNumber.length == '10') {
            let index = this.state.EditRecord.index;
            let userRecords = [...this.state.Details];
            userRecords[index] = editRecord;
            this.setState({ Details: userRecords });
            this.onSetSidebarOpen(false);

        }
        else
            alert('Please enter vaild input');
    }


    openModal = () => {
        this.setState({ showModal: true });
    }

    handleModalChange = (event) => {
        let newRecord = { ...this.state.NewRecord };
        newRecord[event.target.name] = event.target.value;
        this.setState({ NewRecord: newRecord })
    }

    addRecord = (event) => {
        event.preventDefault();
        //set state and close modal
        let newRecord = { ...this.state.NewRecord };

        let EmployeeName = newRecord.name;
        let EmployeeJobTitle = newRecord.jobTitle;
        let EmployeeNumber = newRecord.mobileNumber;
        if (EmployeeName && EmployeeName !== '' && EmployeeJobTitle && EmployeeJobTitle !== ''  && EmployeeNumber && EmployeeNumber.length == '10') {
            let userRecords = [...this.state.Details];
            userRecords.push(newRecord);
            this.setState({ showModal: false, Details: userRecords });
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




    // checkLength(value, rules) {
    //     let isReqMinLength = true;
    //     if (rules.minLength) {
    //         isReqMinLength = value.length >= rules.minLength;
    //     }
    //     return isReqMinLength;
    // }

    // checkValidity(value, rules) {
    //     let isValid = true;

    //     if (rules.required) {
    //         isValid = value.trim() !== '' && isValid;
    //     }

    //     if (rules.regex) {
    //         isValid = rules.regex.test(value) && isValid;
    //     }

    //     return isValid;

    // }

    // inputChangedHandler = (event, inputIdentifier) => {
    //     const updatedEmpForm = {
    //         ...this.state.EmpForm,
    //         [inputIdentifier]: {
    //             ...this.state.EmpForm[inputIdentifier],
    //             value: event.target.value,
    //             valid: this.checkValidity(event.target.value, this.state.EmpForm[inputIdentifier].validation),
    //             reqLength: this.checkLength(event.target.value,this.state.EmpForm[inputIdentifier].validation ),
    //             touched: true,


    //         }

    //     }
    // const updatedFormElement = {
    //     ...updatedRegForm[inputIdentifier]
    // };
    // updatedFormElement.value = event.target.value;
    // updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    // updatedFormElement.reqLength = this.checkLength(updatedFormElement.value, updatedFormElement.validation)
    // updatedFormElement.touched = true;
    // updatedRegForm[inputIdentifier] = updatedFormElement;

    // let updatedFormIsValid = true;
    // for (let inputIdentifier in updatedEmpForm) {
    //     updatedFormIsValid = updatedEmpForm[inputIdentifier].valid && updatedFormIsValid
    // }

    // this.setState({ EmpForm: updatedEmpForm, formIsValid: updatedFormIsValid })
    // }
    render() {
        // const formElementsArray = [];
        // for (let key in this.state.EmpForm) {
        //     formElementsArray.push({
        //         id: key,
        //         config: this.state.EmpForm[key]
        //     });
        // }

        let mymodal = (
            <Modal

                isOpen={this.state.showModal}
                contentLabel="Modal"
                ariaHideApp={false}
            >
                <div className={classes.EmployeeForm}>
                    <h2>Employee Information</h2>
                    <form>
                        <Input type="text"
                            placeholder="Enter your name...."
                            name="name"
                            label="Employee Name:"
                            onChange={(event) => this.handleModalChange(event)} />
                        <Input type="text"
                            placeholder="Enter job title...."
                            name="jobTitle"
                            label="Employee Job Title: "
                            onChange={(event) => this.handleModalChange(event)} />
                        <Input type="number"
                            placeholder="Enter mobile number..."
                            name="mobileNumber"
                            label="Employee Mobile Number: "
                            onChange={(event) => this.handleModalChange(event)} />
                        <Button
                            btnType="Success"
                            // disabled={!this.state.formIsValid}
                            clicked={this.addRecord}
                        >
                            SUBMIT
                    </Button>

                    </form>
                </div>

            </Modal>

        );

        const content = (
            <div>
                {mymodal}
                <h1 style={{ marginTop: '50px' }}>Employee Details</h1>
                <DisplayDetails
                    onAddMore={this.openModal}
                    Details={this.state.Details}
                    onSetSidebarOpen={this.onSetSidebarOpen}
                    onPressEditRecord={this.onPressEditRecord}
                    deleteRecord={this.deleteRecord} />
            </div>

        );



        return (
            <div >
                <SidePanel
                    sidebarOpen={this.state.sidebarOpen}
                    onSetSidebarOpen={this.onSetSidebarOpen}
                    content={content}
                    recordToEdit={this.state.EditRecord}
                    handleSidebarChange={this.handleSidebarChange}
                    onConfirm={this.editRecord}></SidePanel>

            </div>
        )
    }

}

export default Layout