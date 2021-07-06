import React from 'react';
import {
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper
} from './SidebarElements';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";



const Sidebar = ({open,setOpen}) => {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");


    // below arrangements for closing sidebar menu, if screen is rateted in certain devices
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
          
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    
    if(windowSize.width >=992){
        // open=false;
        if(open===true){
            setOpen(open);
        }
    }

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
