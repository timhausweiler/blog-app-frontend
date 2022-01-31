import React, { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom";
import "./Signup.css"

const default_input = {
  userName: '',
		avatar: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
}

export default function Signup() {
  const [input, setInput] = useState(default_input);
  const navigate = useNavigate();

  const handleTextInput = (event) =>{
    const {id, value} = event.target;
    setInput((prevInput)=>({
        ...prevInput,
        [id]: value,
    }))
}

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const fields = input;
    await axios.post("http://localhost:3000/api/signup", fields);
    setInput(default_input);
    navigate("/users");
  }

  return (
    <div id='page'>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input type="text" value={input.userName} id='userName' onChange={handleTextInput} required/>
        <label htmlFor="avatar">Avatar</label>
        <input type="text" value={input.avatar} id='avatar' onChange={handleTextInput}/>
        <label htmlFor="firstName">First Name</label>
        <input type="text" value={input.firstName} id='firstName' onChange={handleTextInput} required/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" value={input.lastName} id='lastName' onChange={handleTextInput} required/>
        <label htmlFor="email">E-mail</label>
        <input type="text" value={input.email} id='email' onChange={handleTextInput} required/>
        <label htmlFor="password">Password</label>
        <input type="text" value={input.password} id='password' onChange={handleTextInput} required/>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="text" value={input.confirmPassword} id='confirmPassword' onChange={handleTextInput} required/>
        <button>Submit</button>
      </form>
    </div>
    );
}
