import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { ShieldCheck, Loader2, FileCheck, CheckCircle2, ArrowRight, Download, RefreshCw } from 'lucide-react';
import Badge from '../components/ui/Badge';

export default function VerifyPage() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('idle'); // idle | checking | success | error
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    setStatus('checking');
    
    // Simulate 2 seconds of secure verification delay
    setTimeout(() => {
      // Create random or predetermined mock results based on the input code
      const upperCode = code.trim().toUpperCase();
      
      const isXChr = upperCode.includes('X') || upperCode.charCodeAt(0) % 2 === 0;
      
      setResult({
        code: upperCode,
        lab: upperCode.includes('CYPRUS') ? 'Nicosia, North Cyprus' : 'Guadalajara, Mexico',
        target: isXChr ? 'X-Chromosome (Female balancing)' : 'Y-Chromosome (Male balancing)',
        purity: isXChr ? '91.2%' : '75.8%',
        volumeSorted: '1.2 mL',
        motilityPostSort: '84%',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      });
      setStatus('success');
    }, 2000);
  };

  const handleReset = () => {
    setCode('');
    setStatus('idle');
    setResult(null);
  };

  return (
    <div className="bg-bg py-16 md:py-24">
      <div className="max-w-xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Results System"
          title="Verify Your Sort"
          subtitle="Input the unique authentication key printed on your center receipt to retrieve clinical sorting records and lab purity profiles."
        />

        {/* Informational description */}
        <div className="bg-surface border border-border p-6 rounded-2xl shadow-sm text-center mb-8">
          <p className="text-muted text-sm leading-relaxed font-sans">
            Once you visit the laboratory, you will get a verification code. Please use this page to verify your sort and get your results.
          </p>
        </div>

        {/* Interactive Verification Workflow */}
        <div className="bg-surface border border-border rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>

          {status === 'idle' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="verify-code" className="text-xs font-bold uppercase tracking-wider text-muted">
                  Enter Verification Code
                </label>
                <div className="relative">
                  <input
                    id="verify-code"
                    type="text"
                    required
                    placeholder="e.g. MS-90821-X"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full bg-bg border border-border text-primary font-sans font-semibold placeholder-muted/50 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base tracking-wide uppercase"
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center text-primary-light">
                    <ShieldCheck size={20} className="opacity-40" />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full justify-center flex items-center gap-2"
              >
                <span>Verify My Sort</span>
                <ArrowRight size={16} />
              </Button>
            </form>
          )}

          {status === 'checking' && (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping"></div>
                <div className="w-16 h-16 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center relative z-10">
                  <Loader2 className="text-primary-light animate-spin" size={28} />
                </div>
              </div>
              <h4 className="text-lg font-sans font-bold text-primary mb-2">
                Checking Sorting Records...
              </h4>
              <p className="text-muted text-xs font-sans">
                Connecting to MicroSort® secure laboratory network database.
              </p>
            </div>
          )}

          {status === 'success' && result && (
            <div className="space-y-6">
              {/* Success badge & title */}
              <div className="flex flex-col items-center text-center pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-3">
                  <CheckCircle2 size={28} className="text-[#0D4F6C]" />
                </div>
                <Badge variant="accent">Verified Laboratory Record</Badge>
                <h4 className="text-xl font-display text-primary mt-2 font-normal">
                  Sperm Sort Successful
                </h4>
              </div>

              {/* Lab details grid */}
              <div className="bg-bg rounded-2xl p-4 sm:p-6 space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-border/40">
                  <span className="text-muted font-medium">Verification Key</span>
                  <span className="text-primary font-bold uppercase">{result.code}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-border/40">
                  <span className="text-muted font-medium">Processing Facility</span>
                  <span className="text-primary font-bold">{result.lab}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-border/40">
                  <span className="text-muted font-medium">Sorting Target</span>
                  <span className="text-primary font-bold">{result.target}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-border/40">
                  <span className="text-muted font-medium">Target Chromosome Purity</span>
                  <span className="text-accent font-bold text-sm bg-accent/15 px-2.5 py-0.5 rounded-full">
                    {result.purity}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-border/40">
                  <span className="text-muted font-medium">Sorted Volume</span>
                  <span className="text-primary font-bold">{result.volumeSorted}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-border/40">
                  <span className="text-muted font-medium">Post-Sort Motility</span>
                  <span className="text-primary font-bold">{result.motilityPostSort}</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-muted font-medium">Date Processed</span>
                  <span className="text-primary font-bold">{result.date}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  variant="primary" 
                  size="md" 
                  className="flex-1 justify-center gap-1.5"
                  onClick={() => alert("Report download simulated successfully!")}
                >
                  <Download size={16} />
                  <span>Download PDF Report</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="md" 
                  className="gap-1.5 justify-center hover:bg-primary hover:text-white"
                  onClick={handleReset}
                >
                  <RefreshCw size={14} />
                  <span>Verify Another</span>
                </Button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
