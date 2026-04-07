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
    desc: 'A full‑stack meme sharing platform where users can upload, vote, and comment on memes. Integrated with payment gateway for premium features.',
    liveLink: 'https://chortle-seven.vercel.app/',
    repoLink: 'https://chortle-seven.vercel.app/',
    stars: 24,
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
          <p className="text-[var(--accent)] text-xs font-semibold tracking-wider uppercase mb-3">
            Projects
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[var(--text-primary)]">
            Things I've built
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {/* Real project */}
          {projects.map((project, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                className={`relative block bg-[var(--bg-secondary)] border rounded-lg overflow-hidden transition-all duration-200 ${
                  isHovered ? 'border-[var(--accent)] -translate-y-1' : 'border-[var(--border-color)] translate-y-0'
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image + Overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className={`w-full h-48 object-cover transition-transform duration-500 ${
                      isHovered ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-[var(--bg-primary)] flex justify-center items-center gap-4 transition-opacity duration-300 ${
                      isHovered ? 'opacity-95' : 'opacity-0'
                    }`}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-[var(--accent)] text-white px-4 py-2 rounded-md text-sm font-medium no-underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink /> Live
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-[var(--bg-secondary)] text-[var(--text-primary)] px-4 py-2 rounded-md text-sm font-medium border border-[var(--border-color)] no-underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub /> Code
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-sans font-bold text-lg text-[var(--text-primary)]">
                      {project.name}
                    </h3>
                    {/* Stars badge */}
                    <span className="flex items-center gap-1 bg-[var(--bg-primary)] px-2 py-0.5 rounded border border-[var(--border-color)] text-xs font-medium text-[var(--text-primary)]">
                      <FiStar className="text-yellow-400 text-xs" />
                      {project.stars}
                    </span>
                  </div>

                  {/* Tech icons */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <tech.icon style={{ color: tech.color, fontSize: '0.9rem' }} />
                        <span className="text-xs text-[var(--text-secondary)]">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* "More coming soon" placeholder card */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg flex flex-col justify-center items-center text-center p-8 opacity-80 transition-opacity duration-200 hover:opacity-100">
            <FiClock className="text-5xl text-[var(--accent)] mb-4" />
            <h3 className="font-sans font-semibold text-xl text-[var(--text-primary)] mb-2">
              More Projects Coming
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              I'm currently working on several exciting new projects.
              <br />
              Check back soon for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}