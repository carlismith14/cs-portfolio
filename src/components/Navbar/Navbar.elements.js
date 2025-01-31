import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background-color: ${(props) => props.theme.body};
  transition: background 1s ease;
  color: ${(props) => props.theme.text};
  position: sticky;
  top: 0;
  z-index: 100000099;
  height: 80px;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;

  margin: auto;
  height: 100%;
  width: 100%;

 
`;

export const Box = styled.div`
  @media screen and (min-width: 960px) {

    /* min-width: 300px; */
  }
`;

export const NavLogo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.85rem;
  color: ${(props) => props.theme.text};

  @media screen and (max-width: 960px) {
    justify-self: center;
    align-self: flex-start;
    padding: 3em 0em;
  }
`;

export const NavLogoA = styled.a`
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.85rem;
  color: ${(props) => props.theme.text};

  @media screen and (max-width: 960px) {
    justify-self: center;
    align-self: flex-start;
    padding: 3em 0em;
  }
`;

export const NavIcon = styled.div`
  @media screen and (max-width: 960px) {
    justify-self: flex-start;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: -15px;
    /* top: 0; */
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 2em;
  list-style: none;
  font-size: 0.85rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: left 0.5s ease, background-color 1s ease;

    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    z-index: 10000000;
  }
`;

export const NavItem = styled.li`
`;




export const NavA = styled.a`
  text-transform: uppercase;
  letter-spacing: 0.25em;

  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      transition: all 0.3s ease;
    }
  }
`;
