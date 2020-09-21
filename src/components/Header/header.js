import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default props => (
  <header>
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Login</Nav.Link>
      </Nav>
    </Navbar>
  
  </header>
)