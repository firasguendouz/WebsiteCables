import './Header.css';

import { Link, useLocation } from 'react-router-dom';

import React from 'react';

const Header = () => {
  const location = useLocation(); // Get the current location to highlight active page

  return (
    <header className="header">
      <div className="logo">Ayed Brothers Co.</div>
      <nav>
        <ul className="nav-links">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === "/services" ? "active" : ""}>
            <Link to="/services">Services</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={location.pathname === "/invest" ? "active" : ""}>
            <Link to="/invest">Invest</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
