import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { ShieldAlert, Phone, Mail, Lock } from 'lucide-react';

export default function VerifyPage() {
  return (
    <div className="bg-bg py-16 md:py-24 font-sans text-[#1C2B35]">
      <div className="max-w-2xl mx-auto px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Results Verification Portal"
          title="Verify Your Sort"
          subtitle="Unique laboratory authentication codes must be verified directly with our clinical coordination office."
        />

        {/* Status Alert Card */}
        <div className="bg-white border border-[#E2E8ED] rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D4F6C]/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col items-center text-center">
            {/* Warning Shield Node */}
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6">
              <ShieldAlert className="text-amber-600 stroke-[1.5]" size={32} />
            </div>

            <h3 className="text-2xl font-display text-[#0D4F6C] font-normal mb-3">
              Online Database Lookup Offline
            </h3>
            
            <p className="text-[#6B7E8A] text-sm leading-relaxed max-w-md mb-8 font-sans">
              To protect patient privacy, comply with medical records safety regulations, and prevent fraud, the online laboratory record lookup tool is currently offline. 
            </p>

            {/* Warning alert notice */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl text-left text-amber-900 w-full mb-8 text-xs leading-relaxed">
              <strong>Clinical Verification Alert:</strong> Preconception sex sorting purity results represent critical diagnostic data. To prevent errors and comply with HIPAA standards, online lookup tools have been disabled. Patients must verify their laboratory sorting receipts and purity records directly with their clinic coordinators.
            </div>

            {/* Direct Verification Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-xs text-[#4F5E6A] border-t border-[#E2E8ED] pt-8">
              <div className="p-5 bg-[#F8F9FB] rounded-2xl border border-[#E2E8ED] text-left">
                <div className="w-8 h-8 rounded-lg bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center mb-3">
                  <Phone size={16} />
                </div>
                <h5 className="font-bold text-[#0D4F6C] mb-1">Phone Verification</h5>
                <p className="text-[11px] text-[#6B7E8A] mb-3">Speak directly with medical records coordinators:</p>
                <a href="tel:7036217171" className="text-[#1A7FA0] font-bold text-sm hover:underline block">(703) 621-7171</a>
              </div>
              
              <div className="p-5 bg-[#F8F9FB] rounded-2xl border border-[#E2E8ED] text-left">
                <div className="w-8 h-8 rounded-lg bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center mb-3">
                  <Mail size={16} />
                </div>
                <h5 className="font-bold text-[#0D4F6C] mb-1">Secure Email Request</h5>
                <p className="text-[11px] text-[#6B7E8A] mb-3">Inquire about laboratory results and receipt records:</p>
                <a href="mailto:records@microsort.com" className="text-[#1A7FA0] font-bold text-sm hover:underline block">records@microsort.com</a>
              </div>
            </div>
            
            <div className="mt-8 text-[11px] text-[#6B7E8A] italic flex items-center gap-1.5 justify-center">
              <Lock size={12} className="text-emerald-600" />
              <span>Compliant with standard clinical privacy regulations</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
