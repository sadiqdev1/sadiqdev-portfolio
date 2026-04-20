import { FiClock, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'Who is SadiqDev1?',
    excerpt: 'Meet Abubakar Ibrahim — the full-stack developer behind the SadiqDev1 alias. Learn about his journey, skills, and work.',
    date: 'April 2024',
    readTime: '7 min read',
    tags: ['About', 'SadiqDev1', 'Developer'],
    link: '/blog/who-is-sadiqdev1',
  },
  {
    title: 'How I Built Chortle with React + Laravel',
    excerpt: 'A deep dive into building a full-stack meme sharing platform with modern web technologies.',
    date: 'March 2024',
    readTime: '8 min read',
    tags: ['React', 'Laravel', 'Full-Stack'],
    link: '/blog/how-i-built-chortle',
  },
  {
    title: '5 Laravel Tips I Wish I Knew Earlier',
    excerpt: 'Practical Laravel tips that will save you hours of debugging and improve your code quality.',
    date: 'February 2024',
    readTime: '5 min read',
    tags: ['Laravel', 'PHP', 'Tips'],
    link: '/blog/laravel-tips',
  },
  {
    title: 'My Journey from Junior to Freelance Developer',
    excerpt: 'Lessons learned, challenges faced, and how I transitioned from a junior role to freelancing.',
    date: 'January 2024',
    readTime: '6 min read',
    tags: ['Career', 'Freelance', 'Journey'],
    link: '/blog/my-journey',
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
              className="reveal-scale pro-card group cursor-pointer"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
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
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-[var(--text-tertiary)] mb-4">
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <FiClock />
                  {article.readTime}
                </span>
              </div>

              {/* Read More */}
              <Link
                to={article.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:gap-3 transition-all duration-300"
              >
                Read Article
                <FiArrowRight />
              </Link>

              {/* Hover gradient */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
