import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import { Check, ClipboardList, AlertTriangle, Thermometer, UserCheck, ShieldAlert, Heart, Calendar } from 'lucide-react';
import Badge from '../components/ui/Badge';

export default function RequirementsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Guidelines & Preparation"
          title="Requirements and Recommendations"
          subtitle="Ensure clinical compliance before scheduling your procedure. Carefully read through eligibility criteria, required diagnostic screenings, and day-of guidelines."
        />

        {/* Dual Checklist Grid (Eligibility vs Testing) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Card 1: Eligibility */}
          <motion.div 
            variants={itemVariants}
            className="bg-surface border border-border rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                  <UserCheck size={20} className="stroke-[1.75]" />
                </div>
                <h3 className="text-xl font-display text-primary font-normal">
                  Eligibility Criteria
                </h3>
              </div>
              
              <p className="text-muted text-sm leading-relaxed mb-6 font-sans">
                MicroSort® is available for couples who are looking to balance their families or prevent certain genetic diseases.
              </p>

              <div className="space-y-4">
                <div className="bg-bg border border-border/50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">Family Balancing</h4>
                    <p className="text-xs text-muted leading-relaxed mt-0.5">
                      Couples must have at least one child and use the sperm sorting procedure for the underrepresented gender in the family.
                    </p>
                  </div>
                </div>

                <div className="bg-bg border border-border/50 rounded-2xl p-4 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">Prevention of Genetic Disease</h4>
                    <p className="text-xs text-muted leading-relaxed mt-0.5">
                      Couples must be a known carrier of an X-linked or X-limited disorder (e.g., Hemophilia, Duchenne Muscular Dystrophy).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border text-xs text-muted font-sans italic">
              * Verification of medical records or birth certificates is required during consultation.
            </div>
          </motion.div>

          {/* Card 2: Required Tests */}
          <motion.div 
            variants={itemVariants}
            className="bg-surface border border-border rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/15 text-primary flex items-center justify-center">
                  <ShieldAlert size={20} className="stroke-[1.75] text-accent" />
                </div>
                <h3 className="text-xl font-display text-primary font-normal">
                  Required Infectious Disease Testing
                </h3>
              </div>
              
              <p className="text-muted text-sm leading-relaxed mb-6 font-sans">
                MicroSort® laboratories are not equipped to process infectious samples. All patients must present negative testing results for:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "HIV I and II (Negative)",
                  "Hepatitis B Surface Antigen",
                  "Hepatitis C Antibody",
                  "VDRL (Syphilis screening)"
                ].map((test, idx) => (
                  <div key={idx} className="bg-bg border border-border/50 rounded-xl p-3 flex items-center gap-2.5">
                    <span className="text-xs text-accent">❌</span>
                    <span className="text-xs font-bold text-primary font-sans">{test}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted leading-relaxed font-sans mt-6">
                The mentioned testing can be performed in any certified lab as long as they were performed no more than **six months** prior to the date of the procedure.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-border bg-[#F5CFC9]/10 p-4 rounded-xl text-xs text-[#0D4F6C] font-medium leading-relaxed">
              <strong>Note:</strong> In some cases, testing will have to be performed on site. Your patient coordinator will provide additional information in these types of cases.
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Details (Sperm Analysis & Day-of Tips) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sperm Analysis (2/3 width) */}
          <div className="lg:col-span-2 bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-display text-primary font-normal mb-4 flex items-center gap-2">
                <ClipboardList size={20} className="text-primary-light" />
                Semen Analysis Requirements
              </h3>
              <p className="text-sm text-muted leading-relaxed font-sans mb-4">
                The MicroSort® procedure is a demanding process requiring a high number of motile sperm cells depending on the assisted reproductive technique that will follow the sorting procedure.
              </p>
              <p className="text-sm text-muted leading-relaxed font-sans mb-6">
                A sperm analysis that details the sample characteristics will be required so our staff can estimate the expected results and the different measures that can be considered based on each individual case.
              </p>
            </div>
            
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-xl flex items-start gap-3">
              <AlertTriangle className="text-primary shrink-0 mt-0.5" size={18} />
              <div className="text-xs text-primary leading-relaxed font-medium">
                <strong>Cancellation Policy:</strong> Semen analysis is not a requirement that avoids the option to perform the procedure. However, if the procedure is canceled on the day of sorting due to too few sperm for reasonable use, the cost will be <strong>40 percent of the total cost</strong> of the procedure per cancellation.
              </div>
            </div>
          </div>

          {/* Day-of Recommendations (1/3 width) */}
          <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-display text-primary font-normal mb-4 flex items-center gap-2">
                <Thermometer size={20} className="text-accent" />
                Day-of Recommendations
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs text-muted leading-relaxed font-sans">
                  <span className="text-accent shrink-0 mt-0.5">•</span>
                  <span><strong>Abstinence:</strong> 2 to 3 days required prior to deposit.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-muted leading-relaxed font-sans">
                  <span className="text-accent shrink-0 mt-0.5">•</span>
                  <span><strong>No alcohol:</strong> Avoid completely over the abstinence window.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-muted leading-relaxed font-sans">
                  <span className="text-accent shrink-0 mt-0.5">•</span>
                  <span><strong>No high heat:</strong> Avoid hot tubs, steam baths, vapor rooms, heavy cycling, etc.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 border-t border-border pt-4 text-[11px] text-muted leading-relaxed italic">
              * Patients that have received hepatitis vaccines should get the appropriate tests to avoid false positives.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
