import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiCalendar } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import LoadingScreen from '../../components/LoadingScreen';
import ScrollProgress from '../../components/ScrollProgress';
import BackToTop from '../../components/BackToTop';

export default function JourneyPost() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <ScrollProgress />
      <BackToTop />
      
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 px-6">
      <article className="max-w-3xl mx-auto">
        
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          <FiArrowLeft /> Back to Portfolio
        </button>

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {['Career', 'Freelance', 'Journey'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] border border-[var(--accent)]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
            My Journey from Junior to Freelance Developer
          </h1>

          <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
            <span className="flex items-center gap-2">
              <FiCalendar />
              January 2024
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              6 min read
            </span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-[var(--text-secondary)]">
          
          <p className="text-lg leading-relaxed">
            Two years ago, I was a junior developer at Piona Tech Solution in Lagos. Today, I'm a freelance full-stack developer working with clients worldwide. Here's my journey and the lessons I learned along the way.
          </p>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            The Beginning: Junior Developer at Piona Tech
          </h2>
          <p>
            In January 2021, I joined Piona Tech Solution as a Junior Web Developer. I was excited but also terrified. I knew HTML, CSS, and basic JavaScript, but I had so much to learn.
          </p>

          <div className="pro-card my-6">
            <h3 className="font-bold text-[var(--text-primary)] mb-3">What I Learned at Piona Tech:</h3>
            <ul className="space-y-2">
              <li>• How to work in a team and use Git properly</li>
              <li>• Building responsive websites for real clients</li>
              <li>• React and Laravel frameworks</li>
              <li>• The importance of clean, maintainable code</li>
              <li>• How to communicate with clients effectively</li>
            </ul>
          </div>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            The Turning Point
          </h2>
          <p>
            After a year at Piona Tech, I had built 5 client websites and significantly improved my skills. I started taking on small freelance projects on weekends. This is when I realized I could do this full-time.
          </p>

          <p>
            The turning point came when I built my first full-stack application - a meme sharing platform called Chortle. It taught me so much about building scalable applications, handling payments, and deploying to production.
          </p>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Making the Leap to Freelance
          </h2>
          <p>
            In January 2023, I made the decision to go full-time freelance. It was scary leaving the security of a regular paycheck, but I knew I was ready.
          </p>

          <div className="pro-card bg-yellow-500/10 border-yellow-500/30 my-6">
            <p className="text-yellow-400 font-bold mb-2">⚠️ Reality Check:</p>
            <p>
              Freelancing isn't all sunshine and rainbows. The first few months were tough. Finding clients, managing finances, and dealing with uncertainty was challenging.
            </p>
          </div>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Lessons Learned
          </h2>

          <h3 className="font-bold text-lg text-[var(--text-primary)] mt-6 mb-3">
            1. Build a Strong Portfolio
          </h3>
          <p>
            Your portfolio is your resume. I spent time building projects that showcased my skills. Chortle was my flagship project that helped me land bigger clients.
          </p>

          <h3 className="font-bold text-lg text-[var(--text-primary)] mt-6 mb-3">
            2. Network, Network, Network
          </h3>
          <p>
            Most of my clients came through referrals and networking. I joined developer communities, attended meetups (virtual and in-person), and stayed active on Twitter and LinkedIn.
          </p>

          <h3 className="font-bold text-lg text-[var(--text-primary)] mt-6 mb-3">
            3. Never Stop Learning
          </h3>
          <p>
            Technology changes fast. I dedicate time every week to learning new things. Currently, I'm learning Next.js, TypeScript, and Docker to stay competitive.
          </p>

          <h3 className="font-bold text-lg text-[var(--text-primary)] mt-6 mb-3">
            4. Communicate Clearly
          </h3>
          <p>
            Clear communication is more important than technical skills. Set expectations, provide updates, and be honest about timelines. This builds trust with clients.
          </p>

          <h3 className="font-bold text-lg text-[var(--text-primary)] mt-6 mb-3">
            5. Charge What You're Worth
          </h3>
          <p>
            I made the mistake of undercharging early on. Know your value and don't be afraid to charge accordingly. Quality work deserves quality pay.
          </p>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Where I Am Now
          </h2>
          <p>
            Today, I've completed <strong className="text-[var(--accent)]">15+ projects</strong> for clients worldwide. I specialize in React and Laravel full-stack development, and I maintain a 5-star rating from satisfied clients.
          </p>

          <p>
            I work remotely, set my own hours, and choose projects that excite me. It's not always easy, but it's incredibly rewarding.
          </p>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Advice for Aspiring Freelancers
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">•</span>
              <span>Start freelancing part-time while you still have a job</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">•</span>
              <span>Build a portfolio of real projects, not just tutorials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">•</span>
              <span>Save 6 months of expenses before going full-time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">•</span>
              <span>Focus on one or two technologies and master them</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">•</span>
              <span>Don't compete on price, compete on quality</span>
            </li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Final Thoughts
          </h2>
          <p>
            The journey from junior developer to freelancer wasn't easy, but it was worth it. If you're considering making the leap, my advice is: prepare well, start small, and believe in yourself.
          </p>

          <p>
            Remember, everyone's journey is different. This was mine. Yours will be unique to you.
          </p>

          <div className="pro-card bg-gradient-to-r from-[var(--accent-glow)] to-transparent mt-12 text-center">
            <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
              Want to work together?
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              I'm currently available for freelance projects
            </p>
            <button
              onClick={() => navigate('/hire-me')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all"
            >
              Hire Me →
            </button>
          </div>

        </div>

      </article>
    </div>
    </>
  );
}
