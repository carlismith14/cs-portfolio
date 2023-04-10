import React from 'react'
import { ProjectDescript, ProjectImg, ProjectItem, ProjectText, ProjectTitle } from './ProjectComponent.elements'










const ProjectComponent = ({project}) => {
  return (
    <ProjectItem>
        <ProjectImg src={project.img}></ProjectImg>
         
        <ProjectText>
        <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescript>{project.description}</ProjectDescript>
            <button>demo</button>
            <button>code</button>
        </ProjectText>
    </ProjectItem>  )
}

export default ProjectComponent