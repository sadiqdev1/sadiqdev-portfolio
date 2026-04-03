import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (saved === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else if (prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: '1rem 1.5rem',
      backgroundColor: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-color)',
      backdropFilter: 'blur(8px)',
      transition: 'background-color 0.3s ease'
    }} className="md:px-12">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)' }}>
          Sadiq<span style={{ color: 'var(--accent)' }}>Dev</span>
        </span>

        <ul style={{ display: 'none', gap: '2rem', listStyle: 'none' }} className="md:flex">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} style={{ color: 'var(--text-secondary)', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button onClick={toggleTheme} style={{
            padding: '0.5rem',
            borderRadius: '0.375rem',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            fontSize: '1.25rem'
          }}>
            {isDark ? '☀️' : '🌙'}
          </button>

          <a href="/resume.pdf" download style={{
            display: 'none',
            border: '1px solid var(--border-color)',
            padding: '0.5rem 1.25rem',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--text-secondary)'
          }} className="md:inline-flex">
            Resume ↓
          </a>

          <a href="#contact" style={{
            display: 'none',
            backgroundColor: 'var(--accent)',
            padding: '0.5rem 1.25rem',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#fff'
          }} className="md:inline-block">
            Contact →
          </a>

          <button onClick={() => setOpen(!open)} style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }} className="md:hidden">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div style={{
          position: 'absolute',
          left: 0,
          top: '100%',
          width: '100%',
          backgroundColor: 'var(--bg-primary)',
          borderTop: '1px solid var(--border-color)',
          padding: '1.5rem 0'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            {links.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                  {link}
                </a>
              </li>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} style={{ backgroundColor: 'var(--accent)', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '0.375rem' }}>
              Contact →
            </a>
            <a href="/resume.pdf" download onClick={() => setOpen(false)} style={{ border: '1px solid var(--border-color)', padding: '0.5rem 1.5rem', borderRadius: '0.375rem', color: 'var(--text-secondary)' }}>
              Resume ↓
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}