import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios"
import Form from '../components/Form/Form';

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
      setUser(res.data.data.user);
      setInput(res.data.data.user)
    }
    fetchUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    console.log(`http://localhost:3000/api/update/${user.userName}`)
    console.log(fields);
    await axios.put(`http://localhost:3000/api/update/${user.userName}`, { fields });
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
      <Form 
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
      ></Form>
    </div>);
}
