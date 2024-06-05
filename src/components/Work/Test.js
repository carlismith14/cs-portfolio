import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { Section } from "../../GlobalStyles.styles";

const Test = ({ project }) => {
  const mediaItems = [video, pic1, philipsproject];

  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((currentItem + 1) % mediaItems.length);
  };

  const prevItem = () => {
    setCurrentItem((currentItem - 1 + mediaItems.length) % mediaItems.length);
  };

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
    <Section>

   
      {/* <Page> */}
        <BackContainer onClick={handleBackButtonClick}>
          <ButtonTest>
            <MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
          </ButtonTest>
        </BackContainer>

        {/* <Title>{project.title}</Title>
        <Subtitle>telemetry device simulation</Subtitle> */}

        <ProjectGrid>
          <Section>
            {/* <ProjectTitle>{project.title}</ProjectTitle> */}
            <Title>{project.title}</Title>
            <Subtitle>telemetry device simulation</Subtitle>
          </Section>

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
            <ProjectDescription>{project.projectInfo.intro}</ProjectDescription>

            <br></br>

            <div>
              <strong>MY ROLE </strong>
            </div>

            <ProjectDescription>{project.projectInfo.role}</ProjectDescription>

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
      {/* </Page> */}
      </Section>
    </>
  );
};

export default Test;
