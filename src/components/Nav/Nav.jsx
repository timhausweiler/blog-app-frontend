import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Logout from '../Logout/Logout';

export default function Nav(props) {
  return (
    <>
      <nav className="nav">
        <NavLink to="/">
          <h5>Login</h5>
        </NavLink>
        <NavLink to="/posts">
          <h5>Posts</h5>
        </NavLink>
        <NavLink to="/create">
          <h5>Create Post</h5>
        </NavLink>
        <NavLink to="/users">
          <h5>Users</h5>
        </NavLink>
        <NavLink to="/signup">
          <h5>Add a User</h5>
        </NavLink>
        <Logout setInput={props.setInput} />
      </nav>
    </>
  );
}
