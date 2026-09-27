import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "experience"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (window.scrollY > 40) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      } ${menuOpen ? "navbar-menu-open" : ""}`}
    >
      {/* =================================================
          LOGO
      ================================================= */}

      <button
        className="logo"
        onClick={() => scrollTo("home")}
        aria-label="Go to homepage"
      >
        Vinayak<span>.</span>
      </button>


      {/* =================================================
          DESKTOP NAVIGATION
      ================================================= */}

      <nav
        className="navbar-links"
        aria-label="Main navigation"
      >
        {links.map(([name, id]) => (
          <button
            key={name}
            onClick={() => scrollTo(id)}
          >
            {name}
          </button>
        ))}
      </nav>


      {/* =================================================
          DESKTOP CONTACT
      ================================================= */}

      <button
        className="nav-contact"
        onClick={() => scrollTo("contact")}
      >
        <span>Let's Connect</span>
      </button>


      {/* =================================================
          MOBILE MENU BUTTON
      ================================================= */}

      <button
        className="nav-menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={
          menuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <X size={19} />
        ) : (
          <Menu size={19} />
        )}
      </button>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      <div className="mobile-menu">
        <nav aria-label="Mobile navigation">
          {links.map(([name, id]) => (
            <button
              key={name}
              onClick={() => scrollTo(id)}
            >
              <span>{name}</span>
              <span className="mobile-menu-number">
                {String(links.findIndex((item) => item[0] === name) + 1).padStart(
                  2,
                  "0"
                )}
              </span>
            </button>
          ))}
        </nav>

        <button
          className="mobile-connect"
          onClick={() => scrollTo("contact")}
        >
          Let's Connect
        </button>
      </div>
    </header>
  );
}