import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-8"
      style={{
        background: 'var(--bg-primary)',
        opacity: progress >= 100 ? 0 : 1,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Animated logo */}
      <div className="relative">
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full blur-2xl animate-pulse"
          style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent)', transform: 'scale(2)' }}
        />
        <h1 className="relative font-display font-extrabold text-5xl tracking-tight">
          Sadiq
          <span className="bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] bg-clip-text text-transparent">
            Dev
          </span>
        </h1>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-200"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
            boxShadow: '0 0 12px var(--accent)',
          }}
        />
      </div>

      <p className="text-xs font-mono text-[var(--text-tertiary)] tracking-widest">
        {Math.min(Math.round(progress), 100)}%
      </p>
    </div>
  );
}
