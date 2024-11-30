import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h1>VITALITY ATHLETICS</h1>
        </div>
        <div className="footer-social">
          <a href="#linkedin" className="social-icon">
            <FaLinkedinIn />
          </a>
          <a href="#instagram" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#facebook" className="social-icon">
            <FaFacebookF />
          </a>
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
