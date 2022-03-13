import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
<div  className='navbar'>
        
        <div  className='navlink'>
        <NavLink className="link " to="/">Home</NavLink>
        <NavLink className="link" to="/aboutus">About US</NavLink>
        <NavLink className="link" to="/service">Service</NavLink>
        <NavLink className="link" to="/contact">Contact</NavLink>
       
        </div>
        
    </div>
    
        </div>
        
    );
};


export default Header;