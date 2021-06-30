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
import { useLocation } from "react-router-dom";
import { baseUrl } from '../shared/baseUrl';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    const { innerWidth: width, innerHeight: height } = window;
    console.log(width);
    if(width <= 767)
      setIsOpen(!isOpen);
  }

  // const toggle =() =>setIsOpen(!isOpen);

  const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

  return (
    <div className='header'>
      <Navbar color="dark" dark expand="md" fixed="top">
        <div  className="container" >
        <NavbarBrand tag={Link} className="mr-auto nav-brand" to={process.env.PUBLIC_URL+"/"}>
        <img src={baseUrl+'assets/images/logo.png'} className='nav-logo' alt="ABC Power" />
            <span className='nav-head'>ABC POWER SYSTEMS</span>
        </NavbarBrand>
        <Button tag={Link} to={process.env.PUBLIC_URL+"/products"}  className="d-md-none product-btn" >Our Products</Button>
        <NavbarToggler className="navbar-toggler-btn" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav" navbar>
            <NavItem>
              <NavLink tag={Link}  onClick={toggle} to={process.env.PUBLIC_URL+"/"} className={splitLocation[1] === "" ? "active" : ""} >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}  onClick={toggle} to={process.env.PUBLIC_URL+"/aboutus"} className={splitLocation[1] === "aboutus" ? "active" : ""} >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}  onClick={toggle} to={process.env.PUBLIC_URL+"/products"} className={splitLocation[1] === "products" ? "active" : ""} >Our Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}  onClick={toggle} to={process.env.PUBLIC_URL+"/contact"} className={splitLocation[1] === "contact" ? "active" : ""} >Contact Us</NavLink>
            </NavItem>
          </Nav>
                    
        </Collapse>
        
        </div>
        
      </Navbar>
      <Jumbotron className="jumbo-container container">
        <h1 className="display-4">ABC POWER SYSTEMS</h1>
      </Jumbotron>
    </div>
  );
}

export default Header;