import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";

function MainNavbar() {
  return (
    <Navbar
      className="bg-body-tertiary"
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="#home">Ella Zolotarenko</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            {/* <Nav.Link href="#about">About</Nav.Link> */}
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#aboutartist">Ella</NavDropdown.Item>
              <NavDropdown.Item href="#aboutart">Art</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
