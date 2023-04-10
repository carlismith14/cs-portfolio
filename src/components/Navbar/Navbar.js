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
          <NavMenu props={props} onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks props={props} to="/projects">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/work">work</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/projects">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
