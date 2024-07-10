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
  FaGithubSquare,
} from "react-icons/fa";
import {
  SectionSkills,
  SkillsWrapper,
  TitleSkills,
  TopLineSkills,
  SkillItem,
  SkillIcon,
} from "./Skills.elements";
import { ButtonTest } from "../../GlobalStyles.styles";
import { HiArrowLongDown } from "react-icons/hi2";
import {
  FeaturedSection,
  ProjectDescript,
  ProjectImg,
  ProjectItem,
  ProjectText,
  ProjectTitle,
  SectionFeature,
  TitleFeature,
  ToplineFeatured,
} from "../Featured/Featured.elements";

import { RiNextjsFill } from "react-icons/ri";

import { RiNextjsLine } from "react-icons/ri";
import { FaChrome } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";

const SkillsHeading = styled.h1`
  text-align: center;
`;

const Skill = styled.div`
margin-top: 1rem;
font-size:.8rem;
text-align: center;

`;

const Skills = () => {
  return (
    <>
      <SectionSkills>
        <div>
          {/* <TitleSkills>My Skills</TitleSkills> */}
          <TopLineSkills>Skills</TopLineSkills>
          {/* <ToplineFeatured>My Skills</ToplineFeatured> */}
          {/* <TitleFeature>A range of my work</TitleFeature> */}

          <SkillsWrapper>
            <SkillItem>
              <FaHtml5 />
              <Skill>HTML5</Skill>
            </SkillItem>
            <SkillItem>
              <FaCss3Alt />
              <Skill>CSS3</Skill>
            </SkillItem>
            {/* <SkillItem>
              <FaSass />
              <Skill>Sass</Skill>
            </SkillItem> */}
            <SkillItem>
              {/* <RiTailwindCssLine /> */}
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
              {/* <RiNextjsFill /> */}
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
        <div>
          {/* <ButtonTest></ButtonTest> */}
          {/* <IoIosArrowRoundDown
></IoIosArrowRoundDown> */}
          {/* <HiArrowLongDown></HiArrowLongDown> */}
        </div>
      </SectionSkills>
    </>
  );
};

export default Skills;
