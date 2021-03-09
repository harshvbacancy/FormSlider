import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import classes from './SidePanel.module.css'

class SidePanel extends Component {
    render() {
        let editForm = (
            <div className={classes.SidePanel}>
                <form>
                <h2>Employee Information</h2>
                    <Input type="text"
                        placeholder="Enter your name...."
                        name="name"
                        label="Employee Name:"
                        value={this.props.recordToEdit.name || ''}
                        onChange={(event) => this.props.handleSidebarChange(event)} />
                    <Input type="text"
                        placeholder="Enter job title...."
                        name="jobTitle"
                        label="Employee Job Title:"
                        value={this.props.recordToEdit.jobTitle || ''}
                        onChange={(event) => this.props.handleSidebarChange(event)} />

                    <Input type="number"
                        placeholder="Enter mobile number..."
                        name="mobileNumber"
                        label="Employee Mobile Number:"
                        value={this.props.recordToEdit.mobileNumber || ''}
                        onChange={(event) => this.props.handleSidebarChange(event)} />
                    <Button
                        bynType="Success"
                        clicked={(event) => this.props.onConfirm(event)}>
                        Confirm
                </Button>
                </form>
            </div>

        );
        return (
            <div>
                <Sidebar
                    sidebar={editForm}
                    open={this.props.sidebarOpen}
                    onSetOpen={this.props.onSetSidebarOpen}
                    pullRight={true}
                    styles={
                        {
                            sidebar:
                            {
                                background: "white",
                                width: '30%'
                            }
                        }
                    }

                >
                    {this.props.content}
                </Sidebar>
            </div>
        );
    }
}

export default SidePanel;