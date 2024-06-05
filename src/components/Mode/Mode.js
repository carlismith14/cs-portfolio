import React from "react";
import styled from "styled-components";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const IconWrapper = styled.div`
  /* padding: 0 1em; */
  font-size: 1.35rem;
  font-weight: lighter;
  padding-top: 0.5em;
  cursor: pointer;
  /* margin-left: 5rem; */

  @media screen and (max-width: 960px) {
    /* align-self: center; */
    /* margin-left: 5rem; */

    align-self: center;
    font-size: 1.35rem;
    padding-bottom: 0.2em;
    padding-right: 1.2em;
    /* padding: 3em 0em; */
  }
`;

const Mode = ({ theme, toggleTheme }) => {
  return (
    <IconWrapper onClick={toggleTheme}>
      {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </IconWrapper>
  );
};

export default Mode;
