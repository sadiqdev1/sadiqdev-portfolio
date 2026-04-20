import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  // Theme initialization - Default to dark
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    // Default to dark theme
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      // Dark is default
      setIsDark(true);
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      if (!saved) {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  // Scroll shadow & active link detection
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveLink(id === 'hero' ? 'home' : id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLinkClick = (e, linkId) => {
    e.preventDefault();
    setOpen(false);
    const element = document.getElementById(linkId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-[var(--bg-primary)]/90 backdrop-blur-md" : "bg-[var(--bg-primary)]"
      } border-b border-[var(--border-color)]`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "hero")}
          className="font-display font-extrabold text-2xl text-[var(--text-primary)] hover:text-[var(--accent)] transition-all duration-300 cursor-pointer group"
        >
          Sadiq<span className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent group-hover:from-[var(--gradient-end)] group-hover:to-[var(--gradient-start)] transition-all duration-500">Dev</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((link) => {
            const linkId = link.toLowerCase();
            const isActive = activeLink === linkId;
            return (
              <li key={link}>
                <a
                  href={`#${linkId}`}
                  onClick={(e) => handleLinkClick(e, linkId === "home" ? "hero" : linkId)}
                  className={`relative text-md font-medium transition-colors duration-200 pb-1 ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent)]"
                  }`}
                >
                  {link}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--accent)] rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side buttons */}
        <div className="flex gap-3 items-center">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg glass border border-[var(--border-color)] text-[var(--text-primary)] text-lg hover:border-[var(--accent)] hover:scale-110 transition-all duration-300"
            aria-label="Toggle dark/light mode"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 glass border border-[var(--border-color)] text-[var(--text-secondary)] px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-[var(--accent)]/50 hover:scale-105 transition-all duration-300"
          >
            Contact
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-[var(--text-primary)] focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden absolute left-0 top-full w-full glass border-t border-[var(--border-color)] overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 list-none">
          {links.map((link) => {
            const linkId = link.toLowerCase();
            const isActive = activeLink === linkId;
            return (
              <li key={link}>
                <a
                  href={`#${linkId}`}
                  onClick={(e) => handleLinkClick(e, linkId === "home" ? "hero" : linkId)}
                  className={`text-base font-semibold transition-colors duration-200 ${
                    isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
                  }`}
                >
                  {link}
                </a>
              </li>
            );
          })}
          <div className="flex gap-3 pt-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-6 py-2.5 rounded-xl text-sm font-semibold"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              download
              className="glass border border-[var(--border-color)] text-[var(--text-secondary)] px-6 py-2.5 rounded-xl text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              Resume
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
}