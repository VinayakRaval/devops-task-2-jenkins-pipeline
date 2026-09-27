import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about section-red">
      <div className="section-container">

        {/* =================================================
            PROFILE IMAGE
        ================================================= */}

        <motion.div
          className="about-image"
          initial={{
            opacity: 0,
            y: 80,
            rotate: -8,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: -4,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="portrait-card"
            animate={{
              y: [0, -10, 0],
              rotate: [-4, -2, -4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            {/* Red Glow */}
            <div className="portrait-glow"></div>

            {/* Number */}
            <div className="portrait-number">
              01
            </div>

            {/* Image */}
            <div className="portrait-image-wrap">
              <img
                src="/images/profile.png"
                alt="Vinayak Raval"
              />
            </div>

            {/* Bottom Label */}
            <div className="portrait-bottom">
              <span>VINAYAK</span>
              <span>DEVOPS</span>
            </div>

          </motion.div>
        </motion.div>


        {/* =================================================
            ABOUT CONTENT
        ================================================= */}

        <motion.div
          className="about-content"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span className="section-tag">
            ABOUT ME
          </span>

          <h2>
            Building reliable
            <br />
            <strong>cloud & DevOps solutions.</strong>
          </h2>

          <p>
            I'm Vinayak Raval, a Computer Science Engineering
            student and aspiring DevOps Engineer with a strong
            interest in cloud infrastructure, automation and
            continuous delivery.
          </p>

          <p>
            I have hands-on experience through academic and
            personal projects using AWS, Linux, Docker,
            Kubernetes, Jenkins and Terraform. I enjoy
            automating development workflows and learning how
            applications move from code to production.
          </p>

          <p>
            My goal is to build practical, scalable and
            maintainable infrastructure while continuously
            improving my skills in cloud computing,
            containerization, CI/CD and DevOps practices.
          </p>


          {/* =================================================
              STATS
          ================================================= */}

          <div className="about-stats">

            <div>
              <strong>10+</strong>
              <span>Technologies</span>
            </div>

            <div>
              <strong>5+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>3+</strong>
              <span>Cloud & DevOps Tools</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}