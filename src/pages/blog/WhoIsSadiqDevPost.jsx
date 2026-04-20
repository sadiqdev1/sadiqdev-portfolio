import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiCalendar, FiMapPin, FiCode, FiGlobe } from 'react-icons/fi';
import { FaReact, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLaravel, SiTailwindcss, SiPhp, SiMysql, SiJavascript } from 'react-icons/si';
import { useState, useEffect } from 'react';
import SEO from '../../components/SEO';
import LoadingScreen from '../../components/LoadingScreen';
import ScrollProgress from '../../components/ScrollProgress';
import BackToTop from '../../components/BackToTop';

const techStack = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
];

const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    desc: 'Started learning web development with HTML, CSS, and JavaScript. Built my first static websites and fell in love with the craft.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2021',
    title: 'Junior Developer at Piona Tech',
    desc: 'Joined Piona Tech Solution in Lagos, Nigeria as a Junior Web Developer. Built 5 client websites, learned React and Laravel, and improved page speed by 40% on key projects.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    year: '2022',
    title: 'Growing the Stack',
    desc: 'Deepened expertise in full-stack development. Mastered Laravel APIs, React state management, MySQL optimization, and Stripe payment integration.',
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    year: '2023',
    title: 'Going Freelance',
    desc: 'Made the leap to full-time freelancing. Built Chortle — a full-stack meme platform with 500+ users. Started working with international clients remotely.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    year: '2024–Now',
    title: 'Scaling Up',
    desc: 'Completed 15+ projects for clients worldwide. Currently learning Next.js, TypeScript, Docker, and AWS to expand into cloud-native development.',
    color: 'from-orange-500 to-amber-500',
  },
];

const values = [
  {
    emoji: '🎯',
    title: 'Precision Over Speed',
    desc: 'I believe in writing code that lasts. Clean architecture, proper naming, and thorough documentation are non-negotiable.',
  },
  {
    emoji: '🚀',
    title: 'Performance First',
    desc: 'Every millisecond matters. I optimize for Core Web Vitals, lazy loading, and efficient database queries from day one.',
  },
  {
    emoji: '🤝',
    title: 'Client Partnership',
    desc: 'I don\'t just build what you ask — I understand your business goals and build what you actually need.',
  },
  {
    emoji: '📚',
    title: 'Always Learning',
    desc: 'Technology evolves fast. I dedicate time every week to learning new tools, patterns, and best practices.',
  },
];

