'use client';

export function Section({ children, className = "", dark = false, ...props }) {
  const baseStyle = {
    backgroundColor: dark ? 'var(--bg-secondary)' : 'var(--bg-primary)',
    color: 'var(--text-primary)',
  };

  return (
    <section 
      style={baseStyle}
      className={`transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export function Card({ children, className = "", ...props }) {
  const cardStyle = {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    borderColor: 'var(--border-color)',
  };

  return (
    <div 
      style={cardStyle}
      className={`rounded-lg shadow-lg border transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function Text({ children, className = "", variant = "primary", ...props }) {
  const textStyle = {
    color: variant === "primary" ? 'var(--text-primary)' 
         : variant === "secondary" ? 'var(--text-secondary)'
         : 'var(--text-muted)',
  };

  return (
    <span 
      style={textStyle}
      className={`transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}