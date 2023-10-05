import React, {useRef} from "react";
import { About,  Featured,  Layout, Projects, Skills } from "../../components";
// import { homeObjOne } from "./Data";
import { projectOne } from "./ProjectData";

const Home = () => {




  return (
    <>
      <About></About>
      <Skills></Skills>
      <Featured project={projectOne} id="work" ></Featured>
    </>
  );
};

export default Home;
