import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const links = ['About', 'Skills', 'Projects', 'Contact'];
const socials = [
  { icon: FaGithub,     href: 'https://github.com/sadiqdev1',                  label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/sadiqdev1/',         label: 'LinkedIn' },
  { icon: FaTwitter,    href: 'https://x.com/sadiqdev1',                        label: 'Twitter' },
  { icon: FaInstagram,  href: 'https://instagram.com/sadiqdev1',                label: 'Instagram' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <span className="font-display font-extrabold text-2xl text-[var(--text-primary)]">
              Sadiq
              <span className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                Dev
              </span>
            </span>
            <p className="text-[var(--text-secondary)] text-sm mt-3 leading-relaxed max-w-xs">
              Full-stack developer crafting high-performance, accessible web applications with modern technologies.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-[var(--text-secondary)] mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200 text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-[var(--text-secondary)] mb-4">
              Connect
            </h4>
            <div className="flex gap-3 flex-wrap" role="list" aria-label="Social media links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  role="listitem"
                  className="w-10 h-10 rounded-xl glass border border-[var(--border-color)] text-[var(--text-secondary)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all duration-300"
                >
                  <s.icon aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-4">
              Available for freelance work
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-xs text-emerald-400 font-semibold">Open to opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border-color)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-secondary)]">
            © {year} SadiqDev. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
