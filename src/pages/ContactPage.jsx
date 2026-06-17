import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { Phone, Mail, Clock, ShieldCheck, Heart, Send, CheckCircle2, Lock } from 'lucide-react';
import Badge from '../components/ui/Badge';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'Mexico',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
  };

  const countries = [
    "Mexico", "North Cyprus", "Malaysia"
  ];

  return (
    <div className="bg-bg py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Reach Our Teams"
          title="Contact Us"
          subtitle="Speak with a MicroSort® specialist today. All inquiries are handled with strict clinical privacy and confidentiality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Left Column: Direct info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-display text-primary mb-6 font-normal">
                International Coordination Office
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Phone Inquiry</span>
                    <a href="tel:7036217171" className="text-base font-sans font-bold text-primary hover:underline mt-0.5 block">
                      (703) 621-7171
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Email Inquiries</span>
                    <a href="mailto:info@microsort.com" className="text-base font-sans font-medium text-primary hover:underline mt-0.5 block">
                      info@microsort.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Business Hours</span>
                    <p className="text-sm font-sans font-medium text-primary mt-0.5 leading-relaxed">
                      10:00 – 15:00 Central Time (GMT -5:00)
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Notice */}
              <div className="mt-8 pt-6 border-t border-border text-xs text-muted leading-relaxed font-sans">
                Our coordination staff responds to emails and inquiries within **24 business hours**. For immediate urgent clinical scheduling, please call the number above.
              </div>
            </div>

            {/* Privacy Standards Banner */}
            <div className="bg-[#0D4F6C] text-white rounded-3xl p-6 shadow-md flex gap-4 items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
              <ShieldCheck size={24} className="text-accent shrink-0 mt-0.5 stroke-[1.5]" />
              <div>
                <h4 className="text-sm font-sans font-bold text-white mb-1">
                  Clinical Privacy Standards
                </h4>
                <p className="text-white/80 text-xs leading-relaxed font-sans">
                  We adhere strictly to international patient privacy standards. Your personal and clinical reproductive records are processed in accordance with clinical encryption and compliance policies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-border rounded-3xl p-6 sm:p-10 shadow-sm relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-6 opacity-80">
                    <h3 className="text-xl font-display text-primary mb-2 font-normal">
                      Send an Inquiry
                    </h3>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-left text-amber-900 text-xs leading-relaxed mb-6">
                      <strong>Online Form Submissions Offline:</strong> To protect patient medical privacy and ensure compliance with healthcare communications standards, online contact submissions are temporarily disabled. Please submit all inquiries directly via the international coordination office email or phone listed on the left.
                    </div>

                    <p className="text-muted text-xs font-sans mb-6">
                      Complete the form below to prepare your inquiry before contacting us. Please do not share medical test reports directly through this form.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-name" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          Full Name
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          disabled
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name (Disabled)"
                          className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans cursor-not-allowed"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-email" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          Email Address
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          disabled
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.name@domain.com (Disabled)"
                          className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans cursor-not-allowed"
                        />
                      </div>
                    </div>

                    {/* Country Selector */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-country" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                        Country of Residence
                      </label>
                      <div className="relative">
                        <select
                          id="form-country"
                          disabled
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans appearance-none cursor-not-allowed"
                        >
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primary">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-message" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                        Message / Inquiry details
                      </label>
                      <textarea
                        id="form-message"
                        disabled
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write details of your inquiry or scheduling questions... (Disabled)"
                        className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans resize-none cursor-not-allowed"
                      />
                    </div>

                    {/* Locked Status Indicator */}
                    <div className="w-full flex items-center justify-center gap-2 bg-[#F1F3F5] text-[#8A99A8] font-sans font-semibold text-sm rounded-full py-3.5 border border-[#E2E8ED] select-none cursor-not-allowed">
                      <Lock size={14} className="text-[#8A99A8]" />
                      <span>Submit Inquiry</span>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-6">
                      <CheckCircle2 size={36} className="text-[#0D4F6C]" />
                    </div>
                    <h3 className="text-2xl font-display text-primary mb-3 font-normal">
                      Thank You!
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-sm mb-8 font-sans">
                      Your message has been sent.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
