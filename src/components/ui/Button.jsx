import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  ...props
}) {
  const baseStyle = 'inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg hover:-translate-y-[1px]',
    secondary: 'bg-accent text-primary hover:bg-accent-light shadow-sm hover:shadow-md hover:-translate-y-[1px]',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
  };

  const sizes = {
    xs: 'text-[10px] sm:text-[11px] px-3 py-1.5 uppercase tracking-wider font-semibold',
    sm: 'text-xs px-4 py-2 uppercase tracking-wider font-semibold',
    md: 'text-sm px-6 py-3 font-semibold',
    lg: 'text-base px-8 py-4 font-semibold',
  };

  const combinedClassName = `${baseStyle} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={combinedClassName} onClick={onClick} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer" onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
