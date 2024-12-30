import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './Navbar.css';

    function Navbar() {
      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

      return (
        <nav className="navbar">
          <div className="container">
            <a href="#home" className="logo">Swerve</a>
            <button className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><Link to="/signin" className="sign-in">Sign in</Link></li>
            </ul>
          </div>
        </nav>
      );
    }

    export default Navbar;
