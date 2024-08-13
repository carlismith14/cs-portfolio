import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, lightTheme, darkTheme } from "./GlobalStyles.styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import { projectData } from "./ProjectData";
import ProjectPage from "./components/Work/ProjectPage";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <ScrollToTop />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />

          {projectData.map((project) => (
            <Route
              key={project.link}
              path={project.link}
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
