import React from "react";
import {
  Section,
  Title,
  Subtitle,
  Page,
  ProjectItem,
  ProjectVid,
  ProjectGrid,
  ProjectVidContainer,
  ProjectDescription,
  IntroTextContainer,
  ProjectImg,
  ButtonContainer,
  BackContainer,
} from "./Work.elements";
import video from "../../images/philipsscreendemo.mov";

import puntaCana from "../../images/pc.png";
import { Heading, List, Text1 } from "./PuntaCana.elements";

import { Link } from "react-router-dom";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { ButtonTest } from "../../GlobalStyles.styles";

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

const PuntaCana = () => {
  return (
    <>
      <Page>
        <BackContainer onClick={handleBackButtonClick}>
          <ButtonTest>
            <MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
          </ButtonTest>
          {/* <MdOutlineArrowBackIosNew onClick={handleBackButtonClick}></MdOutlineArrowBackIosNew> */}
        </BackContainer>

        {/* <ButtonTest>
          <MdOutlineArrowBackIosNew onClick={handleBackButtonClick}></MdOutlineArrowBackIosNew>
    Back
          </ButtonTest> */}

        <ProjectGrid center>
          <Section>
            <Title>
              {" "}
              Punta <strong>Cana</strong>
            </Title>
            <Subtitle>responsive restaurant website</Subtitle>
          </Section>

          <ProjectVidContainer>
            <ProjectImg src={puntaCana}></ProjectImg>
            {/* <ButtonContainer>
              <Link to="#">
                <button>Demo Link</button>
              </Link>

              <Link to="#">
                <button>GitHub Repository</button>
              </Link>
            </ButtonContainer> */}

            <ButtonContainer>
              {/* <button>demo</button> */}
              {/* <button>code</button> */}
              <Link
                to="https://punta-cana-restaurant.netlify.app/"
                target="blank"
              >
                <ButtonTest>Demo Link</ButtonTest>
              </Link>

              <Link
                to="https://github.com/carlismith14/puntacana"
                target="blank"
              >
                <ButtonTest>
                  Github
                  <FaGithubSquare></FaGithubSquare>
                </ButtonTest>
              </Link>
            </ButtonContainer>
          </ProjectVidContainer>

          <IntroTextContainer>
            <ProjectDescription>
              The Punta Cana website was my first real-world development project
              and allowed me to showcase my skills in HTML, CSS and Javascript,
              particularly in responsive design.
            </ProjectDescription>

            <Heading> MY ROLE</Heading>
            <Text1> Developer & Web Designer</Text1>

            <Heading> Tech Stack</Heading>
            <List>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Netlify</li>
            </List>

            <Heading> Challenges & Highlights</Heading>

            <List>
              <li>Responsive Navigation Bar</li>
              <li>Menu Display via CSS Grid</li>
              <li>Fixed Background</li>
              <li>BEM Naming Conventions</li>
            </List>

            <Heading>LESSONS LEARNED</Heading>
            <Text1>
              My first real-world website project in Punta Cana taught me two
              critical lessons. First, the significance of staying organized by
              using BEM naming conventions, which improved code clarity and
              teamwork. Second, I discovered the value of frameworks for better
              project structure and management. Moreover, this experience helped
              me realize that I have a stronger affinity for web development
              compared to web design.
            </Text1>
            {/* bem naming conventions, framework file organization & compartmentalization. made me realize i prefered development over design. */}
          </IntroTextContainer>
        </ProjectGrid>
      </Page>
    </>
  );
};

export default PuntaCana;
