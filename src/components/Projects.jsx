import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="section-container">

        {/* ================= HEADING ================= */}

        <motion.div
          className="projects-heading"
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
          }}
        >
          <div>
            <span className="section-tag dark">
              SELECTED WORK
            </span>

            <h2>
              PROJECTS
              <br />
              <strong>BUILT TO LEARN &amp; SOLVE.</strong>
            </h2>
          </div>

          <p>
            A collection of academic, personal and
            technical projects built to apply concepts,
            explore technologies and solve practical
            problems.
          </p>
        </motion.div>


        {/* ================= PROJECT LIST ================= */}

        <div className="projects-list">

          {portfolioData.projects.map(
            (project, index) => {

              const hasGithub =
                project.link &&
                project.link !== "#";

              return (
                <motion.article
                  className="project-showcase"
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 70,
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
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >

                  {/* ================= VISUAL ================= */}

                  <div className="project-visual">

                    <div className="project-visual-top">
                      <span>
                        PROJECT
                      </span>

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>


                    <div className="project-visual-content">

                      <span className="project-big-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="project-orbit">
                        <div className="project-orbit-dot"></div>
                      </div>


                      <div className="project-code-window">

                        <div className="code-window-header">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="code-lines">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>

                      </div>

                    </div>


                    <div className="project-visual-footer">

                      <span>
                        {project.category}
                      </span>

                      <ArrowUpRight
                        size={18}
                      />

                    </div>

                  </div>


                  {/* ================= CONTENT ================= */}

                  <div className="project-showcase-content">

                    <div className="project-meta">

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>
                        {project.category}
                      </span>

                    </div>


                    <h3>
                      {project.title}
                    </h3>


                    <p className="project-description">
                      {project.description}
                    </p>


                    {/* ================= TECHNOLOGIES ================= */}

                    <div className="project-technologies">

                      {project.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}

                    </div>


                    {/* ================= LINKS ================= */}

                    <div className="project-actions">

                      {hasGithub ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link primary-project-link"
                        >
                          <Github size={15} />

                          <span>
                            GitHub
                          </span>

                          <ArrowUpRight
                            size={14}
                          />
                        </a>
                      ) : (
                        <span
                          className="project-link project-link-disabled"
                        >
                          <Github size={15} />

                          <span>
                            Repository
                          </span>
                        </span>
                      )}


                      <a
                        href="#contact"
                        className="project-link secondary-project-link"
                      >
                        <span>
                          Discuss Project
                        </span>

                        <ExternalLink
                          size={14}
                        />
                      </a>

                    </div>

                  </div>

                </motion.article>
              );
            }
          )}

        </div>


        {/* ================= BOTTOM ================= */}

        <motion.div
          className="projects-bottom"
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
            delay: 0.4,
            duration: 0.7,
          }}
        >
          <span className="projects-bottom-line"></span>

          <span>
            BUILDING • AUTOMATING • LEARNING
          </span>

          <span className="projects-bottom-line"></span>
        </motion.div>

      </div>

    </section>
  );
}