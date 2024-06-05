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

import eprocess from "../../images/eProcess2.png";

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

const Eprocess = () => {
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
              eProcess <strong>Development</strong>
            </Title>
            <Subtitle>responsive restaurant website</Subtitle>
          </Section>

          <ProjectVidContainer>
            <ProjectImg src={eprocess}></ProjectImg>
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
                // to="https://punta-cana-restaurant.netlify.app/"
                to="https://eprocessdevelopment.com/"
                target="blank"
              >
                <ButtonTest>Site Link</ButtonTest>
              </Link>

              <Link
                // to="https://github.com/carlismith14/puntacana"
                to="#"
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
              Revamping the business website for the company I've been contracted with offered an insightful journey into website redesign. Identifying critical shortcomings in their previous site laid the groundwork for a comprehensive overhaul. Leveraging Next.js, we prioritized optimizing the new site for page load efficiency, accessibility,  and SEO performance. This project not only addressed immediate needs but also laid a solid foundation for eProcess Development’s digital presence moving forward.
            </ProjectDescription>

            <Heading> MY ROLE</Heading>
            <Text1> Developer & Web Designer</Text1>

            <Heading> Tech Stack</Heading>
            <List>
              <li>Next.js</li>
              <li>Next.js App Router</li>
              <li>Tailwind CSS</li>
              <li>Nodemailer</li>
              <li>AWS</li>

            </List>

            <Heading> Challenges & Highlights</Heading>

            <List>
              <li>Implementation of Contact Form</li>
              <li>Establishing Site Infastructure & Framework </li>
              <li>Optimizing towards Performance, Accessibility & SEO Performance </li>
              <li>Deployment via AWS</li>
            </List>

            <Heading>LESSONS LEARNED</Heading>
            <Text1>
            The process of rebuilding our company's website provided invaluable lessons, particularly in three key areas. Firstly, adopting Next.js revealed its transformative power in simplifying development workflows and optimizing performance. Secondly, embracing Tailwind CSS showcased its remarkable ease and flexibility, enabling rapid prototyping and seamless design adjustments. Lastly, navigating the deployment process on AWS deepened my understanding of cloud infrastructure management, emphasizing the importance of scalability and reliability. These experiences underscored the significance of leveraging the right technologies to achieve efficient, flexible, and robust web solutions.
            </Text1>
            {/* bem naming conventions, framework file organization & compartmentalization. made me realize i prefered development over design. */}
          </IntroTextContainer>
        </ProjectGrid>
      </Page>
    </>
  );
};

export default Eprocess;
