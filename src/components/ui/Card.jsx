import React from 'react';
import Button from './Button';

export default function Card({
  title,
  description,
  cta,
  href,
  icon: Icon,
  image,
  className = '',
}) {
  return (
    <div className={`bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-primary-light/30 transition-all duration-300 flex flex-col justify-between group ${className}`}>
      <div>
        {image && (
          <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-primary/10 flex items-center justify-center relative">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
            />
          </div>
        )}
        {!image && Icon && (
          <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-surface transition-all duration-300">
            <Icon size={24} className="stroke-[1.5]" />
          </div>
        )}
        <h3 className="text-xl font-display text-primary mb-3 font-normal group-hover:text-primary-light transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6 font-sans">
          {description}
        </p>
      </div>
      {cta && href && (
        <div className="mt-auto pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            href={href} 
            className="w-full text-center group-hover:bg-primary group-hover:text-white"
          >
            {cta}
          </Button>
        </div>
      )}
    </div>
  );
}
