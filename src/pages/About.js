import './About.css'; // Assuming you'll add the CSS styles here

import { FaEnvelope, FaGlobe, FaLinkedin } from 'react-icons/fa'; // FontAwesome icons

import React from 'react';

const About = () => {
  const brothers = [
    {
      name: 'Brother 1',
      linkedin: 'https://linkedin.com/in/brother1',
      website: 'https://brother1website.com',
      email: 'brother1@example.com',
      image: '/images/brother1.jpg', // Replace with actual image path
    },
    {
      name: 'Brother 2',
      linkedin: 'https://linkedin.com/in/brother2',
      website: 'https://brother2website.com',
      email: 'brother2@example.com',
      image: '/images/brother2.jpg', // Replace with actual image path
    },
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        We are a family-run company specializing in semi-automatic cable assembly. The Ayed brothers have built the company with the secret to creating a productive working environment and pioneering industrial ideas.
        They have passed the path of innovation to the next generation, ensuring that our vision continues to grow.
      </p>
      <h2> Ayed Brothers</h2>
      <div className="brother-cards">
        {brothers.map((brother, index) => (
          <div key={index} className="brother-card">
            <img src={brother.image} alt={brother.name} />
            <h3>{brother.name}</h3>
            <div className="brother-icons">
              <a href={brother.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={brother.website} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
              <a href={`mailto:${brother.email}`}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="address">Located at: Route Msdour-Jammel Bembla, Monastir, Tunisia</p>
    </div>
  );
};

export default About;
