import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Button from '../ui/Button';

export default function CtaModule() {
  return (
    <section className="py-16 md:py-24 bg-surface border-t border-border relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">
          Ready to find out if MicroSort is appropriate for you?
        </h2>
        <p className="text-muted text-lg font-sans mb-10 max-w-2xl mx-auto">
          Start with a private eligibility review. No medical documents are required to begin.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button href="/contact" size="lg" className="w-full sm:w-auto justify-center text-sm group px-8">
            <span>Check Eligibility & Request a Consultation</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto justify-center text-sm px-8">
            <MessageSquare size={16} className="mr-2" />
            <span>Talk to a Coordinator</span>
          </Button>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-muted font-sans font-medium">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Private inquiry</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> No medical documents required to start</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Authorized laboratories only</span>
        </div>
      </div>
    </section>
  );
}
