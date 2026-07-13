import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import familyGirlBoyImg from '../../assets/happy_family_girl_boy.png';

// DNAAnimation component removed to align with baby imagery and clinical goals

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#082F42] via-[#0D4F6C] to-[#1A7FA0] overflow-hidden pt-16 pb-28 md:pt-24 md:pb-36">
      {/* Background SVG Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Curved Divider Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-bg clip-ellipse"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pb-8 lg:pb-12">
        {/* Left Side Content */}
        <div className="lg:col-span-5 flex flex-col text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent font-sans text-xs uppercase tracking-widest font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
              Scientifically Proven Preconception Genetic Disease Prevention and Family Balancing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white font-display leading-[1.1] font-normal mb-6"
          >
            Increase your chances of conceiving a boy or a girl using MicroSort<span className="text-xl align-super text-accent-light font-bold">®</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed font-sans mb-10 max-w-xl mx-auto lg:mx-0"
          >
            MicroSort<span className="text-xs align-super font-bold">®</span> is a preconception method that separates X-bearing (female expected sex at birth) and Y-bearing (male expected sex at birth) sperm, increasing the probability of your preferred sex.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button variant="secondary" size="lg" href="/contact" className="group text-primary hover:bg-white text-sm sm:text-base">
              <span>Check Eligibility & Request a Consultation</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" href="/process" className="border-white/40 text-white hover:bg-white/10 hover:border-white">
              How MicroSort Works
            </Button>
          </motion.div>
        </div>

        {/* Right Side Family Image Illustration (Single-Image Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-7 w-full flex items-center justify-center lg:justify-end relative mt-10 lg:mt-0"
        >
          {/* Subtle surrounding light glow */}
          <div className="absolute w-72 h-72 bg-accent/20 rounded-full blur-[80px] pointer-events-none animate-float"></div>
          
          {/* Family Card */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-2 group hover:-translate-y-2 transition-transform duration-300">
            <img 
              src={familyGirlBoyImg} 
              alt="Happy family with a little girl and a big boy" 
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082F42]/85 via-transparent to-transparent rounded-2xl"></div>
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
              <span className="text-[10px] font-bold text-white bg-accent/90 py-1.5 px-3 rounded-full uppercase tracking-wider font-sans shadow-md inline-block">
                Family Balance
              </span>
              <p className="text-white text-sm font-sans font-semibold mt-1 drop-shadow-md">
                Complete your family with gender selection options
              </p>
            </div>
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
