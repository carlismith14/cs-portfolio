import React from 'react'
import Work from '../../components/Work/Work';
import Featured from '../../components/Featured/Featured';
import { projectOne } from "../Home/ProjectData";


const WorkPage = () => {
  return (
    <>
   <Work />
   {/* <Featured project={projectOne} id="work"></Featured> */}
    </>
  )
}

export default WorkPage;
