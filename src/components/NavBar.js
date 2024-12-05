import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext"; // Import the CartContext
import logo from "../assets/logo-png-full.png"; // Replace with your logo path
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { cartItemCount } = useContext(CartContext); // Access cart item count

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
          <Link to="/cart" className="icon cart-icon">
            <FaShoppingCart />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>
          <Link to="/search" className="icon"><FaSearch /></Link>
          <Link to="/profile" className="icon"><FaUser /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
