import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

import "./SideSocial.css";

export default function SideSocial() {
  return (
    <aside className="side-social" aria-label="Social links">

      {/* GitHub */}
      <a
        href="https://github.com/VinayakRaval"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github size={16} strokeWidth={1.8} />
      </a>


      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vinayak-raval-4304a0333"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin size={16} strokeWidth={1.8} />
      </a>


      {/* Instagram */}
      <a
        href="https://www.instagram.com/_devil_kiccha__/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram size={16} strokeWidth={1.8} />
      </a>


      {/* Email */}
      <a
        href="mailto:ravalvinayaka832@gmail.com"
        aria-label="Email"
      >
        <Mail size={16} strokeWidth={1.8} />
      </a>

    </aside>
  );
}