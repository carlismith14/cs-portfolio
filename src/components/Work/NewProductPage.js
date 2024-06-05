import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "../../GlobalStyles.styles";
import {
  IntroSection,
  Title1,
  Subtitle1,
  IntroImage,
  PortfolioItem,
} from "./NewProduct.elements";
import Test from "./Test";

import {
  // Section,
  Title,
  Subtitle,
  // Page,
  ProjectVid,
  ProjectGrid,
  ProjectVidContainer,
  ProjectDescription,
  IntroTextContainer,
  ButtonContainer,
  Disclaimer,
  BackContainer,
  ProjectTitle,
} from "./Work.elements";

import { FaGithubSquare } from "react-icons/fa";

import video from "../../images/philipsscreendemo.mov";

import pic1 from "../../images/portfolio-details.jpg";

import philipsproject from "../../images/projects/philips/philipsmainscreen.png";

import { ProjectImg } from "./Work.elements";

import { MdOutlineArrowBackIosNew } from "react-icons/md";

import { ButtonTest } from "../../GlobalStyles.styles";
// import { Section } from "../../GlobalStyles.styles";
// import { ProjectImg } from "./Work.elements";

import {
  ButtonAbout,
  ImgAbout,
  ParagraphAbout,
  SectionAbout,
  SubtitleAbout,
  TitleAbout,
  TopLineAbout,
} from "../About/About.elements";
import carli from "../../images/carli.jpg";

import {
  SectionAbout2,
  TopLine2,
  TitleAbout2,
  SubtitleAbout2,
  ImgAbout2,
  ParagraphAbout2,
  MediaContainer2,
  ButtonContainer2,
  VidAbout2,
  Disclaimer2,
} from "./Test.elements";

