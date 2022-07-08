import React from "react";
import "./FoodCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { MdStarRate} from "react-icons/md";
const FoodCart = (props) => {
  console.log(props.food);
  const { name, img, price} = props.food;

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 "data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
     
      <div className="card-container ">
        <div className="image-container">
          <img src={img} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title text-center text-danger">
            {/* <p>{id</p> */}
            <h3 >{name}</h3>
            <p className="text-dark">Price:{price}</p>
            <div className="text-warning font">
            < MdStarRate/>
            < MdStarRate/>
            < MdStarRate/>
            < MdStarRate/>
            < MdStarRate/></div>
          </div>
        </div>
        <div className="btn">
        <NavLink className=" text-danger algin " to="/signup"><Button variant="danger">Buy Now</Button> </NavLink>
        </div>
      </div>
      </div>
  );
};

export default FoodCart;