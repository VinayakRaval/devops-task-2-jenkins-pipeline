import { motion } from "framer-motion";
import {
  GraduationCap,
  Cloud,
  Code2,
  Terminal,
} from "lucide-react";
import "./Experience.css";

const journey = [
  {
    period: "2024 — PRESENT",
    title: "B.E. Computer Science & Engineering",
    company: "Education",
    description:
      "Building a strong foundation in computer science, software development, databases, cloud computing and modern technology practices.",
    icon: GraduationCap,
    type: "EDUCATION",
  },
  {
    period: "2025 — PRESENT",
    title: "DevOps & Cloud Projects",
    company: "Hands-on Projects",
    description:
      "Developing practical projects using AWS, Linux, Docker, Kubernetes, Jenkins, Terraform and CI/CD workflows to strengthen real-world DevOps skills.",
    icon: Cloud,
    type: "PROJECTS",
  },
  {
    period: "2024 — PRESENT",
    title: "Continuous Technical Learning",
    company: "Self-Directed Learning",
    description:
      "Continuously learning and practicing cloud infrastructure, containerization, automation, deployment and monitoring through technical projects and hands-on experimentation.",
    icon: Terminal,
    type: "LEARNING",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience section-red"
    >
      <div className="section-container">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          className="center-heading experience-heading"
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="section-tag">
            MY JOURNEY
          </span>

          <h2>
            LEARNING
            <br />
            &amp; GROWTH
          </h2>

          <p>
            My journey so far has focused on building a
            strong technical foundation through education,
            hands-on projects and continuous learning in
            cloud and DevOps.
          </p>
        </motion.div>


        {/* =================================================
            STATUS BADGE
        ================================================= */}

        <motion.div
          className="fresher-badge"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="fresher-dot" />

          <span>
            OPEN TO ENTRY-LEVEL DEVOPS OPPORTUNITIES
          </span>
        </motion.div>


        {/* =================================================
            JOURNEY CARDS
        ================================================= */}

        <div className="experience-grid">

          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="experience-card"
                key={`${item.title}-${index}`}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  delay: index * 0.18,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
              >

                {/* TOP */}

                <div className="experience-card-top">

                  <span className="experience-period">
                    {item.period}
                  </span>

                  <div className="experience-icon">
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                </div>


                {/* TYPE */}

                <span className="experience-type">
                  {item.type}
                </span>


                {/* TITLE */}

                <h3>
                  {item.title}
                </h3>


                {/* CATEGORY */}

                <h4>
                  {item.company}
                </h4>


                {/* DESCRIPTION */}

                <p>
                  {item.description}
                </p>


                {/* BOTTOM */}

                <div className="experience-card-bottom">
                  <span className="experience-line" />

                  <span className="experience-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

              </motion.article>
            );
          })}

        </div>


        {/* =================================================
            FOOTER MESSAGE
        ================================================= */}

        <motion.div
          className="experience-footer"
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
          }}
          transition={{
            delay: 0.8,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Code2
            size={16}
            strokeWidth={1.8}
          />

          <span>
            Learning continuously. Building consistently.
            Preparing for real-world DevOps challenges.
          </span>
        </motion.div>

      </div>
    </section>
  );
}