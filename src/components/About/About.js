import React from "react";
import { Link } from "react-router-dom";
import {
  ImgAbout,
  ParagraphAbout,
  SectionAbout,
  SubtitleAbout,
  TitleAbout,
  TopLineAbout,
} from "./About.elements";

import carli from "../../images/rsz_carli.jpg";

import { ButtonTest, } from "../../GlobalStyles.styles";

const About = () => {
  return (
    <>
          <div 
          // 1.31.25 change to center about section while no other sections are displayed
          style={{minHeight:"70vh", placeContent:"center", display:"grid"}}
          >

      <SectionAbout>
        {/* <TopLineAbout >About Me</TopLineAbout> */}
        <TopLineAbout >A Bit About Me</TopLineAbout>

        {/* <TopLineAbout className="script" >hello!</TopLineAbout> */}

        <TitleAbout 
        // className="script"
        >
          {/* <span className="script">Hello! </span> */}
           Hello, I'm <strong>Carli</strong>
        </TitleAbout>
        <SubtitleAbout>
          <div>Digital Specialist based in Brooklyn, NY</div>
          {/* <div>front-end developer based in Brooklyn, NY</div> */}

        </SubtitleAbout>
        <ImgAbout src={carli}></ImgAbout>

        {/* <ParagraphAbout>
          I am a software engineer with a focus on front-end development. In
          2022, I made the decision to leave my digital advertising career
          behind and embark on a journey of self-discovery. I soon uncovered a
          passion and aptitude for web development—a path I had never previously
          considered. This revelation ignited my determination to dive headfirst
          into this dynamic field.
          {"  "}Since then, I've been contracting on exciting web projects while
          continuing to learn and grow, eager to take on new challenges and
          opportunities.
        </ParagraphAbout> */}

        <ParagraphAbout>
    
          I'm a digital professional with a passion for creating impactful online experiences. With a background in digital advertising and web development, I combine creative vision with technical expertise to craft user-focused solutions that drive engagement and growth. I've contributed to web development projects, digital marketing campaigns, and e-commerce initiatives — always driven by a desire to build meaningful, beautiful, and effective digital experiences.
        </ParagraphAbout>

        <Link to="mailto:@carli.t.smith1@gmail.com">
          <ButtonTest>Let's Collaborate!</ButtonTest>
        </Link>
      </SectionAbout>
      </div>
    </>
  );
};

export default About;
