import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function VerifySection() {
  return (
    <section className="py-16 bg-surface border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-bg border border-border/80 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
              <ShieldCheck size={26} className="stroke-[1.5]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1.5 block">
                Security & Authentication
              </span>
              <h3 className="text-2xl font-display text-primary mb-3 font-normal">
                Verify My Sort
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-xl">
                Only a list of exclusive laboratories can provide MicroSort®. Once you visit the laboratory, you will get a verification code. Please use this tool to verify your sort and get your results.
              </p>
            </div>
          </div>
          
          <div className="shrink-0 w-full md:w-auto">
            <Button 
              variant="primary" 
              size="md" 
              href="/verify" 
              className="w-full md:w-auto group flex items-center justify-center gap-2"
            >
              <span>Verify My Sort</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
