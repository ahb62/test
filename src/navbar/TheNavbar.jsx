import React from "react";
import { Link, Outlet } from "react-router-dom";
import {Container, Nav, Navbar } from 'react-bootstrap';



const TheNavbar = () => 
{
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" >Demo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"  >
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
      <Outlet>

      </Outlet>
    </section>
    </>
  );
}

export default TheNavbar;