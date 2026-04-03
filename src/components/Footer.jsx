export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: '2rem 1.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        transition: 'background-color 0.3s ease',
        textAlign: 'center',
      }}
      className="md:px-12"
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
        }}
      >
        {/* Brand */}
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            fontSize: '1.25rem',
            color: 'var(--text-primary)',
          }}
        >
          Sadiq<span style={{ color: 'var(--accent)' }}>Dev</span>
        </span>

        {/* Copyright */}
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
          }}
        >
          © {currentYear} SadiqDev. All rights reserved.
        </span>
      </div>
    </footer>
  );
}