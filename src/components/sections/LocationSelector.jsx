import React from 'react';
import { motion } from 'framer-motion';
import { locations } from '../../data/locations';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';

export default function LocationSelector() {
  return (
    <section className="py-16 md:py-24 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Global Network"
          title="Contact our exclusive Microsort centers"
          subtitle="Explore our exclusive authorized laboratory centers worldwide. View contact info, business hours, and coordination details for each location."
        />

        {/* Responsive Grid layout for all locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-bg border border-border/80 hover:border-[#1A7FA0]/50 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1A7FA0]/5 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                {/* Header: Flag, Name, City */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-border/60">
                  <span className="text-4xl select-none filter drop-shadow-sm">{loc.flag}</span>
                  <div className="text-left">
                    <h3 className="text-xl font-display text-primary font-semibold leading-tight">
                      {loc.name}
                    </h3>
                    <p className="text-accent text-[11px] font-bold tracking-wider uppercase font-sans mt-0.5">
                      {loc.city} Center
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4 mb-6">
                  {/* Address */}
                  <div className="flex items-start gap-3 text-left">
                    <div className="w-7 h-7 rounded-lg bg-surface border border-border text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={13} className="text-[#1A7FA0]" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold tracking-wider text-muted">Laboratory Address</div>
                      <div className="text-xs font-sans font-medium text-primary mt-0.5 leading-relaxed">
                        {loc.address}
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 text-left">
                    <div className="w-7 h-7 rounded-lg bg-surface border border-border text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={13} className="text-[#1A7FA0]" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold tracking-wider text-muted">Direct Phone</div>
                      <a href={`tel:${loc.phone}`} className="text-xs font-sans font-bold text-primary hover:underline mt-0.5 block">
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 text-left">
                    <div className="w-7 h-7 rounded-lg bg-surface border border-border text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={13} className="text-[#1A7FA0]" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold tracking-wider text-muted">Official Email</div>
                      <a href={`mailto:${loc.email}`} className="text-xs font-sans font-medium text-primary hover:underline mt-0.5 block break-all">
                        {loc.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 text-left">
                    <div className="w-7 h-7 rounded-lg bg-surface border border-border text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={13} className="text-[#1A7FA0]" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold tracking-wider text-muted">Hours of Operation</div>
                      <div className="text-xs font-sans font-medium text-primary mt-0.5">
                        {loc.hours}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border/40 flex flex-col gap-2">
                <Button 
                  variant="primary" 
                  size="sm" 
                  href={`/contact?lab=${encodeURIComponent(loc.name)}`}
                  className="w-full justify-center text-xs py-2 bg-[#1A7FA0] text-white hover:bg-[#0D4F6C]"
                >
                  Confirm Eligibility
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  href={`/locations/${loc.slug}`}
                  className="w-full justify-center group text-xs py-2"
                >
                  <span>Lab Details</span>
                  <ArrowRight size={12} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
