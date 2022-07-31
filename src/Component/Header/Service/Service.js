import React, { useEffect, useState } from 'react';
import FoodCart from '../FoodCart/FoodCart';
import './Service.css'

const Service = () => {
    const [foods,setFoods] = useState([]);
    
    useEffect(() =>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setFoods(data));

    },[])
    return (
        <div className='container mb-5'>
            <h1 className='service'>Our Services</h1>
            <div className="row">
                {
                    foods.map( food => (
                        <FoodCart key={food.id} food={food}
                        setFoods={setFoods}
                        ></FoodCart>
                    ))
                }
            </div>
        </div>
    );
};

export default Service;