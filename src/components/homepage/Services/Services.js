import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import antiage from "../../../images/Icon/Group 1373.png";
import hair from "../../../images/Icon/Group 1372.png";
import skin from "../../../images/Icon/Group 1374.png";

const Services = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-5 text-center fw-bolder">
        Our Awesome <span className="services-span">Services</span>
      </h1>
      <Row className="g-3">
        <Col xs={12} md={4}>
          <Card className="text-center py-5 shadow-sm border-0 rounded">
            <div className=" mb-3">
              <img className="w-25" src={antiage} alt="" />
            </div>
            <Card.Title>Anti Age Face Treatment</Card.Title>
            <h3>$199</h3>
            <Card.Text>
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center py-5 shadow border-0 rounded">
            <div className=" mb-3">
              <img className="w-25" src={hair} alt="" />
            </div>
            <Card.Title>Hair Color & Styleing</Card.Title>
            <h3>$99</h3>
            <Card.Text>
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center py-5 shadow-sm border-0 rounded">
            <div className=" mb-3">
              <img className="w-25" src={skin} alt="" />
            </div>
            <Card.Title>Skin Care Treatment</Card.Title>
            <h3>$299</h3>
            <Card.Text>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <div className="d-flex justify-content-center">
          <Button className="bg-button" variant="danger">
            Explore More
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default Services;
