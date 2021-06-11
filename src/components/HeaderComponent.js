import React, { useState } from 'react';
// import { Button } from 'reactstrap'; 
import logo from "../images/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Jumbotron,
  Button
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='header'>
      <Navbar color="dark" dark expand="md">
        <div  className="container" >
        <NavbarBrand className="mr-auto " href="/">
        <img src={logo} height="50" width="34" alt="ABC Power" />
            <span className='nav-head'>ABC Power</span>
        </NavbarBrand>
        <Button href="/products" className="d-md-none">Our Products</Button>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutus">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">Our Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact Us</NavLink>
            </NavItem>
          </Nav>
                    
        </Collapse>
        
        </div>
        
      </Navbar>
      <Jumbotron className="container">
        <h1 className="display-3">ABC POWER</h1>
      </Jumbotron>
    </div>
  );
}

export default Header;