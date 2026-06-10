import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { locations } from '../../data/locations';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';

export default function LocationSelector() {
  const [selectedId, setSelectedId] = useState(locations[0].id);

  const selectedLoc = locations.find((l) => l.id === selectedId) || locations[0];

  return (
    <section className="py-16 md:py-24 bg-surface border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Global Network"
          title="Contact our exclusive Microsort centers"
          subtitle="Select a laboratory near you to view contact info, local business hours, and coordinate details."
        />

        {/* Custom styled select box */}
        <div className="max-w-md mx-auto mb-12">
          <label htmlFor="country-select" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2 text-center">
            Choose a Laboratory
          </label>
          <div className="relative">
            <select
              id="country-select"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full bg-bg border border-border text-primary font-sans font-medium rounded-full px-6 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer appearance-none text-base"
            >
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.flag} {loc.name} — {loc.city}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-primary">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Selected Location Card Display */}
        <div className="bg-bg border border-border/80 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Flag, Title, City (5 cols) */}
              <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-border pb-6 md:pb-0 md:pr-8">
                <span className="text-6xl mb-4 select-none filter drop-shadow-sm">{selectedLoc.flag}</span>
                <h3 className="text-3xl font-display text-primary font-normal mb-1">
                  {selectedLoc.name}
                </h3>
                <p className="text-accent text-sm font-semibold tracking-wider uppercase font-sans">
                  {selectedLoc.city} Center
                </p>
                <div className="mt-6 hidden md:block">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    href={`/locations/${selectedLoc.slug}`}
                    className="group"
                  >
                    <span>Lab Details</span>
                    <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Right Column: Contact Metadata (7 cols) */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border text-primary flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-primary-light" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-muted">Laboratory Address</div>
                    <div className="text-sm font-sans font-medium text-primary mt-0.5 leading-relaxed">
                      {selectedLoc.address}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-border text-primary flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-primary-light" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-muted">Direct Phone</div>
                      <a href={`tel:${selectedLoc.phone}`} className="text-sm font-sans font-bold text-primary hover:underline mt-0.5 block">
                        {selectedLoc.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-surface border border-border text-primary flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-primary-light" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-muted">Official Email</div>
                      <a href={`mailto:${selectedLoc.email}`} className="text-sm font-sans font-medium text-primary hover:underline mt-0.5 block break-all">
                        {selectedLoc.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border text-primary flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-primary-light" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-muted">Hours of Operation</div>
                    <div className="text-sm font-sans font-medium text-primary mt-0.5">
                      {selectedLoc.hours}
                    </div>
                  </div>
                </div>

                {/* Mobile only details CTA */}
                <div className="block md:hidden pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    href={`/locations/${selectedLoc.slug}`} 
                    className="w-full text-center"
                  >
                    View Center Page
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
