import './History.css'
import React from "react";
import {motion} from "framer-motion";

const historySecVar = {
        hidden : {opacity:0},
        show : {
            opacity:1,
            transition :{
                staggerChildren : 0.5,
                delay:0.2
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

const pvariant ={
    hidden:{opacity:0,
            x:-100
    },
    show:{opacity:1,
        x:0,
        ease:"easeOut",
    }
} 

function History(){
    
    return(
        <div className="about">
            <motion.h2 className='intro' initial="hidden" animate="visible" variants={h2variant}>A breif about my education, certifications and learning.</motion.h2>
            <motion.section variants={historySecVar} initial="hidden" //the children just inherit this properties
            animate="show" className="history" >
                <motion.p variants={pvariant}>
                Master of Business Administartion (Human Resource Management)
                <p className='title'>Jain University, Bangalore</p>
                <span className='dates'>2021-2023</span>
                </motion.p>
                <motion.p variants={pvariant}>
                Bachelor of Technology - Electronics and Communication Engineering
                <p className='title'>SRKR Engineering College, Bhimavaram</p>
                <span className='dates'>2016-2020</span>
                </motion.p>
                <motion.p variants={pvariant}>
                Namaste React by Akshay Saini
                <a href="https://namastedev.com" target="_blank" rel="noopener noreferrer">
                <p className='title'>Certificate</p></a>
                <span className='dates'>2024</span>
                </motion.p>
                <motion.p variants={pvariant}>
                The Web Developer Bootcamp 2023 by Colt Steele
                <a href="https://www.udemy.com"target="_blank"rel="noopener noreferrer"><p className='title'>Certificate</p></a>
                <span className='dates'>2023</span>
                </motion.p>
                <motion.p variants={pvariant}>
                Namaste Javascript by Akshay Saini
                <a href="https://namastedev.com" target="_blank" rel="noopener noreferrer">
                <p className='title'>Certificate</p></a>
                <span className='dates'>2022</span>
                </motion.p>
                <motion.p variants={pvariant}>
                Fundamentals of Programming in JavaScript and Advanced JavaScript concepts (ES6+)
                <p className='title'>Self-Learning</p>
                <span className='dates'>2021</span>
                </motion.p>
                <motion.p variants={pvariant}>
                SQL Queries and Database Fundamentals
                <p className='title'>Self-Learning</p>
                <span className='dates'>2021</span>
                </motion.p>
            </motion.section>
        </div>
    );
}

export default History;