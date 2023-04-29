import React,{useContext} from 'react';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import './Projects.css';

import { themeContext } from "../../Context";
import Contact from '../Contact/Contact';

const Project = () => {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className='projects'> 

    <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
    <span>Portfolio</span>


    <div className="projects-row1">
      <div className="project1">
           
      </div>

      <div className="project2">
        
      </div>

      <div className="project3">
        
      </div>

    </div>

    <div className="projects-row2">
      <div className="project4">

      </div>
      <div className="project5">

      </div>
      <div className="project6">

      </div>
    </div>

    <Contact/>
    
    </div>
  )
}

export default Project