import React from 'react';
import { Card,Carousel } from 'react-bootstrap';
import img6 from '../Image/img6.jpg'
import img7 from '../Image/img7.jpg'
import img8 from '../Image/img8.jpg'
import img9 from '../Image/img9.jpg'
import img5 from '../Image/img5.jpg'
import img13 from '../Image/img13.jpg'
import img15 from '../Image/img15.jpg'
import './Aboutus.css';


const Aboutus = () => {
  
    return (

        <div>
            <h1 className='mb-5 mt-2 animate__animated  animate__fadeInDown'>About US</h1>
            <div className='display animate__animated  animate__fadeInDown'>

<Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={img9} />
  <Card.Body >
    <Card.Title className='text-center mt-2'>Grilled Chiken on Behance</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={img7} />
  <Card.Body >
    <Card.Title className='text-center mt-2'>Fread Rice</Card.Title>
   
  </Card.Body>
</Card>
<Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={img6} />
  <Card.Body>
    <Card.Title className='text-center mt-2 '>Custured</Card.Title>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={img8} />
  <Card.Body>
    <Card.Title className='text-center text  mt-2 '>Colossal Lobster Tails </Card.Title>
  </Card.Body>
</Card>

</div>
<section className='review-wrapper' >
  <div className='container'>
    <div className='row'>
      <div className='col-lg-5 col-md-7 col-sm-7'>
        <div className='card rounded-0 bg-white p-2 mt-1 animate__animated animate__fadeInLeft'>
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


<div className=' text-white pt-5 pb-4 last-part'>
            <div className="container text-center text-md-left">
                <div className='row text-center text-md-left'>
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        {/* <h4 className='text-uppercase mb-4 font-weight-bold  heading-name' ></h4>
                         */}
                      
                       
                    </div>
                   
                   
                   
                </div>
                <hr className='mb-4'/>
                   
                
            </div>
            
        </div>
        </div>
    );
};

export default Aboutus;