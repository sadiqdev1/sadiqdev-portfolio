import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  // Theme initialization
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Scroll shadow & active link detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map((link) => link.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
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
          className="font-sans font-extrabold text-2xl text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
        >
          Sadiq<span className="text-[var(--accent)]">Dev</span>
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
            className="p-2 rounded-md bg-[var(--bg-secondary)] text-[var(--text-primary)] text-xl hover:bg-[var(--accent)] hover:text-white transition-colors"
            aria-label="Toggle dark/light mode"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-flex border border-[var(--border-color)] text-[var(--text-secondary)] px-5 py-2 rounded-md text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Resume ↓
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="hidden md:inline-block bg-[var(--accent)] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors shadow-md shadow-[var(--accent)]/20"
          >
            Contact →
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
        className={`md:hidden absolute left-0 top-full w-full bg-[var(--bg-primary)] border-t border-[var(--border-color)] overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 list-none">
          {links.map((link) => {
            const linkId = link.toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${linkId}`}
                  onClick={(e) => handleLinkClick(e, linkId === "home" ? "hero" : linkId)}
                  className="text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  {link}
                </a>
              </li>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="bg-[var(--accent)] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
          >
            Contact →
          </a>
          <a
            href="/resume.pdf"
            download
            className="border border-[var(--border-color)] text-[var(--text-secondary)] px-6 py-2 rounded-md text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Resume ↓
          </a>
        </ul>
      </div>
    </nav>
  );
}