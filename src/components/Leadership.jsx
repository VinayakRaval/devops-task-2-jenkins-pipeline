import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  GraduationCap,
  Users,
} from "lucide-react";
import "./Leadership.css";

const items = [
  {
    number: "01",
    title: "Technical Projects",
    description:
      "Building practical projects to apply concepts in cloud computing, DevOps, software development and automation.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Hackathons & Events",
    description:
      "Taking part in technical events and hackathons to explore ideas, solve problems and gain practical experience.",
    icon: Trophy,
  },
  {
    number: "03",
    title: "Continuous Learning",
    description:
      "Expanding my knowledge through hands-on practice in AWS, Kubernetes, Docker, CI/CD, Linux and cloud technologies.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "Developing communication and teamwork skills through academic projects, technical activities and collaborative learning.",
    icon: Users,
  },
];

export default function Leadership() {
  return (
    <section className="leadership" id="leadership">
      <div className="section-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="center-heading leadership-heading"
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
            BEYOND THE CLASSROOM
          </span>

          <h2>
            LEARNING &
            <br />
            ENGAGEMENT
          </h2>

          <p>
            Exploring technology through projects,
            technical events, continuous learning and
            collaborative experiences.
          </p>
        </motion.div>


        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="leadership-timeline">

          {/* STATIC TIMELINE */}

          <div
            className="timeline-track"
            aria-hidden="true"
          />

          {/* ANIMATED TIMELINE */}

          <motion.div
            className="timeline-progress"
            initial={{
              height: 0,
            }}
            whileInView={{
              height: "100%",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />


          {/* TIMELINE ITEMS */}

          {items.map((item, index) => {
            const Icon = item.icon;

            const side =
              index % 2 === 0
                ? "timeline-left"
                : "timeline-right";

            return (
              <motion.div
                key={item.number}
                className={`leadership-item leadership-item-${index + 1} ${side}`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.45,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* CARD */}

                <motion.article
                  className="leadership-card"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                >

                  <div className="leadership-card-top">

                    <span className="leadership-number">
                      {item.number}
                    </span>

                    <motion.div
                      className="leadership-icon"
                      initial={{
                        rotate: -15,
                        scale: 0.8,
                      }}
                      whileInView={{
                        rotate: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.15 + 0.25,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                      />
                    </motion.div>

                  </div>


                  <h3>{item.title}</h3>

                  <p>{item.description}</p>


                  {/* CARD BOTTOM */}

                  <div className="leadership-card-line">
                    <span />
                    <small>
                      {item.number} / 04
                    </small>
                  </div>

                </motion.article>


                {/* TIMELINE NODE */}

                <motion.div
                  className="timeline-node"
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.15 + 0.25,
                    duration: 0.45,
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                  }}
                >
                  <motion.div
                    className="timeline-node-inner"
                    animate={{
                      scale: [1, 1.35, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                  />
                </motion.div>

              </motion.div>
            );
          })}

        </div>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          className="leadership-bottom"
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
            delay: 1.8,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="bottom-dot" />

          <span>
            BUILD • LEARN • COLLABORATE • GROW
          </span>
        </motion.div>

      </div>
    </section>
  );
}