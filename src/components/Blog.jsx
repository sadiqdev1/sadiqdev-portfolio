import { FiClock, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'Who is SadiqDev1?',
    excerpt: 'Meet Abubakar Ibrahim — the full-stack developer behind the SadiqDev1 alias. His journey, skills, and work.',
    date: 'April 2024',
    readTime: '7 min read',
    tags: ['About', 'SadiqDev1'],
    link: '/blog/who-is-sadiqdev1',
    // Gradient thumbnail with avatar feel
    thumb: null,
    thumbGradient: 'from-violet-600 via-indigo-600 to-blue-600',
    thumbIcon: '👨‍💻',
    thumbLabel: 'SadiqDev1',
  },
  {
    title: 'How I Built Chortle with React + Laravel',
    excerpt: 'A deep dive into building a full-stack meme sharing platform with modern web technologies.',
    date: 'March 2024',
    readTime: '8 min read',
    tags: ['React', 'Laravel'],
    link: '/blog/how-i-built-chortle',
    // React + Laravel logos side by side
    thumb: null,
    thumbGradient: 'from-cyan-500 via-blue-600 to-indigo-600',
    thumbLogos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    ],
    thumbLabel: 'React + Laravel',
  },
  {
    title: '5 Laravel Tips I Wish I Knew Earlier',
    excerpt: 'Practical Laravel tips that will save you hours of debugging and improve your code quality.',
    date: 'February 2024',
    readTime: '5 min read',
    tags: ['Laravel', 'PHP'],
    link: '/blog/laravel-tips',
    thumb: null,
    thumbGradient: 'from-red-600 via-orange-500 to-red-700',
    thumbLogos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    ],
    thumbLabel: 'Laravel & PHP',
  },
  {
    title: 'My Journey from Junior to Freelance Developer',
    excerpt: 'Lessons learned, challenges faced, and how I transitioned from a junior role to freelancing.',
    date: 'January 2024',
    readTime: '6 min read',
    tags: ['Career', 'Freelance'],
    link: '/blog/my-journey',
    thumb: null,
    thumbGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    thumbIcon: '🚀',
    thumbLabel: 'Career Journey',
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-24 px-6 md:px-12 bg-[var(--bg-secondary)] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--gradient-mid)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="reveal mb-16 text-center">
          <p className="text-[var(--accent)] text-sm font-bold tracking-wider uppercase mb-3">
            Blog & Articles
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight mb-4">
            Thoughts & Insights
          </h2>
          <p className="text-[var(--text-secondary)] text-base max-w-2xl mx-auto">
            Sharing my experiences, learnings, and technical insights from building web applications
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="reveal-scale pro-card group cursor-pointer overflow-hidden p-0"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Thumbnail */}
              <Link to={article.link} className="block relative overflow-hidden" tabIndex={-1} aria-hidden="true">
                <div
                  className={`relative w-full h-44 bg-gradient-to-br ${article.thumbGradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Subtle noise/grid overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Glow blob */}
                  <div className="absolute w-32 h-32 rounded-full bg-white/10 blur-2xl top-0 right-0 translate-x-8 -translate-y-8" />

                  {/* Logos or emoji */}
                  {article.thumbLogos ? (
                    <div className="relative z-10 flex items-center gap-4">
                      {article.thumbLogos.map((logo, i) => (
                        <div
                          key={i}
                          className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-3 shadow-xl group-hover:scale-110 transition-transform duration-500"
                          style={{ transitionDelay: `${i * 0.05}s` }}
                        >
                          <img
                            src={logo}
                            alt=""
                            aria-hidden="true"
                            width="40"
                            height="40"
                            className="w-10 h-10 object-contain drop-shadow-lg"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <span
                        className="text-6xl group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                        role="img"
                        aria-hidden="true"
                      >
                        {article.thumbIcon}
                      </span>
                    </div>
                  )}

                  {/* Bottom label strip */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black/30 backdrop-blur-sm">
                    <span className="text-xs font-bold text-white/80 tracking-wider uppercase">
                      {article.thumbLabel}
                    </span>
                  </div>

                  {/* Hover shine sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </div>
              </Link>

              {/* Card body */}
              <div className="p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] border border-[var(--accent)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Meta + Read more */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-[var(--text-tertiary)]">
                    <FiClock className="w-3 h-3" aria-hidden="true" />
                    {article.readTime}
                  </span>
                  <Link
                    to={article.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] hover:gap-2 transition-all duration-300"
                    aria-label={`Read article: ${article.title}`}
                  >
                    Read
                    <FiArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Hover gradient glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
