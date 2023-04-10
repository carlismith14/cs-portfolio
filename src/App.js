import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, lightTheme, darkTheme } from "./GlobalStyles.styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";
import WorkPage from "./pages/Work/WorkPage";

import { 
  MdOutlineLightMode,
  MdOutlineDarkMode } from "react-icons/md";
import { Mode } from "./components";


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {/* <Mode theme={theme} toggleTheme={toggleTheme}></Mode> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
