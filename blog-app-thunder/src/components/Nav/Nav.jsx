import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <h5>Login</h5>
      </NavLink>
      <NavLink to="/users">
        <h5>Users</h5>
      </NavLink>
      <NavLink to="/signup">
        <h5>Add a User</h5>
      </NavLink>
    </nav>
  );
}
