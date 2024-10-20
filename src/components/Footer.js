import "./Footer.css"; // Footer styling

import { Button, Col, Collapse, Container, Form, Input, Row } from "reactstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import CopyRight from "./copyright"; // Assuming copyright component is defined
import { Link } from "react-router-dom";

const MasterFooter = ({
  containerFluid,
  logoName,
  layoutClass,
  footerClass,
  footerLayOut,
  footerSection,
  belowSection,
  belowContainerFluid,
  CopyRightFluid,
  newLatter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [collapse, setCollapse] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      if (window.innerWidth > 767) {
        setIsOpen(true);
        setCollapse(0);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapse = (section) => {
    setCollapse(section);
    setIsOpen(!isOpen);
  };

  return (
    <footer className={footerClass}>
      {/* Newsletter Section */}
      {newLatter && (
        <div className={footerLayOut}>
          <Container fluid={containerFluid || ""}>
            <section className={footerSection}>
              <Row>
                <Col lg="6" className="subscribe">
                  <h4>Stay Updated!</h4>
                  <p>
                    Never miss out on the latest news and offers from us. Sign
                    up for our newsletter!
                  </p>
                </Col>
                <Col lg="6">
                  <Form className="form-inline subscribe-form">
                    <Input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <Button type="submit" className="btn btn-solid">
                      Subscribe
                    </Button>
                  </Form>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      )}

      {/* Main Footer Section */}
      <section className={belowSection}>
        <Container fluid={belowContainerFluid || ""}>
          <Row className="footer-theme partition-f">
            {/* About Us Section */}
            <Col lg="4" md="6">
              <div
                className={`footer-title ${
                  isOpen && collapse === 1 ? "active" : ""
                } footer-mobile-title`}
              >
                <h4 onClick={() => toggleCollapse(1)}>
                  About Us <span className="according-menu"></span>
                </h4>
              </div>
              <Collapse
                isOpen={isMobile ? (collapse === 1 ? isOpen : false) : true}
              >
                <div className="footer-content">
                  <p>
                    We specialize in semi-automatic cable assembly, delivering
                    high-quality products with cutting-edge technology.
                  </p>
                  <div className="footer-social">
                    <ul className="social-icons">
                      <li>
                        <a
                          href="https://www.facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Collapse>
            </Col>

            {/* Services Section */}
            <Col lg="4" md="6">
              <div
                className={`footer-title ${
                  isMobile && collapse === 2 ? "active" : ""
                } footer-mobile-title`}
              >
                <h4 onClick={() => toggleCollapse(2)}>
                  Services <span className="according-menu"></span>
                </h4>
              </div>
              <Collapse isOpen={isMobile ? collapse === 2 : true}>
                <div className="footer-content">
                  <ul>
                    <li>
                      <Link to="/services">Semi-automatic cable assembly</Link>
                    </li>
                    <li>
                      <Link to="/services">Custom cable design</Link>
                    </li>
                    <li>
                      <Link to="/services">Prototyping services</Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </Col>

            {/* Contact Us Section */}
            <Col lg="4" md="6">
              <div
                className={`footer-title ${
                  isOpen && collapse === 3 ? "active" : ""
                } footer-mobile-title`}
              >
                <h4 onClick={() => toggleCollapse(3)}>
                  Contact Us <span className="according-menu"></span>
                </h4>
              </div>
              <Collapse
                isOpen={isMobile ? (collapse === 3 ? isOpen : false) : true}
              >
                <div className="footer-content">
                  <ul className="contact-list">
                    <li>
                      <i className="fa fa-map-marker"></i> Address: Route
                      Msdour-Jammel Bembla, Monastir, Tunisia
                    </li>
                    <li>
                      <i className="fa fa-phone"></i> Phone: +216-123-456-789
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i> Email: info@company.com
                    </li>
                  </ul>
                </div>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Copyright Section */}
      <CopyRight layout={layoutClass} fluid={CopyRightFluid} />
    </footer>
  );
};

export default MasterFooter;
