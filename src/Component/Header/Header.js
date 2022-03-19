import React from 'react';
import { Button } from 'react-bootstrap';
// import useFirebase from '../Hook/useFirebase';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useAuth from './Hook/useAuth';
import { BsBoxArrowRight} from "react-icons/bs";
import 'animate.css';


const Header = () => {
    const {user,logout} = useAuth();
    return (
        <div>
           
<div  className='navbar col-lg-12 col-md-12 col-sm-12 animate__animated animate__fadeInLeft  '>

        <div  className='navlink center  '>
         
     
        <NavLink className="link " to="/">Home </NavLink>
        <NavLink className="link" to="/aboutus">About US</NavLink>
        <NavLink className="link" to="/service">Service</NavLink>
        <NavLink className="link" to="/contact">Contact</NavLink>
        <NavLink className="link" to="/signup">SignUp <BsBoxArrowRight/></NavLink>
       
      
        </div>
        <div >
           {/* <span className='text-light'>{user.displayName}</span> */}
            {user?.email &&
        <Button variant="outline-danger bg- " className='mt-2 mx-2' size="sm" onClick={logout}><span className='text-light'>SignOut {user.displayName} {<img src="https://lh3.googleusercontent.com/a-/AOh14GigCCcrTCUqWsnTgrDedxiv6A6zS9GQnTsnBvzs8Q=s96-c" class="imge" alt="..."/>}</span></Button>
       
        }
       
        
        
        </div>
    </div>
    
        </div>
        
    );
};


export default Header;