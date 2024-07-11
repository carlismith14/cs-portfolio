import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { ButtonTest } from "../../GlobalStyles.styles";

import { BackContainer } from "./old/Work.elements";

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

const ProjectPage = ({ project }) => {
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
      <BackContainer onClick={handleBackButtonClick}>
        <ButtonTest>
          <MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
        </ButtonTest>
      </BackContainer>
      <div style={{ margin: "auto", minHeight: "80vh", display:"grid", placeContent:"center" }}>
        {/* <div style={{ width: "80%", margin: "auto", marginTop:"1em" }}>
          <TopLine2>FEATURED PROJECT</TopLine2>

          <TitleAbout2>
            <strong>{project.title}</strong>
          </TitleAbout2>
        </div> */}

        <SectionAbout2>
          <TopLine2>FEATURED PROJECT</TopLine2>
          <TitleAbout2>
            <strong>{project.title}</strong>
          </TitleAbout2>
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
                <div style={{display:"inline"}}>
                {tech}
                {index !== project.projectInfo.techStack.length - 1 && ' | '}
                  
                  </div>
                {/* <br></br> */}


              </React.Fragment>
            ))}

            <br></br>
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
      </div>
    </>
  );
};

export default ProjectPage;
