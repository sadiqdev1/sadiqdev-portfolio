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
      style={{
        padding: '5rem 1.5rem',
        backgroundColor: 'var(--bg-primary)',
        transition: 'background-color 0.3s ease',
      }}
      className="md:px-12"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p
            style={{
              color: 'var(--accent)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Projects
          </p>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: '1.8rem',
              lineHeight: 1.2,
              color: 'var(--text-primary)',
            }}
            className="md:text-4xl"
          >
            Things I've built
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
          className="reveal"
        >
          {/* Real project */}
          {projects.map((project, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  display: 'block',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, border-color 0.2s',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  borderColor: isHovered ? 'var(--accent)' : 'var(--border-color)',
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={project.img}
                    alt={project.name}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      transition: 'transform 0.5s',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'var(--bg-primary)',
                      opacity: isHovered ? 0.95 : 0,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: 'var(--accent)',
                        color: '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.375rem',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink /> Live
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.375rem',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        border: '1px solid var(--border-color)',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub /> Code
                    </a>
                  </div>
                </div>

                <div style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                      {project.name}
                    </h3>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        backgroundColor: 'var(--bg-primary)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '0.25rem',
                        border: '1px solid var(--border-color, #d1d5db)',
                      }}
                    >
                      <FiStar style={{ color: '#fbbf24', fontSize: '0.7rem' }} />
                      <span style={{ fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-primary, #1f2937)' }}>
                        {project.stars}
                      </span>
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    {project.tech.map((tech, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <tech.icon style={{ color: tech.color, fontSize: '0.9rem' }} />
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: '0.8rem', lineHeight: 1.4, color: 'var(--text-secondary)' }}>
                    {project.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* "More coming soon" placeholder card */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '2rem 1.5rem',
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
          >
            <FiClock style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              More Projects Coming
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              I'm currently working on several exciting new projects. <br />
              Check back soon for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}