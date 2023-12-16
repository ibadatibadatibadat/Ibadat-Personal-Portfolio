import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div>
      <ul className="navbar-container">
        <li className="navbar-item">
          <Link className="item" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="item" to="/services">
            Services
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="item" to="/skills">
            Skills
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="item" to="/experience">
            Experience
          </Link>
        </li>

        <li className="navbar-item">
          <Link className="item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
