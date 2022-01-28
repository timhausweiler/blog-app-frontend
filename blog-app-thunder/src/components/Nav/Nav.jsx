import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Login</Link>
      <Link to="/users">Users</Link>
      <Link to="/signup">Add a User</Link>
    </nav>
  );
}
