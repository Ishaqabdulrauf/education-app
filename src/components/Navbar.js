import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS for navbar styles

const Navbar = () => {
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">Tech-Tutor</Link>
      </div>
      <ul className="nav__links">
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/about">About Us</Link></li>
        <li className="link"><Link to="/services">Services</Link></li>
        <li className="link"><Link to="/courses">Courses</Link></li>
        <li className="link"><Link to="/blog">Blog</Link></li>
        <li className="link"><Link to="/SignUp" className="nav__btn">SignUp</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
