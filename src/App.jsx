import { useEffect } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot'
    ring.className = 'cursor-ring'
    document.body.appendChild(dot)
    document.body.appendChild(ring)

    let rx = 0, ry = 0, mx = 0, my = 0
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY 
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    })
    const animRing = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(animRing)
    }
    animRing()

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') })
      }, { threshold: 0.12 })
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

      return () => {
        document.body.removeChild(dot)
        document.body.removeChild(ring)
      }
  }, [])

  return (
    <main className="bg-white text-rose font-body">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}