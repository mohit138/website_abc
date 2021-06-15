import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <NavbarBrand tag={Link} className="mr-auto " to="/">
        <img src='http://localhost:3000/assets/images/logo.png' className='nav-logo' alt="ABC Power" />
            <span className='nav-head'>ABC POWER SYSTEMS</span>
        </NavbarBrand>
        <Button tag={Link} to="/products"  className="d-md-none product-btn" >Our Products</Button>
        <NavbarToggler className="navbar-toggler-btn" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" activeClassName="is-active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/aboutus" activeClassName="is-active">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/products" activeClassName="is-active">Our Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" activeClassName="is-active">Contact Us</NavLink>
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