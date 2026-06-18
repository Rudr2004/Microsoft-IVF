import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { Calendar, Stethoscope, Clock, ShieldCheck, MapPin, Send, Compass } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: "1. Arrange Consultation",
    description: "Begin by scheduling an initial consultation with an authorized MicroSort® laboratory coordinator or a participating IVF physician near you. We will review medical histories and establish goals."
  },
  {
    icon: Stethoscope,
    title: "2. Preliminary Testing",
    description: "Complete the semen analysis and required infectious panels (HIV, Hep B/C, VDRL) at any certified laboratory within six months of your planned procedure date."
  },
  {
    icon: Clock,
    title: "3. Schedule Specimen Sort",
    description: "Coordinate with your patient coordinator to schedule your specimen sort date based on your IVF cycle timeline or partner clinic transfer plans."
  },
  {
    icon: Compass,
    title: "4. Travel & Logistics",
    description: "Coordinate travel to your desired sorting location. Alternatively, consult with your local clinic about sperm cryopreservation and global transport shipping."
  }
];

export default function PlanningPage() {
  return (
    <div className="bg-bg py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Journey Roadmap"
          title="Planning Your Visit"
          subtitle="A structured overview on how to prepare, coordinate, and schedule your MicroSort® procedure with laboratories and fertility experts."
        />

        {/* 4-Step grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-surface border border-border p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                  <Icon size={22} className="stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-display text-primary mb-2 font-normal">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Split call to action details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#082F42] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="lg:col-span-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">
              Patient Coordinator Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-display text-white mb-4 font-normal">
              Need assistance arranging your sort?
            </h3>
            <p className="text-white/75 text-sm leading-relaxed font-sans max-w-xl">
              Our professional patient coordinators speak English and Spanish and can guide you through local clinic regulations, doctor referrals, lodging options, and document preparation.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 w-full justify-end">
            <Button variant="secondary" size="md" href="/contact" className="w-full text-center">
              Contact Coordinator
            </Button>
            <Button variant="outline" size="md" href="/locations" className="w-full text-center border-white/30 text-white hover:bg-white/10">
              Browse Lab Directory
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
