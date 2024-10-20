import './Services.css'; // Assuming you will create this CSS file for styling

import React from 'react';

const services = [
  {
    name: "Semi-automatic cable assembly",
    icon: "fa-cogs",
  },
  {
    name: "Custom cable design and manufacturing",
    icon: "fa-drafting-compass",
  },
  {
    name: "On-demand prototyping",
    icon: "fa-wrench",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`fas ${service.icon} service-icon`}></i>
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