export default function WhoIsSadiqDevPost() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Who is SadiqDev1? Meet Abubakar Ibrahim – Full-Stack Developer',
    description:
      'Learn about SadiqDev1 (Abubakar Ibrahim), a full-stack developer from Nigeria specializing in React, Laravel, and modern web applications. His journey, skills, values, and work.',
    image: 'https://sadiqdev-portfolio.vercel.app/profile1.jpg',
    author: {
      '@type': 'Person',
      name: 'Abubakar Ibrahim',
      url: 'https://sadiqdev-portfolio.vercel.app/',
      sameAs: [
        'https://github.com/sadiqdev1',
        'https://www.linkedin.com/in/sadiqdev1/',
        'https://x.com/sadiqdev1',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: 'Abubakar Ibrahim',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sadiqdev-portfolio.vercel.app/profile1.jpg',
      },
    },
    datePublished: '2024-04-01',
    dateModified: '2026-04-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://sadiqdev-portfolio.vercel.app/blog/who-is-sadiqdev1',
    },
    keywords: [
      'SadiqDev1',
      'Abubakar Ibrahim',
      'full-stack developer Nigeria',
      'React Laravel developer',
      'freelance web developer',
    ],
    articleSection: 'About',
    wordCount: 1400,
  };

  return (
    <>
      <SEO
        title="Who is SadiqDev1? Meet Abubakar Ibrahim – Full-Stack Developer"
        description="SadiqDev1 is Abubakar Ibrahim, a full-stack developer from Nigeria specializing in React, Laravel, and modern web applications. Learn about his journey, skills, projects, and how to hire him."
        keywords="who is sadiqdev1, sadiqdev1, abubakar ibrahim developer, full-stack developer nigeria, react laravel developer, freelance web developer nigeria, sadiqdev portfolio"
        canonicalUrl="/blog/who-is-sadiqdev1"
        ogType="article"
        ogImage="https://sadiqdev-portfolio.vercel.app/profile1.jpg"
        article={true}
        publishedTime="2024-04-01T00:00:00Z"
        modifiedTime="2026-04-20T00:00:00Z"
        structuredData={structuredData}
      />
      {isLoading && <LoadingScreen />}
      <ScrollProgress />
      <BackToTop />

      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 px-6">
        <article className="max-w-3xl mx-auto">

          {/* Back */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
          >
            <FiArrowLeft /> Back to Portfolio
          </button>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {['About', 'SadiqDev1', 'Developer'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] border border-[var(--accent)]/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
              Who is SadiqDev1?
            </h1>

            <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)] mb-6">
              <span className="flex items-center gap-2">
                <FiCalendar aria-hidden="true" />
                April 2024
              </span>
              <span className="flex items-center gap-2">
                <FiClock aria-hidden="true" />
                7 min read
              </span>
              <span className="flex items-center gap-2">
                <FiMapPin aria-hidden="true" />
                Lagos, Nigeria
              </span>
            </div>

            {/* Profile card */}
            <div className="pro-card flex items-center gap-6 mb-8">
              <img
                src="/profile1.webp"
                alt="Abubakar Ibrahim – SadiqDev1, Full-Stack Developer"
                width="80"
                height="80"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[var(--border-hover)] flex-shrink-0"
              />
              <div>
                <h2 className="font-display font-bold text-xl text-[var(--text-primary)] mb-1">
                  Abubakar Ibrahim
                </h2>
                <p className="text-sm text-[var(--accent)] font-semibold mb-2">
                  @sadiqdev1 · Full-Stack Developer
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/sadiqdev1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <FaGithub size={18} aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sadiqdev1/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <FaLinkedin size={18} aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com/sadiqdev1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter / X"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <FaTwitter size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="space-y-6 text-[var(--text-secondary)]">

            <p className="text-lg leading-relaxed">
              If you've landed here searching for <strong className="text-[var(--text-primary)]">"SadiqDev1"</strong>, you're in the right place. SadiqDev1 is the online alias of <strong className="text-[var(--accent)]">Abubakar Ibrahim</strong> — a full-stack web developer based in Nigeria who builds fast, scalable, and beautiful web applications.
            </p>

            {/* Who section */}
            <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-10 mb-4">
              The Person Behind the Alias
            </h2>
            <p className="leading-relaxed">
              Abubakar Ibrahim — known online as <strong className="text-[var(--text-primary)]">SadiqDev1</strong> — is a self-driven full-stack developer who started his coding journey in 2020. What began as curiosity about how websites work turned into a full-time career building web applications for clients across Nigeria and internationally.
            </p>
            <p className="leading-relaxed">
              The name "SadiqDev" comes from his first name (Sadiq is a variant of Abubakar in some contexts) combined with "Dev" — short for developer. The "1" in sadiqdev<strong className="text-[var(--text-primary)]">1</strong> is simply his original username handle, and it stuck.
            </p>

            {/* Location */}
            <div className="pro-card flex items-start gap-4 my-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent)]/20 flex items-center justify-center flex-shrink-0">
                <FiGlobe className="text-[var(--accent)]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">Based in Nigeria, Working Globally</h3>
                <p className="text-sm leading-relaxed">
                  SadiqDev1 is based in Lagos, Nigeria, but works remotely with clients worldwide. He has delivered projects for clients in the UK, US, and across Africa — all while maintaining a 5-star client satisfaction record.
                </p>
              </div>
            </div>

            {/* What he does */}
            <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-10 mb-4">
              What Does SadiqDev1 Do?
            </h2>
            <p className="leading-relaxed">
              SadiqDev1 specializes in <strong className="text-[var(--text-primary)]">full-stack web development</strong> — meaning he handles both the frontend (what users see) and the backend (the server, database, and logic behind the scenes).
            </p>

            <div className="pro-card my-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <FiCode className="text-[var(--accent)]" aria-hidden="true" />
                Core Services
              </h3>
              <ul className="space-y-3">
                {[
                  'Custom web application development (React + Laravel)',
                  'E-commerce platforms with Stripe payment integration',
                  'REST API design and development',
                  'Portfolio and landing page design',
                  'Database architecture and optimization (MySQL)',
                  'Performance optimization and SEO',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-10 mb-4">
              Tech Stack
            </h2>
            <p className="leading-relaxed mb-6">
              SadiqDev1's primary stack is <strong className="text-[var(--text-primary)]">React on the frontend</strong> and <strong className="text-[var(--text-primary)]">Laravel (PHP) on the backend</strong>, styled with Tailwind CSS and powered by MySQL databases.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="pro-card flex items-center gap-3 py-3"
                >
                  <tech.icon
                    style={{ color: tech.color, fontSize: '1.4rem', flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-[var(--text-primary)]">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Journey / Timeline */}
            <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-10 mb-6">
              The Journey of SadiqDev1
            </h2>

            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                      {item.year.slice(0, 4)}
                    </div>
                    {idx < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-[var(--border-color)] mt-2" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Notable Work */}
            <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-10 mb-4">
              Notable Work
            </h2>
            <p className="leading-relaxed">
              SadiqDev1's most recognized project is <strong className="text-[var(--text-primary)]">Chortle</strong> — a full-stack meme sharing platform built with React and Laravel. The platform attracted over <strong className="text-[var(--accent)]">500 active users</strong> and <strong className="text-[var(--accent)]">2,000+ memes</strong> shared in its first month, featuring a voting system, nested comments, and Stripe-powered premium memberships.
            </p>

            <div className="pro-card bg-gradient-to-r from-[var(--accent-glow)] to-transparent my-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">Chortle – Meme Sharing Platform</h3>
                  <p className="text-sm text-[var(--text-secondary)]">React · Laravel · MySQL · Stripe · 500+ users</p>
                </div>
                <a
                  href="https://chortle-production.up.railway.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition-all"
                >
                  View Live →
                </a>
              </div>
            </div>

            {/* Values */}
            <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-10 mb-6">
              What SadiqDev1 Stands For
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="pro-card">
                  <div className="text-2xl mb-3" aria-hidden="true">{v.emoji}</div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-10 mb-4">
              By the Numbers
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
              {[
                { value: '15+', label: 'Projects Delivered' },
                { value: '5★', label: 'Client Rating' },
                { value: '3+', label: 'Years Experience' },
                { value: '100%', label: 'Commitment' },
              ].map((stat) => (
                <div key={stat.label} className="pro-card text-center py-4">
                  <div className="font-display font-extrabold text-2xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Find him online */}
            <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-10 mb-4">
              Where to Find SadiqDev1 Online
            </h2>
            <p className="leading-relaxed mb-4">
              You can find SadiqDev1 across the web under the same handle:
            </p>

            <ul className="space-y-3 mb-8">
              {[
                { platform: 'GitHub', url: 'https://github.com/sadiqdev1', desc: 'Open source projects and code' },
                { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/sadiqdev1/', desc: 'Professional profile and work history' },
                { platform: 'Twitter / X', url: 'https://x.com/sadiqdev1', desc: 'Dev thoughts and updates' },
                { platform: 'Instagram', url: 'https://instagram.com/sadiqdev1', desc: 'Behind the scenes' },
                { platform: 'Portfolio', url: 'https://sadiqdev-portfolio.vercel.app/', desc: 'Projects, blog, and contact' },
              ].map((link) => (
                <li key={link.platform} className="flex items-center gap-3">
                  <span className="text-[var(--accent)] font-bold text-sm w-24 flex-shrink-0">{link.platform}</span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors underline underline-offset-2"
                  >
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>

            {/* Conclusion */}
            <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-10 mb-4">
              Final Word
            </h2>
            <p className="leading-relaxed">
              SadiqDev1 is more than a username — it represents a commitment to building quality software, growing continuously, and delivering real value to clients. Whether you're a business looking for a reliable developer or a fellow developer curious about the journey, Abubakar Ibrahim is someone worth knowing.
            </p>
            <p className="leading-relaxed mt-4">
              If you want to work together, check out the <a href="/hire-me" className="text-[var(--accent)] hover:underline font-semibold">Hire Me</a> page or reach out directly through the <a href="/#contact" className="text-[var(--accent)] hover:underline font-semibold">contact form</a>.
            </p>

            {/* CTA */}
            <div className="pro-card bg-gradient-to-r from-[var(--accent-glow)] to-transparent mt-12 text-center">
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                Ready to build something great?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-5">
                SadiqDev1 is currently available for freelance projects
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a
                  href="/hire-me"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all"
                >
                  Hire SadiqDev1 →
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 glass border border-[var(--border-color)] text-[var(--text-primary)] px-6 py-3 rounded-xl font-semibold hover:border-[var(--accent)] transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </div>

          </div>
        </article>
      </div>
    </>
  );
}
