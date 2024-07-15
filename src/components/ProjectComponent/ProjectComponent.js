import React from "react";
import { Link } from "react-router-dom";

import {
  ProjectDescript,
  ProjectImg,
  ProjectImgWrapper,
  ProjectItem,
  ProjectText,
  ProjectTitle,
} from "./ProjectComponent.elements";
import { ButtonTest } from "../../GlobalStyles.styles";

const ProjectComponent = ({ project }) => {
  return (
    <ProjectItem>
      <ProjectImgWrapper>
        <ProjectImg loading="lazy" src={project.img}></ProjectImg>
      </ProjectImgWrapper>

      <ProjectText>
        <ProjectTitle>
          <strong>{project.title}</strong>
        </ProjectTitle>
        <ProjectDescript>{project.description}</ProjectDescript>
        {/* <button>demo</button> */}
        {/* <button>code</button> */}
        <Link to={project.link}>
          {/* <button>Learn More </button> */}
          <ButtonTest>Learn More</ButtonTest>
        </Link>
      </ProjectText>
    </ProjectItem>
  );
};

export default ProjectComponent;
