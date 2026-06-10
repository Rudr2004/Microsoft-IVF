import React from 'react';

export default function TestimonialCard({ quote, author, className = '' }) {
  return (
    <div className={`bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col justify-center items-center text-center ${className}`}>
      {/* Large decorative quotation mark */}
      <span className="absolute top-4 left-6 text-accent/20 font-display text-8xl pointer-events-none select-none">
        “
      </span>
      <span className="absolute bottom-4 right-6 text-accent/20 font-display text-8xl pointer-events-none select-none transform rotate-180">
        “
      </span>
      
      <p className="text-lg md:text-2xl text-primary font-display italic leading-relaxed mb-6 max-w-2xl relative z-10">
        {quote}
      </p>
      
      <div className="w-8 h-[2px] bg-accent mb-4 relative z-10"></div>
      
      <p className="text-xs font-semibold uppercase tracking-widest text-muted font-sans relative z-10">
        {author}
      </p>
    </div>
  );
}
