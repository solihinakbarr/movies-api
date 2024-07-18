import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarComp.css";

const NavbarComp = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          INFINITY <span>MOVIES</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Homepage
            </Nav.Link>
            <Nav.Link as={Link} to="/cooming">
              UpComing
            </Nav.Link>
            <Nav.Link as={Link} to="/toprate">
              Top Rated
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
