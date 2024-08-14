import styled from "styled-components/macro";

import { TopLine, Section, Title } from "../../GlobalStyles.styles";

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
  width: 120px; 
  height: 120px; 
  /* box-sizing: border-box;  */
  border-radius: 8px;
  padding: 1rem;
`;

export const SkillIcon = styled.div`
  color: black;
  width: 100%;
  height: 100%;
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin: auto;
  gap: 3rem;
  place-items: center;
  /* justify-self: center;  */
`;
