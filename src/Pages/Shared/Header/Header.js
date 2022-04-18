import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth)
  const logoutHandler = () => {
    signOut(auth);
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className='bg-primary' href="#home">Home Tutor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/service">Services</Nav.Link>
            <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Nav>
            {user ? <button onClick={logoutHandler}>Log out</button> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;