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

import { ButtonTest } from "../../GlobalStyles.styles";

const About = () => {
  return (
    <>
      <SectionAbout>
        <TopLineAbout>About Me</TopLineAbout>
        <TitleAbout>
          Hi, I'm <strong>Carli</strong>
        </TitleAbout>
        <SubtitleAbout>
          <div>front-end developer based in Brooklyn, NY</div>
        </SubtitleAbout>
        <ImgAbout src={carli}></ImgAbout>

        <ParagraphAbout>
          I am a software engineer with a focus on front-end development. In
          2022, I made the decision to leave my digital advertising career
          behind and embark on a journey of self-discovery. I soon uncovered a
          passion and aptitude for web development—a path I had never previously
          considered. This revelation ignited my determination to dive headfirst
          into this dynamic field.
          {"  "}Since then, I've been contracting on exciting web projects while
          continuing to learn and grow, eager to take on new challenges and
          opportunities.
        </ParagraphAbout>

        <Link to="mailto:@carli.t.smith1@gmail.com">
          <ButtonTest>Let's Collaborate!</ButtonTest>
        </Link>
      </SectionAbout>
    </>
  );
};

export default About;
