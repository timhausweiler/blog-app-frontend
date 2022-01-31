import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

export default function Logout(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    props.setInput({});

    localStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}
