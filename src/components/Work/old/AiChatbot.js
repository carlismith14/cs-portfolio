import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Section,
  Img,
  Title,
  Subtitle,
  PortfolioItem,
  Page,
  ProjectItem,
  ProjectVid,
  ProjectGrid,
  ProjectTitle,
  ProjectVidContainer,
  ProjectDescription,
  IntroTextContainer,
  ProjectDescripContainer,
  Container,
  ButtonContainer,
  Disclaimer,
  BackContainer,
  DisclaimerText,
} from "./Work.elements";

import { Heading, List, Text1 } from "./PuntaCana.elements";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaJs,
  FaSass,
  FaGitSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

import portfolio1 from "../../images/portfolio-01.jpg";
import portfolioDetails from "../../images/portfolio-details.jpg";
import aidemovid from "../../images/projects/aichatbot/ai-demo-video.mov";
import aidemovidmobile from "../../images/projects/aichatbot/ai-demo-video-mobile.mov";

import pic1 from "../../images/portfolio-details.jpg";

import philipsproject from "../../images/projects/philips/philipsmainscreen.png";

import { ProjectImg } from "./Work.elements";

import { MdOutlineArrowBackIosNew } from "react-icons/md";

import { ButtonTest } from "../../../GlobalStyles.styles";

const AiChatbot = () => {
  const mediaItems = [aidemovid, pic1, philipsproject];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const getSrcForScreenSize = () => {
    if (window.innerWidth < 600) {
      return aidemovidmobile;
    } else {
      return mediaItems[currentItem];
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Page>
        {/* <Link to="/">

        <button>back</button>
      </Link> */}

        <BackContainer onClick={handleBackButtonClick}>
          <ButtonTest>
            <MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
          </ButtonTest>
          {/* <MdOutlineArrowBackIosNew onClick={handleBackButtonClick}></MdOutlineArrowBackIosNew> */}
        </BackContainer>

        <ProjectGrid>
          {/* <ProjectTitle>Title of Project</ProjectTitle> */}

          <Section>
            <Title>
              Ai <strong>Chatbot</strong>
              {/* <strong>Philips IntellVue</strong>    */}
            </Title>
            <Subtitle>interactive OpenAi application</Subtitle>
            {/* <Img src={portfolio1}></Img> */}
          </Section>

          {mediaItems[currentItem] && (
            <ProjectVidContainer>
              {mediaItems[currentItem].endsWith(".mov") ? (
                <ProjectVid
                  disablePictureInPicture
                  autoPlay
                  playsInline
                  loop
                  muted
                  loading="eager"
                  style={{ width: "90%", margin: "auto" }}
                  src={getSrcForScreenSize()}

                  //   src={mediaItems[currentItem]}
                ></ProjectVid>
              ) : (
                <ProjectImg
                  src={mediaItems[currentItem]}
                  alt={`Media ${currentItem + 1}`}
                />
              )}

              <Disclaimer>
                <DisclaimerText>
                  *Please note that the demo link and source code for this
                  project are not available due to privacy concerns. However,
                  you are welcome to view screenshots and read the project
                  writeup on the GitHub repository.
                </DisclaimerText>
                {/* *Please note that the demo link and source code for this project
                are not available due to privacy concerns. However, you are
                welcome to view screenshots and read the project writeup on the
                GitHub repository. */}
              </Disclaimer>

              <ButtonContainer>
                {/* <button>demo</button> */}
                {/* <button>code</button> */}
                <Link
                  to="https://github.com/carlismith14/ai-chatbot"
                  target="blank"
                >
                  <ButtonTest>
                    Github
                    <FaGithubSquare></FaGithubSquare>
                  </ButtonTest>
                </Link>
              </ButtonContainer>
            </ProjectVidContainer>
          )}

          <IntroTextContainer>
            <ProjectDescription>
              The AI Chatbot combines the power of AI with proprietary product
              information to act as a company-wide training tool. One of the key
              highlights of this project was the collaborative efforts between
              front-end and back-end engineers. Together, we developed an
              interactive application that leverages OpenAI and offers a
              seamless user experience.
            </ProjectDescription>

            <Heading> MY ROLE</Heading>
            <Text1>Front-end Developer</Text1>

            <Heading> Tech Stack</Heading>
            <List>
              <li>React (Next.js)</li>
              <li>TypeScript</li>
              <li>OpenAi</li>
              <li>Github</li>
            </List>

            <Heading> Challenges & Highlights</Heading>

            <List>
              <li>Responsive Design</li>
              <li>User Authorization</li>
              <li>Data Integration</li>
            </List>

            <Heading>LESSONS LEARNED</Heading>
            <Text1>
              This project marked my first experience working closely with other
              developers, and it emphasized the significance of clear
              communication and coordination. Learning GitHub, including forking
              repositories and submitting pull requests, streamlined our
              collaborative efforts and ensured the seamless integration between
              front-end and back-end components. This experience enhanced my
              technical skills and underscored the pivotal role of teamwork in
              project success.
            </Text1>
          </IntroTextContainer>
        </ProjectGrid>
      </Page>
    </>
  );
};

export default AiChatbot;
