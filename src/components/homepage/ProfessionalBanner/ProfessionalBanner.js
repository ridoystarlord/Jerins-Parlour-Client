import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ProfessionalBanner.css";
import professionalimgae from "../../../images/Image/professional-banner.png";

const ProfessionalBanner = () => {
  return (
    <Container fluid className="bg-professional-banner py-5">
      <Container>
        <Row className="g-3">
          <Col xs={12} md={6}>
            <div className="d-flex justify-content-center">
              <img src={professionalimgae} className="w-75" alt="" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="fw-bold">
              Let us handle your
              <br />
              screen <span className="banner-color">Professionally</span>.
            </h2>
            <p className="mt-4">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.
            </p>
            <div className="d-flex justify-content-around text-center">
              <div>
                <h1 className="fw-bold banner-color">500+</h1>
                <p>Happy Customer</p>
              </div>
              <div>
                <h1 className="fw-bold banner-color">16+</h1>
                <p>Total Service</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProfessionalBanner;
