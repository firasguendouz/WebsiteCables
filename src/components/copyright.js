import { Col, Container, Media, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const CopyRight = ({layout, fluid}) => {
    return (
        <Fragment>
            <div className={`sub-footer ${layout}`}>
                <Container fluid={fluid}>
                    <Row>
                        <Col xl="6" md="6" sm="12">
                            <div className="footer-end">
                                <p><i className="fa fa-copyright" aria-hidden="true"></i> 2023-24 themeforest
                                        powered by pixelstrap</p>
                            </div>
                        </Col>
                       {/*
 
                        <Col xl="6" md="6" sm="12">
                            <div className="payment-card-bottom">
                                <ul>
                                    <li>
                                        <a href="#"><Media src={'/assets/images/icon/visa.png'} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={'/assets/images/icon/mastercard.png'} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={'/assets/images/icon/paypal.png'} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={'/assets/images/icon/american-express.png'} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={'/assets/images/icon/discover.png'} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        This is a 
                        multi-line comment 
                        in JSX
                        */}
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}

export default CopyRight;