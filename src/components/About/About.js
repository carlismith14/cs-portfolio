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
          Hi, I'm <strong>Carli</strong>
          {/* 👋 */}
        </TitleAbout>
        <SubtitleAbout>front-end developer based in Brooklyn, NY</SubtitleAbout>
        <ImgAbout src={carli}></ImgAbout>
  
        {/* <ParagraphAbout>
          As a digital advertising professional with a passion for UI design, I
          am excited to transition into front-end web development. With my
          background in digital advertising, I have the skills to understand the
          needs of clients and deliver high-quality web solutions that meet
          their goals. I am eager to continue learning and growing as a web
          developer and bring my skills and creativity to any project
        </ParagraphAbout> */}

        {/* opening sentence  */}
        <ParagraphAbout>
        I am a self-taught software engineer with a focus on front-end development. 
        {/* <br></br> */}
        In 2022, I made the decision to leave my digital advertising career behind and embark on a journey of self-discovery. I soon uncovered a passion and aptitude for web development—a path I had never previously considered. This revelation ignited my determination to dive headfirst into this dynamic field. 
        {/* <br></br> */}

        Since then, I've been contracting on exciting web projects while continuing to learn and grow, eager to take on new challenges and opportunities.

        </ParagraphAbout>

        {/* background  */}
    
        {/* In 2022, I left my job in digital advertising and embarked on a journey of self discovery. Unsure where to begin, I started looking at my career in retrospect and taking inventory of the types of projects that made me tick, what I was naturally good at, and tasks that I genuinely enjoyed doing. After a few months of introspection, countless personality quizzes, and some introductory coding tutorials, I uncovered a passion and aptitude for web development - a path that i heretofore never considered.  */}



       
        <ButtonAbout>Let's Chat</ButtonAbout>
      </SectionAbout>
    </>
  );
};

export default About;
