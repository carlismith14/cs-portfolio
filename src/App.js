import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, lightTheme, darkTheme } from "./GlobalStyles.styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";
import WorkPage from "./pages/Work/WorkPage";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Mode } from "./components";
import PuntaCana from "./components/Work/PuntaCana";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AiChatbot from "./components/Work/AiChatbot";
import Eprocess from "./components/Work/Eprocess";
import CMSDashboard from "./components/Work/CMSDashboard";
import Test from "./components/Work/Test";
import { projectOne } from "./pages/Home/ProjectData";
import NewProductPage from "./components/Work/NewProductPage";
import WorkOLD from "./components/Work/old/Work copy";
import ProjectPage from "./components/Work/ProjectPage";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const dataTestProjects = [
    { projectName: "intellivue1" },
    { projectName: "aichatbot1" },
    { projectName: "puntacana1" },
  ];

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <ScrollToTop />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {/* <Mode theme={theme} toggleTheme={toggleTheme}></Mode> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/work" element={<WorkPage />} /> */}

          {/* <Route path="/intellivue" element={<WorkPage />} />
          <Route path="/aichatbot" element={<AiChatbot />} />
          <Route path="/eprocess" element={<Eprocess />} />
          <Route path="/puntacana" element={<PuntaCana />} />
          <Route path="/cmsdashboard" element={<CMSDashboard />} /> 
          
          <Route path="/workcopy" element={<WorkOLD />} />

          {/* {dataTestProjects.map((project) => (
            <Route
              key={project.projectName}
              path={project.projectName}
              element={<Test project={project} />}
            />
          ))} */}

          {projectOne.map((project) => (
            <Route
              key={project.link}
              path={project.link}
              // element={<Test project={project} />}
              // element={<NewProductPage project={project} />}
              element={<ProjectPage project={project} />}
            />
          ))}
        </Routes>
        <Footer theme={theme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
