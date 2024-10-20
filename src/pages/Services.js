import './Services.css'; // Assuming you will create this CSS file for styling

import React from 'react';

const services = [
  {
    name: "Custom Cable Assembly",
    icon: "fa-cogs",
    description: "Tailored cable assembly solutions for various industries, meeting exact specifications and requirements."
  },
  {
    name: "Custom Cable Design & Manufacturing",
    icon: "fa-drafting-compass",
    description: "Design and manufacture custom cables, from concept to production, ensuring precision and performance."
  },
  {
    name: "Cable Harness Design & Prototyping",
    icon: "fa-wrench",
    description: "Prototype and develop custom cable harnesses for diverse applications, optimizing for performance and durability."
  },
  {
    name: "PCB Assembly Services",
    icon: "fa-microchip",
    description: "End-to-end PCB assembly services, from prototyping to full production, offering both SMT and through-hole solutions."
  },
  {
    name: "Connector Assembly & Integration",
    icon: "fa-plug",
    description: "Expert assembly and integration of connectors and interfaces for seamless communication and reliable performance."
  },
  {
    name: "Custom Labeling & Identification",
    icon: "fa-tags",
    description: "Custom labeling solutions for easy identification and organization, including barcodes and color coding."
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        We provide a comprehensive range of cable and PCB assembly services tailored to meet the unique needs of various industries. From design and prototyping to full-scale manufacturing, our solutions are built for quality and performance.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`fas ${service.icon} service-icon`}></i>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
