import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout(props) {
  const { setInput } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    setInput({ email: '', password: '' });

    console.log(props.user);

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
