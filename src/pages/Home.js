import './Home.css'; // Assuming you will create this CSS file for styling

import CableProductCard from '../components/CableProductCard';
import React from 'react';

const Home = () => {
  const products = [
    { title: 'Cable Type A', description: 'High-quality cable', image: '/images/cableA.jpg' },
    { title: 'Cable Type B', description: 'Durable cable for industrial use', image: '/images/cableB.jpg' },
    { title: 'Cable Type C', description: 'Flexible, long-lasting cable', image: '/images/cableC.jpg' },
    { title: 'Cable Type D', description: 'Heavy-duty cable for rough environments', image: '/images/cableD.jpg' },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Cable Assembly Co.</h1>
      <p className="home-subtitle">We provide high-quality cables for various industries, including industrial, marine, and more.</p>
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
    </div>
  );
};

export default Home;
