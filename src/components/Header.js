import React from "react";
import logo from "../assets/logo-png-full.png"
import { FaSearch, FaUser } from "react-icons/fa"; // Importing Font Awesome icons

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-icons">
          <a href="#search" className="icon"><FaSearch /></a>
          <a href="#profile" className="icon"><FaUser /></a>
        </div>
      </nav>
      <div className="hero">
        <h1>Elevate Your Performance</h1>
        <div className="hero-buttons">
          <button>Shop Men</button>
          <button>Shop Women</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
