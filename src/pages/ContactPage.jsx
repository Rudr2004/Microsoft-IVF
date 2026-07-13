import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { Mail, Clock, ShieldCheck, Heart, Send, CheckCircle2, Lock, Loader2, AlertCircle } from 'lucide-react';
import Badge from '../components/ui/Badge';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'Mexico',
    message: '',
    honeypot: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-display text-primary mb-2 font-normal">
                      Send an Inquiry
                    </h3>

                    {error && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl flex items-start gap-3 text-left text-red-900 text-sm leading-relaxed mb-6">
                        <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                        <div>{error}</div>
                      </div>
                    )}

                    <p className="text-muted text-xs font-sans mb-6">
                      Complete the form below to prepare your inquiry before contacting us. Please do not share medical test reports directly through this form.
                    </p>

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
                          placeholder="Your name"
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
                          placeholder="your.name@domain.com"
                          className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
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

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-message" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                        Message / Inquiry details
                      </label>
                      <textarea
                        id="form-message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write details of your inquiry or scheduling questions..."
                        className="w-full bg-bg border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-[#1A7FA0] hover:bg-[#0D4F6C] text-white font-sans font-semibold text-sm rounded-full py-3.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Inquiry</span>
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
                      Thank You!
                    </h3>
                    <p className="text-muted text-sm leading-relaxed max-w-sm mb-8 font-sans">
                      Your message has been successfully sent. Our coordination team will review your inquiry and get back to you within 24 business hours.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
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

