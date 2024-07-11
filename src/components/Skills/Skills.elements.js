// import styled from "styled-components/macro";

// import {
//   TopLine,
//   Section,
//   Title,
//   Subtitle,
//   Button,
//   Img,
//   Paragraph,
// } from "../../GlobalStyles.styles";

// export const SectionSkills = styled(Section)`
//   /* padding: 3em 2em; */
//   padding-top: 2em;

//   /* margin-top: 2em; */
//   /* height: 40vh; */
//   /* display: flex; */
//   /* align-items:center;  */
//   border-bottom: 1px solid rgba(0, 0, 0, 0.098);
// `;

// export const ScrollBox = styled.div``;

// export const TopLineSkills = styled(TopLine)`
//   text-align: center;
//   margin-bottom: 2rem;
//   /* margin-bottom: .5em; */
//   font-size: 1rem;
// `;

// export const TitleSkills = styled(Title)`
//   text-align: center;
//   margin-bottom: 0.5em;
// `;

// export const SkillItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-size: 1.2rem;
//   /* color: rgb(51, 51, 51); */
//   /* gap: 2em; */
//   /* margin-left: 1rem; */
// `;

// export const SkillIcon = styled.div`
//   color: black;
//   width: 100%;
// `;

// export const SkillsWrapper = styled.div`
//   /* margin: 10px 0;
// width: 100%;
// display:flex;
// justify-content: center;
// align-items: center;
// gap: 2em; */
//   /* display: flex;
//   justify-content: center; */
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
//   /* max-width: 800px; */
//   margin: auto;
//   /* margin-top: 50px; */
//   gap: 3rem;
//   justify-self: center; /* Center the content horizontally in the second row */
// `;

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
  padding-top: 2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.098);
`;

export const TopLineSkills = styled(TopLine)`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

export const TitleSkills = styled(Title)`
  text-align: center;
  margin-bottom: 0.5em;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  color: black;
  width: 120px; /* Add a fixed width */
  height: 120px; /* Add a fixed height */
  box-sizing: border-box; /* Ensure padding and border are included in the element's total width and height */
  /* Adding a background color or border can help prevent layout shifts during loading */
  /* background: #f0f0f0; */
  border-radius: 8px;
  padding: 1rem;
`;

export const SkillIcon = styled.div`
  color: black;
  width: 100%;
  height: 100%; /* Ensure icons fit within the SkillItem */
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin: auto;
  gap: 3rem;
  justify-self: center; /* Center the content horizontally in the second row */
`;
