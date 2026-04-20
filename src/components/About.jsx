import { FiCode, FiZap, FiMonitor, FiGlobe } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';

const stats = [
  { value: '15+',   label: 'Projects Completed' },
  { value: '10+',  label: 'Technologies' },
  { value: '100%', label: 'Commitment' },
];

const cards = [
  { title: 'Clean Code',     text: 'Readable, maintainable, and scalable architecture following industry best practices.', icon: FiCode,    color: 'from-indigo-500 to-blue-500' },
  { title: 'Performance',    text: 'Optimized for speed with fast load times and buttery smooth interactions.',             icon: FiZap,     color: 'from-violet-500 to-purple-500' },
  { title: 'Responsive',     text: 'Pixel-perfect, adaptive design delivering flawless experiences on any device.',        icon: FiMonitor, color: 'from-fuchsia-500 to-pink-500' },
  { title: 'Global Mindset', text: 'Built with international standards, accessibility, and scalability in mind.',          icon: FiGlobe,   color: 'from-emerald-500 to-teal-500' },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-[var(--bg-secondary)] transition-colors duration-300 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Top grid: text + code block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

          {/* Left — text */}
          <div className="reveal flex flex-col items-center md:items-start text-center md:text-left">

            {/* Avatar */}
            <div className="relative mb-6 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <img
                src={profileImg}
                alt="Abubakar Ibrahim – Full-Stack Developer"
                loading="lazy"
                className="relative w-32 h-32 rounded-full object-cover border-2 border-[var(--border-hover)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-[var(--accent)] text-sm font-bold tracking-wider uppercase mb-3">
              About Me
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight leading-tight mb-6">
              More than just code.
            </h2>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
              I'm <span className="text-[var(--accent)] font-semibold">Abubakar Ibrahim (SadiqDev)</span>, a full-stack developer who believes in building web applications that are both powerful and elegant. My focus is on writing clean, maintainable code that scales.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8">
              When I'm not coding, I contribute to open source, explore new technologies, and refine my craft to stay ahead of industry trends.
            </p>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap justify-center md:justify-start mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-display font-extrabold text-3xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)] font-medium mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-[var(--accent)]/30 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>

            {/* Currently Learning */}
            <div className="mt-8 w-full">
              <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)] mb-3">
                Currently Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Docker', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="glass px-3 py-1.5 rounded-lg border border-[var(--border-color)] text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — GitHub Stats + Code block */}
          <div className="reveal w-full space-y-6">
            {/* GitHub Stats */}
            <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)] mb-4">
                GitHub Activity
              </h3>
              <img
                src="https://github-readme-stats.vercel.app/api?username=sadiqdev1&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&icon_color=8b5cf6&text_color=a0a0ab&bg_color=16161f"
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
              />
            </div>

            {/* Code block */}
            <div className="rounded-xl overflow-hidden border border-[var(--border-color)] shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-tertiary)] border-b border-[var(--border-color)]">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-auto text-xs text-[var(--text-tertiary)] font-mono">developer.js</span>
              </div>
              {/* Code */}
              <div className="p-5 bg-[var(--bg-card)] font-mono text-sm leading-7 overflow-x-auto">
                <pre className="m-0 whitespace-pre-wrap">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-yellow-300">developer</span>{' '}
                  <span className="text-[var(--text-secondary)]">=</span>{' '}
                  <span className="text-[var(--text-secondary)]">{'{'}</span>{'\n'}
                  {'  '}<span className="text-red-400">name</span><span className="text-[var(--text-secondary)]">:</span>{' '}
                  <span className="text-emerald-400">"Abubakar Ibrahim"</span><span className="text-[var(--text-secondary)]">,</span>{'\n'}
                  {'  '}<span className="text-red-400">alias</span><span className="text-[var(--text-secondary)]">:</span>{' '}
                  <span className="text-emerald-400">"SadiqDev"</span><span className="text-[var(--text-secondary)]">,</span>{'\n'}
                  {'  '}<span className="text-red-400">role</span><span className="text-[var(--text-secondary)]">:</span>{' '}
                  <span className="text-emerald-400">"Full-Stack Developer"</span><span className="text-[var(--text-secondary)]">,</span>{'\n'}
                  {'  '}<span className="text-red-400">stack</span><span className="text-[var(--text-secondary)]">:</span>{' '}
                  <span className="text-[var(--text-secondary)]">[</span>
                  <span className="text-emerald-400">"Laravel"</span><span className="text-[var(--text-secondary)]">,</span>{' '}
                  <span className="text-emerald-400">"React"</span><span className="text-[var(--text-secondary)]">,</span>{' '}
                  <span className="text-emerald-400">"Tailwind"</span>
                  <span className="text-[var(--text-secondary)]">]</span><span className="text-[var(--text-secondary)]">,</span>{'\n'}
                  {'  '}<span className="text-red-400">passion</span><span className="text-[var(--text-secondary)]">:</span>{' '}
                  <span className="text-emerald-400">"building scalable web apps"</span>{'\n'}
                  <span className="text-[var(--text-secondary)]">{'};'}</span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="reveal-scale pro-card group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 rounded-xl`} />

              {/* Icon */}
              <div
                className={`relative mb-4 w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${card.color}`}
              >
                <card.icon className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="font-display font-bold text-base text-[var(--text-primary)] mb-2 tracking-tight">
                {card.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
