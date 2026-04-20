import { useState } from 'react';
import { FiCode, FiShoppingCart, FiLayout, FiDatabase, FiCheck, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const services = [
  {
    id: 'landing',
    icon: FiLayout,
    name: 'Landing Page',
    price: '₦50,000',
    duration: '3-5 days',
    features: [
      'Responsive design',
      'Contact form',
      'SEO optimized',
      'Fast loading',
      '1 revision',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'portfolio',
    icon: FiCode,
    name: 'Portfolio Website',
    price: '₦80,000',
    duration: '5-7 days',
    features: [
      'Multi-page site',
      'Project showcase',
      'Blog section',
      'Admin panel',
      '2 revisions',
    ],
    color: 'from-purple-500 to-pink-500',
    popular: true,
  },
  {
    id: 'webapp',
    icon: FiDatabase,
    name: 'Web Application',
    price: '₦120,000',
    duration: '1-2 weeks',
    features: [
      'User authentication',
      'Database integration',
      'CRUD operations',
      'API integration',
      '3 revisions',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'ecommerce',
    icon: FiShoppingCart,
    name: 'E-commerce Site',
    price: '₦250,000',
    duration: '2-3 weeks',
    features: [
      'Product management',
      'Shopping cart',
      'Payment gateway',
      'Order tracking',
      'Unlimited revisions',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'fullstack',
    icon: FiDatabase,
    name: 'Full-Stack Platform',
    price: '₦500,000+',
    duration: '4-8 weeks',
    features: [
      'Custom features',
      'Advanced backend',
      'Third-party APIs',
      'Admin dashboard',
      'Ongoing support',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'custom',
    icon: FiCode,
    name: 'Custom Project',
    price: 'Contact',
    duration: 'Varies',
    features: [
      'Tailored solution',
      'Flexible scope',
      'Your requirements',
      'Dedicated support',
      'Custom timeline',
    ],
    color: 'from-violet-500 to-fuchsia-500',
  },
];

const steps = [
  { id: 1, title: 'Service', desc: 'What do you need?' },
  { id: 2, title: 'Details', desc: 'Tell us more' },
  { id: 3, title: 'Budget', desc: 'Your investment' },
  { id: 4, title: 'Contact', desc: 'Get in touch' },
];

export default function Services() {
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    features: [],
    timeline: '',
    budget: '',
    name: '',
    email: '',
    message: '',
  });

  const handleServiceSelect = (serviceId) => {
    setFormData({ ...formData, service: serviceId });
    setCurrentStep(2);
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Find selected service name
    const selectedService = services.find(s => s.id === formData.service);
    
    // Prepare email template params
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: `Service Request: ${selectedService?.name || 'Custom'}`,
      message: `
Service: ${selectedService?.name || 'Custom'}
Timeline: ${formData.timeline}
Budget: ${formData.budget}

Project Details:
${formData.message}
      `.trim(),
    };

    // Send email via EmailJS
    emailjs
      .send(
        'service_tdty0ug',
        'template_ntyoq5b',
        templateParams,
        'OTKo94BhJxQ8vRbAP'
      )
      .then(
        () => {
          alert('Thank you! I\'ll get back to you within 24 hours.');
          setShowForm(false);
          setCurrentStep(1);
          setFormData({
            service: '',
            features: [],
            timeline: '',
            budget: '',
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Something went wrong. Please email me directly at your-email@example.com');
        }
      );
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-[var(--bg-primary)] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background orb */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[var(--gradient-start)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="reveal mb-16 text-center">
          <p className="text-[var(--accent)] text-sm font-bold tracking-wider uppercase mb-3">
            Services & Pricing
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight mb-4">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-base max-w-2xl mx-auto">
            Transparent pricing, no hidden fees. Choose a package or request a custom quote.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="reveal-scale pro-card group cursor-pointer relative"
              style={{ transitionDelay: `${idx * 0.08}s` }}
              onClick={() => {
                setShowForm(true);
                handleServiceSelect(service.id);
              }}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  POPULAR
                </div>
              )}

              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-xl`} />

              {/* Icon */}
              <div className={`relative mb-4 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color}`}>
                <service.icon className="text-white text-xl" />
              </div>

              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2">
                {service.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  {service.price}
                </span>
              </div>
              <p className="text-xs text-[var(--text-tertiary)] mb-4">
                {service.duration} delivery
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <FiCheck className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-2.5 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] font-semibold text-sm group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all duration-300">
                Get Started →
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <p className="text-[var(--text-secondary)] mb-4">
            Need something different?
          </p>
          <button
            onClick={() => {
              setShowForm(true);
              setFormData({ ...formData, service: 'custom' });
            }}
            className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-[var(--accent)]/30 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))' }}
          >
            Request Custom Quote
            <FiArrowRight />
          </button>
        </div>

      </div>

      {/* Multi-step Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="pro-card max-w-2xl w-full max-h-[90vh] overflow-y-auto" style={{ padding: '2rem' }}>
            
            {/* Progress */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, idx) => (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        currentStep >= step.id
                          ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white'
                          : 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]'
                      }`}
                    >
                      {step.id}
                    </div>
                    <span className="text-xs text-[var(--text-tertiary)] mt-1 hidden sm:block">{step.title}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-2 ${currentStep > step.id ? 'bg-[var(--accent)]' : 'bg-[var(--border-color)]'}`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Service */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-4">
                    What do you need?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.id)}
                        className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                          formData.service === service.id
                            ? 'border-[var(--accent)] bg-[var(--accent-glow)]'
                            : 'border-[var(--border-color)] hover:border-[var(--border-hover)]'
                        }`}
                      >
                        <service.icon className="text-2xl text-[var(--accent)] mb-2" />
                        <div className="font-semibold text-[var(--text-primary)] text-sm">{service.name}</div>
                        <div className="text-xs text-[var(--text-tertiary)]">{service.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-4">
                    Tell us more
                  </h3>
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)] mb-2 block">
                      Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="normal">Normal (2-4 weeks)</option>
                      <option value="flexible">Flexible (1-2 months)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)] mb-2 block">
                      Additional Details
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project requirements..."
                      rows={4}
                      className="w-full p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none resize-none"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Budget */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-4">
                    Your budget range
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {['₦50k - ₦100k', '₦100k - ₦250k', '₦250k - ₦500k', '₦500k+'].map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, budget: range });
                          nextStep();
                        }}
                        className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                          formData.budget === range
                            ? 'border-[var(--accent)] bg-[var(--accent-glow)]'
                            : 'border-[var(--border-color)] hover:border-[var(--border-hover)]'
                        }`}
                      >
                        <div className="font-semibold text-[var(--text-primary)]">{range}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Contact */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-4">
                    How can I reach you?
                  </h3>
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)] mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-[var(--text-tertiary)] mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                  >
                    <FiArrowLeft /> Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-red-500 hover:text-red-500 transition-all"
                >
                  Cancel
                </button>
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !formData.service) ||
                      (currentStep === 2 && (!formData.timeline || !formData.message))
                    }
                    className="flex-1 flex items-center justify-center gap-2 text-white font-bold py-3 rounded-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))' }}
                  >
                    Next <FiArrowRight />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 text-white font-bold py-3 rounded-lg hover:scale-105 transition-all"
                    style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-mid))' }}
                  >
                    Submit Request
                  </button>
                )}
              </div>
            </form>

          </div>
        </div>
      )}

    </section>
  );
}
