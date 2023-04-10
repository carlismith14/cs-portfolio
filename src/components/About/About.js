import React from "react";
import {
    ButtonAbout,
  ImgAbout,
  ParagraphAbout,
  SectionAbout,
  SubtitleAbout,
  TitleAbout,
  TopLineAbout,
} from "./About.elements";
import carli from "../../images/carli.jpg";
const About = () => {
  return (
    <>
      <SectionAbout>
        <TopLineAbout>About Me</TopLineAbout>
        <TitleAbout>
          Hi, I'm <strong>Carli</strong>👋
        </TitleAbout>
        <SubtitleAbout>front-end developer based in Brooklyn, NY</SubtitleAbout>
        <ImgAbout src={carli}></ImgAbout>
        <ParagraphAbout>
          As a digital advertising professional with a passion for UI design, I
          am excited to transition into front-end web development. With my
          background in digital advertising, I have the skills to understand the
          needs of clients and deliver high-quality web solutions that meet
          their goals. I am eager to continue learning and growing as a web
          developer and bring my skills and creativity to any project
        </ParagraphAbout>
        <ButtonAbout>Let's Chat</ButtonAbout>
      </SectionAbout>
    </>
  );
};

export default About;
