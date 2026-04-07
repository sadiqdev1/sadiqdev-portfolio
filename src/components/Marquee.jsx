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
import { FiZap } from 'react-icons/fi';

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
  { name: 'HTMX', icon: FiZap, color: '#3E6D9C' },  // using Zap icon instead of null
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Livewire', icon: SiLivewire, color: '#FB70A9' },
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="py-4 overflow-hidden bg-[var(--bg-secondary)] border-y border-[var(--border-color)] group">
      <div className="flex gap-8 md:gap-12 whitespace-nowrap animate-marquee group-hover:pause-animation">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] text-sm font-medium flex-shrink-0"
          >
            <item.icon className="text-xl" style={{ color: item.color }} />
            <span>{item.name}</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}