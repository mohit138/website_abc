import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.div`
    background: #000;
    width:100%;
    height: 80px;
    display: block;
    justify-content: center;
    align-items:center;
    font-size: 1rem;
    position: sticky;
    top:0;
    margin-bottom:20px;
    z-index:11;

    @media screen and (max-width: 992px) {
        transition: 0.8 all ease;
    }
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    
    width: 100%;
    padding: 0 var(--bs-gutter-x, 0.75rem);
    margin: 0px auto;
    
    
    
    @media screen and (min-width:576px){
      max-width:540px;
    }
    @media screen and (min-width:768px){
      max-width:720px;
    }
    @media screen and (min-width:992px){
      max-width:960px;
    }
    @media screen and (min-width:1200px){
      max-width:1140px;
    }
    @media screen and (min-width:1400px){
      max-width:1320px;
    }
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justufy-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    // margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
      color:#fff;
      transition: all 0.4s ease-in-out;
    }
`;

export const StyledBurger = styled.button`
  
  display: none;
  
  
  @media screen and (max-width: 991px){
    display: flex;
    position: absolute;
    // top: 0;
    // left: 0;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index:20;
    
    padding: 0px;
    margin-top:1.5rem;
    &:focus {
      outline: none;
    }
      
    div {
        width: 2rem;
        height: 0.25rem;
        background: #777;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        z-index:20;
        

        :first-child {
          transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
    
        :nth-child(2) {
          opacity: ${({ open }) => open ? '0' : '1'};
          transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }
    
        :nth-child(3) {
          transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

  
  }  
`;

export const NavMenu = styled.ul`
  display:flex;
  align-items: center;
  list-style-type: none;
  text-align: center;
  margin-top:0;
  margin-bottom:0;
  margin-right: -22px;
  @media screen and (max-width: 991px){
    display:none;
  }

`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #888;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
      border-bottom: 5px solid lightblue;
      transition: all 0.2s ease-in-out;
  }
  &:hover{
    color:white;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavButton = styled.nav`
  display:none;
  align-items: center;
  

  @media screen and (max-width: 991px){
      display:flex;
      opacity:${({ open }) => open ? '0' : '100%'};
      transition: all 0.2s ease-in-out;
    }
`;

export const NavButtonLink = styled(Link)`
  border-radius: 25px;
  background: white;
  white-space: nowrap;
  padding: 10px 22px;
  color: #777;
  font-size: 16px;
  outline: none;
  border:none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #777;
  }

`;