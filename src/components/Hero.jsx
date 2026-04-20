import { useState, useEffect } from 'react';
import ThreeBackground from './ThreeBackground';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'const dev = "SadiqDev"';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 px-6 md:px-12 bg-[var(--bg-primary)] grid md:grid-cols-2 gap-12 items-center relative overflow-hidden"
    >
      {/* Three.js Particle Background */}
      <ThreeBackground />

      {/* Gradient orbs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"
        style={{ animationDuration: '6s', animationDelay: '2s' }}
      />
      {/* Left content */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 glass text-[var(--accent)] text-xs font-mono font-semibold px-4 py-2 rounded-full border border-[var(--accent)]/30 mb-6 animate-fadeUp">
          <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
          Available for work
        </div>

        <h1
          className="font-display font-extrabold text-5xl md:text-7xl leading-tight text-[var(--text-primary)] tracking-tight animate-fadeUp"
          style={{ 
            animationDelay: '0.1s',
            letterSpacing: '-0.02em',
          }}
        >
          Hi, I'm{" "}
          <span 
            className="inline-block bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] bg-clip-text text-transparent animate-gradient"
            style={{
              backgroundSize: '200% auto',
            }}
          >
            SadiqDev.
          </span>
          <br />
          I build web apps that<br />
          <span className="text-[var(--text-secondary)]">scale & perform.</span>
        </h1>

        <p
          className="text-[var(--text-secondary)] text-base leading-relaxed mt-6 mb-8 max-w-md font-light animate-fadeUp"
          style={{ animationDelay: '0.2s' }}
        >
          Full‑stack developer crafting high‑performance, accessible web applications.
          Specialized in React, Laravel, and modern UI engineering.
        </p>

        <div
          className="flex gap-4 flex-wrap animate-fadeUp"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#projects"
            className="group relative bg-[var(--accent)] text-white px-8 py-3.5 rounded-xl font-semibold overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[var(--accent)]/50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="glass border border-[var(--border-color)] text-[var(--text-primary)] px-8 py-3.5 rounded-xl font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side – Terminal with typing effect */}
      <div className="flex justify-center items-center relative animate-fadeUp z-10">
        <div className="w-80 h-96 glass border border-[var(--border-color)] rounded-2xl flex flex-col items-center justify-center shadow-2xl hover:shadow-[var(--accent)]/20 transition-all duration-500 card-3d group">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
          
          <div className="text-7xl mb-4 bg-gradient-to-br from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] bg-clip-text text-transparent animate-float">
            {'</>'}
          </div>
          <code className="text-[var(--text-secondary)] text-base font-mono font-medium">
            {displayText}
            {showCursor && <span className="text-[var(--accent)] animate-pulse">_</span>}
          </code>
          <div className="flex gap-2 mt-6">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
            <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      </div>
    </section>
  );
}