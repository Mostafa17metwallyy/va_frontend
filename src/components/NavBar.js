import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo-png-full.png"; // Replace with your actual logo path
import "./Navbar.css"; // Ensure you have the appropriate styles

const Navbar = () => {
  const location = useLocation(); // Get the current route

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`navbar ${isHomePage ? "navbar-home" : "navbar-other"}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="navbar-icons">
          <Link to="/cart" className="icon"><FaShoppingCart /></Link>
          <Link to="/search" className="icon"><FaSearch /></Link>
          <Link to="/profile" className="icon"><FaUser /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
