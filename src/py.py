import os

# Directory structure and files with their initial content
structure = {
    "assets": {},
    "components": {
        "Header.js": """import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Cable Assembly Co.</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
""",
        "Footer.js": """import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Cable Assembly Co. All rights reserved.</p>
      <div className="social-media">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
""",
        "ContactForm.js": """import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been sent.`);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
""",
        "CableProductCard.js": """import React from 'react';
import './CableProductCard.css';

const CableProductCard = ({ title, description, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CableProductCard;
"""
    },
    "pages": {
        "Home.js": """import React from 'react';
import CableProductCard from '../components/CableProductCard';

const Home = () => {
  const products = [
    { title: 'Cable Type A', description: 'High-quality cable', image: '/images/cableA.jpg' },
    { title: 'Cable Type B', description: 'Durable cable for industrial use', image: '/images/cableB.jpg' },
  ];

  return (
    <div>
      <h1>Welcome to Cable Assembly Co.</h1>
      <section className="products">
        {products.map((product, index) => (
          <CableProductCard key={index} title={product.title} description={product.description} image={product.image} />
        ))}
      </section>
    </div>
  );
};

export default Home;
""",
        "About.js": """import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company specializing in semi-automatic cable assembly. Our mission is to deliver high-quality products with cutting-edge technology.</p>
    </div>
  );
};

export default About;
""",
        "Services.js": """import React from 'react';

const Services = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li>Semi-automatic cable assembly</li>
        <li>Custom cable design and manufacturing</li>
        <li>On-demand prototyping</li>
      </ul>
    </div>
  );
};

export default Services;
""",
        "Contact.js": """import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
"""
    }
}

# Function to create directories and files
def create_structure(base_dir):
    for folder, files in structure.items():
        folder_path = os.path.join(base_dir, folder)
        os.makedirs(folder_path, exist_ok=True)
        for filename, content in files.items():
            file_path = os.path.join(folder_path, filename)
            with open(file_path, 'w') as f:
                f.write(content)

# Execute the function inside the 'src' directory
if __name__ == "__main__":
    create_structure(os.getcwd())
