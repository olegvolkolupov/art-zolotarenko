import React from "react";

import { FormattedMessage } from "react-intl";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

import icon from "../assets/logo.png";
import multilang from "../assets/multilang.png";

function MainNavbar({ setModalShow, onLanguageChange }) {
  const handleLanguageSelect = (e) => {
    const selectedLocale = e.target.value;
    onLanguageChange(selectedLocale);
  };

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
          <FormattedMessage
            id="mainNavbar.brand"
            defaultMessage="Ella Zolotarenko"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#gallery">
              <FormattedMessage
                id="mainNavbar.gallery"
                defaultMessage="Gallery"
              />
            </Nav.Link>
            <NavDropdown
              title={
                <FormattedMessage
                  id="mainNavbar.about"
                  defaultMessage="About"
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#aboutartist">
                <FormattedMessage
                  id="mainNavbar.aboutartist"
                  defaultMessage="Artist"
                />
              </NavDropdown.Item>
              <NavDropdown.Item href="#aboutart">
                <FormattedMessage
                  id="mainNavbar.aboutart"
                  defaultMessage="Art"
                />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">
              <FormattedMessage
                id="mainNavbar.contact"
                defaultMessage="Contact"
              />
            </Nav.Link>
            <Nav.Item>
              <img alt="Lang" src={multilang} width="30" />
            </Nav.Item>
            <Nav.Item>
              <Form.Select
                className="form-select"
                onChange={handleLanguageSelect}
              >
                <option value="en">English</option>
                <option value="ua">Ukrainian</option>
                <option value="pl">Polish</option>
              </Form.Select>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
