import chortleImg from '../assets/Screenshot_20260403-114440.png';
import { FiExternalLink, FiGithub, FiStar, FiClock } from 'react-icons/fi';
import { FaReact, FaHtml5, FaJs } from 'react-icons/fa';
import { SiLaravel, SiTailwindcss, SiStripe } from 'react-icons/si';
import { useState } from 'react';

const projects = [
  {
    img: chortleImg,
    name: 'Chortle',
    tech: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    ],
    problem: 'Users needed an engaging platform to share and discover memes with a community.',
    solution: 'Built a full-stack meme sharing platform with voting, comments, and premium features.',
    results: '500+ active users, 2000+ memes shared, integrated Stripe payment gateway.',
    desc: 'A full‑stack meme sharing platform where users can upload, vote, and comment on memes. Integrated with payment gateway for premium features.',
    liveLink: 'https://chortle-production.up.railway.app/',
    repoLink: 'https://chortle-production.up.railway.app/',
    stars: 24,
    featured: true,
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 bg-[var(--bg-primary)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-12">
          <p className="text-[var(--accent)] text-sm font-bold tracking-wider uppercase mb-3">
            Featured Work
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight">
            Things I've Built
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {/* Real project */}
          {projects.map((project, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                className="pro-card group relative overflow-hidden p-0"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image + Overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className={`w-full h-56 object-cover transition-all duration-700 ${
                      isHovered ? 'scale-110 blur-sm' : 'scale-100 blur-0'
                    }`}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-sm flex justify-center items-center gap-4 transition-all duration-500 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-6 py-3 rounded-xl text-sm font-semibold no-underline hover:scale-105 transition-transform duration-300 shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                    {project.featured && (
                      <button
                        onClick={() => window.location.href = '/projects/chortle'}
                        className="flex items-center gap-2 glass text-[var(--text-primary)] px-6 py-3 rounded-xl text-sm font-semibold border border-[var(--border-color)] hover:scale-105 hover:border-[var(--accent)] transition-all duration-300"
                      >
                        📖 Case Study
                      </button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-bold text-xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                      {project.name}
                    </h3>
                    {/* Stars badge */}
                    <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-lg border border-[var(--border-color)] text-sm font-semibold text-[var(--text-primary)]">
                      <FiStar className="text-yellow-400" />
                      {project.stars}
                    </span>
                  </div>

                  {/* Tech icons */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                        <tech.icon style={{ color: tech.color, fontSize: '1rem' }} />
                        <span className="text-xs font-medium text-[var(--text-secondary)]">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Results badge */}
                  {project.results && (
                    <div className="glass px-3 py-2 rounded-lg border border-[var(--border-color)] text-xs text-[var(--text-primary)]">
                      <span className="font-bold text-[var(--accent)]">Results:</span> {project.results}
                    </div>
                  )}
                </div>

                {/* Decorative gradient */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700" />
              </div>
            );
          })}

          {/* "More coming soon" placeholder card */}
          <div className="pro-card flex flex-col justify-center items-center text-center p-10 group cursor-default">
            <div className="relative mb-6">
              <FiClock className="text-6xl text-[var(--accent)] group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[var(--accent)] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-3">
              More Projects Coming
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs">
              I'm currently working on several exciting new projects. Check back soon for updates and new features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}