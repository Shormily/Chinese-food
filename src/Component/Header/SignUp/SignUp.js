import React from 'react';
import facebook from  '../Image/facebook.jpg';
import google from '../Image/google.png';
import twitter from  '../Image/twitter.png';
import { Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './SignUp.css'
import useAuth from '../Hook/useAuth';
const SignUp = () => {
  const {signInUsingGoogle} = useAuth();
    return (
        <>
             <div className='hero animate__animated  animate__fadeInDown col-lg-12 col-md-12 col-sm-12'>
           <div className='from-box'>
              <h1 className='first'>SignUp</h1>
              <div className='social-icon'>
               <img src={facebook} alt=''/>
               <img src={twitter} alt=''/>
               <img src={google} alt=''/>
               {/* <FcGoogle/> */}
               </div> 
               <form onSubmit={signInUsingGoogle} id="login" className="input-group ">
                   <div>
                   <input
              required
              type="email"
              className="form-control mx-5  in"
              placeholder="Name"
              
            />
                   <input
              required
              type="email"
              className="form-control mx-5 mt-2 in"
              placeholder="Email"
              
            />
                   <input
              required
              type="email"
              className="form-control mx-5 mt-2 in"
              placeholder="Password"
              
            />
                   <input
              required
              type="email"
              className="form-control mx-5 mt-2 in"
              placeholder="Re-type-Password"
              
            />
              
                   </div>
            
        
               </form>
            
               <div><NavLink className="login-link text-danger" to="/login">Already have an account?Please Log In </NavLink></div>
               <div className='d-flex  '>
                 
               <Button variant="warning " className='bottom'>  Sign Up </Button>
               <Button variant="warning" className='bottom2' onClick={signInUsingGoogle}>Google Sign In</Button>
                 </div>
              
           </div>
          
       </div>
        </>
    );
};

export default SignUp;