import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark sticky-top">
  <Container>
  <Navbar.Brand as={Link} to ="/" className='bg-primary' href="#home">Home Tutor</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#pricing">Feedback</Nav.Link>
      <Nav.Link href="#blogs">Blogs</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
       Register
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;