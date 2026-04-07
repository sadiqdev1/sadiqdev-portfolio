import { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiLaravel, SiPhp, SiMysql, SiJquery, SiBootstrap } from "react-icons/si";
import { MdDevices } from "react-icons/md";

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', desc: 'Semantic markup for web structure.' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', desc: 'Modern styling with Flexbox & Grid.' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', desc: 'Dynamic, event-driven scripting.' },
  { name: 'React', icon: FaReact, color: '#61DAFB', desc: 'Component‑based UI library.' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', desc: 'Elegant PHP framework.' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4', desc: 'Server-side scripting.' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', desc: 'Utility-first rapid styling.' },
  { name: 'Responsive Design', icon: MdDevices, color: 'var(--accent)', desc: 'Fluid layouts for all screens.' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', desc: 'Distributed version control.' },
  { name: 'GitHub', icon: FaGithub, color: '#24292f', desc: 'Collaboration & hosting.' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', desc: 'Relational database management.' },
  { name: 'jQuery', icon: SiJquery, color: '#0769AD', desc: 'Fast, concise JS library.' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', desc: 'Popular CSS framework.' },
];

const stats = [
  { value: 4, label: 'Years Experience', suffix: '+' },
  { value: 12, label: 'Projects Deployed', suffix: '+' },
  { value: 15, label: 'Technologies', suffix: '+' },
  { value: 100, label: 'Commitment', suffix: '%' },
];

export default function Skills() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          stats.forEach((stat, idx) => {
            let start = 0;
            const end = stat.value;
            const duration = 1500;
            const stepTime = Math.abs(Math.floor(duration / end));
            const timer = setInterval(() => {
              start += 1;
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[idx] = start;
                return newCounters;
              });
              if (start === end) clearInterval(timer);
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 md:px-12 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-12">
          <p className="text-[var(--accent)] text-xs font-semibold tracking-wider uppercase mb-3">
            Skills
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[var(--text-primary)]">
            Core Technologies
          </h2>
        </div>

        {/* Stats cards with counter */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 reveal"
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="border border-[var(--border-color)] rounded-lg p-4 text-center transition-all duration-200 cursor-default bg-[var(--bg-secondary)] hover:border-[var(--accent)] hover:-translate-y-0.5"
            >
              <div className="font-sans font-extrabold text-3xl text-[var(--accent)] mb-1">
                {counters[idx]}
                {stat.suffix}
              </div>
              <div className="text-xs text-[var(--text-secondary)] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 reveal">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative border border-[var(--border-color)] rounded-lg p-5 overflow-hidden transition-all duration-200 cursor-default bg-[var(--bg-secondary)] hover:border-[var(--accent)] hover:-translate-y-0.5"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at 30% 20%, ${skill.color}20, transparent)` }}
                />
                {/* Icon with floating animation */}
                <div
                  className="text-4xl mb-3 transition-transform duration-200 group-hover:scale-105 animate-float"
                  style={{ color: skill.color }}
                >
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="font-sans font-bold text-base mb-1 text-[var(--text-primary)]">
                  {skill.name}
                </h3>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                  {skill.desc}
                </p>
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[var(--bg-primary)] text-[var(--text-primary)] text-xs rounded shadow-md border border-[var(--border-color)] whitespace-nowrap opacity-0 transition-opacity duration-200 pointer-events-none z-10 group-hover:opacity-100">
                  {skill.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add floating animation keyframes globally (add to index.css) */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}