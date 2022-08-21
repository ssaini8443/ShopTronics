import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';



const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>

        <LinkContainer to="/">
          <Navbar.Brand >Shoptronics</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <LinkContainer to="/cart">
              <Nav.Link ><i className="fa-solid fa-cart-shopping p-1" />Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
              <Nav.Link ><i className="fa-solid fa-right-to-bracket p-1  " />Login</Nav.Link>
            </LinkContainer>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header