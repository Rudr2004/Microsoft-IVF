import React from 'react';

export default function Badge({ children, variant = 'primary', className = '' }) {
  const baseStyle = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider font-sans';
  
  const variants = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-primary-light/10 text-primary-light',
    accent: 'bg-accent/20 text-primary border border-accent/25',
    outline: 'border border-border text-muted',
  };

  return (
    <span className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </span>
  );
}
