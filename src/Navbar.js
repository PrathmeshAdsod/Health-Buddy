import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false)

  const openLoginForm = () => {
    setShowLoginForm(true);
  }

  const closeLoginForm = () => {
    setShowLoginForm(false);
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">Connect me</div>
          <ul className="nav-links">
            <li className="auth-links">
              <button onClick={openLoginForm} ><Link to="SignUpPage.js">Sign Up</Link></button>
              <button isOpen={showLoginForm} onClose={closeLoginForm} > <Link to="/login">Login</Link></button>
            </li>
          </ul>
        </div>
      </nav>

      <div>
          
      </div>
    </>
  );
};

export default Navbar;
