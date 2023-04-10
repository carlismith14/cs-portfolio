import React from "react";
import styled from "styled-components/macro";
import { 
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoJavascript,

} from "react-icons/io";


import { 
  FaHtml5,
  FaCss3Alt,
  FaReact, 
  FaFigma,
  FaJs,
  FaSass,
  FaGitSquare,
  FaGithubSquare
 } from "react-icons/fa";
import { SectionSkills, SkillsWrapper, TitleSkills } from "./Skills.elements";




const SkillsHeading = styled.h1`
text-align: center;
`;



const SkillItem = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`;

const SkillIcon = styled.div`
  color: black;
  width: 100%;
`;

const Skill = styled.div``;

const Skills = () => {
  return (
    <>
    <SectionSkills>
    <TitleSkills>My Skills</TitleSkills>

      <SkillsWrapper>
        <SkillItem>
          <FaHtml5 />
          <Skill>HTML5</Skill>
        </SkillItem>
        <SkillItem>
          <FaCss3Alt />
          <Skill>CSS3</Skill>
        </SkillItem>
        <SkillItem>
          <FaJs />
          <Skill>JavaScript</Skill>
        </SkillItem>
        <SkillItem>
          <FaReact />
          <Skill>React</Skill>
        </SkillItem>
        <SkillItem>
          <FaGitSquare />
          <Skill>Git</Skill>
        </SkillItem>
        <SkillItem>
          <FaGithubSquare />
          <Skill>GitHub</Skill>
        </SkillItem>
        <SkillItem>
          <FaSass />
          <Skill>Sass</Skill>
        </SkillItem>
        <SkillItem>
          <FaFigma />
          <Skill>Figma</Skill>
        </SkillItem>
      </SkillsWrapper>
    </SectionSkills>
    </>
  );
};

export default Skills;
