import React, { useState } from 'react';
import { Download, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import Button from '../ui/Button';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    
    try {
      // Reusing the same /api/contact endpoint but tagging it with a specific goal
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName: 'Checklist',
          lastName: 'Download',
          message: 'Requested the Planning Checklist',
          goal: 'Checklist Download'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-[#0D4F6C] py-16 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          
          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent font-sans text-xs uppercase tracking-widest font-bold mb-4">
              <Download size={12} />
              Free Download
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-normal mb-4">
              Get the Complete Planning Checklist
            </h2>
            <p className="text-white/80 font-sans leading-relaxed mb-6">
              Download our comprehensive 12-page guide on preparing for your MicroSort® cycle, including travel tips, medication timelines, and what to pack.
            </p>
            <ul className="space-y-2 text-sm text-white/90 font-sans mb-8 md:mb-0 inline-block text-left">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                Step-by-step cycle timeline
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                Questions to ask your local clinic
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-accent" />
                Budgeting and travel recommendations
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-xl text-primary">
            {status === 'success' ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-[#E6F4EA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-display text-primary mb-2">Checklist Sent!</h3>
                <p className="text-sm text-muted font-sans">
                  Check your inbox. We&apos;ve sent the download link to your email.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6 w-full"
                  onClick={() => setStatus('idle')}
                >
                  Download Another Copy
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-semibold mb-1">Send to my inbox</h3>
                  <p className="text-xs text-muted font-sans">Enter your email to receive the PDF instantly.</p>
                </div>
                
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl mb-4 font-sans border border-red-100">
                    {errorMessage}
                  </div>
                )}
                
                <div>
                  <label htmlFor="lm-email" className="sr-only">Email Address</label>
                  <input
                    id="lm-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@domain.com"
                    className="w-full bg-[#F8F9FB] border border-[#E2E8ED] text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-sans"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-[#1A7FA0] hover:bg-[#0D4F6C] text-white font-sans font-semibold text-sm rounded-xl py-3.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Get the Checklist</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-muted mt-4">
                  By downloading, you agree to receive our educational emails. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
