import React, { useRef } from "react";
import { Form } from "react-bootstrap";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const handleAddUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const newUser = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("User added successfully");
          e.targer.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <>
      <h2 className="p-5 mt-5 text-dark">Please Add an User</h2>

      <Form onSubmit={handleAddUser} className="p-5 mb-5">
        <input className="mb-5" type="text" ref={nameRef} />
        <input type="email" ref={emailRef} />
        <input type="submit" value="Add" />
      </Form>
    </>
  );
};

export default AddUser;
