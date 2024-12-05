import React from "react";
import aboutImage from "../assets/image.png"; // Replace with your actual image path
import logo from "../assets/logo-png-full.png"; // Replace with your logo path
import "../components/About.css"; // Add your CSS styling

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */} 
      <section className="hero-section">
        <div className="hero-logo">
          <img src={logo} alt="Vitality Athletics Logo" />
        </div>
        <h1>
          TOMORROW <span className="highlight">STARTS TODAY</span>
        </h1>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
          <div className="about-text">
            <h2>ABOUT US</h2>
            <p>
              Vitality Athletics combines luxury and performance to elevate your
              fitness journey with premium gym wear crafted from advanced
              fabrics for ultimate comfort and support. From stylish joggers to
              versatile tops, each piece is designed to enhance your look and
              confidence. Join a community that celebrates strength and
              resilience, and discover the perfect blend of style and
              functionality—where every workout becomes your moment to shine.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2>OUR CORE VALUES</h2>
        <div className="values-content">
          <div className="values-text">
            <p>
              Vitality Athletics combines luxury and performance to elevate your
              fitness journey with premium gym wear crafted from advanced
              fabrics for ultimate comfort and support. From stylish joggers to
              versatile tops, each piece is designed to enhance your look and
              confidence. Join a community that celebrates strength and
              resilience, and discover the perfect blend of style and
              functionality—where every workout becomes your moment to shine.
            </p>
            <h3>
              VITALITY ATHLETICS FOR <span className="highlight">GYM WEAR</span>
            </h3>
          </div>
          <div className="values-image">
            <img src={aboutImage} alt="Core Values" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
