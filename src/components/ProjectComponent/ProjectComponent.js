import React from 'react'
import { Link } from "react-router-dom";

import { ProjectDescript, ProjectImg, ProjectItem, ProjectText, ProjectTitle } from './ProjectComponent.elements'
import { ButtonTest } from '../../GlobalStyles.styles';










const ProjectComponent = ({project}) => {
  return (
    <ProjectItem>
        <ProjectImg src={project.img}></ProjectImg>
         
        <ProjectText>
        <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescript>{project.description}</ProjectDescript>
            {/* <button>demo</button> */}
            {/* <button>code</button> */}
            <Link to={project.link}>
                {/* <button>Learn More </button> */}
                <ButtonTest>Learn More</ButtonTest>
            </Link>
        </ProjectText>
    </ProjectItem>  )
}

export default ProjectComponent