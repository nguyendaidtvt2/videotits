import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const ProFile = () =>{
    // Calls logout function on click
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    return (
        <Dropdown className="d-inline mx-2" autoClose="outside">
            <Dropdown.Toggle id="dropdown-autoclose-outside">
            Hello, 
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default ProFile;