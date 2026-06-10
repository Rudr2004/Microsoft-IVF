import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const containerAlignment = align === 'left' ? 'text-left' : 'text-center mx-auto';
  const subtitleAlignment = align === 'left' ? 'text-left' : 'text-center mx-auto';

  return (
    <div className={`max-w-3xl mb-12 ${containerAlignment} ${className}`}>
      {eyebrow && (
        <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-3 font-sans">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary leading-tight font-normal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg text-muted leading-relaxed font-sans max-w-2xl ${subtitleAlignment}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
