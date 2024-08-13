import React from "react";
import { About, Featured, Skills } from "../../components";
import { projectData } from "../../ProjectData";

const Home = () => {
  return (
    <>
      <About></About>
      <Skills></Skills>
      <Featured project={projectData} id="work"></Featured>
    </>
  );
};

export default Home;
