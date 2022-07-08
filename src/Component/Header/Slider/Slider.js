import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../Image/img1.jpg";
import img2 from "../Image/img2.jpg";
import img3 from "../Image/img3.jpg";
import CountUp from 'react-countup';
// import img4 from '../Image/img4.jpg'
// import img5 from '../Image/img5.jpg'

import "./Slider.css";

const Slider = () => {
  return (
    <div className=" animate__animated animate__fadeInRight">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption className="mt-5">
      <h1 className="text-warning shadow mt-5">Welcome To Our Beef USA Resturent</h1>
      <p className="slide-pra shadow">We always try to give the best service to our customers</p>
    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption className="mt-5">
          <h1 className="text-warning shadow">Welcome To Our Beef USA Resturent</h1>
          <p className="slide-pra shadow">We always try to give the best service to our customers</p>
    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <Carousel.Caption className="mt-5">
          <h1 className="text-warning shadow">Welcome To Our Beef USA Resturent</h1>
          <p className="slide-pra shadow">We always try to give the best service to our customers</p>
    </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
      <section className="countUp">
      <div className="container text-center p-4 ">
      <div className="row d-flex  ">
          <div className="col-lg-3 col-md-6 col-12">
              
            <CountUp end={2050} duration={100} className="countup-font " />
            <p className="about-pragraph">COFFEE CUPS</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <CountUp end={2144} duration={100} className="countup-font" />
            <p className="about-pragraph">Comforts</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <CountUp end={3128} duration={100} className="countup-font" />
            <p className="about-pragraph">Food Item</p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <CountUp end={9748} duration={100} className="countup-font" />
            <p className="about-pragraph">Clients</p>
          </div>
        </div>
        </div>

      </section>
     
     
    </div>
  );
};

export default Slider;
