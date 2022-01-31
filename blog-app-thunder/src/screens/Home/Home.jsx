import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';

import Nav from '../../components/Nav/Nav';

const login_input = {
  email: '',
  password: '',
};

const URL = 'http://localhost:3000/api/login/';

export default function Home() {
  const [input, setInput] = useState(login_input);

  const navigate = useNavigate();

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

      const res = await axios.post(`${URL}`, input);

      const value = res.data.data.user;

      // store user in local storage
      localStorage.setItem('user', value.email);
      console.log(value);
      console.log(input);

      navigate('/users');
    } catch (error) {
      console.log(error);
    }
  };

  // check if user logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem('email');
    if (loggedInUser) {
      const foundUser = loggedInUser;
      console.log(foundUser);
      setInput(foundUser);
    }
  }, []);

  //if user is stored in localstorage
  if (localStorage.getItem('user') !== null) {
    return (
      <div>
        <Nav setInput={setInput} />

        <h2>
          {input.email} is currently logged in, please navigate to another page
        </h2>
      </div>
    );
  } else {
    //if no user stored in local storage
    return (
      <div className="login-page">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email</label>
          <input
            autoFocus
            required
            type="text"
            id="email"
            value={input.email}
            placeholder="email"
            onChange={handleLoginChange}
          />

          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            value={input.password}
            placeholder="password"
            onChange={handleLoginChange}
          />
          <button>Login</button>
        </form>
        <div className="sign-in-link">
          <h5>
            Don't have an account? Sign Up <Link to="/signup">Here</Link>
          </h5>
        </div>
      </div>
    );
  }
}
