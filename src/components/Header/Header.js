import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { StyledHeader, NavB, Text } from "../styles/Header.styled";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Header = () => {
  return (
    <StyledHeader>
      <NavB>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#home">
                  <Text> Home </Text>
                </Nav.Link>
                <Nav.Link href="#about">
                  <Text> About Us <MdOutlineArrowDropDownCircle/>
                   </Text>
                </Nav.Link>
                <Nav.Link href="#project">
                  <Text> Projects <MdOutlineArrowDropDownCircle/></Text>
                </Nav.Link>
                <Nav.Link href="#service">
                  <Text> Services <MdOutlineArrowDropDownCircle/></Text>
                </Nav.Link>
                <Nav.Link href="#career">
                  <Text> Career </Text>
                </Nav.Link>
                <Nav.Link href="#contact">
                  <Text> Contact <MdOutlineArrowDropDownCircle/></Text>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </NavB>
      <Container>
            <p>Completed Project</p>
            <h2>NHL Fortuna</h2>
      </Container>
    </StyledHeader>
  );
};

export default Header;
