import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import { SiLaravel, SiTailwindcss, SiMysql, SiStripe } from 'react-icons/si';
import chortleImg from '../assets/Screenshot_20260403-114440.png';

export default function ChortleCaseStudy() {
  const navigate = useNavigate();

  const techStack = [
    { name: 'React', icon: FaReact, color: '#61DAFB', desc: 'Frontend framework for building the UI' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', desc: 'Backend API and authentication' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', desc: 'Utility-first CSS framework' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', desc: 'Relational database' },
    { name: 'Stripe', icon: SiStripe, color: '#635BFF', desc: 'Payment processing' },
  ];

  const features = [
    'User authentication and authorization',
    'Meme upload with image optimization',
    'Voting system (upvote/downvote)',
    'Comment system with nested replies',
    'Premium membership with Stripe',
    'User profiles and activity tracking',
    'Real-time notifications',
    'Responsive design for all devices',
  ];

  const challenges = [
    {
      title: 'Image Optimization',
      problem: 'Large image uploads were slowing down the platform',
      solution: 'Implemented server-side image compression and lazy loading',
    },
    {
      title: 'Real-time Updates',
      problem: 'Users wanted instant feedback on votes and comments',
      solution: 'Used Laravel Broadcasting with Pusher for real-time updates',
    },
    {
      title: 'Payment Integration',
      problem: 'Needed secure payment processing for premium features',
      solution: 'Integrated Stripe with webhook handling for subscription management',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          <FiArrowLeft /> Back to Portfolio
        </button>

        {/* Hero */}
        <div className="mb-12">
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mb-4">
            Chortle
            <span className="block text-2xl md:text-3xl text-[var(--text-secondary)] font-normal mt-2">
              Full-Stack Meme Sharing Platform
            </span>
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="https://chortle-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all"
            >
              <FiExternalLink /> Live Demo
            </a>
            <a
              href="https://chortle-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 glass border border-[var(--border-color)] text-[var(--text-primary)] px-6 py-3 rounded-xl font-semibold hover:border-[var(--accent)] transition-all"
            >
              <FiGithub /> View Code
            </a>
          </div>

          <img
            src={chortleImg}
            alt="Chortle Platform"
            className="w-full rounded-xl border border-[var(--border-color)] shadow-2xl"
          />
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl mb-4">Overview</h2>
          <div className="pro-card space-y-4">
            <div>
              <h3 className="font-bold text-[var(--accent)] mb-2">Problem</h3>
              <p className="text-[var(--text-secondary)]">
                Users needed an engaging platform to share and discover memes with a community, but existing platforms lacked proper voting systems and monetization options.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--accent)] mb-2">Solution</h3>
              <p className="text-[var(--text-secondary)]">
                Built a full-stack meme sharing platform with voting, comments, and premium features powered by React and Laravel.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--accent)] mb-2">Results</h3>
              <p className="text-[var(--text-secondary)]">
                500+ active users, 2000+ memes shared, integrated Stripe payment gateway for premium memberships.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl mb-6">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="pro-card flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <tech.icon style={{ color: tech.color, fontSize: '1.5rem' }} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{tech.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl mb-6">Key Features</h2>
          <div className="pro-card">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span className="w-5 h-5 rounded-full bg-[var(--accent-glow)] border border-[var(--accent)]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl mb-6">Challenges & Solutions</h2>
          <div className="space-y-4">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="pro-card">
                <h3 className="font-bold text-lg text-[var(--text-primary)] mb-3">
                  {challenge.title}
                </h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-bold text-red-400">Problem:</span>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">{challenge.problem}</p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-emerald-400">Solution:</span>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">{challenge.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-3xl mb-6">What I Learned</h2>
          <div className="pro-card">
            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>How to implement real-time features using Laravel Broadcasting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Best practices for image optimization and lazy loading</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Stripe payment integration and webhook handling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">•</span>
                <span>Building scalable React applications with proper state management</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pro-card bg-gradient-to-r from-[var(--accent-glow)] to-transparent">
          <h3 className="font-display font-bold text-2xl mb-4">Interested in working together?</h3>
          <p className="text-[var(--text-secondary)] mb-6">
            I'm available for freelance projects and full-time opportunities.
          </p>
          <button
            onClick={() => navigate('/hire-me')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all"
          >
            Hire Me
          </button>
        </div>

      </div>
    </div>
  );
}
