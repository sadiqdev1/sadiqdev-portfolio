import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import LoadingScreen from '../components/LoadingScreen';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

const projectTypes = [
  { id: 'landing', name: 'Landing Page', icon: '🎯', basePrice: 50000 },
  { id: 'portfolio', name: 'Portfolio Website', icon: '💼', basePrice: 80000 },
  { id: 'webapp', name: 'Web Application', icon: '⚡', basePrice: 120000 },
  { id: 'ecommerce', name: 'E-commerce Store', icon: '🛒', basePrice: 250000 },
  { id: 'fullstack', name: 'Full-Stack Platform', icon: '🚀', basePrice: 500000 },
  { id: 'custom', name: 'Custom Solution', icon: '✨', basePrice: 0 },
];

const features = {
  landing: [
    { id: 'responsive', name: 'Responsive Design', price: 0 },
    { id: 'animations', name: 'Advanced Animations', price: 10000 },
    { id: 'cms', name: 'Content Management', price: 20000 },
    { id: 'seo', name: 'SEO Optimization', price: 15000 },
    { id: 'analytics', name: 'Analytics Integration', price: 5000 },
  ],
  portfolio: [
    { id: 'blog', name: 'Blog Section', price: 25000 },
    { id: 'admin', name: 'Admin Dashboard', price: 40000 },
    { id: 'gallery', name: 'Image Gallery', price: 15000 },
    { id: 'contact', name: 'Contact Form', price: 0 },
    { id: 'testimonials', name: 'Testimonials Section', price: 10000 },
  ],
  webapp: [
    { id: 'auth', name: 'User Authentication', price: 30000 },
    { id: 'database', name: 'Database Integration', price: 40000 },
    { id: 'api', name: 'REST API', price: 35000 },
    { id: 'realtime', name: 'Real-time Updates', price: 50000 },
    { id: 'notifications', name: 'Push Notifications', price: 25000 },
  ],
  ecommerce: [
    { id: 'payment', name: 'Payment Gateway', price: 60000 },
    { id: 'inventory', name: 'Inventory Management', price: 50000 },
    { id: 'shipping', name: 'Shipping Integration', price: 40000 },
    { id: 'reviews', name: 'Product Reviews', price: 20000 },
    { id: 'wishlist', name: 'Wishlist Feature', price: 15000 },
  ],
  fullstack: [
    { id: 'microservices', name: 'Microservices Architecture', price: 150000 },
    { id: 'cloud', name: 'Cloud Deployment', price: 80000 },
    { id: 'monitoring', name: 'Monitoring & Logging', price: 60000 },
    { id: 'security', name: 'Advanced Security', price: 100000 },
    { id: 'scaling', name: 'Auto-scaling Setup', price: 70000 },
  ],
  custom: [],
};

