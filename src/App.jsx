import { useEffect, useState, lazy, Suspense } from "react";
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

// Lazy load below-the-fold components
const Marquee = lazy(() => import("./components/Marquee"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Blog = lazy(() => import("./components/Blog"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(true);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abubakar Ibrahim",
    "url": "https://sadiqdev-portfolio.vercel.app/",
    "image": "https://sadiqdev-portfolio.vercel.app/profile1.jpg",
    "sameAs": [
      "https://github.com/sadiqdev1",
      "https://www.linkedin.com/in/sadiqdev1/",
      "https://x.com/sadiqdev1",
      "https://instagram.com/sadiqdev1",
      "https://facebook.com/sadiqdev1"
    ],
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": ["Laravel", "React", "Tailwind CSS", "PHP", "JavaScript", "MySQL", "Full-Stack Development"],
    "description": "Full-stack developer specializing in Laravel, React, and modern web applications. Building scalable solutions for clients worldwide.",
    "alumniOf": "Piona Tech Solution",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Web Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Nigeria"
      },
      "skills": "Laravel, React, PHP, JavaScript, MySQL, Tailwind CSS, Stripe Integration"
    }
  };

  useEffect(() => {
    // Hide loading screen after initial load
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Enhanced custom cursor with magnetic effect
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let rx = 0, ry = 0, mx = 0, my = 0;
    
    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };
    
    const animateRing = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateRing);
    };
    
    // Add hover effect for interactive elements
    const addHoverEffect = (e) => {
      document.body.classList.add('cursor-hover');
    };
    
    const removeHoverEffect = (e) => {
      document.body.classList.remove('cursor-hover');
    };
    
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });
    
    document.addEventListener('mousemove', onMouseMove);
    animateRing();

    // Enhanced intersection observer with multiple animation types
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    // Observe all reveal elements — re-scan after a tick so all components have mounted
    const observeAll = () => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        .forEach((el) => observer.observe(el));
    };

    observeAll();
    // Second pass after everything has rendered
    const scanTimer = setTimeout(observeAll, 300);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.body.removeChild(dot);
      document.body.removeChild(ring);
      observer.disconnect();
      clearTimeout(scanTimer);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <SEO 
        structuredData={structuredData}
        canonicalUrl="/"
      />
      {isLoading && <LoadingScreen />}
      <ScrollProgress />
      <BackToTop />
      
      {/* Available for Hire Banner */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center py-2.5 text-sm font-semibold shadow-lg animate-slideInDown">
          <div className="flex items-center justify-center gap-3 px-4">
            <span className="hidden sm:inline">✨</span>
            <span>Available for freelance projects</span>
            <a
              href="/hire-me"
              className="underline hover:text-emerald-100 transition-colors"
            >
              Hire Me
            </a>
            <button
              onClick={() => setShowBanner(false)}
              className="ml-4 hover:text-emerald-100 transition-colors"
              aria-label="Close banner"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      <main 
        id="main-content"
        style={{ 
          backgroundColor: 'var(--bg-primary)', 
          color: 'var(--text-primary)', 
          transition: 'background-color 0.3s, color 0.3s',
          position: 'relative',
          paddingTop: showBanner ? '40px' : '0',
        }}
      >
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <Marquee />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Blog />
          <Testimonials />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}