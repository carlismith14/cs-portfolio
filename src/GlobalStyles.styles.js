import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after{
    box-sizing: border-box;
    
}


:root {
    --ff-primary: 'Inter', sans-serif;
    --ff-secondary: 'Courier New';

    --fw-reg: 300;
    --fw-bold: 900;
    
    --clr-light: #fdfbf2;
    --clr-dark: #303030;
    --clr-accent: #ffc543;
    
    --fs-h1: 3rem;
    --fs-h2: 2.25rem;
    --fs-h3: 1.25rem;
    --fs-body: 1rem;
    --bs: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
          0.125em 0.125em 0.25em rgba(0,0,0,.15);

}


@media (min-width: 800px) {
    :root {
        --fs-h1: 4.5rem;
        --fs-h2: 3.75rem;
        --fs-h3: 1.5rem;
        --fs-body: 1.125rem;
    }
}
  
/* attempt at light and dark theme */




body {

    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    /* background: var(--clr-light); */
    

    /* color: var(--clr-dark); */
    margin: 0;
    font-family: var(--ff-primary);
    font-size: var(--fs-body);
    line-height: 1.6;
    transition: background 1s ease;
    font-size: 1rem;

}

img {
    display: block;
    max-width: 100%;
    
}


h1,
h2,
h3 {
    line-height: 1;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: 200;
}

h1 { font-size: var(--fs-h1) }
h2 { font-size: var(--fs-h2) }
h3 { font-size: var(--fs-h3) }

/* strong {display:block} */

:focus {
    /* outline: 3px solid var(--clr-accent); */
    /* outline-offset: 3px; */
}

`;

// export const Container = styled.div`
// z-index: 1;
// width: 100%;
// max-width: 1200px;
// margin: auto;
// margin-right: auto;
// margin-left: auto;
// padding-right: 50px;
// padding-left: 50px;

// @media screen and (max-width: 991px) {
//     padding-right: 30px;
//     padding-left: 30px;
// }
// `

// remove?
export const GlobalSectionTitle = styled.h1`
  margin-bottom: 0.25em;
`;

// remove? might mess some stuff up
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

// GLOBAL STYLES!!! OFFICIAL START

// SECTION
export const Section = styled.section`
  padding: 3em 2em;
  max-width: 1200px;
  margin: 0 auto;
`;

// FLEXBOX CONTAINER?

// GRID?

// TOPLINE
export const TopLine = styled.div`
  /* color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4b59f7")}; */

  /* font-weight: 600; */

  text-transform: uppercase;


  font-size: .75rem;
font-weight: 200;
padding-left: .45em;
margin-bottom: 1em;
line-height: 1;
letter-spacing: 0.4em;

`;

// SECTION TITLE
export const Title = styled.h1`
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  /* font-weight: 700; */
  font-size: 3rem;
  margin-bottom: 0.25em;
  
  /* ADD IDEAL FZ for both fullscreen and mobile devices w/ media query  */

  @media (min-width: 800px) {
  }
`;

// SECTION SUBTITLE
export const Subtitle = styled.p`
  margin: 0;
  background: var(--clr-accent);
`;

// SECTION IMG
export const Img = styled.img`
  box-shadow: var(--bs);
`;

// SECTION Paragraph
export const Paragraph = styled.p``;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const lightTheme = {
  body: '#f5f5f5',
  text: '#333',
}

export const darkTheme = {
  body: '#333',
  text: '#f5f5f5',
}
