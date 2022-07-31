import React from 'react';
import {  Navbar,Container,Nav } from 'react-bootstrap';
// import useFirebase from '../Hook/useFirebase';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from './Hook/useAuth';
// import { BsBoxArrowRight} from "react-icons/bs";
import 'animate.css';
// import { IoFastFoodOutline} from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoLogInSharp } from "react-icons/io5";


const Header = () => {
    const {user,logout} = useAuth();
    return (
        <div>
           

    <div>
        
    <Navbar className="nav-bar shadow  p-3 animate__animated animate__fadeInRight " fixed="top" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <h2 className='text-warning  font animate__animated  animate__fadeInRight'><IoFastFoodOutline className='icon animate__animated animate__fadeInLeftBig text-danger'/> Beef USA Resturent</h2>
          </Navbar.Brand >
          <Navbar.Toggle aria-controls="basic-navbar-nav " className='text-light' />
          <Navbar.Collapse id="basic-navbar-nav" className='text-light' >
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link
            
                as={NavLink}
                className="nav-link animate__animated animate__fadeInUp text-light"
                to="/"
              >
                Home
              </Nav.Link>
              
              
              <Nav.Link
            
                as={NavLink}
                className="nav-link animate__animated animate__fadeInUp text-light"
                to="/addService"
              >
                AddService
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="nav-link animate__animated animate__fadeInUp text-light"
                to="/service"
              >
                Service
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="nav-link animate__animated animate__fadeInBottomLeft text-light"
                to="/aboutus"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="nav-link animate__animated animate__fadeInBottomLeft text-light"
                to="/contact  "
              >
                Contact
              </Nav.Link>
              {!user?.email && (
                <Nav.Link
                as={NavLink}
                className="nav-link animate__animated animate__fadeInDownBig text-light"
                to="/signup  "
              >
              SignIn <IoLogInSharp/>
              </Nav.Link>
              )}
              

              {user?.email && (
                
                 <Nav.Link
                 onClick={logout}
                
                 className="nav-link animate__animated animate__fadeInDownBig text-light"
                 to="/signup  "
                 as={NavLink}
               >
               LogOut<IoLogInSharp/><span>
                {user?.photoURL ? (
                  <img className="user-img" src={user.photoURL} alt="" />
                ) : (
                  <small className="text-light ms-3">{user?.displayName}</small>
                )}
              </span>
               </Nav.Link>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
        </div>
        
    );
};


export default Header;