import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

import icon from "../assets/logo.png";
import multilang from "../assets/multilang.png";

function MainNavbar({ setModalShow }) {
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
        <Navbar.Brand onClick={() => setModalShow(true)} href="#aboutartist">
          <img
            alt=""
            src={icon}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Ella Zolotarenko
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#aboutartist">Ella</NavDropdown.Item>
              <NavDropdown.Item href="#aboutart">Art</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Item>
              <img alt="Lang" src={multilang} width="30" />
            </Nav.Item>
            <Nav.Item>
              <Form.Select className="form-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
