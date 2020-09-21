import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default Footer => {
  return(
  <footer>
    <Navbar bg="dark" variant="primary">
      <Nav className="mr-auto">
        <Nav.Link>&copy; 2020 Steve Baldock Enterprises</Nav.Link>
      </Nav>
    </Navbar>
  
  </footer>
  )
} 
