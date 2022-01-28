import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const login_input = {
  email: '',
  password: '',
};

const URL = 'http://localhost:3000/api/login/';

export default function Home() {
  const [input, setInput] = useState(login_input);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      const fields = input;
      await axios.post(`${URL}`, { fields });

      setInput(login_input);
      navigate('/users');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input
          autoFocus
          type="text"
          id="email"
          value={input.email}
          placeholder="email"
          onChange={handleLoginChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={input.password}
          placeholder="password"
          onChange={handleLoginChange}
        />
        <button onClick={handleLoginSubmit}>Login</button>
      </form>
    </div>
  );
}
