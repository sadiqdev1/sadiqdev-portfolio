import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Tech Startup',
    initials: 'JD',
    color: 'from-blue-500 to-cyan-500',
    rating: 5,
    text: 'SadiqDev delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise are truly outstanding.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    initials: 'SJ',
    color: 'from-purple-500 to-pink-500',
    rating: 5,
    text: 'Working with SadiqDev was a pleasure. He understood our requirements perfectly and delivered a high-quality solution on time and within budget.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, E-commerce',
    initials: 'MC',
    color: 'from-emerald-500 to-teal-500',
    rating: 5,
    text: 'The website SadiqDev built for us significantly improved our online presence and conversion rates. Highly recommended for any web development project.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (next) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
    }, 300);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      go((current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 px-6 md:px-12 bg-[var(--bg-secondary)] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background orb */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--gradient-end)] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="reveal mb-14 text-center">
          <p className="text-[var(--accent)] text-sm font-bold tracking-wider uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-[var(--text-secondary)] text-base">
            Feedback from people I've had the pleasure of working with
          </p>
        </div>

        {/* Card */}
        <div className="reveal">
          <div
            className="pro-card relative overflow-hidden"
            style={{
              padding: '2.5rem',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(10px)' : 'translateY(0)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
          >
            {/* Decorative quote */}
            <div
              className="absolute top-6 right-8 text-8xl font-serif leading-none select-none pointer-events-none"
              style={{ color: 'var(--accent)', opacity: 0.08 }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-[var(--text-primary)] text-lg leading-relaxed mb-8 relative z-10">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
              >
                {t.initials}
              </div>
              <div>
                <h4 className="font-display font-bold text-[var(--text-primary)]">{t.name}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => go(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? 'w-8 bg-[var(--accent)]'
                      : 'w-2 bg-[var(--border-color)] hover:bg-[var(--text-tertiary)]'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => go((current - 1 + testimonials.length) % testimonials.length)}
                className="w-11 h-11 rounded-xl glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-110 transition-all duration-300"
                aria-label="Previous"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={() => go((current + 1) % testimonials.length)}
                className="w-11 h-11 rounded-xl glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-110 transition-all duration-300"
                aria-label="Next"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
