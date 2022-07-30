import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Auth from '../../utils/auth'; 
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'; 
import ProFile from './profile';

const Header = () => {
  // if user is not logged in, level is -1 which restricts certain privileges 
  let level = -1;
  if (Auth.getProfile()) {
    level = Auth.getProfile().data.level
  };
  // Calls logout function on click
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className='header-warp'>
    <Navbar bg="light" expand="lg" fixed="top">
    <Container fluid>
      <Navbar.Brand href="#"><img src='https://tiktits.com/assets/site/img/logo.svg' alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link className="nav-item nav-link" to="/">Home</Link>
          
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <ProFile/>
        </Navbar.Collapse>
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
  </div>
  );
};

export default Header;
 