const NewProductPage = ({ project }) => {
  const handleBackButtonClick = () => {
    const scrollPosition = window.pageYOffset;
    window.history.back();
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo(0, element.offsetTop);
        }
      } else {
        window.scrollTo(0, scrollPosition);
      }
    }, 0);
  };

  return (
    <>
      <div style={{ maxWidth: "90%", margin: "auto" }}>
        {/* <Section style={{ marginTop: "-50px" }}> */}
        {/* <section class="intro">
            <h1 class="section__title section__title--intro">
                The title <strong>of my project</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">A short subtitle</p>
            <img src="img/portfolio-01.jpg" alt="" class="intro__img">
        </section>
        
        <div class="portfolio-item-individual">
            <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
            <img src="img/portfolio-details.jpg" alt="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
            <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
        </div> */}

        <BackContainer onClick={handleBackButtonClick}>
          <ButtonTest>
            <MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
          </ButtonTest>
        </BackContainer>

        <SectionAbout>
          <TopLineAbout>About Me</TopLineAbout>
          <TitleAbout>
            Hi, I'm <strong>Carli</strong>
            {/* 👋 */}
          </TitleAbout>
          <SubtitleAbout>
            front-end developer based in Brooklyn, NY
          </SubtitleAbout>

          <ImgAbout src={project.projectInfo.media.imgSrc}></ImgAbout>

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
            I am a self-taught software engineer with a focus on front-end
            development. In 2022, I made the decision to leave my digital
            advertising career behind and embark on a journey of self-discovery.
            I soon uncovered a passion and aptitude for web development—a path I
            had never previously considered. This revelation ignited my
            determination to dive headfirst into this dynamic field.
            {/* <br></br> */}
            {"  "}Since then, I've been contracting on exciting web projects
            while continuing to learn and grow, eager to take on new challenges
            and opportunities.
          </ParagraphAbout>
        </SectionAbout>

        <SectionAbout2>
          <TopLine2>FEATURED PROJECT</TopLine2>
          <TitleAbout2>{project.title}</TitleAbout2>
          <SubtitleAbout2>{project.subtitle}</SubtitleAbout2>
          <MediaContainer2>
            {project.projectInfo.media.img === true ? (
              <ImgAbout2 src={project.projectInfo.media.imgSrc} />
            ) : (
              <VidAbout2
                disablePictureInPicture
                autoPlay
                playsInline
                loop
                muted
                loading="eager"
                style={{ width: "90%", margin: "auto" }}
                src={project.projectInfo.media.vidSrc}
              ></VidAbout2>
            )}

            <Disclaimer2>{project.projectInfo.noteContext}</Disclaimer2>

            <ButtonContainer2>
              {project.projectInfo.demoLink && (
                <Link to={project.projectInfo.demoLink} target="blank">
                  <ButtonTest>Demo Link</ButtonTest>
                </Link>
              )}

              <Link to={project.projectInfo.githubLink} target="blank">
                <ButtonTest>
                  Github
                  <FaGithubSquare></FaGithubSquare>
                </ButtonTest>
              </Link>
            </ButtonContainer2>
          </MediaContainer2>

          <ParagraphAbout2>
            <div>{project.projectInfo.intro}</div>

            <br></br>
            <div>
              <strong>MY ROLE </strong>
            </div>
            {project.projectInfo.role}

            <br></br>
            <br></br>

            <div>
              <strong>TECH STACK</strong>
            </div>
            {project.projectInfo.techStack.map((tech, index) => (
              <React.Fragment key={index}>
                <div>{tech}</div>
              </React.Fragment>
            ))}

            <br></br>

            <div>
              <strong>CHALLENGES & HIGHLIGHTS</strong>
            </div>
            {project.projectInfo.challenges.map((challenge, index) => (
              <React.Fragment key={index}>
                <div>{challenge}</div>
              </React.Fragment>
            ))}

            <br></br>

            <div>
              <strong>LESSONS LEARNED</strong>
            </div>

            <div>{project.projectInfo.lessons}</div>
          </ParagraphAbout2>
        </SectionAbout2>

        {/* <IntroSection className="intro">
          <Title1 className="section__title section__title--intro">
            The title <strong>of my project</strong>
          </Title1>
          
          <Subtitle1 className="section__subtitle section__subtitle--intro">
            A short subtitle
          </Subtitle1>
          <IntroImage
            src={project.img}
            alt=""
            className="intro__img"
            width={400}
          />
        </IntroSection> */}
        <Title1>{project.title}</Title1>
        <Subtitle1 className="section__subtitle section__subtitle--intro">
          A short subtitle
        </Subtitle1>

        <PortfolioItem className="portfolio-item-individual">
          {/* <p>
            Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
            molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
            magnam ipsum eius earum?
          </p> */}
          {/* <img src={project.projectInfo.media.imgSrc} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et
            amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur
            incidunt?
          </p>
          <p>
            Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo
            molestiae eligendi sint culpa nobis voluptas sapiente voluptate,
            magnam ipsum eius earum?
          </p> */}
          {/* <ProjectDescription>{project.projectInfo.intro}</ProjectDescription> */}

          <ProjectGrid>
            {" "}
            <ProjectVidContainer>
              {project.projectInfo.media.img === true ? (
                <ProjectImg src={project.projectInfo.media.imgSrc} />
              ) : (
                <ProjectVid
                  disablePictureInPicture
                  autoPlay
                  playsInline
                  loop
                  muted
                  loading="eager"
                  style={{ width: "90%", margin: "auto" }}
                  src={project.projectInfo.media.vidSrc}
                ></ProjectVid>
              )}

              <Disclaimer>{project.projectInfo.noteContext}</Disclaimer>
              <ButtonContainer>
                {project.projectInfo.demoLink && (
                  <Link to={project.projectInfo.demoLink} target="blank">
                    <ButtonTest>Demo Link</ButtonTest>
                  </Link>
                )}

                <Link to={project.projectInfo.githubLink} target="blank">
                  <ButtonTest>
                    Github
                    <FaGithubSquare></FaGithubSquare>
                  </ButtonTest>
                </Link>
              </ButtonContainer>
            </ProjectVidContainer>
            <IntroTextContainer>
              <ProjectDescription>
                {project.projectInfo.intro}
              </ProjectDescription>

              <br></br>

              <div>
                <strong>MY ROLE </strong>
              </div>

              <ProjectDescription>
                {project.projectInfo.role}
              </ProjectDescription>

              <ProjectDescription></ProjectDescription>

              <br></br>

              <div>
                <strong>TECH STACK</strong>
              </div>

              <ProjectDescription>
                {project.projectInfo.techStack.map((tech, index) => (
                  <React.Fragment key={index}>
                    <div>{tech}</div>
                  </React.Fragment>
                ))}
              </ProjectDescription>

              <br></br>

              <div>
                <strong>CHALLENGES & HIGHLIGHTS</strong>
              </div>
              <ProjectDescription>
                {project.projectInfo.challenges.map((challenge, index) => (
                  <React.Fragment key={index}>
                    <div>{challenge}</div>
                  </React.Fragment>
                ))}
              </ProjectDescription>

              <br></br>

              <div>
                <strong>LESSONS LEARNED</strong>
              </div>
              <ProjectDescription>
                {project.projectInfo.lessons}
              </ProjectDescription>
            </IntroTextContainer>
          </ProjectGrid>
        </PortfolioItem>
        {/* </Section> */}
      </div>
    </>
  );
};

export default NewProductPage;
