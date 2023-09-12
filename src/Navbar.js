import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Health Buddy</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li className="auth-links">
            <a href="#">Sign Up as Doctor</a>
            <a href="#">Sign Up as Patient</a>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
