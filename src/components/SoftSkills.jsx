import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Lightbulb,
  Target,
} from "lucide-react";

import "./SoftSkills.css";

const softSkills = [
  {
    number: "01",
    title: "TEAM COLLABORATION",
    description:
      "Working respectfully with teammates, sharing ideas and contributing to shared project goals.",
    icon: Users,
  },
  {
    number: "02",
    title: "COMMUNICATION",
    description:
      "Explaining technical ideas clearly and communicating progress, questions and solutions effectively.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "PROBLEM SOLVING",
    description:
      "Breaking technical problems into smaller steps, investigating issues and working toward practical solutions.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "OWNERSHIP & GROWTH",
    description:
      "Taking responsibility for assigned tasks, learning from challenges and continuously improving technical skills.",
    icon: Target,
  },
];

export default function SoftSkills() {
  return (
    <section
      className="soft-skills"
      id="soft-skills"
    >
      <div className="section-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="center-heading soft-skills-heading"
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
            BEYOND TECHNICAL SKILLS
          </span>

          <h2>
            PROFESSIONAL
            <br />
            STRENGTHS
          </h2>

          <p>
            Personal and professional qualities I am
            developing through projects, education,
            collaboration and continuous learning.
          </p>
        </motion.div>


        {/* =================================================
            SOFT SKILLS GRID
        ================================================= */}

        <div className="soft-skills-grid">

          {softSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                className="soft-skill-card"
                key={skill.number}
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
                  amount: 0.25,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
              >

                {/* CARD TOP */}

                <div className="soft-skill-top">

                  <span className="soft-skill-number">
                    {skill.number}
                  </span>

                  <div className="soft-skill-icon">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>

                </div>


                {/* CONTENT */}

                <h3>
                  {skill.title}
                </h3>

                <p>
                  {skill.description}
                </p>


                {/* CARD FOOTER */}

                <div className="soft-skill-line">

                  <span></span>

                  <small>
                    {skill.number} / 04
                  </small>

                </div>

              </motion.article>
            );
          })}

        </div>


        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <motion.div
          className="soft-skills-bottom"
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
          <span className="soft-skills-bottom-dot"></span>

          <span>
            COMMUNICATE • COLLABORATE • SOLVE • GROW
          </span>
        </motion.div>

      </div>
    </section>
  );
}