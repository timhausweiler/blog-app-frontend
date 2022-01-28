import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const login_input = {
  email: '',
  password: '',
};

const URL = 'http://localhost:3000/';

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
      await axios.post(`${URL}login`, { fields });

      setInput(login_input);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email</label>
        <input
          autoFocus
          id="email"
          value={input.email}
          placeholder="email"
          onClick={handleLoginChange}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={input.password}
          placeholder="password"
          onClick={handleLoginChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
