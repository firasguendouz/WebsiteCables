import './CableProductCard.css'; // Assuming you will create this CSS file for individual card styling

import React from 'react';

const CableProductCard = ({ title, description, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default CableProductCard;
