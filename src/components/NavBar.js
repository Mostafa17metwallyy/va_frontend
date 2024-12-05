import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-icons">
        <Link to="#search" className="icon"><FaSearch /></Link>
        <Link to="#profile" className="icon"><FaUser /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
