import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* =========================
          FOOTER TOP
      ========================= */}

      <div className="footer-top">

        {/* BRAND */}

        <div className="footer-brand">
          <span className="footer-label">
            DEVOPS & CLOUD
          </span>

          <h2>Vinayak Raval</h2>

          <p>
            Aspiring DevOps Engineer
          </p>

          <span className="footer-location">
            Karnataka, India
          </span>
        </div>


        {/* NAVIGATION */}

        <div className="footer-links">

          <span className="footer-heading">
            NAVIGATION
          </span>

          <a href="#home">
            <span>Home</span>
            <ArrowUpRight size={13} />
          </a>

          <a href="#about">
            <span>About</span>
            <ArrowUpRight size={13} />
          </a>

          <a href="#skills">
            <span>Skills</span>
            <ArrowUpRight size={13} />
          </a>

          <a href="#projects">
            <span>Projects</span>
            <ArrowUpRight size={13} />
          </a>

          <a href="#experience">
            <span>Journey</span>
            <ArrowUpRight size={13} />
          </a>

          <a href="#contact">
            <span>Contact</span>
            <ArrowUpRight size={13} />
          </a>

        </div>


        {/* CONNECT */}

        <div className="footer-connect">

          <span className="footer-heading">
            CONNECT
          </span>

          <div className="footer-social">

            <a
              href="https://github.com/VinayakRaval"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/vinayak-raval-4304a0333"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

            <a
              href="mailto:ravalvinayaka832@gmail.com"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>

          </div>

          <a
            href="mailto:ravalvinayaka832@gmail.com"
            className="footer-email"
          >
            ravalvinayaka832@gmail.com
          </a>

        </div>

      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================= */}

      <div className="footer-bottom">

        <span>
          © 2026 Vinayak Raval
        </span>

        <span>
          Built with React · Docker · AWS
        </span>

        <span>
          Open to opportunities
        </span>

      </div>

    </footer>
  );
}