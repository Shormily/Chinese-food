import React from 'react';
// import { NavLink, } from 'react-router-dom';
import './SignUp.css'
// import { FcKey,FcAdvance } from "react-icons/fc";
import img14 from "../Image/img14.jpg";
import useAuth from '../Hook/useAuth';
import {  useState } from "react"
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail} from 'firebase/auth';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import swal from 'sweetalert';



const SignUp = () => {
  const {signInUsingGoogle,createNewUserByEmail} = useAuth();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [isLogin,setIsLogin] = useState(false)



  const navigate = useNavigate();
  const location = useLocation();

  const hanldeGoogleLogin = () => {
    signInUsingGoogle(location,navigate)
      
     
  };



  
const auth = getAuth()

  const handleRegister = e =>{
    e.preventDefault();
    if(password.length < 6){
      setError('password must be at least 6 characters long.')
      return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
setError('Password Must contain 2 upper case');
return;
    }
    if(isLogin){
      processLogin(email,password);
    }
    else{
      registerNewUser(email,password);
    }
    
  }
  const processLogin = (email,password) =>{
    signInWithEmailAndPassword(auth,email,password)
    .then((result) => {
     
      const distination = location?.state?.from || '/about';
      console.log( distination);
      navigate(distination);

      Swal.fire(
        'Successfully Sign In!',
        'welcome to our Medical Clinic',
        'success'
      )
    })
    .catch((error) => {
      setError(error.message);
    });
  }

    const registerNewUser = (email,password)=>{
      createUserWithEmailAndPassword(auth, email, password)
      .then(result=>{
          const user =result.user;
          createNewUserByEmail()
          console.log(user)
          setError('Successfully Sign In!!Now Go To Another Page');
          verifyEmail();
      })
      .catch(error =>{
        setError("already use this email")
      })
     
    }
    const handleResetPassword = () =>{
      sendPasswordResetEmail(auth,email)
      .then(result =>{

      })
    }
    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(result =>{
        console.log(result);
      })
    }
    
    const toggleLogin = e =>{
      setIsLogin(e.target.checked)
    }
    
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
    
  } 
  return (
      <>
      <h1 className='text-light mt-5 '>Please Sign Up</h1>
      <div className='container'>
        <div className='row d-flex signup-page'>
          <h1 className='mt-5 text-danger mx-2'>Please {isLogin ? "Login" :" Sign In "} </h1>
          <div className='col-12 col-md-12 col-lg-6'>
            <img src={img14} className="w-100 rounded-0 bg-warning p-2 mt-5 mb-5" alt="" />
          </div>
          <div className=' contact col-md-6 col-12 col-lg-6 container animate__animated animate__fadeInUpBig '>
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
                 <Form.Check onChange={toggleLogin} className='decoration'  type="checkbox" label="Already You have Account? Please Log In.!!" />
                
                <p className='text-danger text-center  decoration '>{error}</p>
                <p  className='text-info text-center  decoration ' onClick={handleResetPassword}>Forgot Password? </p>
                <button className='container  log-in-button ' onClick={handleRegister}>{isLogin ? "Log In" : "Sign In"}</button>
               
               
                <hr/>
                <button className='container   mb-2 Sign-in-button bg-warning' onClick={hanldeGoogleLogin}>Google Sign In</button>
                </div>
               
              
            </div> 
        </div>
      </div>
      
      </>
     
    
        
    
    );
    
};

export default SignUp;