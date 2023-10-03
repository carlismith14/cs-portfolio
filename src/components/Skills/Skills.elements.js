import styled from "styled-components/macro";


import {
    TopLine,
    Section,
    Title,
    Subtitle,
    Button,
    Img,
    Paragraph,
  } from "../../GlobalStyles.styles";



  export const SectionSkills = styled(Section)`
  /* margin-top: 2em; */
  height: 40vh;
  /* display: flex; */
/* align-items:center;  */
 `;

export const ScrollBox = styled.div`
  
`;

export const TopLineSkills = styled(TopLine)`

`

  export const TitleSkills = styled(Title)`
    text-align: center;
    margin-bottom: .5em;
  `



export const SkillsWrapper = styled.div`
/* margin: 10px 0;
width: 100%;
display:flex;
justify-content: center;
align-items: center;
gap: 2em; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  max-width: 800px;
  margin: auto;
  /* margin-top: 50px; */
  gap: 2rem;
  justify-self: center; /* Center the content horizontally in the second row */

  `;