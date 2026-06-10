import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { CheckCircle2 } from 'lucide-react';

export default function WhatIsMicroSort() {
  return (
    <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
      {/* Decorative dot grid background */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Scientific Illustration / Graphic representation (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-bg border border-border p-6 sm:p-8 rounded-3xl relative">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent/20 rounded-full blur-lg"></div>
              
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-6 text-center lg:text-left">
                Typical Semen Composition
              </h4>
              
              {/* Graphic comparing X (Pink) vs Y (Teal) chromosomes */}
              <div className="space-y-6">
                {/* X Chromosome row */}
                <div className="bg-surface border border-border/60 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent font-sans font-bold text-lg">
                      X
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary">Sperm carrying X</div>
                      <div className="text-[11px] text-muted">Produces a female baby</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs bg-accent/10 text-primary font-semibold px-2.5 py-1 rounded-full">
                      ~2.8% More DNA
                    </span>
                  </div>
                </div>

                {/* Y Chromosome row */}
                <div className="bg-surface border border-border/60 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-light/15 flex items-center justify-center text-primary-light font-sans font-bold text-lg">
                      Y
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary">Sperm carrying Y</div>
                      <div className="text-[11px] text-muted">Produces a male baby</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs bg-primary-light/10 text-primary-light font-semibold px-2.5 py-1 rounded-full">
                      Standard DNA
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical stat card below */}
              <div className="mt-8 border-t border-border pt-6 flex items-center justify-between text-center">
                <div>
                  <div className="text-2xl font-display text-primary font-normal">50%</div>
                  <div className="text-[10px] text-muted uppercase tracking-wider">Natural Split</div>
                </div>
                <div className="w-[1px] h-8 bg-border"></div>
                <div>
                  <div className="text-2xl font-display text-accent font-normal">90%+</div>
                  <div className="text-[10px] text-muted uppercase tracking-wider">X-Sort Yield</div>
                </div>
                <div className="w-[1px] h-8 bg-border"></div>
                <div>
                  <div className="text-2xl font-display text-primary-light font-normal">75%+</div>
                  <div className="text-[10px] text-muted uppercase tracking-wider">Y-Sort Yield</div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy and details (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeader
              eyebrow="The Science of Family Balancing"
              title="What is MicroSort®?"
              align="left"
              className="mb-6"
            />
            
            <p className="text-base md:text-lg text-primary/90 leading-relaxed font-sans mb-6">
              MicroSort<span className="text-xs align-super font-bold">®</span> is a scientifically proven preconception process that improves the chances that the baby you conceive will be of the desired gender.
            </p>
            
            <p className="text-muted text-sm leading-relaxed mb-8">
              Semen samples usually contain equal amounts of sperm carrying the Y chromosome (which will produce a boy), and sperm carrying the X chromosome (which will produce a girl). By identifying and selecting specific sperm types, MicroSort® increases the density of your desired chromosome prior to fertilization.
            </p>

            {/* MicroSort proof list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="text-primary-light shrink-0 mt-0.5" size={18} />
                <span className="text-xs font-semibold text-primary font-sans">Proven Flow Cytometry Sorting</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="text-primary-light shrink-0 mt-0.5" size={18} />
                <span className="text-xs font-semibold text-primary font-sans">Preconception Phase Safety</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="text-primary-light shrink-0 mt-0.5" size={18} />
                <span className="text-xs font-semibold text-primary font-sans">Compatible with IUI and IVF / ICSI</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="text-primary-light shrink-0 mt-0.5" size={18} />
                <span className="text-xs font-semibold text-primary font-sans">Used globally for genetic screening</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
