import { FiCode, FiZap, FiMonitor, FiGlobe } from 'react-icons/fi';

const stats = [
  { value: '8+', label: 'Projects Completed' },
  { value: '5+', label: 'Technologies Mastered' },
  { value: '100%', label: 'Commitment to Quality' },
];

const cards = [
  { title: 'Clean Code', text: 'Readable, maintainable, and scalable architecture.', icon: FiCode },
  { title: 'Performance', text: 'Fast load times and smooth interactions.', icon: FiZap },
  { title: 'Responsive', text: 'Flawless experience on any device.', icon: FiMonitor },
  { title: 'Global Mindset', text: 'Built for international standards.', icon: FiGlobe },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 1rem',      // reduced horizontal padding on mobile
        backgroundColor: 'var(--bg-primary)',
        transition: 'background-color 0.3s ease',
        overflowX: 'hidden',       // kill horizontal scroll
        width: '100%',
      }}
      className="md:px-12 sm:px-6"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',             // smaller gap on mobile
          alignItems: 'center',
          marginBottom: '4rem',
          width: '100%',
        }}
        className="md:grid-cols-2 md:gap-12"
      >
        {/* Left side - About text */}
        <div className="reveal">
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
            About Me
          </p>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: '1.75rem',
              lineHeight: 1.2,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}
            className="md:text-4xl"
          >
            More than just code.
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1rem',
              fontSize: '0.9rem',
            }}
          >
            I'm <strong style={{ color: 'var(--accent)' }}>Abubakar Ibrahim (SadiqDev)</strong>, a full‑stack developer who believes
            in building web applications that are both powerful and elegant. My focus is on
            writing clean, maintainable code that scales.
          </p>
          <p
            style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              fontSize: '0.9rem',
            }}
          >
            When I'm not coding, I contribute to open source, explore new technologies,
            and refine my craft to stay ahead of industry trends.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',    // allow stats to wrap on very small screens
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.75rem',
                    color: 'var(--accent)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-secondary)',
                    marginTop: '0.25rem',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Code block */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          className="reveal"
        >
          <div
            style={{
              width: '100%',
              maxWidth: '100%',     // allow full width on mobile
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
            }}
          >
            {/* Window header */}
            <div
              style={{
                backgroundColor: 'var(--border-color)',
                padding: '0.5rem 1rem',
                display: 'flex',
                gap: '0.5rem',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              <span style={{ width: '12px', height: '12px', backgroundColor: '#ef4444', borderRadius: '9999px' }} />
              <span style={{ width: '12px', height: '12px', backgroundColor: '#f59e0b', borderRadius: '9999px' }} />
              <span style={{ width: '12px', height: '12px', backgroundColor: '#10b981', borderRadius: '9999px' }} />
              <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                developer.js
              </span>
            </div>

            {/* Code content with horizontal scroll inside the block only */}
            <div
              style={{
                padding: '1rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                lineHeight: 1.6,
                overflowX: 'auto',   // scroll only inside code block if needed
              }}
            >
              <pre style={{ margin: 0, color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>
                <code>
                  <span style={{ color: '#c678dd' }}>const</span>{' '}
                  <span style={{ color: '#e5c07b' }}>developer</span>{' '}
                  <span style={{ color: '#abb2bf' }}>=</span>{' '}
                  <span style={{ color: '#abb2bf' }}>{'{'}</span>
                  <br />
                  <span style={{ marginLeft: '1rem', display: 'inline-block' }}>
                    <span style={{ color: '#e06c75' }}>name</span>
                    <span style={{ color: '#abb2bf' }}>:</span>{' '}
                    <span style={{ color: '#98c379' }}>"Sadiq"</span>,
                  </span>
                  <br />
                  <span style={{ marginLeft: '1rem', display: 'inline-block' }}>
                    <span style={{ color: '#e06c75' }}>role</span>
                    <span style={{ color: '#abb2bf' }}>:</span>{' '}
                    <span style={{ color: '#98c379' }}>"Full‑Stack Developer"</span>,
                  </span>
                  <br />
                  <span style={{ marginLeft: '1rem', display: 'inline-block' }}>
                    <span style={{ color: '#e06c75' }}>stack</span>
                    <span style={{ color: '#abb2bf' }}>:</span>{' '}
                    <span style={{ color: '#abb2bf' }}>[</span>
                    <span style={{ color: '#98c379' }}>"Laravel"</span>,{' '}
                    <span style={{ color: '#98c379' }}>"React"</span>,{' '}
                    <span style={{ color: '#98c379' }}>"Tailwind"</span>
                    <span style={{ color: '#abb2bf' }}>]</span>,
                  </span>
                  <br />
                  <span style={{ marginLeft: '1rem', display: 'inline-block' }}>
                    <span style={{ color: '#e06c75' }}>passion</span>
                    <span style={{ color: '#abb2bf' }}>:</span>{' '}
                    <span style={{ color: '#98c379' }}>"building scalable web apps"</span>
                  </span>
                  <br />
                  <span style={{ color: '#abb2bf' }}>{'}'};</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Cards section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem',
          width: '100%',
        }}
        className="md:grid-cols-4 md:gap-4"
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.5rem',
              padding: '1rem',
              transition: 'transform 0.2s, border-color 0.2s',
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
            <card.icon
              style={{
                fontSize: '1.5rem',
                color: 'var(--accent)',
                marginBottom: '0.5rem',
              }}
            />
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '0.9rem',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)',
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontSize: '0.75rem',
                lineHeight: 1.4,
                color: 'var(--text-secondary)',
              }}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}