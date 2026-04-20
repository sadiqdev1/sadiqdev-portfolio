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
  { name: 'GitHub', icon: FaGithub, color: '#a0a0ab', desc: 'Collaboration & hosting.' },
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
    <section id="skills" className="py-24 px-4 md:px-12 bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-12">
          <p className="text-[var(--accent)] text-sm font-bold tracking-wider uppercase mb-3">
            Skills & Expertise
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight">
            Core Technologies
          </h2>
        </div>

        {/* Stats cards with counter */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-12 reveal"
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="pro-card text-center transition-all duration-300 cursor-default group"
            >
              <div className="font-display font-extrabold text-4xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {counters[idx]}
                {stat.suffix}
              </div>
              <div className="text-sm text-[var(--text-secondary)] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 reveal">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="pro-card group relative overflow-hidden cursor-default"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${skill.color}30, transparent 70%)`,
                  }}
                />
                
                {/* Icon with enhanced animation */}
                <div
                  className="relative text-5xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{ color: skill.color }}
                >
                  <Icon aria-hidden="true" className="drop-shadow-lg" />
                </div>
                
                <h3 className="relative font-display font-bold text-base mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {skill.name}
                </h3>
                
                <p className="relative text-xs leading-relaxed text-[var(--text-secondary)]">
                  {skill.desc}
                </p>

                {/* Corner accent */}
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}