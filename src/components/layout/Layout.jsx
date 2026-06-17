import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, Calendar, X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const supportRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Click outside to close support panel
  useEffect(() => {
    function handleClickOutside(event) {
      if (supportRef.current && !supportRef.current.contains(event.target)) {
        setIsSupportOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bg text-text">
      {/* Navigation Header */}
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow pt-[76px] lg:pt-[116px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Support Widget (no-print) */}
      <div className="fixed bottom-6 right-6 z-50 no-print" ref={supportRef}>
        <AnimatePresence>
          {isSupportOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute bottom-16 right-0 w-80 bg-white border border-[#E2E8ED] rounded-2xl shadow-2xl overflow-hidden mb-2"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0D4F6C] to-[#1A7FA0] p-4 text-white">
                <div className="flex justify-between items-center">
                  <h4 className="font-display font-semibold text-sm">MicroSort® Patient Support</h4>
                  <button 
                    onClick={() => setIsSupportOpen(false)}
                    className="text-white/80 hover:text-white transition-colors focus:outline-none"
                    aria-label="Close support drawer"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="text-[11px] text-white/80 mt-1">
                  Connect with a medical coordinator or schedule your consultation.
                </p>
              </div>

              {/* Support Links */}
              <div className="p-4 space-y-3">
                {/* Phone Link */}
                <a 
                  href="tel:7036217171" 
                  className="flex items-center gap-3 p-3 rounded-xl border border-[#E2E8ED] hover:bg-[#0D4F6C]/5 hover:border-[#0D4F6C]/25 transition-all text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center shrink-0 group-hover:bg-[#0D4F6C]/10 transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0D4F6C]">Call Laboratories</div>
                    <div className="text-[11px] text-muted font-sans">(703) 621-7171</div>
                  </div>
                </a>

                {/* Email Link */}
                <a 
                  href="mailto:records@microsort.com" 
                  className="flex items-center gap-3 p-3 rounded-xl border border-[#E2E8ED] hover:bg-[#0D4F6C]/5 hover:border-[#0D4F6C]/25 transition-all text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1A7FA0]/5 text-[#1A7FA0] flex items-center justify-center shrink-0 group-hover:bg-[#1A7FA0]/10 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0D4F6C]">Email Records Department</div>
                    <div className="text-[11px] text-muted font-sans">records@microsort.com</div>
                  </div>
                </a>

                {/* Consultation Navigation */}
                <Link 
                  to="/planning" 
                  onClick={() => setIsSupportOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl border border-[#E2E8ED] hover:bg-[#0D4F6C]/5 hover:border-[#0D4F6C]/25 transition-all text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 text-[#0D4F6C] flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0D4F6C]">Book Consultation</div>
                    <div className="text-[11px] text-muted font-sans">Planning & Lab Selection</div>
                  </div>
                </Link>
              </div>

              {/* Footer text */}
              <div className="bg-[#F8F9FB] border-t border-[#E2E8ED] px-4 py-2.5 text-center">
                <span className="text-[9px] text-muted uppercase tracking-wider font-semibold">
                  Response within 1 business day
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAB Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSupportOpen(!isSupportOpen)}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1A7FA0] to-[#0D4F6C] text-white flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1A7FA0] focus:ring-offset-2"
          aria-label="Toggle support channels"
          aria-expanded={isSupportOpen}
        >
          <AnimatePresence mode="wait">
            {isSupportOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="msg-icon"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageSquare size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
