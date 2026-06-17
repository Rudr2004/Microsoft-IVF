import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Mail, Phone } from 'lucide-react';
import { locations } from '../../data/locations';

export default function Footer() {
  return (
    <footer className="bg-[#082F42] text-white/80 border-t border-primary/20">
      {/* Top section: Brand statement and column grids */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          
          {/* Brand block (2 cols wide on desktop) */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 transition-transform duration-300 group-hover:scale-105 shrink-0">
                <circle cx="16" cy="16" r="14" stroke="#ffffff" strokeWidth="2.5" className="opacity-90 group-hover:opacity-100 transition-opacity" />
                <path d="M16 2v28" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-60" />
                <circle cx="11" cy="12" r="3.5" fill="#E8A598" />
                <path d="M11 15.5c0 1.5 1 2.5 2 3.5" stroke="#E8A598" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="21" cy="20" r="3.5" fill="#1A7FA0" />
                <path d="M21 16.5c0-1.5-1-2.5-2-3.5" stroke="#1A7FA0" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="font-sans font-bold text-2xl tracking-tight flex items-baseline leading-none">
                  <span className="text-[#98D6E8]">Micro</span>
                  <span className="text-white">Sort</span>
                  <span className="text-[10px] font-bold text-accent-light align-super ml-0.5">®</span>
                </span>
                <span className="text-[9px] text-accent-light tracking-widest font-sans uppercase font-semibold mt-1">
                  Where hope meets science
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              MicroSort® is a scientifically proven preconception process that increases the probability that the baby you conceive will be of your preferred chromosomal sex.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
              Resources
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link to="/planning" className="hover:text-accent transition-colors">
                  Planning a Visit
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-accent transition-colors">
                  MicroSort Laboratories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Information */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
              Information
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link to="/process" className="hover:text-accent transition-colors">
                  About MicroSort
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-accent transition-colors">
                  The Process
                </Link>
              </li>
              <li>
                <Link to="/requirements" className="hover:text-accent transition-colors">
                  Requirements
                </Link>
              </li>
              <li>
                <Link to="/verify" className="hover:text-accent transition-colors">
                  Verify Sort
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Laboratories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5">
              Laboratories
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <Link to={`/locations/${loc.slug}`} className="hover:text-accent transition-all flex items-center gap-1.5">
                    <span className="text-xs select-none">{loc.flag}</span>
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Locations Served, and Medical Disclaimer */}
      <div className="bg-[#052332] text-xs py-8 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center text-center lg:text-left text-white/50">
          <div>
            <p className="mb-2 font-medium">
              Locations served: <span className="text-white/80">Mexico | North Cyprus | Malaysia | Japan | Cambodia | Thailand | Nigeria</span>
            </p>
            <p>
              Disclaimer: MicroSort® technology is used exclusively for preconception sex selection in clinical IUI, IVF, and ICSI treatments. Consult with authorized laboratories for eligibility.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-1 shrink-0">
            <span>© 2026 MicroSort | All Rights Reserved</span>
            <span className="flex items-center gap-1">
              With hope and precision <Heart size={10} className="fill-accent text-accent animate-pulse" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
