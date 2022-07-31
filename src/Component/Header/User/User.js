import React, { useEffect, useState } from 'react';

const User = () => {
    const [users, setUsers ] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/users')
        .then(res=> res.json())
        .then(data => setUsers(data));

    }, [])
    // DELETE AN USER
    const handleDeleteUser = id =>{
       const proceed = window.confirm('Are you sure, you want to delete?');
       if(proceed){
        const url = `http://localhost:5000/users/${id}`;
        fetch(url,{
       method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
         if(data.deletedCount >0){
             alert('deleted Successfully');
             const remainingUser = users.filter(user => user._id !== id)
             setUsers(remainingUser);
         }
        })
       }
    }
    return (
        <>
          <h2 className='p-5 mt-5 '>Users Available:{users.length}</h2> 
          <ul>
            {
                users.map(user=><li
                key={user._id}
                >{user.name} :: {user.email}
                <button>Update</button>
                <button onClick={() => handleDeleteUser(user._id)}>X</button>
                
                </li>)
            }
            
            </ul> 
        </>
    );
};

export default User;