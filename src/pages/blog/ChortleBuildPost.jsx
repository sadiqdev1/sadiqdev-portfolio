import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiCalendar } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import SEO from '../../components/SEO';
import LoadingScreen from '../../components/LoadingScreen';
import ScrollProgress from '../../components/ScrollProgress';
import BackToTop from '../../components/BackToTop';

export default function ChortleBuildPost() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How I Built Chortle with React + Laravel",
    "description": "A deep dive into building a full-stack meme sharing platform with modern web technologies including React, Laravel, Tailwind CSS, and Stripe.",
    "image": "https://sadiqdev-portfolio.vercel.app/og-image.png",
    "author": {
      "@type": "Person",
      "name": "Abubakar Ibrahim",
      "url": "https://sadiqdev-portfolio.vercel.app/"
    },
    "publisher": {
      "@type": "Person",
      "name": "Abubakar Ibrahim",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sadiqdev-portfolio.vercel.app/profile1.jpg"
      }
    },
    "datePublished": "2024-03-15",
    "dateModified": "2024-03-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://sadiqdev-portfolio.vercel.app/blog/how-i-built-chortle"
    },
    "keywords": ["React", "Laravel", "Full-Stack Development", "Web Development", "Chortle", "Meme Platform"],
    "articleSection": "Technology",
    "wordCount": 1200
  };

  return (
    <>
      <SEO 
        title="How I Built Chortle with React + Laravel | Abubakar Ibrahim"
        description="A deep dive into building a full-stack meme sharing platform with modern web technologies. Learn how I used React, Laravel, Tailwind CSS, MySQL, and Stripe to create Chortle."
        keywords="react laravel tutorial, full-stack development, chortle case study, meme platform, react laravel integration, stripe integration, web development blog"
        canonicalUrl="/blog/how-i-built-chortle"
        ogType="article"
        article={true}
        publishedTime="2024-03-15T00:00:00Z"
        modifiedTime="2024-03-15T00:00:00Z"
        structuredData={structuredData}
      />
      {isLoading && <LoadingScreen />}
      <ScrollProgress />
      <BackToTop />
      
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 px-6">
      <article className="max-w-3xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          <FiArrowLeft /> Back to Portfolio
        </button>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {['React', 'Laravel', 'Full-Stack'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] border border-[var(--accent)]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
            How I Built Chortle with React + Laravel
          </h1>

          <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
            <span className="flex items-center gap-2">
              <FiCalendar />
              March 2024
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              8 min read
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-[var(--text-secondary)]">
          
          <p className="text-lg leading-relaxed">
            Building Chortle was an exciting journey that taught me a lot about full-stack development. In this article, I'll share how I built a meme sharing platform using React for the frontend and Laravel for the backend.
          </p>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            The Problem
          </h2>
          <p>
            I noticed that existing meme platforms lacked proper community features and monetization options. Users wanted a place where they could not only share memes but also engage with a community through voting and comments.
          </p>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Tech Stack Decision
          </h2>
          <p>
            I chose <strong className="text-[var(--accent)]">React</strong> for the frontend because of its component-based architecture and excellent ecosystem. For the backend, <strong className="text-[var(--accent)]">Laravel</strong> was the perfect choice with its elegant syntax and built-in features like authentication, database migrations, and API resources.
          </p>

          <div className="pro-card my-8">
            <h3 className="font-bold text-[var(--text-primary)] mb-3">Key Technologies:</h3>
            <ul className="space-y-2">
              <li>• <strong>React 18</strong> - Frontend UI</li>
              <li>• <strong>Laravel 10</strong> - Backend API</li>
              <li>• <strong>Tailwind CSS</strong> - Styling</li>
              <li>• <strong>MySQL</strong> - Database</li>
              <li>• <strong>Stripe</strong> - Payment processing</li>
            </ul>
          </div>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Building the Backend
          </h2>
          <p>
            I started with Laravel's API resources to create a RESTful API. The authentication was handled using Laravel Sanctum, which provides a simple token-based authentication system perfect for SPAs.
          </p>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 my-6 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-emerald-400">
{`// Laravel API Route Example
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/memes', [MemeController::class, 'index']);
    Route::post('/memes', [MemeController::class, 'store']);
    Route::post('/memes/{meme}/vote', [VoteController::class, 'vote']);
});`}
              </code>
            </pre>
          </div>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Frontend with React
          </h2>
          <p>
            The React frontend was built with a focus on performance and user experience. I used React Query for data fetching and caching, which significantly improved the app's responsiveness.
          </p>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Key Features Implemented
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">1.</span>
              <span><strong>Image Upload & Optimization:</strong> Used Laravel's file storage with automatic image compression</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">2.</span>
              <span><strong>Voting System:</strong> Implemented upvote/downvote with real-time updates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">3.</span>
              <span><strong>Comment System:</strong> Nested comments with replies using recursive components</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1">4.</span>
              <span><strong>Premium Features:</strong> Stripe integration for subscription management</span>
            </li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Challenges & Solutions
          </h2>
          <p>
            One major challenge was handling image uploads efficiently. Large images were slowing down the platform. I solved this by implementing server-side image compression using Laravel's Intervention Image package and lazy loading on the frontend.
          </p>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Results
          </h2>
          <p>
            After launching, Chortle gained <strong className="text-[var(--accent)]">500+ active users</strong> and <strong className="text-[var(--accent)]">2000+ memes</strong> were shared in the first month. The platform handles thousands of requests daily with excellent performance.
          </p>

          <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">
            Lessons Learned
          </h2>
          <ul className="space-y-2">
            <li>• Start with a solid API design before building the frontend</li>
            <li>• Image optimization is crucial for performance</li>
            <li>• Real-time features greatly improve user engagement</li>
            <li>• Proper error handling makes debugging much easier</li>
          </ul>

          <div className="pro-card bg-gradient-to-r from-[var(--accent-glow)] to-transparent mt-12 text-center">
            <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
              Want to see it in action?
            </h3>
            <a
              href="https://chortle-production.up.railway.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all"
            >
              Visit Chortle →
            </a>
          </div>

        </div>

      </article>
    </div>
    </>
  );
}
