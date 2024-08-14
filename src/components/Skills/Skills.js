import React from "react";
import styled from "styled-components/macro";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaJs,
  FaGitSquare,
  FaGithubSquare,
} from "react-icons/fa";
import {
  SectionSkills,
  SkillsWrapper,
  TopLineSkills,
  SkillItem,
} from "./Skills.elements";

import { FaChrome } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";

const Skill = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
  text-align: center;
`;

const Skills = () => {
  return (
    <>
      <SectionSkills>
        <div>
          <TopLineSkills>Skills</TopLineSkills>
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
              <TbBrandTailwind />
              <Skill>TailwindCSS</Skill>
            </SkillItem>
            <SkillItem>
              <FaJs />
              <Skill>JavaScript</Skill>
            </SkillItem>
            <SkillItem>
              <SiTypescript />
              <Skill>TypeScript</Skill>
            </SkillItem>
            <SkillItem>
              <FaReact />
              <Skill>React</Skill>
            </SkillItem>
            <SkillItem>
              <TbBrandNextjs />
              <Skill>Next.js</Skill>
            </SkillItem>
            <SkillItem>
              <SiMui />
              <Skill>Material UI</Skill>
            </SkillItem>
            <SkillItem>
              <SiStyledcomponents />
              <Skill>Styled Components</Skill>
            </SkillItem>
            <SkillItem>
              <TbApi />
              <Skill>RESTful APIs</Skill>
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
              <FaFigma />
              <Skill>Figma</Skill>
            </SkillItem>
            <SkillItem>
              <FaChrome />
              <Skill>Chrome DevTools</Skill>
            </SkillItem>
          </SkillsWrapper>
        </div>
        <div></div>
      </SectionSkills>
    </>
  );
};

export default Skills;
