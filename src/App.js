import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Invest from './pages/Invest'; // Import the Invest page
import React from 'react';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Component */}
        <Header />
        {/* Content Section */}
        <div className="content">
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<Home />} />
            {/* About Page Route */}
            <Route path="/about" element={<About />} />
            {/* Services Page Route */}
            <Route path="/services" element={<Services />} />
            {/* Contact Page Route */}
            <Route path="/contact" element={<Contact />} />
            {/* Invest Page Route */}
            <Route path="/invest" element={<Invest />} />
          </Routes>
        </div>
        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
