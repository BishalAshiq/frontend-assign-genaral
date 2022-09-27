import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navP from '../../../images/navigation/Nav.png';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <img style={{width: 200, marginLeft: 160}} src={navP} alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", marginLeft: 160}}
              navbarScroll
            >
              <Nav.Link href="#action1">Downloads</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action2">Support</Nav.Link>
              
            </Nav>
            <Form className="d-flex">
            <NavLink to="/activePageOne"><Button variant="outline-info" style={{marginRight: 50}}>Create Activity</Button></NavLink>
              <Button style={{marginRight: 200}} variant="primary">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
