import React, { useContext } from "react";
import "./Intro1.css";
import { AiFillGithub } from 'react-icons';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro1 = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
        <div className="i-name">
          <span style={{ display: "inline-block", color: darkMode ? "white" : "" }}>Namaste! &nbsp;I &nbsp;am</span>
         <span style={{ display: "inline-block" }}>&nbsp; &nbsp;skyRocket23</span>

        </div>

        <div className="i-details">
            <p>Passionate about turning your ideas into reality with MERN Stack Development! With over 1000 problems solved on Codeforces and LeetCode, I have honed my problem-solving skills and developed multiple projects. Eager to learn new things and excited for a new challenge, I am on the lookout for an opportunity to bring my expertise to your team. Let's create something amazing together!</p>
        </div>

        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
       

        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      
      
    </div>
  );
};

export default Intro1;
