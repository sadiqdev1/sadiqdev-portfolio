import { useState } from "react";
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const EMAILJS_SERVICE_ID = 'service_tdty0ug';
const EMAILJS_TEMPLATE_ID = 'template_ntyoq5b';
const EMAILJS_PUBLIC_KEY = 'OTKo94BhJxQ8vRbAP';

// Keep icons as JSX elements exactly like the original that worked
const socials = [
  { icon: <FaGithub />,     label: 'GitHub',    href: 'https://github.com/sadiqdev1' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn',  href: 'https://www.linkedin.com/in/sadiqdev1/' },
  { icon: <FaTwitter />,    label: 'Twitter',   href: 'https://x.com/sadiqdev1' },
  { icon: <FaInstagram />,  label: 'Instagram', href: 'https://instagram.com/sadiqdev1' },
  { icon: <FaFacebook />,   label: 'Facebook',  href: 'https://facebook.com/sadiqdev1' },
  { icon: <FaTiktok />,     label: 'TikTok',    href: 'https://tiktok.com/@sadiq.dev' },
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

  // Exact same handleSubmit as the original working version
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

  const inputStyle = (hasError) => ({
    padding: '0.875rem 1rem',
    backgroundColor: 'var(--bg-primary)',
    border: `1px solid ${hasError ? '#ef4444' : 'var(--border-color)'}`,
    borderRadius: '0.625rem',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'Space Grotesk, sans-serif',
  });

  const onFocus = (e) => {
    e.target.style.borderColor = 'var(--accent)';
    e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)';
  };
  const onBlur = (e, hasError) => {
    e.target.style.borderColor = hasError ? '#ef4444' : 'var(--border-color)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/2348121934823"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 flex items-center justify-center rounded-2xl text-white text-2xl shadow-2xl hover:scale-110 transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 8px 32px rgba(37,211,102,0.4)' }}
      >
        <FaWhatsapp />
      </a>

      <section
        id="contact"
        className="py-24 px-6 md:px-12 bg-[var(--bg-primary)] transition-colors duration-300"
      >
        <div className="max-w-3xl mx-auto reveal">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[var(--accent)] text-sm font-bold tracking-wider uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight mb-4">
              Let's build something{' '}
              <span className="bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                amazing
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] text-base max-w-md mx-auto">
              Got a project, an idea, or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <a
              href="mailto:sadiqdev2030@gmail.com"
              className="pro-card flex items-center gap-4 group no-underline"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))' }}
              >
                <FaEnvelope />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)] mb-0.5">Email</div>
                <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  sadiqdev2030@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/2348121934823"
              target="_blank"
              rel="noreferrer"
              className="pro-card flex items-center gap-4 group no-underline"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <FaWhatsapp />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)] mb-0.5">WhatsApp</div>
                <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  +234 812 193 4823
                </div>
              </div>
            </a>
          </div>

          {/* SUCCESS STATE - Full animated replacement */}
          {status === 'success' ? (
            <div className="pro-card text-center py-16 px-8" style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              {/* Animated checkmark */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 0 60px rgba(16,185,129,0.4)' }}>
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    style={{ animation: 'scaleIn 0.4s ease' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {/* Ripple rings */}
                <div className="absolute inset-0 rounded-full border-2 border-emerald-500/40 animate-ping" style={{ animationDuration: '1.5s' }} />
                <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
              </div>

              <h3 className="font-display font-extrabold text-3xl text-[var(--text-primary)] mb-3">
                Message Sent! 🎉
              </h3>
              <p className="text-[var(--text-secondary)] text-base mb-2 max-w-sm">
                Thanks for reaching out. I'll get back to you within <strong className="text-[var(--accent)]">24 hours</strong>.
              </p>
              <p className="text-sm text-[var(--text-tertiary)] mb-8">
                Check your inbox for a confirmation.
              </p>

              {/* What happens next */}
              <div className="w-full max-w-sm text-left space-y-3 mb-8">
                {[
                  { step: '1', text: 'I review your message', done: true },
                  { step: '2', text: 'I reply within 24 hours', done: false },
                  { step: '3', text: 'We schedule a call if needed', done: false },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3 text-sm">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      item.done
                        ? 'bg-emerald-500 text-white'
                        : 'bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-tertiary)]'
                    }`}>
                      {item.done ? '✓' : item.step}
                    </div>
                    <span className={item.done ? 'text-[var(--text-primary)] font-semibold' : 'text-[var(--text-secondary)]'}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStatus('idle')}
                className="inline-flex items-center gap-2 glass border border-[var(--border-color)] text-[var(--text-secondary)] px-6 py-2.5 rounded-xl text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              {/* Error banner */}
              {status === 'error' && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl px-5 py-4 text-sm font-semibold mb-6">
                  <span className="text-lg">✕</span>
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="pro-card flex flex-col gap-5" style={{ padding: '2rem' }}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)]">
                  Name
                </label>
                <input
                  type="text" id="name" name="name"
                  value={form.name} onChange={handleChange}
                  placeholder="Your name"
                  style={inputStyle(errors.name)}
                  onFocus={onFocus}
                  onBlur={(e) => onBlur(e, errors.name)}
                />
                {errors.name && <span className="text-xs text-red-400 font-medium">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)]">
                  Email
                </label>
                <input
                  type="email" id="email" name="email"
                  value={form.email} onChange={handleChange}
                  placeholder="your@email.com"
                  style={inputStyle(errors.email)}
                  onFocus={onFocus}
                  onBlur={(e) => onBlur(e, errors.email)}
                />
                {errors.email && <span className="text-xs text-red-400 font-medium">{errors.email}</span>}
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)]">
                Subject
              </label>
              <input
                type="text" id="subject" name="subject"
                value={form.subject} onChange={handleChange}
                placeholder="What's this about?"
                style={inputStyle(errors.subject)}
                onFocus={onFocus}
                onBlur={(e) => onBlur(e, errors.subject)}
              />
              {errors.subject && <span className="text-xs text-red-400 font-medium">{errors.subject}</span>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)]">
                Message
              </label>
              <textarea
                id="message" name="message" rows={5}
                value={form.message} onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                style={{ ...inputStyle(errors.message), resize: 'vertical' }}
                onFocus={onFocus}
                onBlur={(e) => onBlur(e, errors.message)}
              />
              {errors.message && <span className="text-xs text-red-400 font-medium">{errors.message}</span>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="relative flex items-center justify-center gap-3 text-white font-bold text-sm py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--accent)]/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
            >
              {status === 'loading' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>
            </>
          )}

          {/* Social links */}
          <div className="flex justify-center gap-3 mt-10 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                className="w-11 h-11 rounded-xl glass border border-[var(--border-color)] text-[var(--text-secondary)] text-lg flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
