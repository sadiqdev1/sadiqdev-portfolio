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
  { name: 'GitHub', icon: FaGithub, color: '#24292f', desc: 'Collaboration & hosting.' }, // brand color
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', desc: 'Relational database management.' },
  { name: 'jQuery', icon: SiJquery, color: '#0769AD', desc: 'Fast, concise JS library.' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', desc: 'Popular CSS framework.' },
];

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '12+', label: 'Projects Deployed' },
  { value: '15+', label: 'Technologies' },  // bumped for accuracy
  { value: '100%', label: 'Commitment' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '5rem 1rem',
        backgroundColor: 'var(--bg-primary)',
        transition: 'background-color 0.3s ease',
      }}
      className="md:px-12"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p style={{
            color: 'var(--accent)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Skills
          </p>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            fontSize: '1.8rem',
            lineHeight: 1.2,
            color: 'var(--text-primary)',
          }} className="md:text-4xl">
            Core Technologies
          </h2>
        </div>

        {/* Stats cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }} className="reveal">
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                border: '1px solid var(--border-color)',
                borderRadius: '0.5rem',
                padding: '1rem',
                textAlign: 'center',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: '2rem',
                color: 'var(--accent)',
                marginBottom: '0.25rem',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.7rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
        }} className="reveal">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                style={{
                  position: 'relative',
                  border: '1px solid var(--border-color)',
                  borderRadius: '0.5rem',
                  padding: '1.25rem',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, transform 0.2s',
                  cursor: 'default',
                  backgroundColor: 'var(--bg-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    background: `radial-gradient(circle at 30% 20%, ${skill.color}20, transparent)`,
                    pointerEvents: 'none',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                />
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '0.75rem',
                  transition: 'transform 0.2s',
                  color: skill.color,
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <Icon aria-hidden="true" />
                </div>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)',
                }}>
                  {skill.name}
                </h3>
                <p style={{
                  fontSize: '0.7rem',
                  lineHeight: 1.4,
                  color: 'var(--text-secondary)',
                }}>
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}