import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../Image/img1.jpg'
import img2 from '../Image/img2.jpg'
import img3 from '../Image/img3.jpg'
// import img4 from '../Image/img4.jpg'
// import img5 from '../Image/img5.jpg'


import './Slider.css'




const Slider = () => {

  document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() =>{
            current += increment;
            obj.textContent = current;
            if(current === end){
                clearInterval(timer);
            }
        }, step);        
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
  
  })
    return (
      
        <div className=' animate__animated animate__fadeInRight'>
          <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<div>
<section class="counter d-lg-grid bg ">
         <section class="counter-seaction d-grid">
           <div class="container">
             <div class="row text-center">
                <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                  <h2><span id="count1"></span>+</h2>
                  <p>SAVING</p>
                </div>
                <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                  <h2><span id="count2"></span>+</h2>
                  <p>Photos</p>
                </div>
                <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                  <h2><span id="count3"></span>+</h2>
                  <p>SAVING</p>
                </div>
                <div class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                  <h2><span id="count4"></span>+</h2>
                  <p>SAVING</p>
                </div>
           
             </div>
           </div>
         </section>
        
       </section>
</div>
        </div>
    );
};

export default Slider;