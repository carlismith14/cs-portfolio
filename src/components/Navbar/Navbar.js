import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Box } from "./Navbar.elements";

import { VscMenu, VscClose } from "react-icons/vsc";

import {
  MobileIcon,
  Nav,
  NavA,
  NavBarContainer,
  NavIcon,
  NavItem,
  NavLogo,
  NavMenu,
} from "./Navbar.elements";
import Mode from "../Mode/Mode";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick((prevClick) => !prevClick);

  const closeMobileMenu = (linkName) => {
    if (linkName) {
      navigate("/");
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
            {/* <NavItem onClick={() => closeMobileMenu("work")}>
              <NavA href="#work">Work</NavA>
              <HashLink></HashLink>
            </NavItem> */}

            <NavItem onClick={closeMobileMenu}></NavItem>

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
