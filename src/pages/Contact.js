import './Contact.css'; // Assuming you will create a Contact.css file for styling

import ContactForm from '../components/ContactForm';
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">We would love to hear from you! Reach out with any inquiries, feedback, or requests.</p>

      <div className="contact-content">
        <div className="contact-details">
          <h2>Our Contact Information</h2>
          <ul>
            <li><i className="fa fa-map-marker"></i> Address: Route Msdour-Jammel Bembla, Monastir, Tunisia</li>
            <li><i className="fa fa-phone"></i> Phone: +216-123-456-789</li>
            <li><i className="fa fa-envelope"></i> Email: info@company.com</li>
          </ul>

          <div className="contact-social">
            <h3>Follow Us:</h3>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
