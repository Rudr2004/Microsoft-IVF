import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import QuickLinks from '../components/sections/QuickLinks';
import WhatIsMicroSort from '../components/sections/WhatIsMicroSort';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import LearnMoreCards from '../components/sections/LearnMoreCards';
import LocationSelector from '../components/sections/LocationSelector';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Header Banner */}
      <HeroSection />

      {/* Grid Link Cards overlapping the Hero */}
      <QuickLinks />

      {/* Core biological details section */}
      <WhatIsMicroSort />

      {/* Info grids (Learn More / Do I Qualify / Get Started) */}
      <LearnMoreCards />

      {/* Testimonials Slideshow */}
      <TestimonialsSection />

      {/* Contact directory select list */}
      <LocationSelector />
    </div>
  );
}
