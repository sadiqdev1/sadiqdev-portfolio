import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const EMAILJS_SERVICE_ID = 'service_tdty0ug';
const EMAILJS_TEMPLATE_ID = 'template_ntyoq5b';
const EMAILJS_PUBLIC_KEY = 'OTKo94BhJxQ8vRbAP';

const socials = [
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/sadiqdev1' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sadiqdev1/' },
  { icon: <FaTwitter />, label: 'Twitter', href: 'https://x.com/sadiqdev1' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com/sadiqdev1' },
  { icon: <FaFacebook />, label: 'Facebook', href: 'https://facebook.com/sadiqdev1' },
  { icon: <FaTiktok />, label: 'Tiktok', href: 'https://tiktok.com/@sadiq.dev' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      {/* WhatsApp floating button - improved size and sticky */}
      <a
        href="https://wa.me/2348121934823"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 50,
          width: '3rem',
          height: '3rem',
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s, background-color 0.2s',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = '#128C7E';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#25D366';
        }}
      >
        <FaWhatsapp />
      </a>

      <section
        id="contact"
        style={{
          padding: '5rem 1rem', // reduced side padding on mobile
          backgroundColor: 'var(--bg-primary)',
          transition: 'background-color 0.3s ease',
        }}
        className="md:px-12"
      >
        <div style={{ maxWidth: '768px', margin: '0 auto' }} className="reveal">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p
              style={{
                color: 'var(--accent)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Contact
            </p>
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: '2rem',
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Let's create something amazing
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
              }}
            >
              Got a project, an idea, or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          {/* Contact cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
            className="md:grid-cols-2"
          >
            <a
              href="mailto:sadiqdev2030@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.5rem',
                padding: '1rem',
                textDecoration: 'none',
                transition: 'transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: 'var(--accent)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.2rem',
                }}
              >
                <FaEnvelope />
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.2rem',
                  }}
                >
                  Email
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  sadiqdev2030@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/2348121934823"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.5rem',
                padding: '1rem',
                textDecoration: 'none',
                transition: 'transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: '#25D366',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.2rem',
                }}
              >
                <FaWhatsapp />
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.2rem',
                  }}
                >
                  WhatsApp
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  +234 812 193 4823
                </div>
              </div>
            </a>
          </div>

          {/* Status messages */}
          {status === 'success' && (
            <div
              style={{
                backgroundColor: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.3)',
                color: '#10b981',
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div
              style={{
                backgroundColor: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                color: '#ef4444',
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '0.5rem',
              padding: '1rem', // reduced for mobile
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
            className="md:p-8"
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1rem',
              }}
              className="md:grid-cols-2"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label
                  htmlFor="name"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'var(--bg-primary)',
                    border: `1px solid ${errors.name ? '#ef4444' : 'var(--border-color)'}`,
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem',
                    outline: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onFocus={(e) => {
                    if (!errors.name) {
                      e.target.style.borderColor = 'var(--accent)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(59,130,246,0.3)';
                    }
                  }}
                  onBlur={(e) => {
                    if (!errors.name) {
                      e.target.style.borderColor = 'var(--border-color)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                />
                {errors.name && <span style={{ fontSize: '0.7rem', color: '#ef4444' }}>{errors.name}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label
                  htmlFor="email"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={{
                    padding: '0.75rem',
                    backgroundColor: 'var(--bg-primary)',
                    border: `1px solid ${errors.email ? '#ef4444' : 'ar(--border-color)'}`,
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem',
                    outline: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onFocus={(e) => {
                    if (!errors.email) {
                      e.target.style.borderColor = 'var(--accent)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(59,130,246,0.3)';
                    }
                  }}
                  onBlur={(e) => {
                    if (!errors.email) {
                      e.target.style.borderColor = 'var(--border-color)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                />
                {errors.email && <span style={{ fontSize: '0.7rem', color: '#ef4444' }}>{errors.email}</span>}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label
                htmlFor="subject"
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                }}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                style={{
                  padding: '0.75rem',
                  backgroundColor: 'var(--bg-primary)',
                  border: `1px solid ${errors.subject ? '#ef4444' : 'var(--border-color)'}`,
                  borderRadius: '0.5rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={(e) => {
                  if (!errors.subject) {
                    e.target.style.borderColor = 'var(--accent)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(59,130,246,0.3)';
                  }
                }}
                onBlur={(e) => {
                  if (!errors.subject) {
                    e.target.style.borderColor = 'var(--border-color)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              />
              {errors.subject && <span style={{ fontSize: '0.7rem', color: '#ef4444' }}>{errors.subject}</span>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label
                htmlFor="message"
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                style={{
                  padding: '0.75rem',
                  backgroundColor: 'var(--bg-primary)',
                  border: `1px solid ${errors.message ? '#ef4444' : 'var(--border-color)'}`,
                  borderRadius: '0.5rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  if (!errors.message) {
                    e.target.style.borderColor = 'var(--accent)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(59,130,246,0.3)';
                  }
                }}
                onBlur={(e) => {
                  if (!errors.message) {
                    e.target.style.borderColor = 'var(--border-color)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              />
              {errors.message && <span style={{ fontSize: '0.7rem', color: '#ef4444' }}>{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--accent)',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '0.875rem',
                border: 'none',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s',
                opacity: status === 'loading' ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (status !== 'loading') e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
              }}
              onMouseLeave={(e) => {
                if (status !== 'loading') e.currentTarget.style.backgroundColor = 'var(--accent)';
              }}
            >
              {status === 'loading' ? (
                <>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '1rem',
                      height: '1rem',
                      border: '2px solid #fff',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 0.6s linear infinite',
                    }}
                  />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          {/* Social links */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-secondary)',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Add spinner animation globally */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}