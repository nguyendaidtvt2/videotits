import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';  
import { RiUploadCloud2Fill } from 'react-icons/ri';


const ProFile = () =>{
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
        <React.Fragment>
       
        {Auth.loggedIn() ? (
            <>
              {level === 1 || level === 3 ? (<Link className="nav-item nav-link" to="/upload"> <RiUploadCloud2Fill/>  Upload video</Link>) : ("")}
                <Dropdown className="d-inline mx-2" autoClose="outside">
                <Dropdown.Toggle id="dropdown-autoclose-outside">
                    Hello, {Auth.getProfile().data.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#"> {level === 1 || level === 3 ? (<Link className="nav-item nav-link" to="/me">
                            View My Profile
                        </Link>) : ("")}
                    </Dropdown.Item>
                    <Dropdown.Item href="#"> <Link className="nav-item nav-link" onClick={logout}>
                        Logout
                    </Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
             
             
            </>
          ) : (
            <>
              <Link className="nav-item nav-link" to="/login">
                Login
              </Link>
              {/* <Link className="nav-item nav-link" to="/signup">
                Signup
              </Link> */}
            </>
          )}
           
  
      </React.Fragment>
      )    
};

export default ProFile;