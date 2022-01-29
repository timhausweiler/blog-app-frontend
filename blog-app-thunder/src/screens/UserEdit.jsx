import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios"

const default_input = {
  userName: '',
		// avatar: '',
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
      setUser(res.data.data.user);
      setInput(res.data.data.user)
    }
    fetchUser();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    // console.log(input)
    // console.log(fields)
    // console.log(`http://localhost:3000/api/update/${user.userName}`)
    await axios.put(`http://localhost:3000/api/update/${user.userName}`, fields );
    setInput(default_input);
    navigate("/users");
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
        <label>
          Username
          <input type="text" value={input.userName} onChange={handleTextInput} required />
        </label>
        <label>
          First Name
          <input type="text" value={input.firstName} onChange={handleTextInput} required />
        </label>
        <label>
          Last Name
          <input type="text" value={input.lastName} onChange={handleTextInput} required />
        </label>
        <label>
          E-mail
          <input type="text" value={input.email} onChange={handleTextInput} required />
        </label>
        <label>
          Password
          <input type="text" onChange={handleTextInput} required/>
        </label>
        <label>
          Confirm Password
          <input type="text" onChange={handleTextInput} required/>
        </label>
        <button>Submit</button>
      </form>
    </div>);
}
