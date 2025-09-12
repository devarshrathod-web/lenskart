import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HoverDropdown({ title, id, children }) {
  const [show, setShow] = useState(false);

  return (
    <NavDropdown
      title={title}
      id={id}
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
    </NavDropdown>
  );
}

function Nav2() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Eyeglasses */}
            <HoverDropdown title="Eyeglasses" id="eyeglasses-dropdown">
              <NavDropdown.Item href="#mens">Mens</NavDropdown.Item>
              <NavDropdown.Item href="#womens">Womens</NavDropdown.Item>
              <NavDropdown.Item href="#kids">Kids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#others">Others</NavDropdown.Item>
            </HoverDropdown>

            {/* Screen Glasses */}
            <HoverDropdown title="Screen Glasses" id="screen-dropdown">
              <NavDropdown.Item href="#mens">Mens</NavDropdown.Item>
              <NavDropdown.Item href="#womens">Womens</NavDropdown.Item>
              <NavDropdown.Item href="#kids">Kids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#others">Others</NavDropdown.Item>
            </HoverDropdown>

            {/* Kids Glasses */}
            <HoverDropdown title="Kids Glasses" id="kids-dropdown">
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "10px",
                  minWidth: "500px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <a
                    href="#eyeglasses"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg"
                      alt="Eyeglasses"
                      width="120"
                    />
                    <p className="mt-2">Eyeglasses</p>
                  </a>
                </div>

                <div style={{ textAlign: "center" }}>
                  <a
                    href="#screen-glasses"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg"
                      alt="Zero Power Screen Glasses"
                      width="120"
                    />
                    <p className="mt-2">Zero Power Screen Glasses</p>
                  </a>
                </div>

                <div style={{ textAlign: "center" }}>
                  <a
                    href="#sunglasses"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg"
                      alt="Sunglasses"
                      width="120"
                    />
                    <p className="mt-2">Sunglasses</p>
                  </a>
                </div>
              </div>
            </HoverDropdown>

            {/* Home Eye-Test */}
            <HoverDropdown title="Home Eye-Test" id="home-eye-test-dropdown">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "40px",
                  padding: "25px",
                  minWidth: "700px",
                  minHeight: "300px",
                }}
              >
                {/* Left Image */}
                <div>
                  <img
                    src="https://static1.lenskart.com/media/desktop/img/HomeTryOut.png"
                    alt="Home Eye Test"
                    width="280"
                    height="200"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Right Text */}
                <div>
                  <h3 style={{ marginBottom: "15px", fontSize: "22px" }}>
                    Get your eyes checked at home
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                    }}
                  >
                    A certified refractionist will visit you with the latest eye
                    testing machines & trial frames.
                  </p>
                  <button
                    style={{
                      padding: "12px 24px",
                      backgroundColor: "#007bff",
                      border: "none",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </HoverDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav2;
