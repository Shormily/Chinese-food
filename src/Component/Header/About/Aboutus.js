import React from "react";
import { Card, Carousel } from "react-bootstrap";
import img6 from "../Image/img6.jpg";
import img7 from "../Image/img7.jpg";
import img8 from "../Image/img8.jpg";
import img9 from "../Image/img9.jpg";
import img5 from "../Image/img5.jpg";
import img13 from "../Image/img13.jpg";
import img15 from "../Image/img15.jpg";
import about from "../Image/about.jpg";
import "./Aboutus.css";
import ScrollToTop from 'react-scroll-to-top';


const Aboutus = () => {
  return (
    
    <div>
       <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
        
      />
      <div  className="review-wrapper"> </div>
      <h1 className="mb-5 mt-2 text-danger animate__animated  animate__fadeInDown">
        About US
      </h1>
      <div className="display "data-aos="fade-right"
      data-aos-duration="1500"
     data-aos-easing="ease-in-sine">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img9} />
          <Card.Body>
            <Card.Title className="text-center mt-2">
              Grilled Chiken on Behance
            </Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img7} />
          <Card.Body>
            <Card.Title className="text-center mt-2">Fread Rice</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img6} />
          <Card.Body>
            <Card.Title className="text-center mt-2 ">Custured</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img8} />
          <Card.Body>
            <Card.Title className="text-center text  mt-2 ">
              Colossal Lobster Tails{" "}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
      <section className="review-wrapper mb-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 col-md-7 col-sm-7">
              <div className="card rounded-0 bg-white p-2 mt-1 "data-aos="fade-up"
     data-aos-duration="3000">
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={img13}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={img5}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={img15}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row d-flex  about-name-part">
            
            <div className="col-12 col-lg-6 col-md-12"data-aos="fade-right"
     data-aos-duration="1500">
              <h1>About us our Resturent</h1>
              <p className="slide-pra mt-5" >Our restaurant was established in 1990. It has been in operation for many years. We have been providing food service to everyone. We keep a variety of food in our Beef US restaurant. We serve no customer. Let's do it</p>
            </div>
            <div className="col-12 col-lg-6 col-md-12 ">
              <img className="w-75 rounded-0 bg-secondary p-2 mt-5 mb-5"data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500" src={about} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
