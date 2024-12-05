import React from "react";
import logo from "../assets/logo-png-full.png";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <Navbar />
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
