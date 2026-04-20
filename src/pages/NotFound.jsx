import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiHome, FiCode } from 'react-icons/fi';
import SEO from '../components/SEO';
import ScrollProgress from '../components/ScrollProgress';

const glitchLines = [
  'Error: Page not found at runtime',
  'Stack trace: 404 → null → undefined',
  'Expected: valid route',
  'Received: void 0',
];

export default function NotFound() {
  const navigate = useNavigate();
  const [typed, setTyped] = useState('');
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [glitch, setGlitch] = useState(false);

  // Typing effect cycling through error lines
  useEffect(() => {
    if (lineIdx >= glitchLines.length) return;
    const line = glitchLines[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => {
        setTyped((p) => p + line[charIdx]);
        setCharIdx((c) => c + 1);
      }, 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setTyped('');
        setCharIdx(0);
        setLineIdx((l) => (l + 1) % glitchLines.length);
      }, 1800);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx]);

  // Periodic glitch flash
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="404 – Page Not Found | SadiqDev"
        description="Oops! This page doesn't exist. Head back to SadiqDev's portfolio."
        canonicalUrl="/404"
      />
      <ScrollProgress />

      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col items-center justify-center px-6 relative overflow-hidden">

        {/* Background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--gradient-start)] opacity-[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--gradient-end)] opacity-[0.06] rounded-full blur-3xl pointer-events-none" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto">

          {/* 404 big number */}
          <div className="relative mb-6 select-none">
            <h1
              className="font-display font-extrabold text-[10rem] md:text-[14rem] leading-none tracking-tighter"
              style={{
                background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: glitch ? 'blur(2px) brightness(1.5)' : 'none',
                transform: glitch ? 'translate(2px, -1px)' : 'none',
                transition: 'filter 0.05s, transform 0.05s',
              }}
            >
              404
            </h1>
            {/* Glitch duplicate */}
            {glitch && (
              <h1
                className="font-display font-extrabold text-[10rem] md:text-[14rem] leading-none tracking-tighter absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.4,
                  transform: 'translate(-4px, 2px)',
                }}
                aria-hidden="true"
              >
                404
              </h1>
            )}
          </div>

          {/* Terminal block */}
          <div className="pro-card mb-8 text-left font-mono text-sm mx-auto max-w-md">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[var(--border-color)]">
              <span className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
              <span className="ml-2 text-xs text-[var(--text-tertiary)]">terminal</span>
            </div>
            <p className="text-[var(--text-tertiary)] mb-1">
              <span className="text-[var(--accent)]">sadiqdev</span>
              <span className="text-[var(--text-secondary)]">:~$</span> navigate
            </p>
            <p className="text-red-400 text-xs mb-3">
              {typed}
              <span className="text-[var(--accent)] animate-pulse">▌</span>
            </p>
            <p className="text-[var(--text-tertiary)] text-xs">
              <span className="text-emerald-400">hint:</span> try going back home
            </p>
          </div>

          {/* Message */}
          <h2 className="font-display font-bold text-2xl md:text-3xl text-[var(--text-primary)] mb-3">
            Page Not Found
          </h2>
          <p className="text-[var(--text-secondary)] text-base mb-10 max-w-sm mx-auto leading-relaxed">
            Looks like this route doesn't exist. Maybe it was deleted, moved, or you typed the URL wrong.
          </p>

          {/* Actions */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-7 py-3.5 rounded-xl font-semibold hover:scale-105 hover:shadow-xl hover:shadow-[var(--accent)]/30 transition-all duration-300"
            >
              <FiHome aria-hidden="true" />
              Back to Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 glass border border-[var(--border-color)] text-[var(--text-primary)] px-7 py-3.5 rounded-xl font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            >
              <FiArrowLeft aria-hidden="true" />
              Go Back
            </button>
          </div>

          {/* Quick links */}
          <div className="mt-12">
            <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-widest mb-4 font-semibold">
              Or explore
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              {[
                { label: 'Projects', href: '/#projects' },
                { label: 'Blog', href: '/#blog' },
                { label: 'Hire Me', href: '/hire-me' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="glass border border-[var(--border-color)] text-[var(--text-secondary)] text-sm px-4 py-2 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 flex items-center gap-1.5"
                >
                  <FiCode className="w-3 h-3" aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Branding */}
          <p className="mt-14 text-xs text-[var(--text-tertiary)] font-mono">
            <span className="text-[var(--accent)]">SadiqDev</span> · Full-Stack Developer
          </p>
        </div>
      </div>
    </>
  );
}
