import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Testimonials.css";
import review1 from "../../../images/Image/review-1.png";
import review2 from "../../../images/Image/review-2.png";
import review3 from "../../../images/Image/review-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <Container className="my-5">
      <Row className="g-3">
        <Col xs={12} md={4}>
          <Card className="text-center py-5 shadow-sm border-0 rounded">
            <div className=" mb-3 d-flex justify-content-evenly align-items-center">
              <img className="w-25" src={review1} alt="" />
              <div>
                <h5>Nash Patrik</h5>
                <p>CEO, Manpol</p>
              </div>
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </Card.Text>
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
            </div>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center py-5 shadow-sm border-0 rounded">
            <div className=" mb-3 d-flex justify-content-evenly align-items-center">
              <img className="w-25" src={review2} alt="" />
              <div>
                <h5>Miriam Barron</h5>
                <p>CEO, Manpol</p>
              </div>
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </Card.Text>
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
            </div>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center py-5 shadow-sm border-0 rounded">
            <div className=" mb-3 d-flex justify-content-evenly align-items-center">
              <img className="w-25" src={review3} alt="" />
              <div>
                <h5>Bria Malone</h5>
                <p>CEO, Manpol</p>
              </div>
            </div>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </Card.Text>
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
              <FontAwesomeIcon className="icon" icon={faStar} />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
