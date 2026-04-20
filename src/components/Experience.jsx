import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2020 – Present',
    description: 'Building custom web applications for clients worldwide using React, Laravel, and modern web technologies. Specialized in creating scalable, performant solutions.',
    achievements: [
      'Delivered 15+ successful projects',
      'Maintained 98% client satisfaction rate',
      'Reduced load times by 60% on average',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Various Projects',
    location: 'Nigeria',
    period: '2018 – 2020',
    description: 'Developed responsive websites and web applications. Focused on creating user-friendly interfaces and optimizing performance.',
    achievements: [
      'Built 10+ responsive websites',
      'Implemented modern UI/UX practices',
      'Collaborated with design teams',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 bg-[var(--bg-primary)] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background orb */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--accent)] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <p className="text-[var(--accent)] text-sm font-bold tracking-wider uppercase mb-3">
            Experience
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight mb-4">
            Professional Journey
          </h2>
          <p className="text-[var(--text-secondary)] text-base max-w-xl mx-auto">
            The experiences and milestones that shaped my expertise
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border-color)] to-transparent" style={{ transform: 'translateX(-50%)' }} />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="reveal relative grid md:grid-cols-2 gap-8 items-center">
                {/* Card — alternates sides */}
                <div className={idx % 2 === 0 ? 'md:pr-14' : 'md:col-start-2 md:pl-14'}>
                  <div className="pro-card group">
                    {/* Period badge */}
                    <div className="inline-flex items-center gap-2 bg-[var(--accent-glow)] text-[var(--accent)] px-3 py-1.5 rounded-full text-xs font-bold mb-5 border border-[var(--accent)]/20">
                      <FiCalendar />
                      {exp.period}
                    </div>

                    <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {exp.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1.5">
                        <FiBriefcase className="text-[var(--accent)]" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiMapPin className="text-[var(--accent)]" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <ul className="flex flex-col gap-2">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                          <span className="mt-0.5 w-4 h-4 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/30 flex items-center justify-center flex-shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                          </span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-1/2 w-5 h-5 rounded-full border-4 border-[var(--bg-primary)] items-center justify-center"
                  style={{
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))',
                    boxShadow: '0 0 0 4px var(--accent-glow)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
