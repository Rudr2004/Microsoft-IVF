import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Mail, HelpCircle, FileCheck } from 'lucide-react';
import { locations } from '../../data/locations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">


      {/* Main Navigation Bar */}
      <nav 
        aria-label="Main navigation" 
        className={`w-full py-3 px-6 transition-all duration-300 ${
          isScrolled 
            ? 'bg-surface/90 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center min-h-[72px]">
          {/* Logo and Tagline */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2"
          >
            <img src="/MicroSort-logo.png" alt="MicroSort logo" className="h-14 w-auto transition-transform duration-300 group-hover:scale-105 object-contain" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/planning" 
              className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2.5 py-1 ${
                location.pathname === '/planning' ? 'text-primary border-b-2 border-accent' : 'text-muted'
              }`}
            >
              Planning
            </Link>

            {/* Locations Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                onKeyDown={handleKeyDown}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2.5 py-1 flex items-center gap-1 ${
                  location.pathname.startsWith('/locations') ? 'text-primary border-b-2 border-accent' : 'text-muted'
                }`}
              >
                <span>Locations</span>
                <ChevronDown size={14} className={`transform transition-transform duration-350 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega-menu Panel */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-3 w-80 bg-surface border border-border shadow-xl rounded-2xl p-5 animate-fade-up z-50">
                  <div className="text-xs uppercase font-bold tracking-widest text-muted border-b border-border pb-2 mb-3">
                    Our Labs & Affiliates
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/locations"
                      className="col-span-2 p-2 rounded-xl text-sm text-primary hover:bg-primary/5 font-semibold flex items-center gap-2 border border-border/60 mb-2 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <MapPin size={16} className="text-accent" />
                      <span>All 7 Laboratories</span>
                    </Link>
                    {locations.map((loc) => (
                      <Link
                        key={loc.id}
                        to={`/locations/${loc.slug}`}
                        className="p-2 rounded-lg text-sm text-muted hover:text-primary hover:bg-primary/5 flex items-center gap-2 transition-all"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <span className="text-base select-none">{loc.flag}</span>
                        <span>{loc.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/process" 
              className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2.5 py-1 ${
                location.pathname === '/process' ? 'text-primary border-b-2 border-accent' : 'text-muted'
              }`}
            >
              Process
            </Link>

            <Link 
              to="/requirements" 
              className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2.5 py-1 ${
                location.pathname === '/requirements' ? 'text-primary border-b-2 border-accent' : 'text-muted'
              }`}
            >
              Requirements
            </Link>

            <Link 
              to="/verify" 
              className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2.5 py-1 ${
                location.pathname === '/verify' ? 'text-primary border-b-2 border-accent' : 'text-muted'
              }`}
            >
              Verify
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-semibold tracking-wide hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2.5 py-1 ${
                location.pathname === '/contact' ? 'text-primary border-b-2 border-accent' : 'text-muted'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <div className="lg:hidden flex items-center gap-3">
            <Link 
              to="/verify" 
              className="text-xs bg-accent/20 border border-accent/30 text-primary px-3 py-1.5 rounded-full font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Verify Sort
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle main menu"
              aria-expanded={isOpen}
              className="p-2 text-primary hover:bg-primary/5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bg-surface/95 backdrop-blur-md border-b border-border shadow-lg p-6 max-h-[calc(100vh-80px)] overflow-y-auto z-40 transition-all duration-300">
          <div className="flex flex-col gap-5">
            <Link
              to="/planning"
              className="text-lg font-medium text-primary hover:text-primary-light pb-2 border-b border-border/40"
              onClick={() => setIsOpen(false)}
            >
              Planning
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold uppercase tracking-widest text-muted">Locations</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 bg-primary/5 p-3 rounded-2xl">
                <Link
                  to="/locations"
                  className="col-span-1 sm:col-span-2 text-sm text-primary font-semibold py-1.5 flex items-center gap-1.5"
                  onClick={() => setIsOpen(false)}
                >
                  📍 All Locations
                </Link>
                {locations.map((loc) => (
                  <Link
                    key={loc.id}
                    to={`/locations/${loc.slug}`}
                    className="text-sm text-muted hover:text-primary py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {loc.flag} {loc.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/process"
              className="text-lg font-medium text-primary hover:text-primary-light pb-2 border-b border-border/40"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link
              to="/requirements"
              className="text-lg font-medium text-primary hover:text-primary-light pb-2 border-b border-border/40"
              onClick={() => setIsOpen(false)}
            >
              Requirements
            </Link>
            <Link
              to="/verify"
              className="text-lg font-medium text-primary hover:text-primary-light pb-2 border-b border-border/40"
              onClick={() => setIsOpen(false)}
            >
              Verify
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-primary hover:text-primary-light pb-2 border-b border-border/40"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            <div className="mt-4 border-t border-border pt-6 flex flex-col gap-3">
              <a href="mailto:info@microsort.com" className="flex items-center gap-2 text-sm text-muted">
                <Mail size={16} className="text-primary-light" />
                <span>info@microsort.com</span>
              </a>
              <div className="text-xs text-muted">
                Hours: 10:00 – 15:00 Central Time (GMT -5:00)
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
