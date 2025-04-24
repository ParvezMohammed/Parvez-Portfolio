import './Projects.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faCode, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion";

const projectSecVar = {
  hidden : {opacity:0},
  visible: {
      opacity:1,
      transition :{
          staggerChildren : 0.5,
          delay :0.2
      }
  },
}

const h2variant ={
  hidden:{opacity:0,
          y:75
  },
  visible:{opacity:1,
      y:0,
      ease:"easeOut",
  }
} 

function Projects() {
  return (
    <div className="projects">
      <motion.h2 className='intro' initial="hidden" animate="visible" variants={h2variant}>Projects I have worked on.</motion.h2>
      <motion.section initial="hidden" animate="visible" variants={projectSecVar}>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank" rel="noreferrer"><h2>Lead Management System </h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon"/>
          A streamlined lead and employee management system for HR operations.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
            MERN stack
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2025
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/ParvezMohammed/Lead-Management-hr-admin" target="_blank" rel="noreferrer"> Git Repository</a>
          </p>
        </motion.div>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank" rel="noreferrer"><h2>CNAPP Security Dashboard</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
          Modern, interactive dashboard provides real-time insights into your cloud security posture and container workload protection.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
          React JS, Material-UI, Redux, Recharts, CSS, HTML
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            202
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/ParvezMohammed/FE_Trainee_Project" target="_blank" rel="noreferrer"> Git Repository</a>
          </p>
        </motion.div>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank" rel="noreferrer"><h2>Youtube Clone</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
          Youtube clone app developed with the help of Namaste React series by Akshay Saini.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
          ReactJS, Redux, JavaScript, TailwindCSS, HTML.
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2023
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/ParvezMohammed/Namaste_Youtube" target="_blank" rel="noreferrer"> Git Repository</a>
          </p>
        </motion.div>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank" rel="noreferrer"><h2>Tic Tac Toe game</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
          A simple Tic Tac Toe game built as part of the JavaScript Series by Shradha Khapra.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
          HTML, CSS, and JavaScript.
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2022
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/ParvezMohammed/Tic-Tac-Toe" target="_blank" rel="noreferrer"> Git Repository</a>
          </p>
        </motion.div>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank" rel="noreferrer"><h2>Stone Paper Scissor game</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
          A simple Stone Paper Scissor game built as part of the JavaScript Series by Shradha Khapra.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
          HTML, CSS, and JavaScript.
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2022
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/ParvezMohammed/Stone-Paper-Scissor" target="_blank" rel="noreferrer"> Git Repository</a>
          </p>
        </motion.div>
        <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank" rel="noreferrer"><h2>Currency Converter</h2></a>
          <p><FontAwesomeIcon icon={faCircleInfo} className="icon" />
          A simple currency converter built as part of the JavaScript Series by Shradha Khapra.
          </p>
          <p><FontAwesomeIcon icon={faCode} className="icon" />
          HTML, CSS, and JavaScript.
          </p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2022
          </p>
          <p>
          <FontAwesomeIcon icon={faGithub} className="icon" />
            <a href="https://github.com/ParvezMohammed/currency_convertor" target="_blank" rel="noreferrer"> Git Repository</a>
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Projects;