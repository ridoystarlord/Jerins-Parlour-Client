import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HeroBanner.css";
import herobannerimage from "../../../images/Image/hero-banner.png";

const HeroBanner = () => {
  return (
    <Container fluid className="bg-hero-banner">
      <Container>
        <Row className="py-4 g-3">
          <Col sm={12} md={6} className="d-flex align-items-center">
            <div>
              <h1 className="fw-bold">BEAUTY SALON</h1>
              <h1 className="fw-bold">FOR EVERY WOMEN</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat{" "}
              </p>
              <Button className="bg-button mb-3 mb-md-0" variant="danger">
                Get an Appointment
              </Button>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="d-flex justify-content-center">
              <img className="w-75" src={herobannerimage} alt="hero banner" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeroBanner;
