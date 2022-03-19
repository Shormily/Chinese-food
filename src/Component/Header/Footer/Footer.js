import React from 'react';
import './Footer.css'
import { AiTwotonePhone} from "react-icons/ai";
import { BsFacebook,BsGoogle,BsInstagram,BsLinkedin } from "react-icons/bs";
import {FaEnvelope,FaUniversity,FaRegFileAlt} from "react-icons/fa";



const Footer = () => {
    return (
        <div className='bac text-white pt-5 pb-4 '>
            <div className="container text-center text-md-left">
                <div className='row text-center text-md-left'>
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning' >Company name</h5>
                        <p>Our restaurant offers a wide variety of food and we always offer good quality food. We have different sections and you will find all kinds of Chinese food to serve. We will always try to give good .</p>

                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Product</h5>
                        <p className='text-white  word'> TheProvieders</p>
                        <p className='text-white  word'> Creativity</p>
                        <p className='text-white  word'> SourceFiles</p>
                        <p className='text-white  word'> Products</p>
                        
                    </div>
                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>USEFUL LINKS</h5>
                        <p className='text-white word'>Our Account</p>
                        <p className='text-white word' >Become an Affiliates</p>
                        <p className='text-white word'> Shipping</p>
                        <p className='text-white word'> Help</p>
                       
                    </div>
                    <div className='col-md-4 col-lg-3 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Contact</h5>
                        <p><FaUniversity/> New York, NY 2333, US</p>
                        <p><AiTwotonePhone/> +92 678940456745235</p>
                        <p><FaEnvelope/> Shormilyrais@gmail.com</p>
                       
                        <p><FaRegFileAlt/> ++ 01458 4570 689 78 </p>
                       

                    </div>
                </div>
                <hr className='mb-4'/>
                    <div className='row align-items-center'>
                        <div className='col-md-7 col-lg-8'>
            <p>Copyright @2022 All right reserved by: <a href="/#" className='word'><strong className='text-warning'>The Provider</strong></a></p>
                          
                        </div>
                           <div className='col-md-5 col-lg-4'>
                                 <div className='list-unstyled list-inline'>
                                     <li > <BsLinkedin/>  <BsGoogle/>  <BsFacebook/>      <BsInstagram/></li>
                                      
                                 </div>
                           </div>
                    </div>
                
            </div>
            
        </div>
    );
};

export default Footer;