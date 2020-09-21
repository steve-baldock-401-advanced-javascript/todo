import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default props => (
  <header>
    <Navbar bg="dark" variant="primary">
      <Nav className="mr-auto">
        {/* <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand> */}
        <Nav.Link variant="light">Home</Nav.Link>
        <Nav.Link variant="light">Login</Nav.Link>
      </Nav>
    </Navbar>
  
  </header>
)