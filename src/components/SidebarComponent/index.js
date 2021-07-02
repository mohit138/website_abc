import React from 'react';
import {
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper
} from './SidebarElements';
import { useLocation } from "react-router-dom";


const Sidebar = ({open,setOpen}) => {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <SidebarContainer open={open} onClick={() => setOpen(open)}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={process.env.PUBLIC_URL+"/"} className={splitLocation[1] === "" ? "active" : ""}>Home</SidebarLink>
                    <SidebarLink to={process.env.PUBLIC_URL+"/aboutus"} className={splitLocation[1] === "aboutus" ? "active" : ""}>About Us</SidebarLink>
                    <SidebarLink to={process.env.PUBLIC_URL+"/products"} className={splitLocation[1] === "products" ? "active" : ""}>Products</SidebarLink>
                    <SidebarLink to={process.env.PUBLIC_URL+"/contact"} className={splitLocation[1] === "contact" ? "active" : ""}>Contact Us</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
