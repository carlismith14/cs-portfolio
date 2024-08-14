import React, { useRef } from "react";
import {
  SectionFeature,
  TitleFeature,
  ToplineFeatured,
} from "./Featured.elements";
import ProjectComponent from "../ProjectComponent/ProjectComponent";

const Featured = ({ project }) => {
  const projectArry = project.map((proj) => {
    return <ProjectComponent project={proj}></ProjectComponent>;
  });

  const workSectionRef = useRef(null);

  const scrollToWorkSection = () => {
    if (workSectionRef.current) {
      workSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="work" ref={workSectionRef}>
      <SectionFeature>
        <ToplineFeatured>Featured Projects</ToplineFeatured>
        <TitleFeature>A range of my work</TitleFeature>

        {projectArry}
      </SectionFeature>
    </div>
  );
};

export default Featured;
