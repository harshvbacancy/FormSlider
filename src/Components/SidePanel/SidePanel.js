import React from 'react';
import Sidebar from "react-sidebar";
import classes from "./SidePanel.module.css";
import EmployeeForm from '../EmployeeForm/EmployeeForm';

const SidePanel = (props) => {
        let editForm = (
            <div>
            <button onClick={() => {props.onSetSidebarOpen(false)}} className={classes.CloseX} >X</button>
            <EmployeeForm 
             changeInput={props.formChangeInput}
             Record={props.formRecord}
             recordToEdit={props.recordToEdit}
             pressedEditButton={props.pressedEditButton}
               />  
               </div>  
        );
        return (
            <div>
                <Sidebar
                    sidebar={editForm}
                    open={props.sidebarOpen}
                    onSetOpen={props.onSetSidebarOpen}
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
                    {props.content}
                </Sidebar>
            </div>
        );
    }


export default SidePanel;