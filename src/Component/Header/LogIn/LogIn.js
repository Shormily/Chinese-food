import React from 'react';
import {  useState } from "react"
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth';
import './Login.css';
import useAuth from '../Hook/useAuth';
import { useLocation,useNavigate } from 'react-router-dom';


const LogIn = () => {
  const {signInUsingGoogle,createNewUserByEmail} = useAuth();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
const auth = getAuth()

const navigate = useNavigate();
    const location = useLocation();

    const hanldeGoogleLogin = () => {
      signInUsingGoogle(location,navigate)
        
       
    };

  const handleRegister = e =>{
    e.preventDefault();
    console.log(email,password);
    if(password.length < 6){
      setError('password must be at least 6 characters long.')
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
        const user =result.user;
        createNewUserByEmail()
        console.log(user)
    })
    
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
    
  }
  
    return (
       <div className=''>
         <h1 className='text-light'>Please  Log In</h1>
         <h1 className='text-light'>Please  Log In</h1>
         <h1 className='text-danger mt-5'>Please  Log In</h1>
         <div className=' contact col-md-6 col-12 col-lg-6 container animate__animated animate__fadeInUpBig mb-5'>
             
        
        <div className=' input-part mt-5 '>
          
        <input
          required
          type="text"
          className="form-control mb-2 "
          placeholder="Name"
          
        />
        <input
          required
          type="text"
          className="form-control mb-2"
          placeholder="Email"
          onChange={handleEmailChange} 
          
          
        />
        <input
          required
          type="text"
          className="form-control mb-2"
          placeholder="Password"
          onChange={handlePasswordChange}
          
        />
        <input
          required
          type="text"
          className="form-control mb-2"
          placeholder="Re-Type-Password"
          
        />
        
        
         
      
        <button className='container  log-in-button'onClick={handleRegister}>Log In</button>
        <p className='text-danger'>{error}bbb</p>
        <p className='text-center mt-2'>Or</p>
        <hr/>
        <button className='container   mb-2 Sign-in-button bg-warning' onClick={hanldeGoogleLogin}>Google Sign In</button>
        </div>
       
      
    </div>
       </div>
        
    );
};

export default LogIn;