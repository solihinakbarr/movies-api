import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FooterComp.css";

const FooterComp = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={3} className="footer-section">
            <h1 className="brand-text">
              INFINITY <span>MOVIES</span>
            </h1>
            <p className="brand-tagline">
              Your ultimate destination for movie reviews, news, and updates.
              Stay connected for the latest in the movie world.
            </p>
          </Col>
          <Col md={2} className="footer-section">
            <h6 className="mt-2">Quick Links</h6>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link to="/register">Register</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/movies">Movies</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/contact">Contact</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={2} className="footer-section">
            <h6 className="mt-2">Explore Us</h6>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Link to="/careers">Careers</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/privacy">Privacy</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to="/terms">Terms & Conditions</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3} className="footer-section">
            <h6 className="mt-2">Contact Us</h6>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <a href="mailto:info@infinitymovies.com">
                  info@infinitymovies.com
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="tel:+1234567890">123-456-7890</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>Infinity Movies, Hollywood</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-center copyrights mt-4">
            &copy; 2024 INFINITY MOVIES | Designed by S.A.R
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComp;
