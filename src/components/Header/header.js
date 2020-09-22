import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default props => (
  <header>
    <Navbar bg="primary" variant="dark">
      <Nav>
        <Nav.Link variant="light">Home</Nav.Link>
        <Nav.Link variant="light">Login</Nav.Link>
      </Nav>
    </Navbar>
  
  </header>
)