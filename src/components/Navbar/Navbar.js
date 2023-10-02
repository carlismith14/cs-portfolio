import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


import { 
  VscMenu,
  VscClose
} from "react-icons/vsc";

import {
  MobileIcon,
  Nav,
  NavA,
  NavBarContainer,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./Navbar.elements";
import Mode from "../Mode/Mode";

const Navbar = (props) => {


  const [click, setClick] = useState(false);


  const handleClick = () => setClick((prevClick) => !prevClick);

  const closeMobileMenu = () => setClick((prevClick) => prevClick ? !prevClick : prevClick)


  useEffect(() => {
    // Check if the current location contains #work
    if (window.location.hash === '#work') {
      // Scroll to the #work section
      const workSection = document.getElementById('work');
      if (workSection) {
        // Scroll with a margin at the top
        // workSection.scrollTo({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        // workSection.style.scrollMarginTop = '6vh';
        workSection.scrollIntoView({ behavior: 'smooth', block:'center' });

      }
    }
  }, []);


  console.log(click)
  return (
    <>
      <Nav props={props}>
        <NavBarContainer>
          <NavLogo props={props} to="/" onClick={closeMobileMenu}>
            <NavIcon />
            Carli Smith
          </NavLogo>
          <Mode theme={props.theme} toggleTheme={props.toggleTheme}></Mode>
          <MobileIcon onClick={handleClick}>
            {click ? <VscClose /> : <VscMenu />}

          </MobileIcon>
          <NavMenu props={props}  click={click}>

          {/* <NavMenu props={props} onClick={handleClick} click={click}> */}
            {/* <NavItem>
              <NavLinks props={props} to="/projects">About</NavLinks>
            </NavItem> */}
            <NavItem onClick={closeMobileMenu}>
              {/* <a href="#work">Work</a> */}
              {/* <NavLinks to="#work">work</NavLinks> */}
              <NavA href="/#work">Work</NavA>
            </NavItem>

            <NavItem onClick={closeMobileMenu}>
              <NavA href="mailto:@carli.t.smith1@gmail.com">Contact</NavA>
              {/* <NavLinks to="">Contact</NavLinks> */}
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
