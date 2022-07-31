import React from "react";
import "./FoodCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdStarRate} from "react-icons/md";

const FoodCart = ({food,setFoods}) => {
  
  const { name, img, price} = food;
  
  const handleDeleteUsers = id =>{
    
     const proceed = window.confirm('Are you sure, you want to delete?');
     if(proceed){
       const url = `http://localhost:5000/users${id}`;
     fetch(url,{
       method:'DELETE'
     })
     .then(res => res.json())
     .then(data =>{
       if(data.deletedCount >0){
         alert('deleted successfully');
         setFoods(users => users.filter(users =>users._id !== id));
         
       }
     })
     }
     
   }

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
        <div className="btnservice p-3">
        <button className='btnsdesigns px-4 pragraph-weight text-light  '>Buy Now</button> 
          <button className='btnsdesigns px-4 pragraph-weight text-light  ' onClick={() => handleDeleteUsers(food._id)}>Delete</button> 
        </div>
      </div>
      </div>
  );
};

export default FoodCart;