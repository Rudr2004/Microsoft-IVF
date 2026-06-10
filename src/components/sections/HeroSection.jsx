import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

function DNAAnimation() {
  const pairs = Array.from({ length: 14 });
  const amplitude = 80; // horizontal width of helix swing
  const baseOffset = 200; // middle of the canvas

  return (
    <svg className="w-full h-full text-white/10" viewBox="0 0 400 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      {pairs.map((_, i) => {
        const y = 40 + i * 48;
        const phase = i * 0.45;
        
        // Horizontal path oscillations
        const x1Values = [
          baseOffset + Math.sin(phase) * amplitude,
          baseOffset + Math.sin(phase + Math.PI) * amplitude,
          baseOffset + Math.sin(phase) * amplitude
        ];
        const x2Values = [
          baseOffset - Math.sin(phase) * amplitude,
          baseOffset - Math.sin(phase + Math.PI) * amplitude,
          baseOffset - Math.sin(phase) * amplitude
        ];
        
        // Depth simulation (front/back circles opacity and radii)
        const opacity1Values = [
          0.85 + Math.cos(phase) * 0.15,
          0.85 - Math.cos(phase) * 0.15,
          0.85 + Math.cos(phase) * 0.15
        ];
        const opacity2Values = [
          0.85 - Math.cos(phase) * 0.15,
          0.85 + Math.cos(phase) * 0.15,
          0.85 - Math.cos(phase) * 0.15
        ];

        const r1Values = [
          6 + Math.cos(phase) * 2.5,
          6 - Math.cos(phase) * 2.5,
          6 + Math.cos(phase) * 2.5
        ];
        const r2Values = [
          6 - Math.cos(phase) * 2.5,
          6 + Math.cos(phase) * 2.5,
          6 - Math.cos(phase) * 2.5
        ];

        return (
          <g key={i}>
            {/* Connecting Ladder rung */}
            <motion.line
              y1={y}
              y2={y}
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="2"
              strokeDasharray="3 3"
              animate={{
                x1: x1Values,
                x2: x2Values
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* X-chromosome sperm marker (Pink Accent) */}
            <motion.circle
              cy={y}
              fill="#E8A598"
              animate={{
                cx: x1Values,
                r: r1Values,
                opacity: opacity1Values
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Y-chromosome sperm marker (Mid Teal) */}
            <motion.circle
              cy={y}
              fill="#98D6E8"
              animate={{
                cx: x2Values,
                r: r2Values,
                opacity: opacity2Values
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#082F42] via-[#0D4F6C] to-[#1A7FA0] overflow-hidden py-16 md:py-24">
      {/* Background SVG Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Curved Divider Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-bg clip-ellipse"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent font-sans text-xs uppercase tracking-widest font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
              Scientifically Proven Preconception Gender Selection
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white font-display leading-[1.1] font-normal mb-6"
          >
            Increase your chances of having a boy or a girl using MicroSort<span className="text-xl align-super text-accent-light font-bold">®</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed font-sans mb-10 max-w-xl mx-auto lg:mx-0"
          >
            MicroSort<span className="text-xs align-super font-bold">®</span> really works. Gain greater control over your family balancing planning with our clinical sorting technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button variant="secondary" size="lg" href="/process" className="group text-primary hover:bg-white">
              <span>Find Out More</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" href="/planning" className="border-white/40 text-white hover:bg-white/10 hover:border-white">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>

        {/* Right Side DNA Animated Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[550px] w-full flex items-center justify-center relative select-none"
        >
          {/* Subtle surrounding light glow */}
          <div className="absolute w-72 h-72 bg-accent/20 rounded-full blur-[100px] pointer-events-none animate-float"></div>
          <div className="absolute w-60 h-60 bg-primary-light/30 rounded-full blur-[100px] pointer-events-none animation-delay-2000"></div>

          {/* DNA Double Helix Wrapper */}
          <div className="w-full max-w-[280px] h-full relative">
            <DNAAnimation />
          </div>
        </motion.div>
      </div>

      {/* Decorative wave divider */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-12 text-bg fill-current">
          <path d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,197.3C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
