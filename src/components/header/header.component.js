import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import {Link} from 'react-router-dom'

const Header = ()=>(
    <div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto p-2">
     
      
      <NavDropdown title="Trips" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/trips">About Trips</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Iceland</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Croatia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Switzerland</NavDropdown.Item>

      </NavDropdown>
      <NavDropdown title="The 48" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/fourtyeight">About the 48</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Search Mountain</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Our Progress</NavDropdown.Item>

      </NavDropdown>

      <Nav.Link as={Link} to="/about">About us</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
</div>
)

export default Header