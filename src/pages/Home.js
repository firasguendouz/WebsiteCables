import "./Home.css";

import CableProductCard from "../components/CableProductCard";
import React from "react";
import heroImage from "../assets/cables.webp";

const Home = () => {
  const products = [
    {
      title: "Simple Wire Harnesses",
      description: "Basic wire cutting, stripping, and crimping.",
      image: "/images/cableA.jpg",
    },
    {
      title: "Custom Cable Assemblies",
      description: "Pre-assembled custom cables for specific applications",
      image: "/images/cableB.jpg",
    },
    {
      title: "Industrial Cable Assemblies",
      description:
        "Cables for factory automation, control systems, and machinery.",
      image: "/images/cableC.jpg",
    },
    {
      title: "PCB (Printed Circuit Board) Assemblies",
      description:
        "Includes the mounting of electronic components onto PCBs and connecting them with cables",
      image: "/images/cableD.jpg",
    },
    {
      title: "Data Center and Telecommunication Cable Assemblies",
      description:
        "High-performance data cables for networking and telecommunication systems.",
      image: "/images/cableD.jpg",
    },
    {
      title: " Marine and Offshore Cable Assemblies",
      description:
        "Cables designed for harsh environments, including waterproofing and corrosion resistance.",
      image: "/images/cableD.jpg",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative Cable Solutions for Every Industry
          </h1>
          <button className="cta-button">Explore Our Services</button>
        </div>
      </section>

      {/* Product Section */}
      <h2 className="section-title">Our Services Fields</h2>
      <section className="products-grid">
        {products.map((product, index) => (
          <CableProductCard
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </section>

      {/* Quality Section */}
      <section className="quality-section">
        <div className="quality-box">
          <i className="fas fa-check-circle quality-icon"></i>
          <h3>Quality Assurance</h3>
          <p>
            Our commitment to excellence is reflected in our rigorous quality
            assurance process. Every product undergoes comprehensive testing to
            meet the highest industry standards.
          </p>
        </div>
        <div className="quality-box">
          <i className="fas fa-certificate quality-icon"></i>
          <h3>ISO 9001 Certified</h3>
          <p>
            We are proud to be ISO 9001 certified, ensuring that our
            manufacturing processes adhere to international standards for
            quality management and continuous improvement.
          </p>
        </div>
        <div className="quality-box">
          <i className="fas fa-industry quality-icon"></i>
          <h3>State-of-the-Art Facility</h3>
          <p>
            Our advanced production facility is equipped with the latest
            technology, allowing us to provide precision-engineered solutions
            with unmatched efficiency.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
