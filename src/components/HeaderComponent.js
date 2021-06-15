import React, { useState } from 'react';
// import { Button } from 'reactstrap'; 
// import logo from "../../public/assets/images/logo.png";
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
        <img src='http://localhost:3000/assets/images/logo.png' className='nav-logo' alt="ABC Power" />
            <span className='nav-head'>ABC POWER SYSTEMS</span>
        </NavbarBrand>
        <Button href="/products"  className="d-md-none product-btn" >Our Products</Button>
        <NavbarToggler className="navbar-toggler-btn" onClick={toggle} />
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
        <h1 className="display-3">ABC POWER SYSTEMS</h1>
      </Jumbotron>
    </div>
  );
}

export default Header;