import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Download,
} from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* =================================================
          HERO CONTENT
      ================================================= */}

      <div className="hero-content">

        {/* =================================================
            HERO TEXT
        ================================================= */}

        <motion.div
          className="hero-text"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="small-label">
            ASPIRING DEVOPS ENGINEER
          </span>

          <h1>
            Hi, I'm
            <br />
            <span>Vinayak Raval.</span>
          </h1>

          <p>
            I'm a Computer Science Engineering student
            focused on cloud computing, DevOps and
            automation. I build hands-on projects using
            modern development and infrastructure tools.
          </p>


          {/* =================================================
              ACTION BUTTONS
          ================================================= */}

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              <span>View My Work</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download="Vinayak_Raval_Resume.pdf"
              className="resume-button"
            >
              <Download size={15} />
              <span>Resume</span>
            </a>

          </div>
        </motion.div>


        {/* =================================================
            HERO IMAGE
        ================================================= */}

        <motion.div
          className="hero-image"
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="image-frame">
            <img
              src="/images/profile.png"
              alt="Portrait of Vinayak Raval"
            />
          </div>


          {/* =================================================
              FLOATING TERMINAL
          ================================================= */}

          <motion.div
            className="floating-terminal"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>~/vinayak/devops</span>

            <span className="terminal-play">
              <Play size={11} />
            </span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}