const timelines = [
  { id: 'urgent', name: '1-2 Weeks (Rush)', multiplier: 1.5 },
  { id: 'normal', name: '2-4 Weeks (Standard)', multiplier: 1 },
  { id: 'flexible', name: '1-2 Months (Flexible)', multiplier: 0.9 },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    selectedFeatures: [],
    timeline: '',
    customDetails: '',
    name: '',
    email: '',
    phone: '',
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);

  useEffect(() => {
    // Hide loading screen after initial load
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleProjectTypeSelect = (typeId) => {
    setFormData({ ...formData, projectType: typeId, selectedFeatures: [] });
    setStep(2);
  };

  const handleFeatureToggle = (featureId) => {
    const newFeatures = formData.selectedFeatures.includes(featureId)
      ? formData.selectedFeatures.filter((f) => f !== featureId)
      : [...formData.selectedFeatures, featureId];
    
    setFormData({ ...formData, selectedFeatures: newFeatures });
    calculatePrice(formData.projectType, newFeatures, formData.timeline);
  };

  const handleTimelineSelect = (timelineId) => {
    setFormData({ ...formData, timeline: timelineId });
    calculatePrice(formData.projectType, formData.selectedFeatures, timelineId);
    setStep(4);
  };

  const calculatePrice = (projectType, selectedFeatures, timeline) => {
    const project = projectTypes.find((p) => p.id === projectType);
    if (!project || project.basePrice === 0) {
      setEstimatedPrice(0);
      return;
    }

    let total = project.basePrice;

    // Add feature prices
    const projectFeatures = features[projectType] || [];
    selectedFeatures.forEach((featureId) => {
      const feature = projectFeatures.find((f) => f.id === featureId);
      if (feature) total += feature.price;
    });

    // Apply timeline multiplier
    const timelineObj = timelines.find((t) => t.id === timeline);
    if (timelineObj) {
      total *= timelineObj.multiplier;
    }

    setEstimatedPrice(Math.round(total));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const project = projectTypes.find((p) => p.id === formData.projectType);
    const selectedFeaturesNames = formData.selectedFeatures
      .map((fId) => {
        const projectFeatures = features[formData.projectType] || [];
        const feature = projectFeatures.find((f) => f.id === fId);
        return feature ? feature.name : '';
      })
      .filter(Boolean)
      .join(', ');

    const timelineObj = timelines.find((t) => t.id === formData.timeline);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: `Service Request: ${project?.name || 'Custom Project'}`,
      message: `
Project Type: ${project?.name || 'Custom'}
Selected Features: ${selectedFeaturesNames || 'None'}
Timeline: ${timelineObj?.name || 'Not specified'}
Estimated Price: ₦${estimatedPrice.toLocaleString()}

Phone: ${formData.phone}

Additional Details:
${formData.customDetails || 'None provided'}
      `.trim(),
    };

    emailjs
      .send(
        'service_tdty0ug',
        'template_ntyoq5b',
        templateParams,
        'OTKo94BhJxQ8vRbAP'
      )
      .then(
        () => {
          alert('Request sent! I\'ll get back to you within 24 hours.');
          navigate('/');
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Something went wrong. Please try again or email me directly.');
        }
      );
  };

  const currentProject = projectTypes.find((p) => p.id === formData.projectType);
  const currentFeatures = features[formData.projectType] || [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development Services",
    "provider": {
      "@type": "Person",
      "name": "Abubakar Ibrahim",
      "url": "https://sadiqdev-portfolio.vercel.app/"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page Development",
            "description": "Professional landing page with responsive design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Portfolio Website",
            "description": "Custom portfolio website with blog and admin dashboard"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Web Application",
            "description": "Complete web application with React and Laravel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Store",
            "description": "Full-featured e-commerce platform with payment integration"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Hire Me - Web Development Services | Abubakar Ibrahim"
        description="Professional web development services. Specializing in Laravel, React, and full-stack solutions. Get a custom quote for your landing page, portfolio, web app, or e-commerce store."
        keywords="hire web developer, freelance developer, laravel developer for hire, react developer, web development services, custom web development, e-commerce development"
        canonicalUrl="/hire-me"
        structuredData={structuredData}
      />
      {isLoading && <LoadingScreen />}
      <ScrollProgress />
      <BackToTop />
      
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-12 px-6">
        <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-6"
          >
            <FiArrowLeft /> Back to Home
          </button>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
            Let's Build Your{' '}
            <span className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
              Dream Project
            </span>
          </h1>
          <p className="text-[var(--text-secondary)]">
            Answer a few questions to get a custom quote
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= s
                    ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white'
                    : 'bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]'
                }`}
              >
                {step > s ? <FiCheck /> : s}
              </div>
            ))}
          </div>
          <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] transition-all duration-500"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Project Type */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="font-display font-bold text-2xl mb-6">
              What type of project do you need?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleProjectTypeSelect(type.id)}
                  className="pro-card text-left p-6 hover:scale-105 transition-all group"
                >
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                  {type.basePrice > 0 && (
                    <p className="text-[var(--text-tertiary)] text-sm">
                      Starting at ₦{type.basePrice.toLocaleString()}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Features */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="font-display font-bold text-2xl mb-6">
              Select features for your {currentProject?.name}
            </h2>
            {currentFeatures.length > 0 ? (
              <div className="space-y-3">
                {currentFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`w-full pro-card p-4 flex items-center justify-between transition-all ${
                      formData.selectedFeatures.includes(feature.id)
                        ? 'border-[var(--accent)] bg-[var(--accent-glow)]'
                        : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                          formData.selectedFeatures.includes(feature.id)
                            ? 'border-[var(--accent)] bg-[var(--accent)]'
                            : 'border-[var(--border-color)]'
                        }`}
                      >
                        {formData.selectedFeatures.includes(feature.id) && (
                          <FiCheck className="text-white text-sm" />
                        )}
                      </div>
                      <span className="font-medium">{feature.name}</span>
                    </div>
                    <span className="text-[var(--text-tertiary)]">
                      {feature.price > 0 ? `+₦${feature.price.toLocaleString()}` : 'Included'}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="pro-card p-8 text-center">
                <p className="text-[var(--text-secondary)] mb-4">
                  This is a custom project. Please describe your requirements in the next step.
                </p>
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent)] transition-all"
              >
                <FiArrowLeft className="inline mr-2" /> Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white font-bold hover:scale-105 transition-all"
              >
                Next <FiArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Timeline */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="font-display font-bold text-2xl mb-6">
              What's your timeline?
            </h2>
            <div className="space-y-3">
              {timelines.map((timeline) => (
                <button
                  key={timeline.id}
                  onClick={() => handleTimelineSelect(timeline.id)}
                  className="w-full pro-card p-6 text-left hover:scale-105 transition-all group"
                >
                  <h3 className="font-bold text-lg mb-2">{timeline.name}</h3>
                  <p className="text-[var(--text-tertiary)] text-sm">
                    {timeline.multiplier > 1 && `+${((timeline.multiplier - 1) * 100).toFixed(0)}% rush fee`}
                    {timeline.multiplier < 1 && `${((1 - timeline.multiplier) * 100).toFixed(0)}% discount`}
                    {timeline.multiplier === 1 && 'Standard pricing'}
                  </p>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent)] transition-all"
            >
              <FiArrowLeft className="inline mr-2" /> Back
            </button>
          </div>
        )}

        {/* Step 4: Additional Details */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="font-display font-bold text-2xl mb-6">
              Tell me more about your project
            </h2>
            <div className="pro-card p-6">
              <label className="block text-sm font-bold text-[var(--text-tertiary)] mb-2">
                Additional Requirements (Optional)
              </label>
              <textarea
                value={formData.customDetails}
                onChange={(e) => setFormData({ ...formData, customDetails: e.target.value })}
                placeholder="Any specific requirements, design preferences, or features you'd like to add..."
                rows={6}
                className="w-full p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none resize-none"
              />
            </div>
            {estimatedPrice > 0 && (
              <div className="pro-card p-6 bg-gradient-to-r from-[var(--accent-glow)] to-transparent">
                <p className="text-sm text-[var(--text-tertiary)] mb-2">Estimated Investment</p>
                <p className="font-display font-extrabold text-4xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  ₦{estimatedPrice.toLocaleString()}
                </p>
                <p className="text-xs text-[var(--text-tertiary)] mt-2">
                  *Final price may vary based on specific requirements
                </p>
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent)] transition-all"
              >
                <FiArrowLeft className="inline mr-2" /> Back
              </button>
              <button
                onClick={() => setStep(5)}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white font-bold hover:scale-105 transition-all"
              >
                Next <FiArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Contact Info */}
        {step === 5 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
            <h2 className="font-display font-bold text-2xl mb-6">
              How can I reach you?
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[var(--text-tertiary)] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="w-full p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--text-tertiary)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="w-full p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--text-tertiary)] mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234 xxx xxx xxxx"
                  className="w-full p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(4)}
                className="px-6 py-3 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent)] transition-all"
              >
                <FiArrowLeft className="inline mr-2" /> Back
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-mid)] text-white font-bold hover:scale-105 transition-all"
              >
                Submit Request 🚀
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
    </>
  );
}
