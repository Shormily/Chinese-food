import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm()
    
    // const [services, setServices] = useState([]);



    useEffect(() =>{
      fetch('http://localhost:5000/users')
      .then(res=>res.json())
      .then(data =>console.log(data) )
    })

    const onSubmit = data => {
        console.log(data);
    
    
        axios.post("http://localhost:5000/users", data)
        .then(res => {
           if(res.data.insertedId){
            alert('added successfully');
            reset();
           }
        })
        
    };
    return (
        <>
         <div className='add-service  '>
        <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true,  })} placeholder="Name" type="text"  className="mb-3 p-3  w-50 shadow pragraph-weight" />
      <textarea {...register("description")} placeholder="Description"  className="mb-3 p-3  w-50 shadow pragraph-weight" />
      <input {...register("price")} type="text"  placeholder="Price"  className="mb-3 p-3  w-50 shadow pragraph-weight" />
      <input {...register("img")} type="url" placeholder="Img Url"  className="mb-3 p-3  w-50 shadow pragraph-weight" />
      <input type="submit" className="mb-3 p-3  w-50 shadow btn-colors text-light pragraph-weight"/>
    </form>
        </div>   
        </>
    );
};

export default AddService;