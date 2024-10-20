import './Invest.css'; // Assuming you will add styles in Invest.css

import React from 'react';
import industrialImage from '../assets/e1ca6ae9-04ce-4415-b1bc-3e2add1e3986.jfif'; // Adjust the path as needed

const Invest = () => {
  return (
    <div className="invest-container">
      <h1>Invest in Tunisia's Industrial Power</h1>
      <p className="invest-subtitle">
        Tunisia offers great opportunities for investment in its thriving industrial sector. With a strategic location, skilled labor force, and modern infrastructure, it is the perfect environment for industrial growth.
      </p>

      <div className="invest-image-container">
        <img src={industrialImage} alt="Industrial Facility Example" className="invest-image" />
      </div>

      <div className="invest-content">
        <h2>Why Invest?</h2>
        <ul>
          <li>Strategic location between Europe and Africa</li>
          <li>Skilled labor force with expertise in various sectors</li>
          <li>Government incentives and favorable tax laws</li>
          <li>Modern infrastructure with industrial zones and transport networks</li>
          <li>Growing demand for high-quality products</li>
        </ul>

        <p>
          By investing in Tunisia, you become a part of a rapidly growing industrial hub with access to global markets. Whether you're looking to establish a new production facility or partner with local companies, the opportunities are endless.
        </p>

        <h2>Contact Us</h2>
        <p>If you're interested in learning more about investing in Tunisia, please <a href="/contact">contact us</a> for more information.</p>
      </div>
    </div>
  );
};

export default Invest;
