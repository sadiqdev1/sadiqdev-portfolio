export default function SectionHeader({ label, title, subtitle, className = '' }) {
  return (
    <div className={`reveal mb-12 ${className}`}>
      <p className="text-[var(--accent)] text-sm font-bold tracking-wider uppercase mb-3 relative inline-block">
        {label}
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--gradient-start)] to-transparent" />
      </p>
      <h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
