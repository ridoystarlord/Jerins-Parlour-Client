import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container fluid className="bg-footer py-5">
      <Container>
        <Row className="g-3">
          <Col xs={12} md={3} className="d-flex">
            <FontAwesomeIcon
              className="text-white fs-2"
              icon={faMapMarkerAlt}
            />
            <p className="text-white ms-3 mb-0">
              H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
              Bangladesh
            </p>
          </Col>
          <Col xs={12} md={3} className="text-white">
            <h5 className="fw-bold">Company</h5>
            <div>
              <p className="mb-0">About</p>
              <p className="mb-0">Project</p>
              <p className="mb-0">Our Team</p>
              <p className="mb-0">Terms Conditions</p>
              <p className="mb-0">Submit Listing</p>
            </div>
          </Col>
          <Col xs={12} md={3} className="text-white">
            <h5 className="fw-bold">Quick Links</h5>
            <div>
              <p className="mb-0">Quick Links</p>
              <p className="mb-0">Rentals</p>
              <p className="mb-0">Sales</p>
              <p className="mb-0">Contact</p>
              <p className="mb-0">Our blog</p>
            </div>
          </Col>
          <Col xs={12} md={3} className="text-white">
            <h5 className="fw-bold">Quick Links</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <div className="text-white d-flex justify-content-evenly">
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faFacebookSquare} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
