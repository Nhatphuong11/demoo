import React, { useState } from 'react'
import "./AddUser.css"
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { navigate, useNavigate } from 'react-router-dom';
function AddUser() {
    const [user, setUser] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
    });

    const {name, age, email, phone } = user;

    const navigate = useNavigate();

    const handleChang = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/users", user);
        navigate("/users");
    }


  return (
    <div className='mx-auto shadow w-75 p-5'>
        <button onClick={()=> navigate(-1)}>back</button>
        <h2>AddUser</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} name="name" onChange={handleChang}/>
            <br/>
            
            <label>Age:</label>
            <input type="text" value={age} name="age" onChange={handleChang}/>
            <br/>

            <label>Email:</label>
            <input type="text" value={email} name="email" onChange={handleChang}/>
            <br/>

            <label>Phone:</label>
            <input type="text" value={phone} name="phone" onChange={handleChang}/>
            <br/>
            <Button variant="success" type='submit'>Add User</Button>
        </form>

    </div>
  )
}

export default AddUser