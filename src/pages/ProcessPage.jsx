import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import { Layers, Droplets, Zap, Split, FlaskConical, Clock, ChevronRight, Check } from 'lucide-react';
import Badge from '../components/ui/Badge';

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      number: "1",
      title: "Sample Washing",
      subtitle: "Purification & Density Isolation",
      icon: Layers,
      color: "text-[#1A7FA0]",
      gradient: "from-[#1A7FA0] to-[#0D4F6C]",
      description: "The semen sample is washed through centrifugation density gradients to remove seminal plasma, debris, and non-motile cells. Only highly active, motile sperm are collected, ensuring only viable cells proceed to the flow cytometer.",
      technicalMetrics: [
        { label: "Centrifugation G-Force", value: "300g – 600g" },
        { label: "Density Gradient Medium", value: "40% over 80% silane-coated silica" },
        { label: "Incubation Temperature", value: "37°C (98.6°F)" },
        { label: "Processing Duration", value: "45 minutes" }
      ],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-48 max-h-48 text-[#1A7FA0] drop-shadow-sm">
          <defs>
            <linearGradient id="gradient40" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A7FA0" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#1A7FA0" stopOpacity="0.3"/>
            </linearGradient>
            <linearGradient id="gradient80" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0D4F6C" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#0D4F6C" stopOpacity="0.65"/>
            </linearGradient>
          </defs>
          {/* Centrifuge Tube Outline */}
          <path d="M70 20 h60 v100 l-30 50 l-30 -50 Z" fill="none" stroke="#E2E8ED" strokeWidth="3.5" />
          {/* 40% Layer */}
          <path d="M72 60 h56 v40 l-15 25 h-26 l-15 -25 Z" fill="url(#gradient40)" />
          {/* 80% Layer */}
          <path d="M72 100 h56 v20 l-28 47 l-28 -47 Z" fill="url(#gradient80)" />
          {/* Interface Line */}
          <line x1="72" y1="100" x2="128" y2="100" stroke="#E2E8ED" strokeWidth="2" strokeDasharray="3 3" />
          
          {/* Label Lines */}
          <text x="135" y="45" fontSize="10" fill="#5A6B77" className="font-bold">Seminal Plasma</text>
          <line x1="100" y1="45" x2="130" y2="45" stroke="#5A6B77" strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Floating non-motile dots */}
          <circle cx="85" cy="75" r="2.5" fill="#E8A598" opacity="0.8" />
          <circle cx="115" cy="80" r="2" fill="#E8A598" opacity="0.6" />
          <circle cx="98" cy="90" r="3" fill="#E8A598" opacity="0.7" />
          
          {/* Active Sperm Pellet at the bottom tip */}
          <g transform="translate(100, 150)">
            <ellipse cx="0" cy="0" rx="3.5" ry="6" fill="#1A7FA0" />
            <path d="M0 6 C-3 12, 1 17, -2 24" fill="none" stroke="#1A7FA0" strokeWidth="1.2" />
          </g>
          <g transform="translate(92, 143)">
            <ellipse cx="0" cy="0" rx="2.5" ry="5" fill="#1A7FA0" transform="rotate(-25)" />
            <path d="M0 5 C-2 10, 2 15, 0 20" fill="none" stroke="#1A7FA0" strokeWidth="1" />
          </g>
          <g transform="translate(108, 144)">
            <ellipse cx="0" cy="0" rx="3" ry="5.5" fill="#1A7FA0" transform="rotate(25)" />
            <path d="M0 5.5 C2 11, -1 16, 1 21" fill="none" stroke="#1A7FA0" strokeWidth="1" />
          </g>
          <text x="32" y="165" fontSize="10" fill="#0D4F6C" className="font-bold">Motile Pellet</text>
        </svg>
      )
    },
    {
      id: 1,
      number: "2",
      title: "Fluorescent Staining",
      subtitle: "DNA-Binding Incubation",
      icon: Droplets,
      color: "text-[#E8A598]",
      gradient: "from-[#E8A598] to-[#0D4F6C]",
      description: "The washed, motile-enriched sperm sample is incubated with Hoechst 33342, a non-toxic fluorescent dye that binds specifically to the DNA helices inside each cell. Because the X chromosome has approximately 2.8% more DNA than the Y chromosome, X-bearing sperm absorb more stain and fluoresce more brightly.",
      technicalMetrics: [
        { label: "Fluorochrome Agent", value: "Hoechst 33342" },
        { label: "Working Concentration", value: "2.2 µM" },
        { label: "Incubation Duration", value: "40 minutes" },
        { label: "Binding Target", value: "Minor groove of A-T rich regions" }
      ],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-48 max-h-48 text-[#E8A598] drop-shadow-sm">
          {/* Sperm Cell Layout */}
          <g transform="translate(60, 100) rotate(-15)">
            {/* Tail */}
            <path d="M50 0 C80 -10, 100 20, 140 10" fill="none" stroke="#E2E8ED" strokeWidth="2" />
            <path d="M50 0 C80 -10, 100 20, 140 10" fill="none" stroke="#E8A598" strokeWidth="1" strokeDasharray="3 6" className="animate-pulse" />
            {/* Midpiece */}
            <rect x="35" y="-2.5" width="15" height="5" rx="1.5" fill="#5A6B77" />
            {/* Head */}
            <ellipse cx="15" cy="0" rx="20" ry="12" fill="#E2E8ED" stroke="#5A6B77" strokeWidth="1.5" />
            
            {/* Glowing DNA Chromosome Structure inside head */}
            <path d="M5 -5 Q15 -10 25 -5 T15 5 T5 -5" fill="none" stroke="#E8A598" strokeWidth="2.5" className="animate-pulse" />
            <path d="M5 5 Q15 10 25 5 T15 -5 T5 5" fill="none" stroke="#E8A598" strokeWidth="1.2" opacity="0.6" />
          </g>
          
          {/* Glowing Dye Particles Binding */}
          <circle cx="65" cy="85" r="4" fill="#E8A598" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="65" cy="85" r="2" fill="#E8A598" />
          <circle cx="70" cy="115" r="3" fill="#E8A598" />
          <circle cx="50" cy="100" r="2.5" fill="#E8A598" />
          <circle cx="85" cy="95" r="3.5" fill="#E8A598" />
          
          <text x="100" y="45" fontSize="10" fill="#E8A598" className="font-bold">DNA Binding Dye</text>
          <text x="25" y="160" fontSize="9" fill="#5A6B77" className="font-semibold italic">X-Bearing absorbs +2.8% dye</text>
        </svg>
      )
    },
    {
      id: 2,
      number: "3",
      title: "Flow Cytometry",
      subtitle: "Laser Interrogation",
      icon: Zap,
      color: "text-[#1A7FA0]",
      gradient: "from-[#1A7FA0] to-[#0D4F6C]",
      description: "Stained sperm cells enter the fluidic nozzle of a flow cytometer. Hydrodynamic focusing aligns the cells in a single-file stream. As each cell passes a 355nm ultraviolet laser, the dye absorbs energy and emits a burst of light proportional to the amount of DNA.",
      technicalMetrics: [
        { label: "Laser Wavelength", value: "355 nm UV (Solid State)" },
        { label: "Capillary Diameter", value: "70 µm nozzle aperture" },
        { label: "Capillary Velocity", value: "24 meters per second" },
        { label: "Interrogation Rate", value: "Up to 20,000 cells / second" }
      ],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-48 max-h-48 text-[#1A7FA0] drop-shadow-sm">
          {/* Capillary Tube nozzle */}
          <path d="M85 20 L85 80 L97 110 L97 170 H103 L103 110 L115 80 L115 20" fill="none" stroke="#E2E8ED" strokeWidth="2.5" />
          
          {/* Liquid Sheath flow */}
          <path d="M87 20 L87 80 L98 108 L98 170" fill="none" stroke="#1A7FA0" strokeWidth="0.5" opacity="0.3" />
          <path d="M113 20 L113 80 L102 108 L102 170" fill="none" stroke="#1A7FA0" strokeWidth="0.5" opacity="0.3" />
          
          {/* Incoming Sperm Cells */}
          <circle cx="100" cy="35" r="1.5" fill="#5A6B77" />
          <circle cx="100" cy="60" r="1.5" fill="#5A6B77" />
          <circle cx="100" cy="85" r="1.5" fill="#5A6B77" />
          
          {/* Cells at laser interrogation point */}
          <g transform="translate(100, 120)">
            <circle cx="0" cy="0" r="3" fill="#E8A598" className="animate-ping" />
            <circle cx="0" cy="0" r="2.5" fill="#E8A598" />
          </g>
          
          {/* Laser beam */}
          <line x1="30" y1="120" x2="170" y2="120" stroke="#8A2BE2" strokeWidth="3.5" className="animate-pulse" />
          <text x="125" y="115" fontSize="9" fill="#8A2BE2" className="font-bold uppercase tracking-wider">355nm UV</text>
          
          {/* Emission detector */}
          <path d="M140 140 L160 160 M140 160 L160 140" stroke="#1A7FA0" strokeWidth="1.5" />
          <rect x="145" y="142" width="22" height="15" rx="3" fill="#0D4F6C" />
          <text x="148" y="152" fontSize="7" fill="white" className="font-bold font-sans">PMT</text>
          
          <text x="25" y="180" fontSize="9" fill="#5A6B77" className="font-semibold">Sperm aligned in single-file stream</text>
        </svg>
      )
    },
    {
      id: 3,
      number: "4",
      title: "Chromosome Sort",
      subtitle: "Deflection & Capture",
      icon: Split,
      color: "text-[#E8A598]",
      gradient: "from-[#E8A598] to-[#0D4F6C]",
      description: "Based on the fluorescent intensity detected, the cytometer's sorting processor determines if a cell is X-bearing or Y-bearing. The liquid stream is vibrated to form droplets. As a target droplet emerges, it is given an electric charge and deflected by high-voltage plates into a collection tube.",
      technicalMetrics: [
        { label: "Droplet Vibration", value: "85 kHz (85,000 cycles/sec)" },
        { label: "Deflection Voltage", value: "2,500 Volts" },
        { label: "Real-time decision delay", value: "Less than 12 microseconds" },
        { label: "Separation Rate", value: "9,000 cells / second" }
      ],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-48 max-h-48 text-[#E8A598] drop-shadow-sm">
          {/* Nozzle Tip */}
          <rect x="92" y="10" width="16" height="30" rx="2" fill="none" stroke="#E2E8ED" strokeWidth="2.5" />
          
          {/* Falling droplets */}
          <circle cx="100" cy="55" r="2.5" fill="#E2E8ED" />
          <circle cx="100" cy="75" r="2.5" fill="#E2E8ED" />
          
          {/* Charged deflector plates */}
          <rect x="50" y="80" width="10" height="50" rx="1.5" fill="#0D4F6C" />
          <text x="52" y="110" fontSize="12" fill="white" className="font-bold">+</text>
          
          <rect x="140" y="80" width="10" height="50" rx="1.5" fill="#5A6B77" />
          <text x="143" y="110" fontSize="12" fill="white" className="font-bold">-</text>
          
          {/* Droplets deflecting */}
          {/* X bearing (bright red/orange, positive charge deflected to negative plate) */}
          <circle cx="120" cy="110" r="3.5" fill="#E8A598" className="animate-pulse" />
          <circle cx="128" cy="135" r="3.5" fill="#E8A598" />
          
          {/* Y bearing (teal, negative charge deflected to positive plate) */}
          <circle cx="80" cy="110" r="3" fill="#1A7FA0" />
          <circle cx="72" cy="135" r="3" fill="#1A7FA0" />
          
          {/* Waste (neutral, falls straight) */}
          <circle cx="100" cy="110" r="2.5" fill="#E2E8ED" opacity="0.5" />
          <circle cx="100" cy="135" r="2.5" fill="#E2E8ED" opacity="0.5" />
          
          {/* Collection Tubes */}
          <path d="M55 150 h25 v30 a12.5 12.5 0 0 1 -25 0 Z" fill="none" stroke="#1A7FA0" strokeWidth="2" />
          <text x="61" y="192" fontSize="8" fill="#1A7FA0" className="font-bold">Y Tube</text>
          
          <path d="M120 150 h25 v30 a12.5 12.5 0 0 1 -25 0 Z" fill="none" stroke="#E8A598" strokeWidth="2" />
          <text x="126" y="192" fontSize="8" fill="#E8A598" className="font-bold">X Tube</text>
          
          <text x="83" y="192" fontSize="7" fill="#5A6B77" className="font-semibold">Waste</text>
        </svg>
      )
    },
    {
      id: 4,
      number: "5",
      title: "Preparation",
      subtitle: "Ready for Insemination or Freeze",
      icon: FlaskConical,
      color: "text-[#0D4F6C]",
      gradient: "from-[#0D4F6C] to-[#1A7FA0]",
      description: "The highly enriched sample of X-bearing (female expected sex at birth) or Y-bearing (male expected sex at birth) sperm is concentrated and resuspended in clinical media. The sample is prepared for immediate insemination (IUI), IVF/ICSI fertilization, or placed in cryogenic straws and frozen for shipment.",
      technicalMetrics: [
        { label: "Cryogenic Storage Temp", value: "-196°C (-320°F) Liquid Nitrogen" },
        { label: "Minimum Viable Count", value: ">500,000 motile cells (for ICSI)" },
        { label: "Enrichment Accuracy", value: "87% X-bearing / 74% Y-bearing" },
        { label: "Post-Sort Viability", value: ">85% motility recovery" }
      ],
      svg: (
        <svg viewBox="0 0 200 200" className="w-full h-48 max-h-48 text-[#0D4F6C] drop-shadow-sm">
          {/* Cryovial/Straw Container */}
          <rect x="85" y="30" width="30" height="120" rx="5" fill="none" stroke="#E2E8ED" strokeWidth="3" />
          <rect x="85" y="30" width="30" height="20" fill="#0D4F6C" rx="2" />
          
          {/* Label on Straw */}
          <rect x="90" y="65" width="20" height="35" fill="white" stroke="#E2E8ED" strokeWidth="1" />
          <line x1="93" y1="73" x2="107" y2="73" stroke="#5A6B77" strokeWidth="1.5" />
          <line x1="93" y1="83" x2="107" y2="83" stroke="#5A6B77" strokeWidth="1.5" />
          <line x1="93" y1="92" x2="107" y2="92" stroke="#5A6B77" strokeWidth="1.5" />
          
          {/* Liquid content and sperm cells inside */}
          <path d="M87 110 h26 v35 a3 3 0 0 1 -3 3 h-20 a3 3 0 0 1 -3 -3 Z" fill="#1A7FA0" fillOpacity="0.2" />
          <circle cx="95" cy="120" r="1.5" fill="#0D4F6C" />
          <circle cx="105" cy="125" r="1.5" fill="#0D4F6C" />
          <circle cx="98" cy="135" r="1.5" fill="#0D4F6C" />
          
          {/* Cryogenic vapors */}
          <path d="M60 40 Q70 30 65 20" fill="none" stroke="#8A2BE2" strokeWidth="1" opacity="0.3" className="animate-pulse" />
          <path d="M140 40 Q130 30 135 20" fill="none" stroke="#8A2BE2" strokeWidth="1" opacity="0.3" className="animate-pulse" />
          <path d="M55 70 Q65 60 60 50" fill="none" stroke="#8A2BE2" strokeWidth="1" opacity="0.2" />
          <path d="M145 70 Q135 60 140 50" fill="none" stroke="#8A2BE2" strokeWidth="1" opacity="0.2" />
          
          {/* Badge */}
          <rect x="35" y="160" width="130" height="20" rx="10" fill="#E8A598" fillOpacity="0.2" />
          <text x="45" y="173" fontSize="8.5" fill="#0D4F6C" className="font-bold">FDA/EU Clinical Standard Compliant</text>
        </svg>
      )
    }
  ];

  const ActiveIcon = steps[activeStep].icon;

  return (
    <div className="bg-[#F8F9FB] py-16 md:py-24 font-sans text-[#1C2B35]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Laboratory Procedures & Mechanics"
          title="The MicroSort® Process"
          subtitle="An interactive, detailed walk-through of the physical, chemical, and biological steps used to sort X-bearing and Y-bearing chromosomes."
        />

        {/* Informational introductory card */}
        <div className="bg-white border border-[#E2E8ED] rounded-3xl p-6 sm:p-10 shadow-sm mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D4F6C]/5 rounded-full blur-2xl"></div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-display text-[#0D4F6C] mb-3 font-normal">
              Genetic Material Disparity
            </h3>
            <p className="text-sm text-[#4F5E6A] leading-relaxed mb-4">
              MicroSort® technology operates by measuring the specific volume of genetic material. A sperm cell containing an X chromosome (female) has approximately <strong className="text-[#0D4F6C]">2.8% more DNA material</strong> than one containing a Y chromosome (male).
            </p>
            <p className="text-sm text-[#4F5E6A] leading-relaxed">
              To isolate this small difference, the laboratory requires between <strong className="text-[#0D4F6C]">6 to 7 hours</strong> of active clinical workflow under rigorous regulatory controls.
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-center bg-[#0D4F6C]/5 p-6 rounded-2xl border border-[#E2E8ED] w-full md:w-auto">
            <div className="text-center">
              <Clock size={36} className="text-[#1A7FA0] mx-auto mb-2.5 stroke-[1.75]" />
              <div className="text-2xl font-display text-[#0D4F6C] font-normal">6 - 7 Hours</div>
              <div className="text-[10px] text-[#5A6B77] font-bold uppercase tracking-wider mt-0.5">Laboratory Prep Time</div>
            </div>
          </div>
        </div>

        {/* Interactive Interactive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Step Stepper Navigation (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3 w-full">
            <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-1 px-1">
              Sorting Steps
            </label>
            
            {/* Horizontal Scroll on Mobile, Vertical Stack on Desktop */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = activeStep === idx;
                
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`snap-center shrink-0 w-[260px] sm:w-[300px] lg:w-full p-4 rounded-2xl border text-left transition-all ${
                      isActive 
                        ? 'bg-white border-[#0D4F6C] shadow-md ring-1 ring-[#0D4F6C]/10' 
                        : 'bg-white/60 border-[#E2E8ED] hover:bg-white hover:border-[#BFCED9]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Step Number & Bubble */}
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isActive ? 'bg-[#0D4F6C] text-white' : 'bg-[#0D4F6C]/5 text-[#0D4F6C]'
                      }`}>
                        {step.number}
                      </div>

                      {/* Title Info */}
                      <div className="flex-grow min-w-0">
                        <div className="text-[10px] uppercase font-bold tracking-widest text-[#5A6B77] leading-none mb-1">
                          {step.subtitle}
                        </div>
                        <h4 className="text-sm font-semibold text-[#0D4F6C] truncate">
                          {step.title}
                        </h4>
                      </div>

                      {/* Icon status */}
                      <div className={`shrink-0 ${isActive ? step.color : 'text-muted'}`}>
                        <StepIcon size={16} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Display Panel (col-span-8) */}
          <div className="lg:col-span-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white border border-[#E2E8ED] rounded-3xl shadow-md overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${steps[activeStep].gradient} p-6 sm:p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <ActiveIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                        Phase {steps[activeStep].number} of 5
                      </span>
                      <h3 className="text-2xl font-display font-semibold text-white mt-0.5">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Schematic Drawing column (md:col-span-5) */}
                  <div className="md:col-span-5 flex items-center justify-center bg-[#F8F9FB] rounded-2xl p-4 border border-[#E2E8ED]">
                    {steps[activeStep].svg}
                  </div>

                  {/* Text descriptions and metrics column (md:col-span-7) */}
                  <div className="md:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <Badge variant="primary" className="mb-3 uppercase tracking-wider text-[10px] font-sans">
                        {steps[activeStep].subtitle}
                      </Badge>
                      <p className="text-sm text-[#4F5E6A] leading-relaxed mb-6 font-sans">
                        {steps[activeStep].description}
                      </p>
                    </div>

                    {/* Scientific / Lab Parameters Table */}
                    <div className="border-t border-[#E2E8ED] pt-6">
                      <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#0D4F6C] mb-3">
                        Scientific Parameters & Lab Values
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {steps[activeStep].technicalMetrics.map((metric, mIdx) => (
                          <div key={mIdx} className="flex justify-between items-center py-1.5 border-b border-[#E2E8ED]/40 text-xs">
                            <span className="text-[#5A6B77]">{metric.label}</span>
                            <span className="font-bold text-[#0D4F6C] text-right ml-2">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer buttons / navigation inside panel */}
                <div className="bg-[#F8F9FB] border-t border-[#E2E8ED] px-6 py-4 flex justify-between items-center">
                  <span className="text-xs text-muted font-sans font-semibold">
                    MicroSort® Clinical Protocol
                  </span>
                  
                  <div className="flex gap-2">
                    {activeStep > 0 && (
                      <button
                        onClick={() => setActiveStep(activeStep - 1)}
                        className="text-xs font-semibold text-[#0D4F6C] hover:bg-[#0D4F6C]/5 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Back
                      </button>
                    )}
                    {activeStep < 4 ? (
                      <button
                        onClick={() => setActiveStep(activeStep + 1)}
                        className="text-xs font-bold bg-[#0D4F6C] text-white hover:bg-[#0E5B82] px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <span>Next Step</span>
                        <ChevronRight size={14} />
                      </button>
                    ) : (
                      <Link
                        to="/planning"
                        className="text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <Check size={14} />
                        <span>Schedule Sort</span>
                      </Link>
                    )}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Assisted Reproductive Technology Compatibility */}
        <div className="mt-16 p-6 sm:p-8 border border-[#0D4F6C]/10 bg-white rounded-3xl shadow-sm text-center max-w-3xl mx-auto">
          <h4 className="text-lg font-display text-[#0D4F6C] mb-2 font-normal">
            Assisted Reproductive Technology (ART) Compatibility
          </h4>
          <p className="text-[#4F5E6A] text-xs leading-relaxed font-sans max-w-2xl mx-auto">
            Once sorting yields an enriched sample, it can be combined with Intrauterine Insemination (IUI), In Vitro Fertilization (IVF), and Intracytoplasmic Sperm Injection (ICSI). Our clinical coordinators coordinate logistics directly with your partner clinic or shipping facilities.
          </p>
        </div>

      </div>
    </div>
  );
}
