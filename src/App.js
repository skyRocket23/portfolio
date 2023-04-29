import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
// import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Intro1 from "./components/Intro1/Intro1";
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Project from './components/Project/Project';
import Skills from './pages/Skills';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      {/* <Intro1/> */}
      {/* <Contact /> */}
     
      <Routes>
        <Route path="" element={<Homepage/>} />
        <Route path="/projects" element={<Project/>}/>
        {/* <Route path="/skills" element={<Skills/>}/> */}
      </Routes>

       <Footer />
    </div>
  );
}

export default App;
