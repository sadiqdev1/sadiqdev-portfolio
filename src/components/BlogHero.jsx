/**
 * BlogHero — full-width thumbnail banner for blog post pages.
 * Props:
 *   gradient  – Tailwind gradient classes e.g. "from-red-600 via-orange-500 to-red-700"
 *   logos     – array of image URLs (tech logos)
 *   icon      – emoji string (used when no logos)
 *   label     – small label shown at bottom of banner
 *   readTime  – e.g. "8 min read"
 *   date      – e.g. "March 2024"
 */
export default function BlogHero({ gradient, logos, icon, label, readTime, date }) {
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden mb-10 bg-gradient-to-br ${gradient}`}
      style={{ height: '260px' }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/20 blur-3xl" />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10">
        {logos ? (
          <div className="flex items-center gap-5">
            {logos.map((src, i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-4 shadow-2xl"
              >
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  width="48"
                  height="48"
                  className="w-12 h-12 object-contain drop-shadow-lg"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        ) : (
          <span className="text-7xl drop-shadow-lg" role="img" aria-hidden="true">
            {icon}
          </span>
        )}
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-3 bg-black/30 backdrop-blur-sm flex items-center justify-between">
        <span className="text-sm font-bold text-white/90 tracking-wide uppercase">
          {label}
        </span>
        <div className="flex items-center gap-4 text-xs text-white/70">
          {date && <span>{date}</span>}
          {readTime && (
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/>
              </svg>
              {readTime}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
