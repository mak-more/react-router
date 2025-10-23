import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="nav-item" to="/">Home</NavLink>
      <NavLink className="nav-item" to="/about">About</NavLink>
      <NavLink className="nav-item" to="/contact">Contact</NavLink>
    </nav>
  );
}

export default NavBar;
