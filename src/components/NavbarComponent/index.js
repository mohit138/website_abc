import React, {useEffect, useState} from 'react';
import {FaBars } from 'react-icons';
import {Nav,NavButton,NavButtonLink,NavItem,NavLinks,NavLogo,NavMenu,NavbarContainer,StyledBurger} from './NavbarElement';
import { Container } from 'reactstrap';
import { useLocation } from "react-router-dom";
import { baseUrl } from '../../shared/baseUrl';
const Burger = ({ open, setOpen }) => {

    return (
      <div className="nav-burger-button" style={{width: "1.9rem" }}>
      <StyledBurger open={open} onClick={() => setOpen(open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      </div>
    )
  }



const Navbar = ({ open, setOpen}) => {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    
    

    return (
        
               <Nav>
                    <NavbarContainer>
                        <NavLogo to={process.env.PUBLIC_URL+"/"}>
                        <img src={baseUrl+'assets/images/logo.png'} className='nav-logo' alt="ABC Power" />
                        <span className='nav-head'>ABC POWER SYSTEMS</span>
                        
                        </NavLogo>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to={process.env.PUBLIC_URL+"/"} className={splitLocation[1] === "" ? "active" : ""}>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to={process.env.PUBLIC_URL+"/aboutus"} className={splitLocation[1] === "aboutus" ? "active" : ""}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to={process.env.PUBLIC_URL+"/products"} className={splitLocation[1] === "products" ? "active" : ""}>Our Products</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to={process.env.PUBLIC_URL+"/contact"} className={splitLocation[1] === "contact" ? "active" : ""}>Contact Us</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavButton open={open}>
                            <NavButtonLink to={process.env.PUBLIC_URL+"/products"}>Our Products</NavButtonLink>
                        </NavButton>
                        <Burger open={open} setOpen={setOpen}/>
                    </NavbarContainer>
                </Nav>

    )
}

export default Navbar;
