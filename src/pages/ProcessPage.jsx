import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import { Layers, Droplets, Zap, Split, FlaskConical, Clock, Compass } from 'lucide-react';
import Badge from '../components/ui/Badge';

const steps = [
  {
    number: "01",
    title: "Sample Washing",
    subtitle: "Purification & Motility Sorting",
    description: "The semen sample is washed through centrifugation density gradients to remove seminal liquid, debris, and non-motile cells. Only highly active, motile sperm are collected for the sorting phase.",
    icon: Layers,
    color: "bg-primary/5 text-primary"
  },
  {
    number: "02",
    title: "Fluorescent Staining",
    subtitle: "DNA Bonding Stains",
    description: "The purified sample is stained with a special, non-harmful fluorescent material that binds to the DNA inside each cell. Because X chromosomes have 2.8% more DNA than Y chromosomes, X-bearing sperm absorb more stain.",
    icon: Droplets,
    color: "bg-accent/10 text-primary"
  },
  {
    number: "03",
    title: "Flow Cytometry Analysis",
    subtitle: "High-Speed Laser Interrogation",
    description: "Stained cells are funneled single-file through a high-precision flow cytometer. Each cell passes through a laser, causing the fluorescent dye to illuminate based on the amount of DNA contained in the sperm.",
    icon: Zap,
    color: "bg-[#98D6E8]/20 text-primary"
  },
  {
    number: "04",
    title: "X/Y Chromosome Identification",
    subtitle: "Digital sorting and deflection",
    description: "Advanced digital sorting software detects differences in fluorescence intensity. Sperm carrying the X chromosome shine brighter (more DNA/stain) and are electrically deflected into a collection tube.",
    icon: Split,
    color: "bg-accent/15 text-primary"
  },
  {
    number: "05",
    title: "Enriched Sample Prepared",
    subtitle: "Ready for Cryopreservation or Insemination",
    description: "The enriched sperm sample containing the preferred X-bearing or Y-bearing sperm is finalized. The sample is prepared for immediate reproductive use (IUI/IVF/ICSI) or cryopreserved (frozen) for global shipment.",
    icon: FlaskConical,
    color: "bg-primary-dark/10 text-primary-dark"
  }
];

export default function ProcessPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-bg py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Page Title & Intro */}
        <SectionHeader
          eyebrow="The Technology"
          title="The MicroSort® Process"
          subtitle="A scientifically proven preconception sperm sorting technique that utilizes high-speed flow cytometry to separate X and Y chromosome sperm cells."
        />

        {/* Informational introductory card */}
        <div className="bg-surface border border-border rounded-3xl p-6 sm:p-10 shadow-sm mb-16 md:mb-24 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-display text-primary mb-3 font-normal">
              Chromosome Genetic Variance
            </h3>
            <p className="text-sm text-muted leading-relaxed font-sans mb-4">
              MicroSort® is a sperm separation method based on the differences in the amount of genetic material. Sperm carrying an X chromosome has approximately <strong className="text-primary">2.8% more DNA material</strong> than sperm carrying a Y chromosome.
            </p>
            <p className="text-sm text-muted leading-relaxed font-sans">
              The entire processing workflow requires between <strong className="text-primary">6 to 7 hours</strong> of dedicated laboratory processing. Samples can be cryopreserved for future IVF cycles or shipped globally.
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-center bg-primary/5 p-6 rounded-2xl border border-border w-full md:w-auto">
            <div className="text-center">
              <Clock size={36} className="text-accent mx-auto mb-2.5 stroke-[1.5]" />
              <div className="text-2xl font-display text-primary font-normal">6 - 7 Hrs</div>
              <div className="text-[10px] text-muted font-sans font-bold uppercase tracking-wider mt-0.5">Average Sorting Time</div>
            </div>
          </div>
        </div>

        {/* Timeline Timeline Flow */}
        <div className="relative">
          {/* Central Vertical Connector Line (desktop) */}
          <div className="absolute left-[39px] md:left-1/2 top-10 bottom-10 w-[2px] bg-border/60 -translate-x-1/2 hidden md:block"></div>
          {/* Left Vertical Line (mobile) */}
          <div className="absolute left-[39px] top-10 bottom-10 w-[2px] bg-border/60 -translate-x-1/2 block md:hidden"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-16"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={step.number}
                  variants={itemVariants}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  {/* Step Bubble Node */}
                  <div className="absolute left-[39px] md:left-1/2 top-4 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-full border-2 border-surface flex items-center justify-center font-bold text-sm bg-primary text-white shadow-md`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Left Side Content (Desktop) */}
                  <div className={`md:col-span-5 ${isEven ? 'md:order-1 md:text-right' : 'md:order-3 md:text-left'} pl-16 md:pl-0`}>
                    <div className="bg-surface border border-border p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-4 ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
                        <Icon size={22} className="stroke-[1.5]" />
                      </div>
                      <Badge variant="primary" className="mb-2">{step.subtitle}</Badge>
                      <h4 className="text-xl font-display text-primary mb-3 font-normal">{step.title}</h4>
                      <p className="text-muted text-xs leading-relaxed font-sans">{step.description}</p>
                    </div>
                  </div>

                  {/* Empty Spacer Column (Desktop) */}
                  <div className="md:col-span-2 md:order-2 hidden md:block"></div>

                  {/* Empty Alternating Column (Desktop) */}
                  <div className={`md:col-span-5 ${isEven ? 'md:order-3' : 'md:order-1'} hidden md:block`}></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Lab note / warning footer */}
        <div className="mt-16 md:mt-24 p-6 sm:p-8 border border-accent/25 bg-accent/5 rounded-3xl text-center max-w-3xl mx-auto">
          <h4 className="text-lg font-display text-primary mb-2 font-normal">
            Assisted Reproductive Technology Compatibility
          </h4>
          <p className="text-muted text-xs leading-relaxed font-sans max-w-2xl mx-auto">
            Once sorting yields an enriched sample, it can be combined with Intrauterine Insemination (IUI), In Vitro Fertilization (IVF), and Intracytoplasmic Sperm Injection (ICSI). Our patient coordinators coordinate logistics directly with your partner clinic.
          </p>
        </div>

      </div>
    </div>
  );
}
