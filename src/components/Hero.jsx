import { useState, useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiLaravel, SiTailwindcss, SiPhp, SiMysql, SiJquery } from 'react-icons/si';

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
      className="min-h-screen pt-28 pb-16 px-6 md:px-12 bg-[#0a0f1c] grid md:grid-cols-2 gap-12 items-center"
    >
      {/* Left content - unchanged */}
      <div>
        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-xs font-mono font-semibold px-4 py-2 rounded-md border border-blue-500/30 mb-6 animate-fadeUp">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          Available for work
        </div>

        <h1
          className="font-sans font-extrabold text-5xl md:text-7xl leading-tight text-white tracking-tight animate-fadeUp"
          style={{ animationDelay: '0.1s' }}
        >
          Hi, I'm{" "}
          <span className="text-blue-500 border-b-2 border-blue-500/50 inline-block">
            SadiqDev.
          </span>
          <br />
          I build web apps that<br />
          <span className="text-gray-300">scale.</span>
        </h1>

        <p
          className="text-gray-400 text-base leading-relaxed mt-6 mb-8 max-w-md font-light animate-fadeUp"
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
            className="bg-blue-600 text-white px-7 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/20"
          >
            View Work →
          </a>
          <a
            href="#contact"
            className="border border-gray-600 text-gray-300 px-7 py-3 rounded-md font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side – Terminal with typing effect */}
      <div className="flex justify-center items-center relative animate-fadeUp">
        <div className="w-72 h-80 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg flex flex-col items-center justify-center shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300">
          <div className="text-6xl mb-3 text-blue-400">{'</>'}</div>
          <code className="text-gray-400 text-sm font-mono">
            {displayText}
            {showCursor && <span className="text-blue-400">_</span>}
          </code>
          <div className="flex gap-2 mt-4">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div>

        {/* Tech chips – expanded list */}
        {[
          { label: 'React.js', icon: FaReact, color: '#61DAFB', pos: 'top-4 -left-4' },
          { label: 'Laravel', icon: SiLaravel, color: '#FF2D20', pos: 'bottom-10 -right-4' },
          { label: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8', pos: 'top-1/2 -left-8' },
          { label: 'PHP', icon: SiPhp, color: '#777BB4', pos: 'top-20 -right-6' },
          { label: 'MySQL', icon: SiMysql, color: '#4479A1', pos: 'bottom-20 -left-6' },
          { label: 'jQuery', icon: SiJquery, color: '#0769AD', pos: 'bottom-0 right-0' },
        ].map((chip, idx) => (
          <div
            key={chip.label}
            className={`absolute ${chip.pos} bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-xs font-mono font-semibold text-gray-200 shadow-md flex items-center gap-2 hover:scale-105 transition-transform duration-200`}
          >
            <chip.icon className="w-3.5 h-3.5" style={{ color: chip.color }} />
            {chip.label}
          </div>
        ))}
      </div>
    </section>
  );
}