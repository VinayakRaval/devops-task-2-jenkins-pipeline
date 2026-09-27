import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Workflow.css";

const steps = [
  {
    number: "01",
    title: "PLAN",
    description:
      "Understand the application, infrastructure requirements and deployment strategy.",
    position: "workflow-card-1",
  },
  {
    number: "02",
    title: "BUILD",
    description:
      "Develop and containerize applications using modern development and Docker practices.",
    position: "workflow-card-2",
  },
  {
    number: "03",
    title: "DEPLOY",
    description:
      "Automate deployment through CI/CD pipelines using Jenkins, Docker and Kubernetes.",
    position: "workflow-card-3",
  },
  {
    number: "04",
    title: "MONITOR",
    description:
      "Monitor applications and infrastructure using Prometheus, Grafana and logs.",
    position: "workflow-card-4",
  },
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 1700);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="workflow" id="workflow">
      <div className="workflow-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="workflow-intro"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="workflow-label">MY WORKFLOW</span>

          <h2>
            Here's how I turn
            <br />
            <strong>ideas into</strong>
            <br />
            <strong>deployments.</strong>
          </h2>

          <p>
            I follow a structured DevOps workflow, from planning and
            development to deployment and continuous monitoring.
          </p>
        </motion.div>

        {/* RIGHT WORKFLOW AREA */}
        <div className="workflow-stage">
          {/* CURVED PATH */}
          <svg
            className="workflow-path"
            viewBox="0 0 700 520"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="
                M 490 70
                C 400 110, 280 120, 210 210
                C 130 305, 310 315, 470 365
                C 560 395, 500 470, 320 485
              "
              fill="none"
              stroke="rgba(0, 0, 0, 0.16)"
              strokeWidth="1.4"
              strokeDasharray="4 7"
            />
          </svg>

          {/* WORKFLOW CARDS */}
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              className={`workflow-card ${step.position} ${
                activeStep === index ? "is-active" : ""
              }`}
              initial={{
                opacity: 0,
                scale: 0.86,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.04,
              }}
            >
              <div className="workflow-card-top">
                <span className="workflow-number">{step.number}</span>

                <span className="workflow-dot" />
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </motion.article>
          ))}

          {/* END TEXT */}
          <motion.span
            className="workflow-end-text"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
          >
            Ready to ship!
          </motion.span>
        </div>
      </div>
    </section>
  );
}