import { motion } from "framer-motion";
import {
  BookOpen,
  Cloud,
  Container,
  GitBranch,
  Terminal,
} from "lucide-react";
import "./Certifications.css";

const learning = [
  {
    number: "01",
    title: "Cloud Computing",
    description:
      "Currently building hands-on knowledge of AWS services, cloud infrastructure and deployment.",
    icon: Cloud,
  },
  {
    number: "02",
    title: "Containerization",
    description:
      "Practicing Docker and container-based application deployment through personal projects.",
    icon: Container,
  },
  {
    number: "03",
    title: "CI/CD & Automation",
    description:
      "Learning Jenkins, GitHub workflows and automated build and deployment pipelines.",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Linux & DevOps",
    description:
      "Continuously improving Linux, shell scripting, infrastructure and DevOps fundamentals.",
    icon: Terminal,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications section-red"
    >
      <div className="section-container">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          className="center-heading"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
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
            CURRENTLY LEARNING
          </span>

          <h2>
            Learning &<br />
            <strong>Growing.</strong>
          </h2>

          <p>
            I am continuously building my skills through
            hands-on projects, technical practice and
            learning in cloud computing and DevOps.
          </p>
        </motion.div>


        {/* =================================================
            LEARNING CARDS
        ================================================= */}

        <div className="learning-grid">

          {learning.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="learning-card"
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                }}
              >

                {/* Icon */}

                <div className="learning-icon">
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                  />
                </div>


                {/* Content */}

                <div className="learning-content">

                  <div className="learning-top">
                    <span className="learning-number">
                      {item.number}
                    </span>

                    <span className="learning-status">
                      LEARNING
                    </span>
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </motion.article>
            );
          })}

        </div>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          className="learning-footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <BookOpen
            size={17}
            strokeWidth={1.8}
          />

          <span>
            Certifications will be added as I complete them.
          </span>
        </motion.div>

      </div>
    </section>
  );
}