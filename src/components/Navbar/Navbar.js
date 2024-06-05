import React, { useState, useEffect, useRef } from "react";

import { useLocation } from "react-router-dom"; // Import the useLocation hook
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Box } from "./Navbar.elements";

import { VscMenu, VscClose } from "react-icons/vsc";

import {
  Hlink,
  MobileIcon,
  Nav,
  NavA,
  NavBarContainer,
  NavIcon,
  NavItem,
  NavLinkTest,
  NavLinks,
  NavLogo,
  NavLogoA,
  NavMenu,
} from "./Navbar.elements";
import Mode from "../Mode/Mode";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => setClick((prevClick) => !prevClick);

  const closeMobileMenu = (linkName) => {
    if (linkName) {
      // window.location.hash === "#work" && document.getElementById("work").ScrollToTop
      //   if (window.location.hash === "#work") {
      //     const workSection = document.getElementById("work");
      //     if (workSection) {
      //       workSection.scrollIntoView({ behavior: "smooth", block: "center" });
      //     }
      //   }
      // }, []);
      // navigate('/#work');
      navigate("/");

      // setTimeout(() => {
      //   navigate('/#work');

      // }, 1000); //

      // const targetSection = document.querySelector("#work");
      // const targetTop = targetSection.getBoundingClientRect().top + window.scrollY;
      // const offset = 50; // Adjust the offset value as needed
      // window.scrollTo({
      //   top: targetSection - offset,
      //   behavior: 'smooth', // Optionally, you can add smooth scrolling
      // });
      // workSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    setClick((prevClick) => (prevClick ? !prevClick : prevClick));

    window.scrollTo({
      top: 0,
    });
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  console.log(click);
  return (
    <>


      <Nav props={props}>
        <NavBarContainer>
          <Box>
            <NavLogo props={props} to="/" onClick={closeMobileMenu}>
              <NavIcon />
              Carli Smith
            </NavLogo>
          </Box>

       

          <Mode theme={props.theme} toggleTheme={props.toggleTheme}></Mode>
          <MobileIcon onClick={handleClick}>
            {click ? <VscClose /> : <VscMenu />}
          </MobileIcon>
         
            
            <NavMenu props={props} click={click}>
          
              <NavItem onClick={() => closeMobileMenu("work")}>
                <NavA href="#work">Work</NavA>
                <HashLink></HashLink>
            
              </NavItem>

              <NavItem onClick={closeMobileMenu}>
           
              </NavItem>

              <NavItem onClick={closeMobileMenu}>
                <NavA href="mailto:@carli.t.smith1@gmail.com">Contact</NavA>
              </NavItem>
            </NavMenu>
        
        </NavBarContainer>
        
      </Nav>
  

    </>
  );
};

export default Navbar;
