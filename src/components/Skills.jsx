import { motion } from "framer-motion";
import {
  Cloud,
  Container,
  Boxes,
  GitBranch,
  Server,
  Database,
  Activity,
  Terminal,
  Code2,
} from "lucide-react";

import "./Skills.css";

const skillGroups = [
  {
    title: "CLOUD & DEVOPS",
    skills: [
      {
        name: "AWS",
        level: 75,
        icon: Cloud,
      },
      {
        name: "Docker",
        level: 80,
        icon: Container,
      },
      {
        name: "Kubernetes",
        level: 70,
        icon: Boxes,
      },
      {
        name: "Jenkins",
        level: 72,
        icon: GitBranch,
      },
      {
        name: "Terraform",
        level: 65,
        icon: Server,
      },
    ],
  },

  {
    title: "INFRASTRUCTURE",
    skills: [
      {
        name: "Linux",
        level: 78,
        icon: Terminal,
      },
      {
        name: "Git & GitHub",
        level: 82,
        icon: GitBranch,
      },
      {
        name: "CI/CD",
        level: 75,
        icon: Activity,
      },
      {
        name: "Prometheus",
        level: 60,
        icon: Activity,
      },
      {
        name: "Grafana",
        level: 60,
        icon: Activity,
      },
    ],
  },

  {
    title: "DEVELOPMENT",
    skills: [
      {
        name: "React",
        level: 75,
        icon: Code2,
      },
      {
        name: "Node.js",
        level: 70,
        icon: Server,
      },
      {
        name: "Python",
        level: 78,
        icon: Code2,
      },
      {
        name: "MySQL",
        level: 75,
        icon: Database,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      className="skills"
      id="skills"
    >
      <div className="section-container">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <motion.div
          className="center-heading skills-heading"
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
          <span className="section-tag dark">
            TECHNICAL SKILLS
          </span>

          <h2>
            MY
            <br />
            SKILLS
          </h2>

          <p>
            Technologies and tools I have been learning
            and applying through hands-on projects,
            coursework and continuous practice.
          </p>
        </motion.div>


        {/* =================================================
            SKILL GROUPS
        ================================================= */}

        <div className="skills-grid">

          {skillGroups.map((group, groupIndex) => (
            <motion.article
              className="skill-group"
              key={group.title}
              initial={{
                opacity: 0,
                y: 50,
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
                delay: groupIndex * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -7,
              }}
            >

              {/* GROUP HEADER */}

              <div className="skill-group-header">

                <span className="skill-group-number">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>

                <h3>
                  {group.title}
                </h3>

              </div>


              {/* SKILLS */}

              <div className="skill-list">

                {group.skills.map(
                  (skill, index) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        className="skill-item"
                        key={skill.name}
                        initial={{
                          opacity: 0,
                          x: -25,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.4,
                        }}
                        transition={{
                          delay:
                            groupIndex * 0.15 +
                            index * 0.08,
                          duration: 0.45,
                        }}
                      >

                        {/* SKILL TOP */}

                        <div className="skill-top">

                          <div className="skill-name">

                            <span className="skill-icon">
                              <Icon
                                size={15}
                                strokeWidth={1.8}
                              />
                            </span>

                            <span>
                              {skill.name}
                            </span>

                          </div>

                          <span className="skill-percent">
                            {skill.level}%
                          </span>

                        </div>


                        {/* PROGRESS BAR */}

                        <div
                          className="skill-bar"
                          aria-label={`${skill.name} skill level ${skill.level}%`}
                        >
                          <motion.span
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: `${skill.level}%`,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 1,
                              delay:
                                groupIndex * 0.15 +
                                index * 0.08,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            }}
                          />
                        </div>

                      </motion.div>
                    );
                  }
                )}

              </div>

            </motion.article>
          ))}

        </div>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          className="skills-bottom"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
        >
          <Code2
            size={16}
            strokeWidth={1.8}
          />

          <span>
            LEARN • BUILD • AUTOMATE • IMPROVE
          </span>
        </motion.div>

      </div>
    </section>
  );
}