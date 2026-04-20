import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading && <LoadingScreen />}
      <ScrollProgress />
      <BackToTop />
      
      <main 
        style={{ 
          backgroundColor: 'var(--bg-primary)', 
          color: 'var(--text-primary)', 
          transition: 'background-color 0.3s, color 0.3s',
          position: 'relative',
        }}
      >
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}