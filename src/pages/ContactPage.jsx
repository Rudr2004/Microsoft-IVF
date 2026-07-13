import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { Mail, Clock, ShieldCheck, Heart, Send, CheckCircle2, Lock, Loader2, AlertCircle } from 'lucide-react';
import Badge from '../components/ui/Badge';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedLab = searchParams.get('lab') || 'Mexico';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Mexico',
    lab: preselectedLab,
    goal: 'Family Balancing',
    treatment: 'IVF with PGT-A',
    timeline: 'Within 3 months',
    message: '',
    honeypot: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Update lab if URL parameter changes
  useEffect(() => {
    if (searchParams.get('lab')) {
      setFormData(prev => ({ ...prev, lab: searchParams.get('lab') }));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          firstName,
          lastName,
          country: formData.country,
          phone: formData.phone,
          lab: formData.lab,
          goal: formData.goal,
          treatment: formData.treatment,
          timeline: formData.timeline,
          message: formData.message,
          honeypot: formData.honeypot
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const countries = [
    "Mexico", "North Cyprus", "Malaysia", "United States", "Canada", "United Kingdom", "Australia", "Other"
  ];

  const labs = ["Mexico", "North Cyprus", "Malaysia"];
  
  const goals = [
    "Family Balancing (Gender Selection)", 
    "Genetic Disease Prevention",
    "I'm not sure yet"
  ];

  const treatments = [
    "IVF with PGT-A",
    "IUI (Intrauterine Insemination)",
    "Just MicroSort sperm sorting",
    "I need guidance on treatment options"
  ];

  const timelines = [
    "Immediately (Next cycle)",
    "Within 3 months",
    "Within 6 months",
    "Planning for next year"
  ];

  return (
    <div className="bg-bg py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Reach Our Teams"
          title="Confirm Eligibility"
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
            
            {/* New Trust Badges as requested */}
            <div className="bg-surface border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <h4 className="text-sm font-display text-primary mb-4 font-semibold">
                What to expect
              </h4>
              <ul className="space-y-3 text-sm text-muted font-sans">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <span>100% Private and confidential inquiry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <span>No medical documents required to start</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <span>Direct contact with Authorized MicroSort laboratories only</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-border rounded-3xl p-6 sm:p-10 shadow-sm relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-display text-primary mb-1 font-normal">
                      Request a Private Consultation
                    </h3>
                    <p className="text-muted text-xs font-sans mb-6">
                      Complete this form to have a coordinator review your situation and check your eligibility. 
                    </p>

                    {error && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl flex items-start gap-3 text-left text-red-900 text-sm leading-relaxed mb-6">
                        <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                        <div>{error}</div>
                      </div>
                    )}

                    {/* Hidden Honeypot Field */}
                    <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
                      <label htmlFor="form-honeypot">Leave this field empty</label>
                      <input
                        id="form-honeypot"
                        type="text"
                        tabIndex="-1"
                        autoComplete="off"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-name" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          Full Name
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
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
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@domain.com"
                          className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone / WhatsApp */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-phone" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="form-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                        />
                      </div>

                      {/* Country Selector */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-country" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          Country of Residence
                        </label>
                        <div className="relative">
                          <select
                            id="form-country"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans appearance-none"
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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Preferred Lab */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-lab" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          Preferred Lab
                        </label>
                        <div className="relative">
                          <select
                            id="form-lab"
                            value={formData.lab}
                            onChange={(e) => setFormData({ ...formData, lab: e.target.value })}
                            className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans appearance-none"
                          >
                            {labs.map((l) => (
                              <option key={l} value={l}>{l}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primary">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Goal */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-goal" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          Primary Goal
                        </label>
                        <div className="relative">
                          <select
                            id="form-goal"
                            value={formData.goal}
                            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                            className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans appearance-none"
                          >
                            {goals.map((g) => (
                              <option key={g} value={g}>{g}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primary">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Treatment Type */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-treatment" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          Treatment Type
                        </label>
                        <div className="relative">
                          <select
                            id="form-treatment"
                            value={formData.treatment}
                            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                            className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans appearance-none"
                          >
                            {treatments.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primary">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="form-timeline" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                          Timeline
                        </label>
                        <div className="relative">
                          <select
                            id="form-timeline"
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans appearance-none"
                          >
                            {timelines.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-primary">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-message" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                        Message / Additional details
                      </label>
                      <textarea
                        id="form-message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Any specific questions or clinical details you'd like us to know?"
                        className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans resize-none"
                      />
                    </div>
                    {/* Inline Trust Messages */}
                    <div className="flex flex-col gap-2 mt-4 mb-2">
                      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 text-[11px] text-muted font-sans font-medium justify-center items-center flex-wrap">
                        <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-accent"/> Private inquiry</span>
                        <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-accent"/> No medical documents required to start</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-accent"/> Coordinator response within 24 business hours</span>
                        <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-accent"/> Authorized MicroSort laboratories only</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#1A7FA0] hover:bg-[#0D4F6C] text-white font-sans font-semibold text-sm rounded-full py-3.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Checking Eligibility...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Check Eligibility & Send Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-6">
                      <CheckCircle2 size={36} className="text-[#0D4F6C]" />
                    </div>
                    <h3 className="text-2xl font-display text-primary mb-3 font-normal">
                      Inquiry Received
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-sm mb-8 font-sans">
                      Thank you for contacting us. A MicroSort® coordinator will review your eligibility and reach out to you within 24 business hours.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Submit Another Inquiry
                    </Button>
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

