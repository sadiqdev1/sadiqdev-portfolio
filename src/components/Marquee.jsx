import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiLivewire,
  SiJquery,
  SiPhp,
  SiMysql,
  SiBootstrap,
} from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';

const items = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: DiCss3, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'HTMX', icon: null, color: '#3E6D9C' }, // no official icon yet
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Livewire', icon: SiLivewire, color: '#FB70A9' },
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        padding: '1rem',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          whiteSpace: 'nowrap',
        }}
        className="animate-marquee"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              fontWeight: 500,
              flexShrink: 0,
            }}
          >
            {item.icon ? (
              <item.icon style={{ fontSize: '1.25rem', color: item.color }} />
            ) : (
              <span style={{ fontSize: '1rem' }}>⚡</span>
            )}
            <span>{item.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}