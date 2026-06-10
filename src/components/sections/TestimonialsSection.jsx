import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const timerRef = useRef(null);

  const slideNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = setInterval(slideNext, 6000);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <section 
      className="py-16 md:py-24 bg-accent/15 relative overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeader 
          eyebrow="Patient Journeys"
          title="MicroSort® Success Stories"
          subtitle="Read real stories from families who achieved their balancing goals with our technology."
        />

        {/* Carousel Container */}
        <div className="relative min-h-[260px] sm:min-h-[220px] md:min-h-[200px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              <TestimonialCard 
                quote={testimonials[current].quote} 
                author={testimonials[current].author} 
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow (Desktop only) */}
          <button
            onClick={slidePrev}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border border-border shadow-md items-center justify-center text-primary hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-20"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow (Desktop only) */}
          <button
            onClick={slideNext}
            aria-label="Next testimonial"
            className="hidden md:flex absolute right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border border-border shadow-md items-center justify-center text-primary hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-20"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Mobile controls: dots and navigation buttons inline */}
        <div className="flex md:hidden justify-center items-center gap-6 mt-6">
          <button
            onClick={slidePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-surface border border-border shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === current 
                    ? 'bg-primary w-6' 
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={slideNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-surface border border-border shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Desktop Dot Indicators */}
        <div className="hidden md:flex justify-center items-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === current 
                  ? 'bg-primary w-6' 
                  : 'bg-primary/20 hover:bg-primary/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
