import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { locations } from '../data/locations';
import SectionHeader from '../components/ui/SectionHeader';
import { Phone, Mail, Clock, MapPin, Landmark } from 'lucide-react';
import Badge from '../components/ui/Badge';

export default function LocationsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedSlug, setSelectedSlug] = useState(slug || 'all');
  const cardRefs = useRef({});

  // Sync state with URL parameter changes
  useEffect(() => {
    if (slug) {
      setSelectedSlug(slug);
      scrollToCard(slug);
    } else {
      setSelectedSlug('all');
    }
  }, [slug]);

  const scrollToCard = (targetSlug) => {
    setTimeout(() => {
      const element = cardRefs.current[targetSlug];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleDropdownChange = (e) => {
    const targetSlug = e.target.value;
    setSelectedSlug(targetSlug);
    if (targetSlug === 'all') {
      navigate('/locations');
    } else {
      navigate(`/locations/${targetSlug}`);
    }
  };

  return (
    <div className="bg-bg py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Global Clinical Network"
          title="MicroSort Laboratories"
          subtitle="Explore our exclusive scientific laboratory centers. Each location operates under strict clinical standards to offer verified preconception sorting."
        />

        {/* Filter Dropdown */}
        <div className="max-w-md mx-auto mb-16">
          <label htmlFor="locations-dropdown" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2 text-center">
            Filter & Jump to Laboratory
          </label>
          <div className="relative">
            <select
              id="locations-dropdown"
              value={selectedSlug}
              onChange={handleDropdownChange}
              className="w-full bg-surface border border-border text-primary font-sans font-medium rounded-full px-6 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer appearance-none text-base shadow-sm"
            >
              <option value="all">📍 Show All 3 Laboratories</option>
              {locations.map((loc) => (
                <option key={loc.id} value={loc.slug}>
                  {loc.flag} {loc.name} Center
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

        {/* Cards list */}
        <div className="space-y-8">
          {locations.map((loc) => {
            const isHighlighted = selectedSlug === loc.slug;
            
            return (
              <div
                key={loc.id}
                ref={(el) => (cardRefs.current[loc.slug] = el)}
                className={`bg-surface border rounded-3xl p-6 sm:p-10 transition-all duration-500 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden ${
                  isHighlighted 
                    ? 'border-accent ring-2 ring-accent/30 shadow-xl scale-[1.01]' 
                    : 'border-border hover:border-primary-light/35'
                }`}
              >
                {/* Visual marker if highlighted */}
                {isHighlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent"></div>
                )}
                
                {/* Left Column: Flag, City, Badges (4 cols) */}
                <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left shrink-0">
                  <span className="text-7xl mb-4 select-none filter drop-shadow-sm">{loc.flag}</span>
                  <h3 className="text-2xl font-display text-primary font-normal mb-1">
                    {loc.name}
                  </h3>
                  <p className="text-muted text-sm font-semibold tracking-wide uppercase font-sans mb-4">
                    {loc.city} Laboratory
                  </p>
                  <Badge variant={isHighlighted ? "accent" : "primary"}>
                    Authorized Provider
                  </Badge>
                </div>

                {/* Right Column: Contact Details */}
                <div className="w-full md:flex-1 space-y-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border md:pl-8">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-bg text-primary flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-primary-light" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Laboratory Location</span>
                      <p className="text-sm font-sans font-medium text-primary leading-relaxed mt-0.5">
                        {loc.address}
                      </p>
                    </div>
                  </div>

                  {/* Contact Channels */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-bg text-primary flex items-center justify-center shrink-0">
                        <Phone size={16} className="text-primary-light" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Phone Inquiry</span>
                        <a href={`tel:${loc.phone}`} className="text-sm font-sans font-bold text-primary hover:underline mt-0.5 block">
                          {loc.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-bg text-primary flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-primary-light" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Email Contact</span>
                        <a href={`mailto:${loc.email}`} className="text-sm font-sans font-medium text-primary hover:underline mt-0.5 block break-all">
                          {loc.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-bg text-primary flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-primary-light" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Business Hours</span>
                      <p className="text-sm font-sans font-medium text-primary mt-0.5">
                        {loc.hours}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
