import React from 'react';
import google from '../Image/google.png';
import twitter from  '../Image/twitter.png';
import facebook from  '../Image/facebook.jpg';
import { Button } from 'react-bootstrap';
import './Login.css';
import useAuth from '../Hook/useAuth';


const LogIn = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h1>
            <div className='hero'>
           <div className='from-box'>
              <h1 className='top'>Login</h1>
              <div className='social-icon'>
               <img src={facebook} alt=''/>
               <img src={twitter} alt=''/>
               <img src={google} alt=''/>
               {/* <FcGoogle/> */}
               </div> 
               <from id="login" className="input-group ">
                   <div>
                   <input
              required
              type="email"
              className="form-control mx-5 in "
              placeholder="Email"
              
            />
                   <input
              required
              type="email"
              className="form-control mx-5 mt-2 in"
              placeholder="Password"
              
            />
            
         
                   </div>
            
            
           
                   
               </from>
              
               
               <div className='d-flex  '>
               
               <Button variant="danger" className='bottom'>Log In</Button>
               <Button variant="warning" onClick={signInUsingGoogle} className='bottom'>Google Sign In</Button>
                 </div>
              
           </div>
          
       </div>
            </h1>
        </div>
    );
};

export default LogIn;