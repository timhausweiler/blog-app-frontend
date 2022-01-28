import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios"

const default_input = {
  userName: '',
		avatar: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
}

export default function UserEdit() {
  const [user, setUser] = useState([]);
  const [input, setInput] = useState(default_input);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3000/api/user/${id}`);
      console.log(res.data.data.user);
      setUser(res.data.data.user);
      setInput(res.data.data.user)
    }
    fetchUser();
  }, []);

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const fields = input;
    await axios.put(`http://localhost:3000/api/update/${user.userName}`, {fields});
    setInput(default_input);
    navigate("/");
  }
  
  const handleTextInput = (event) => { 
    const { id, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  return (
    <div>
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
        <input type="text" id='password' onChange={handleTextInput} required/>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="text" id='confirm-password' onChange={handleTextInput} required/>
        <button>Submit</button>
      </form>
    </div>);
}
