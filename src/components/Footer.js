import "./Footer.css"; // Assuming you'll style the footer with this file

import { Button, Col, Collapse, Container, Form, Input, Row } from "reactstrap";
import React, { useEffect, useState } from "react";

import CopyRight from "./copyright";
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
  const [width, setWidth] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth <= 767);
      if (window.innerWidth > 767) {
        setIsOpen(true);
        setCollapse(0);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      <footer className={footerClass}>
        {newLatter ? (
          <div className={footerLayOut}>
            <Container fluid={containerFluid ? containerFluid : ""}>
              <section className={footerSection}>
                <Row>
                  <Col lg="6">
                    <div className="subscribe">
                      <h4>Stay Updated!</h4>
                      <p>
                        Never miss out on the latest news and offers from us.
                        Sign up for our newsletter!
                      </p>
                    </div>
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
        ) : null}

        <section className={belowSection}>
          <Container fluid={belowContainerFluid ? belowContainerFluid : ""}>
            <Row className="footer-theme partition-f">
              <Col lg="4" md="6">
                <div
                  className={`footer-title ${
                    isOpen && collapse === 1 ? "active" : ""
                  } footer-mobile-title`}
                >
                  <h4
                    onClick={() => {
                      setCollapse(1);
                      setIsOpen(!isOpen);
                    }}
                  >
                    About Us <span className="according-menu"></span>
                  </h4>
                </div>
                <Collapse
                  isOpen={width ? (collapse === 1 ? isOpen : false) : true}
                >
                  <div className="footer-content">
                    <p>
                      We are a company specializing in semi-automatic cable
                      assembly. Our mission is to deliver high-quality products
                      with cutting-edge technology.
                    </p>
                    <div className="footer-social">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Collapse>
              </Col>

              <Col lg="4" md="6">
                <div
                  className={`footer-title ${
                    isOpen && collapse === 2 ? "active" : ""
                  } footer-mobile-title`}
                >
                  <h4
                    onClick={() => {
                      setCollapse(2);
                      setIsOpen(!isOpen);
                    }}
                  >
                    Services <span className="according-menu"></span>
                  </h4>
                </div>
                <Collapse
                  isOpen={width ? (collapse === 2 ? isOpen : false) : true}
                >
                  <div className="footer-content">
                    <ul>
                      <li key="semi-automatic">
                        <Link to="/services">
                          Semi-automatic cable assembly
                        </Link>
                      </li>
                      <li key="custom-design">
                        <Link to="/services">Custom cable design</Link>
                      </li>
                      <li key="prototyping">
                        <Link to="/services">Prototyping services</Link>
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </Col>

              <Col lg="4" md="6">
                <div
                  className={`footer-title ${
                    isOpen && collapse === 3 ? "active" : ""
                  } footer-mobile-title`}
                >
                  <h4
                    onClick={() => {
                      setCollapse(3);
                      setIsOpen(!isOpen);
                    }}
                  >
                    Contact Us <span className="according-menu"></span>
                  </h4>
                </div>
                <Collapse
                  isOpen={width ? (collapse === 3 ? isOpen : false) : true}
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
                        <i className="fa fa-envelope"></i> Email:
                        info@company.com
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </Col>
            </Row>
          </Container>
        </section>

        <CopyRight layout={layoutClass} fluid={CopyRightFluid} />
      </footer>
    </div>
  );
};

export default MasterFooter;
