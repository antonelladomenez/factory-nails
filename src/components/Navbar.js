import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <>
      {/* Navbar para pantallas grandes */}
      <Navbar
        expand="lg"
        className="custom-navbar d-none d-lg-flex p-0"
        variant="light"
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <Nav className="d-flex align-items-center nav-links ms-lg-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#servicios">
              Servicios
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="/" className="d-flex align-items-center mx-auto">
            <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="Factory Nails logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto d-flex align-items-center nav-links">
            <Nav.Link as={Link} to="/sobre-mi">
              Sobre mí
            </Nav.Link>

            <Button
              as={HashLink}
              smooth
              to="/#contacto"
              className="custom-button"
            >
              Contacto
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Navbar para pantallas pequeñas */}
      <Navbar
        expand="lg"
        className="custom-navbar d-lg-none"
        variant="light"
        expanded={expanded}
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center order-1 order-lg-2"
          >
            <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="Factory Nails logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="order-2 order-lg-1 ms-auto"
            onClick={handleToggle}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between align-items-center order-3 order-lg-0 w-100"
          >
            <Nav className="d-flex align-items-center nav-links ms-lg-auto order-lg-2">
              <Nav.Link as={Link} to="/" onClick={handleClose}>
                Inicio
              </Nav.Link>
              <Nav.Link as={HashLink} smooth to="/#servicios" onClick={handleClose}>
                Servicios
              </Nav.Link>
            </Nav>
            <Nav className="me-auto d-flex align-items-center nav-links order-lg-3">
              <Nav.Link as={Link} to="/sobre-mi" onClick={handleClose}>
                Sobre mí
              </Nav.Link>
              <Nav.Link as={HashLink} smooth to="/#contacto" onClick={handleClose}>
                <Button className="custom-button">
                  Contacto
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
