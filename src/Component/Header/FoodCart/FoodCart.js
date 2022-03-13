import React from 'react';
import { Card, Col,Row } from 'react-bootstrap';
import "./FoodCart.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const FoodCart = (props) => {
    console.log(props.food)
    const { name,  img ,description} = props.food
    return (


      <div className=' container g-4 col-md-2 col-lg-3 d-grid cart '>
     <div className='card-container'>
      <div className='image-container'>
        <img src={img} alt=''/>
       </div>
     <div className='card-content'>
       <div className='card-title'>
        <h3>{name}</h3>
      </div>
    <div className='card-body'>
     <p>{description}</p>
       </div>
   </div>
     <div className='btn'>
     <button>
       <a>View more</a>
    </button>
    </div>
   </div>
   </div>



            



        



    );
};

export default FoodCart;