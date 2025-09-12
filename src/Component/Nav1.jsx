import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Nav1() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    handleClose();
  };

  return (
    <>
      <Navbar expand="lg" bg="light" className="shadow-sm">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand href="#">
            <img
              src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
              alt="logo"
              height={40}
            />
          </Navbar.Brand>

          {/* Hamburger Toggle */}
          <Navbar.Toggle aria-controls="navbarScroll" />

          {/* Collapsible Menu */}
          <Navbar.Collapse id="navbarScroll">
            {/* Left Side Phone Icon */}
            <Nav className="me-auto d-flex align-items-center">
              <Nav.Link href="#action1">
                <img
                  src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/toll_phone.png"
                  alt="phone"
                  height={25}
                />
              </Nav.Link>
            </Nav>

            {/* Search Bar */}
            <Form className="d-flex mx-auto -md-50 my-2 my-lg-0">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>

            {/* Right Side Links */}
            <Nav className="ms-lg-auto mt-3 mt-lg-0 d-flex flex-column flex-lg-row gap-3">
              <Nav.Link href="#track">Track Order</Nav.Link>
              <Nav.Link onClick={handleShow} style={{ cursor: "pointer" }}>
                Sign & Login
              </Nav.Link>
              <Nav.Link href="#wishlist">Wishlist</Nav.Link>
              <Nav.Link href="#cart">
                <i className="bi bi-bag"></i> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas with SignUp Form */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign Up</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>

          <div className="mt-3 text-center">
            <p className="mb-0">
              Already have an account? <a href="#login">Login</a>
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Nav1;
