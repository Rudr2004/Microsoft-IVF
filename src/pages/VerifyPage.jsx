import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { ShieldCheck, Send, CheckCircle2, Lock, Loader2, FileSearch } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function VerifyPage() {
  const [formData, setFormData] = useState({
    dateOfSort: '',
    location: '',
    patientInitials: '',
    email: '',
    notes: ''
  });
  
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [error, setError] = useState('');

  const locations = [
    'Mexico', 'North Cyprus', 'Malaysia', 'Japan', 'Cambodia', 'Thailand', 'Nigeria'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA verification.');
      return;
    }
    setError('');
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.patientInitials.toUpperCase() || 'Verification',
          listId: 11,
          recaptchaToken,
          customAttributes: {
            DateofSort: formData.dateOfSort,
            Sortlocation: formData.location,
            PatientsLastNameFirst3Letters: formData.patientInitials.toUpperCase(),
            Contactemailaddress: formData.email,
            NotesOptional: formData.notes
          }
        })
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit verification request');
      }
      
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'An error occurred. Please try again.');
    }
  };

  const handleInitialsChange = (e) => {
    const val = e.target.value.replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 3);
    setFormData({ ...formData, patientInitials: val });
  };

  return (
    <div className="bg-bg py-16 md:py-24 font-sans text-[#1C2B35]">
      <div className="max-w-2xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Results Verification Portal"
          title="Verify Your Sort"
          subtitle="Submit your laboratory details below to securely request an official verification of your sorting records from our clinical coordination team."
        />

        <div className="bg-white border border-[#E2E8ED] rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D4F6C]/5 rounded-full blur-2xl pointer-events-none"></div>

          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-display text-[#0D4F6C] font-normal mb-3">
                Verification Request Sent
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-sm mb-8 font-sans">
                Your request has been securely routed to our records team. A coordinator will review the details and respond to the provided email address within 24-48 business hours.
              </p>
              <Button variant="outline" onClick={() => setStatus('idle')}>
                Submit Another Request
              </Button>
            </div>
          ) : (
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#E2E8ED]">
                <div className="w-10 h-10 rounded-xl bg-[#F8F9FB] border border-[#E2E8ED] text-[#1A7FA0] flex items-center justify-center shrink-0">
                  <FileSearch size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0D4F6C]">Secure Intake Form</h3>
                  <p className="text-[11px] text-muted">All submissions are reviewed manually for compliance.</p>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl mb-6 font-sans border border-red-100 flex items-start gap-3">
                  <ShieldCheck size={18} className="shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Date of Sort */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-date" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                      Date of Sort <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form-date"
                      type="date"
                      required
                      value={formData.dateOfSort}
                      onChange={(e) => setFormData({ ...formData, dateOfSort: e.target.value })}
                      className="w-full bg-[#F8F9FB] border border-[#E2E8ED] text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                    />
                  </div>

                  {/* Sort Location */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-location" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                      Sort Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="form-location"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#F8F9FB] border border-[#E2E8ED] text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans appearance-none"
                      >
                        <option value="" disabled>Select a location</option>
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>{loc}</option>
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
                  {/* Initials */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-initials" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                      Patient's Last Name (First 3 Letters) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form-initials"
                      type="text"
                      required
                      maxLength={3}
                      placeholder="e.g. SMI"
                      value={formData.patientInitials}
                      onChange={handleInitialsChange}
                      className="w-full bg-[#F8F9FB] border border-[#E2E8ED] text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans uppercase placeholder:normal-case"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-email" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                      Contact Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="Where should we send the response?"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F8F9FB] border border-[#E2E8ED] text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-notes" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    Notes (Optional)
                  </label>
                  <textarea
                    id="form-notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any additional context for our records team?"
                    className="w-full bg-[#F8F9FB] border border-[#E2E8ED] text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2 mt-4 mb-2">
                  <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2 text-[11px] text-muted font-sans font-medium justify-center items-center flex-wrap">
                    <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-600"/> HIPAA Compliant Intake</span>
                    <span className="flex items-center gap-1.5"><Lock size={14} className="text-emerald-600"/> Secure Transmission</span>
                  </div>
                </div>

                <div className="flex justify-center my-2">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={(token) => setRecaptchaToken(token)}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-[#0D4F6C] hover:bg-[#1A7FA0] text-white font-sans font-semibold text-sm rounded-xl py-3.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Verification Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
