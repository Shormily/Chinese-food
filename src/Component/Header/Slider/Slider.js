import React from 'react';
import { Carousel,Card } from 'react-bootstrap';
import img1 from '../Image/img1.jpg'
import img2 from '../Image/img2.jpg'
import img3 from '../Image/img3.jpg'
// import img4 from '../Image/img4.jpg'
// import img5 from '../Image/img5.jpg'
import img6 from '../Image/img6.jpg'
import img7 from '../Image/img7.jpg'
import img8 from '../Image/img8.jpg'
import img9 from '../Image/img9.jpg'

import './Slider.css'

const Slider = () => {
    return (
        <div>
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-warning'  >RESTURENT BEEF USA</h3>
      <p className='text-warning'>Welcome To Our Resturent.A variety of Chinese food is available here.</p>
    </Carousel.Caption>
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
  
<div className='display bg'>

<Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={img9} />
  <Card.Body className='bg'>
    <Card.Title className='text-center'>Grilled Chiken on Behance</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={img7} />
  <Card.Body className='bg'>
    <Card.Title className='text-center'>Fread Rice</Card.Title>
   
  </Card.Body>
</Card>
<Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={img6} />
  <Card.Body className='bg'>
    <Card.Title className='text-center'>Custured</Card.Title>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={img8} />
  <Card.Body className='bg'>
    <Card.Title className='text-center text '>Colossal Lobster Tails with Duches Potatos</Card.Title>
  </Card.Body>
</Card>

</div>

        </div>
    );
};

export default Slider;