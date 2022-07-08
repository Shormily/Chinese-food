import React from 'react';
import "./Contact.css";
// import width from "../Image/width.jpg"
import img28 from "../Image/img28.png"
import { Form, Button } from 'react-bootstrap';



const Contact = () => {
  return (
    <div className='mt-5 mb-5' >
      

      <div className='row'>
      <h1 className=' mt-5'>Contact US</h1>
       <div className='col-lg-6 col-md-12 col-sm-12'>
       <img className=' left  animate__animated animate__lightSpeedInLeft mt-5 ' src={img28} alt="" />
       </div>
       <div className='col-lg-6'>
         
       <Form className='color my-2 col-md-6 minimum  col-sm-12 mt-5 '>
          <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-light">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3 text-light" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className='mx w' variant="danger text-light" type="submit">
            Submit
          </Button>
        </Form>



        </div>
      </div>
      {/* <div className='d-flex forem mb-5 col-md-6 '>
      
        
      </div> */}

    </div>
  );
};

export default Contact;