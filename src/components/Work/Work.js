import React from "react";
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
} from "./Work.elements";
import portfolio1 from "../../images/portfolio-01.jpg";
import portfolioDetails from "../../images/portfolio-details.jpg";
import video from "../../images/philipsscreendemo.mov";

const Work = () => {
  return (
    <>
      <Page>
        <ProjectGrid>
          {/* <ProjectTitle>Title of Project</ProjectTitle> */}

          <Section>
            <Title>
              Philips <strong>IntelliVue</strong>
              {/* <strong>Philips IntellVue</strong>    */}
            </Title>
            <Subtitle>telemetry device simulation</Subtitle>
            {/* <Img src={portfolio1}></Img> */}
          </Section>

          <ProjectVidContainer>
            <ProjectVid
              disablePictureInPicture
              //  src={RespPageWave}
              autoPlay
              playsInline
              loop
              muted
              loading="eager"
              style={{ width: "90%", margin: "auto" }}
              src={video}
              autoPlay
            ></ProjectVid>
          </ProjectVidContainer>

        <ProjectDescripContainer>
            <ProjectDescription>
              {/* The IntelliVue Sim File was created with React and acts as hybrid
              mobile/web application that simulates the look, feel and
              functionality of Philips's transportable patient monitoring
              system. */}
              The IntelliVue Sim File, built with React, serves as a versatile
              hybrid mobile/web application. It mirrors the form, function, and
              user experience of Philips's portable patient monitoring system.
              The goal was to create a user-friendly and accessible tool for
              nurses and hospital staff. This application allows them to become
              familiar with the monitor's operation using their mobile devices,
              simplifying their workflow and enhancing convenience.
            </ProjectDescription>
            </ProjectDescripContainer>

            <IntroTextContainer>
            <div>
              <strong>MY ROLE </strong>
            </div>
            <ProjectDescription>
              Sole Developer & Project Manager
            </ProjectDescription>

            {/* <div>
              <strong>PROJECT PURPOSE</strong>
            </div> */}
            <ProjectDescription>
              {/* The application was designed to provide nurses and hospital staff
              with a user-friendly and convenient way to familiarize themselves
              with the monitor using their mobile devices. */}
            </ProjectDescription>

            <br></br>

            <div>
              <strong>TECH STACK</strong>
            </div>

            <ProjectDescription>
              React
              <br></br>
              React Router
              <br></br>
              React Context API
              <br></br>
              Styled Components
              <br></br>
              Capacitor
              <br></br>
            </ProjectDescription>

            <br></br>

            <div>
              <strong>CHALLENGES & HIGHLIGHTS</strong>
            </div>
            <ProjectDescription>
              Managing State
              <br></br>
              Event Handling
              <br></br>
              Enabling Password Protection
              <br></br>
              Building & Optimizing for Native
              <br></br>
            </ProjectDescription>

            <br></br>

            <div>
              <strong>LESSONS LEARNED</strong>
            </div>
            <ProjectDescription>
              {/* architecture, client communication, learning on the go, reusable code,   */}
              While I stepped into the role with a foundation of skills, much of
              my growth happened in real-time, an invaluable experience that
              enhanced my knowledge far more than any tutorial ever could. I had
              the privilege of direct client engagement, taking charge of
              timelines, and shaping expectations. Looking ahead, I've come to
              appreciate the critical significance of robust project
              architecture and the art of crafting reusable code, lessons that
              will undoubtedly define my future projects.
            </ProjectDescription>
          </IntroTextContainer>
        </ProjectGrid>

        {/* <Section>
        <Title>
          <strong>Philips IntellVue</strong>
          the Title of <strong> my project</strong>
        </Title>
        <Subtitle>telemetry device simulation</Subtitle>
        <Img src={portfolio1}></Img>
      </Section> */}

        {/* <PortfolioItem>
        <video 
           disablePictureInPicture
          //  src={RespPageWave}
           autoPlay
           playsInline
           loop
           muted
           loading="eager"
           style={{ width: "90%", margin: "auto" }}
        
        src={video} autoPlay></video>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit placeat illum asperiores quia fugiat unde cumque ea
          doloribus accusantium? Neque delectus repellendus incidunt, distinctio
          dignissimos molestias culpa fugiat perspiciatis laboriosam!
        </p>
        <img src={portfolioDetails} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          illum mollitia libero excepturi? Maxime autem, amet cumque ad
          voluptatem repellendus aliquam consequatur minus quae voluptatum
          asperiores odio fuga. Obcaecati, velit?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa saepe
          quisquam alias animi cum doloremque labore corrupti cumque expedita
          obcaecati reprehenderit nisi eligendi excepturi quidem tenetur
          laboriosam, harum iste dolores?
        </p>
      </PortfolioItem> */}

        {/* <ProjectItem> */}

        {/* <video 
           disablePictureInPicture
          //  src={RespPageWave}
           autoPlay
           playsInline
           loop
           muted
           loading="eager"
           style={{ width: "90%", margin: "auto" }}
        
        src={video} autoPlay></video> */}
        {/* </ProjectItem> */}
      </Page>
    </>
  );
};

export default Work;
