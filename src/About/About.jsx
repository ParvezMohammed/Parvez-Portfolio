import "./About.css";
import selflight from "../assets/self-light.png";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "React", icon: faReact },
  { name: "Node.js", icon: faNodeJs },
  { name: "JavaScript", icon: faJs },
  { name: "SQL", icon: faDatabase },
  { name: "Git", icon: faGitAlt },
  { name: "GitHub", icon: faGithub },
];

const h2variant ={
  hidden:{opacity:0,
          y:75
  },
  visible:{opacity:1,
      y:0,
      ease:"easeOut",
  }
} 

const pvariant ={
  hidden:{opacity:0,
          x:-100
  },
  show:{opacity:1,
      x:0,
      ease:"easeOut",
  }
}

const imgvariant ={
  hidden:{opacity:0,
          x:100
  },
  show:{opacity:1,
      x:0,
      ease:"easeOut",
  }
}

function About() {
  return (
    <div>
      <div className="About">
        <div>
          <motion.h2  initial="hidden" animate="visible" variants={h2variant}>Hey there! 👨‍💻✨</motion.h2>
          <motion.p className="intro-para" variants={pvariant} initial="hidden" animate="show">
            Welcome to my space where clean code meets clear purpose. I'm a React JS Developer who believes in building seamless user experiences, one component at a time. From thoughtful UI design to efficient state management, I’m always exploring new ways to grow and create.
            If you're into clean code, cool tech, and constant learning—you’ll feel right at home here. 💻🚀🔥🎮🌿
          </motion.p>
        </div>
        <motion.div variants={imgvariant} initial="hidden" animate="show">
          <img src={selflight} alt="pixel-selftag" />
        </motion.div>
      </div>
      <div>
        <motion.div
          className="skills-marquee"
          animate={{ x: ["5%", "-100%"] }}
          transition={{ repeat: Infinity, repeatType:"loop",duration: 8, ease: "linear" }}
        >
          <div className="skills-wrapper">
            {skills.concat(skills).map((skill, index) => (
              <span key={index} className="skill-item">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />{" "}
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
