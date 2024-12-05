import React from "react";
import "./ContactPage.css"; // Add the corresponding CSS for styling
import { FaPhone, FaClock, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (

    <div className="contact-page">
      <section className="contact-header">
        <h1>CONTACT US</h1>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>(+201033333133)</p>
        </div>
        <div className="contact-item">
          <FaClock className="contact-icon" />
          <p>24/7</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>vitalityathletics@gmail.com</p>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="feedback-section">
        <h2>FEEDBACK</h2>
        <form className="feedback-form">
          <input
            type="email"
            placeholder="TYPE YOUR EMAIL"
            className="feedback-input"
            required
          />
          <textarea
            placeholder="GIVE US YOUR FEEDBACK"
            className="feedback-textarea"
            required
          ></textarea>
          <button type="submit" className="feedback-submit">
            SUBMIT
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
