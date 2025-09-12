import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row>
          {/* Column 1 */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Eyeglasses</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Men</a></li>
              <li><a href="#" className="text-light text-decoration-none">Women</a></li>
              <li><a href="#" className="text-light text-decoration-none">Kids</a></li>
              <li><a href="#" className="text-light text-decoration-none">Premium Range</a></li>
            </ul>
          </Col>

          {/* Column 2 */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Sunglasses</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Men</a></li>
              <li><a href="#" className="text-light text-decoration-none">Women</a></li>
              <li><a href="#" className="text-light text-decoration-none">Kids</a></li>
              <li><a href="#" className="text-light text-decoration-none">Polarized</a></li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">Contact Lenses</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Daily Disposable</a></li>
              <li><a href="#" className="text-light text-decoration-none">Monthly</a></li>
              <li><a href="#" className="text-light text-decoration-none">Toric</a></li>
              <li><a href="#" className="text-light text-decoration-none">Color Lenses</a></li>
            </ul>
          </Col>

          {/* Column 4 */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">About Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Our Story</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>
        </Row>

        <hr className="border-light" />

        {/* Bottom row */}
        <Row className="text-center">
          <Col>
            <p className="mb-0">
              © {new Date().getFullYear()} Lenskart Clone | Built with ❤️ in React + Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
