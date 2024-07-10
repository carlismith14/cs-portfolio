import React from "react";
import { Link } from "react-router-dom";

import {
  ProjectDescript,
  ProjectImg,
  ProjectItem,
  ProjectText,
  ProjectTitle,
} from "./ProjectComponent.elements";
import { ButtonTest } from "../../GlobalStyles.styles";

const ProjectComponent = ({ project }) => {
  return (
    <ProjectItem>
      <div
        style={{
          backgroundColor: "#fae7bb",
          // backgroundColor:"#a0c7d4e5",

          padding: "2em",

          borderRadius: "10px",
        }}
      >
        <ProjectImg src={project.img}></ProjectImg>
      </div>

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
