import React from "react";
import { Section } from "../../../GlobalStyles.styles";
import { Img, Title, Subtitle, PortfolioItem } from "../Work.elements";
import portfolio1 from "../../../images/portfolio-01.jpg";
import portfolioDetails from "../../../images/portfolio-details.jpg";
import { Section2 } from "./Work.elements copy";

const WorkOLD = () => {
  return (
    <>
      <Section>
        <Section2>

    
        <Title>
          the Title of <strong> my project</strong>
        </Title>
        <Subtitle>a Short Subtitle</Subtitle>
        <Img src={portfolio1}></Img>
        </Section2>
        <PortfolioItem>
          {/* <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit placeat illum asperiores quia fugiat unde cumque ea
            doloribus accusantium? Neque delectus repellendus incidunt,
            distinctio dignissimos molestias culpa fugiat perspiciatis
            laboriosam!
          </p> */}
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
        </PortfolioItem>
      </Section>
    </>
  );
};

export default WorkOLD;
