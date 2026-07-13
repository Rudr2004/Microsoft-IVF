import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import { 
  Check, 
  ClipboardList, 
  AlertTriangle, 
  Thermometer, 
  UserCheck, 
  Heart, 
  Calendar, 
  Printer, 
  Lock, 
  ShieldCheck, 
  HelpCircle,
  Activity,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import CtaModule from '../components/sections/CtaModule';
import LeadMagnet from '../components/sections/LeadMagnet';

export default function RequirementsPage() {
  const [selectedLab, setSelectedLab] = useState('mexico');
  const [selectedTreatment, setSelectedTreatment] = useState('ivf');
  const [openSections, setOpenSections] = useState({
    1: true, // First section open by default
  });

  const toggleSection = (id) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isOpen = (id) => !!openSections[id];

  // Lab testing configurations
  const labTests = {
    mexico: {
      name: "MicroSort Mexico (Lomas Altas, Mexico City)",
      regulatory: "COFEPRIS Accredited, ISO 9001:2015 certified",
      tests: [
        { name: "HIV-1 and HIV-2 (Ag/Ab 4th Gen ELISA)", requiredFor: "Both partners", window: "Within 6 months" },
        { name: "Hepatitis B Surface Antigen (HBsAg)", requiredFor: "Semen provider", window: "Within 6 months" },
        { name: "Hepatitis C Antibody (HCV Ab)", requiredFor: "Semen provider", window: "Within 6 months" },
        { name: "VDRL (Syphilis screening test)", requiredFor: "Semen provider", window: "Within 6 months" },
        { name: "Chlamydia & Gonorrhea PCR", requiredFor: "Semen provider", window: "Within 6 months" }
      ],
      timingNote: "All tests must be completed at a certified laboratory and results must be submitted at least 10 business days prior to treatment."
    },
    cyprus: {
      name: "MicroSort North Cyprus (Nicosia)",
      regulatory: "TRNC Ministry of Health Licensed, ISO certified",
      tests: [
        { name: "HIV-1 and HIV-2 (Ag/Ab 4th Gen ELISA)", requiredFor: "Both partners", window: "Within 3 months" },
        { name: "Hepatitis B Surface Antigen (HBsAg)", requiredFor: "Both partners", window: "Within 3 months" },
        { name: "Hepatitis C Antibody (HCV Ab)", requiredFor: "Both partners", window: "Within 3 months" },
        { name: "VDRL (Syphilis screening)", requiredFor: "Both partners", window: "Within 3 months" },
        { name: "HTLV I/II Antibody", requiredFor: "Semen provider", window: "Within 3 months" }
      ],
      timingNote: "TRNC regulations require all infectious screening to be performed within a strict 3-month window preceding the sort date."
    },
    malaysia: {
      name: "MicroSort Malaysia (Kuala Lumpur)",
      regulatory: "RTAC (Reproductive Technology Accreditation Committee) Accredited",
      tests: [
        { name: "HIV-1 and HIV-2 (Ag/Ab 4th Gen ELISA)", requiredFor: "Both partners", window: "Within 6 months" },
        { name: "Hepatitis B Surface Antigen (HBsAg)", requiredFor: "Both partners", window: "Within 6 months" },
        { name: "Hepatitis C Antibody (HCV Ab)", requiredFor: "Both partners", window: "Within 6 months" },
        { name: "VDRL (Syphilis screening)", requiredFor: "Both partners", window: "Within 6 months" },
        { name: "Malaria Screening (Blood film)", requiredFor: "Semen provider", window: "Within 6 months" }
      ],
      timingNote: "In accordance with local guidelines, additional screening for vector-borne diseases may be required based on patient travel history."
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#F8F9FB] py-16 md:py-24 font-sans text-[#1C2B35]">
      <div className="max-w-[68ch] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Clinical Compliance & Patient Guidelines"
          title="Clinical Requirements and Informed Consent"
          subtitle="Please read through our eligibility guidelines, semen-analysis thresholds, laboratory protocols, and testing checklists before booking your procedure."
          className="no-print"
        />

        {/* PRINT ONLY HEADER */}
        <div className="hidden print:block mb-8 border-b-2 border-[#0D4F6C] pb-4">
          <h1 className="text-3xl font-bold text-[#0D4F6C]">MicroSort® Laboratory Requirements Checklist</h1>
          <p className="text-sm text-gray-600 mt-1">Generated on: {new Date().toLocaleDateString()} | Clinic & Patient Copy</p>
          <p className="text-sm text-gray-600">Selected Laboratory: {labTests[selectedLab].name} | Treatment: {selectedTreatment.toUpperCase()}</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          
          {/* SECTION 1: At-a-Glance Eligibility */}
          <motion.div variants={itemVariants} className="bg-white border border-[#E2E8ED] rounded-3xl shadow-sm card-container overflow-hidden">
            <button
              onClick={() => toggleSection(1)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:bg-[#0D4F6C]/5 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center shrink-0">
                  <UserCheck size={20} className="stroke-[1.75]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display text-[#0D4F6C] font-normal">
                  1. At a Glance: Eligibility Guidelines
                </h3>
              </div>
              <ChevronDown size={20} className={`text-muted transition-transform duration-300 shrink-0 ${isOpen(1) ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isOpen(1) ? 'block' : 'hidden print:block'} px-6 pb-6 sm:px-8 sm:pb-8 border-t border-[#E2E8ED]/60 pt-6`}>
              <p className="text-[#4F5E6A] text-base leading-relaxed mb-6">
                Preconception screening is available to patients who meet either of the following clinical criteria, designed to align with international bioethical frameworks.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {/* Family Balancing */}
                <div className="bg-[#F8F9FB] border border-[#E2E8ED] rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E8A598]"></span>
                      <h4 className="text-base font-bold text-[#0D4F6C]">Pathway A — Elective family balancing</h4>
                    </div>
                    <p className="text-sm text-[#4F5E6A] leading-relaxed mb-4">
                      Available to patients who wish to balance the representation of one sex within their family. Most have at least one child already, and sperm sorting must target the underrepresented sex in cases where an immediate family member is of that sex.
                    </p>
                  </div>
                  <div className="border-t border-[#E2E8ED] pt-4 mt-4 text-xs text-[#5A6B77] leading-relaxed">
                    <strong>Verification details:</strong> Requires copy verification of birth certificates of existing children during clinical consultation. Documents are reviewed by medical compliance staff, stored securely in an encrypted HIPAA-compliant database, retained for five years, and then permanently purged.
                  </div>
                </div>

                {/* Genetic Disease Prevention */}
                <div className="bg-[#F8F9FB] border border-[#E2E8ED] rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1A7FA0]"></span>
                      <h4 className="text-base font-bold text-[#0D4F6C]">Pathway B — Prevention of sex-linked genetic conditions</h4>
                    </div>
                    <p className="text-sm text-[#4F5E6A] leading-relaxed mb-4">
                      Available to patients who are known carriers of, or at risk of transmitting, a sex-linked or sex-limited genetic condition — for example Duchenne muscular dystrophy, X-linked mental retardation, or Fragile X syndrome.
                    </p>
                  </div>
                  <div className="border-t border-[#E2E8ED] pt-4 mt-4 text-xs text-[#5A6B77] leading-relaxed">
                    <strong>Genetic Risk warning:</strong> MicroSort® is a preconception sorting method that enriches sperm populations; it does not diagnose embryos or guarantee an unaffected child. Intended parents must undergo genetic counseling to understand residual risks, PGT-M (embryo testing), and prenatal diagnosis alternatives.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* SECTION 2: Important Limitations and No-Guarantee Statement */}
          <motion.div variants={itemVariants} className="bg-white border border-[#E2E8ED] rounded-3xl shadow-sm card-container overflow-hidden">
            <button
              onClick={() => toggleSection(2)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:bg-[#0D4F6C]/5 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center shrink-0">
                  <AlertTriangle size={20} className="stroke-[1.75] text-[#0D4F6C]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display text-[#0D4F6C] font-normal">
                  2. Important Limitations & Clinical Disclaimer
                </h3>
              </div>
              <ChevronDown size={20} className={`text-muted transition-transform duration-300 shrink-0 ${isOpen(2) ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isOpen(2) ? 'block' : 'hidden print:block'} px-6 pb-6 sm:px-8 sm:pb-8 border-t border-[#E2E8ED]/60 pt-6`}>
              <div className="space-y-4 text-base text-[#4F5E6A] leading-relaxed">
                <p>
                  Before electing to undergo the procedure, patients must review and acknowledge the following clinical limitations.
                </p>
                
                <div className="grid grid-cols-1 gap-4 bg-[#F8F9FB] p-6 rounded-2xl border border-[#E2E8ED] mt-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-sm">•</span>
                      <p className="text-sm"><strong>Sorting probability.</strong> Sperm sorting shifts the proportion of sperm; it does not provide a 100% guarantee of the expected sex at birth.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-sm">•</span>
                      <p className="text-sm"><strong>Concentration reduction.</strong> The sorting process filters out non-motile cells, reducing total available count. This may limit compatibility with simpler procedures and necessitate IVF or ICSI.</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-[#1A7FA0] pl-4 py-3 mt-6 text-xs text-[#5A6B77] bg-[#1A7FA0]/5 rounded-r-xl leading-relaxed">
                  <h5 className="font-bold text-[#0D4F6C] mb-2">Evidence-based clinical performance figures:</h5>
                  <p>
                    Based on clinical trial data compiled between January 2015 and December 2022 (n ≈ 4,210 sorting procedures). X-bearing enrichment averaged 87% (peak observed 91%). Y-bearing enrichment averaged 74%. Live birth rate via IVF/ICSI: 31.2% average per transfer cycle. Performance may vary between laboratory and patient age, and derived from internal audit.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>


          {/* SECTION 3: Genetic-Disease Counseling Pathway */}
          <motion.div variants={itemVariants} className="bg-white border border-[#E2E8ED] rounded-3xl shadow-sm card-container overflow-hidden">
            <button
              onClick={() => toggleSection(3)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:bg-[#0D4F6C]/5 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center shrink-0">
                  <Heart size={20} className="stroke-[1.75] text-[#E8A598]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display text-[#0D4F6C] font-normal">
                  3. Genetic-Disease Counseling Pathway
                </h3>
              </div>
              <ChevronDown size={20} className={`text-muted transition-transform duration-300 shrink-0 ${isOpen(3) ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isOpen(3) ? 'block' : 'hidden print:block'} px-6 pb-6 sm:px-8 sm:pb-8 border-t border-[#E2E8ED]/60 pt-6`}>
              <div className="space-y-4 text-base text-[#4F5E6A] leading-relaxed">
                <p>
                  For patients pursuing MicroSort® to reduce the transmission risk of X-linked or sex-limited genetic disorders, we mandate a rigorous, compassionate clinical pathway to protect offspring health:
                </p>
                
                <blockquote className="border-l-4 border-[#E8A598] bg-[#E8A598]/5 pl-4 pr-4 py-4 rounded-r-xl text-sm italic text-[#0D4F6C]">
                  “MicroSort may reduce, but cannot eliminate, the chance of transmitting some sex-linked conditions. It does not diagnose an embryo or guarantee an unaffected child. A genetic counselor and fertility specialist should help determine whether sperm sorting, PGT-M, prenatal testing, or another approach is appropriate.”
                </blockquote>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div className="p-4 bg-[#F8F9FB] rounded-xl border border-[#E2E8ED]">
                    <h5 className="font-bold text-xs text-[#0D4F6C] mb-2">Step 1: Consultation</h5>
                    <p className="text-xs text-muted">Initial clinical consult with a reproductive endocrinologist and review of familial pedigree chart.</p>
                  </div>
                  <div className="p-4 bg-[#F8F9FB] rounded-xl border border-[#E2E8ED]">
                    <h5 className="font-bold text-xs text-[#0D4F6C] mb-2">Step 2: Genetic Counseling</h5>
                    <p className="text-xs text-muted">Mandatory session with a board-certified genetic counselor to discuss residual risks and testing options.</p>
                  </div>
                  <div className="p-4 bg-[#F8F9FB] rounded-xl border border-[#E2E8ED]">
                    <h5 className="font-bold text-xs text-[#0D4F6C] mb-2">Step 3: Integrated Care</h5>
                    <p className="text-xs text-muted">Formulate care plan coordinates MicroSort® with PGT-M (embryo biopsy) or confirmatory prenatal tests (CVS/Amnio).</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* SECTION 4 & 5: Interactive Laboratory Checklists & What Reactive Results Mean */}
          <motion.div variants={itemVariants} className="bg-white border border-[#E2E8ED] rounded-3xl shadow-sm card-container overflow-hidden">
            <div className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-slate-50/50 transition-colors">
              <button
                onClick={() => toggleSection(4)}
                className="flex-grow flex items-center gap-4 text-left focus:outline-none"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center shrink-0">
                  <ClipboardList size={20} className="stroke-[1.75]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display text-[#0D4F6C] font-normal">
                  4. Personalized Laboratory Testing Checklist & Specs
                </h3>
              </button>
              
              <div className="flex items-center gap-3 shrink-0">
                <Button 
                  onClick={handlePrint}
                  variant="primary"
                  size="xs"
                  className="flex items-center gap-1.5 no-print"
                >
                  <Printer size={12} />
                  <span className="hidden sm:inline">Print Checklist</span>
                </Button>
                
                <button
                  onClick={() => toggleSection(4)}
                  className="text-muted p-1 focus:outline-none"
                >
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen(4) ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            <div className={`${isOpen(4) ? 'block' : 'hidden print:block'} px-6 pb-6 sm:px-8 sm:pb-8 border-t border-[#E2E8ED]/60 pt-6`}>
              <div className="hidden print:block text-lg font-bold text-[#0D4F6C] mb-4">
                4. Custom Testing Checklist & Specifications
              </div>

              <p className="text-[#4F5E6A] text-base leading-relaxed mb-6 no-print">
                Infectious disease testing requirements vary by laboratory location due to national regulations and equipment constraints. View our laboratory directory to see where each lab is located, and select your planned procedure below to view your checklist:
              </p>

              {/* Interactive Filters (no-print) */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 no-print">
                {/* Treatment Selector */}
                <div className="flex-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Select Treatment Type</label>
                  <div className="grid grid-cols-2 gap-2 bg-[#F8F9FB] p-2 rounded-xl border border-[#E2E8ED]">
                    {['iui', 'ivf'].map((tType) => (
                      <button
                        key={tType}
                        onClick={() => setSelectedTreatment(tType)}
                        className={`text-xs py-2 px-4 rounded-lg font-semibold transition-all ${
                          selectedTreatment === tType 
                            ? 'bg-[#0D4F6C] text-white shadow-sm' 
                            : 'text-[#4F5E6A] hover:bg-[#E2E8ED]/50'
                        }`}
                      >
                        {tType === 'iui' ? 'Intrauterine Insemination (IUI)' : 'IVF / ICSI / Cryopreservation'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Redirect to Locations Button */}
                <div className="flex-1 flex flex-col justify-end">
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Laboratory Details</label>
                  <Link to="/locations" className="block w-full">
                    <button className="w-full text-xs font-semibold py-2.5 px-4 rounded-xl border border-[#E2E8ED] bg-[#F8F9FB] text-[#0D4F6C] hover:bg-[#E2E8ED]/50 transition-all flex items-center justify-center gap-2 h-[42px]">
                      <ClipboardList size={14} className="text-[#1A7FA0]" />
                      <span>View Laboratory Directory</span>
                      <ChevronRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Live Filter Results Display */}
              <div className="bg-[#F8F9FB] border border-[#E2E8ED] rounded-2xl p-6 mb-8">
                <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                  <h4 className="text-base font-bold text-[#0D4F6C]">{labTests[selectedLab].name}</h4>
                  <Badge variant="primary" className="text-[11px] font-sans uppercase">
                    {labTests[selectedLab].regulatory}
                  </Badge>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#E2E8ED] text-xs font-bold uppercase tracking-wider text-muted">
                        <th className="pb-4 pr-4">Required Diagnostics</th>
                        <th className="pb-4 px-4">Subject</th>
                        <th className="pb-4 px-4">Validity / Window</th>
                        <th className="pb-4 pl-4 print:hidden">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8ED] text-sm text-[#4F5E6A]">
                      {labTests[selectedLab].tests.map((test, index) => {
                        // If IUI is selected and the test is only for egg provider, we might adjust who gets tested
                        const subjectText = selectedTreatment === 'iui' && test.requiredFor === 'Both partners' 
                          ? 'Semen provider & Partner' 
                          : test.requiredFor;
                        return (
                          <tr key={index} className="hover:bg-white/40 transition-colors">
                            <td className="py-4 pr-4 font-bold text-[#0D4F6C] flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-[#0D4F6C]/10 text-[#0D4F6C] flex items-center justify-center shrink-0">
                                <Check size={11} className="stroke-[3]" />
                              </div>
                              <span>{test.name}</span>
                            </td>
                            <td className="py-4 px-4">{subjectText}</td>
                            <td className="py-4 px-4 font-medium">{test.window}</td>
                            <td className="py-4 pl-4 print:hidden">
                              <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                                <ShieldCheck size={11} /> Required
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-muted mt-4 italic">
                  * Note: {labTests[selectedLab].timingNote}
                </p>
              </div>

              {/* SECTION 5: What Reactive or Borderline Results Mean */}
              <div className="border-t border-[#E2E8ED] pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle size={18} className="text-[#1A7FA0]" />
                  <h4 className="text-base font-bold text-[#0D4F6C]">Understanding Reactive, Borderline, or Positive Screen Results</h4>
                </div>
                <p className="text-sm text-[#4F5E6A] leading-relaxed mb-4">
                  All diagnostic screens are processed in certified medical laboratories. Because screen results represent initial markers rather than final diagnoses, we apply clinical interpretation rules:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#4F5E6A] mb-6">
                  <div className="bg-[#0D4F6C]/5 p-4 rounded-xl space-y-2.5">
                    <p><strong>• VDRL (Syphilis):</strong> VDRL is a non-treponemal screening test. A reactive result does not automatically indicate active Syphilis. If reactive, the laboratory requires confiremony treponemal testing (e.g., TPHA, FTA-ABS) to diagnose active vs. historical treated infection.</p>
                    <p><strong>• HCV Antibody:</strong> The Hepatitis C antibody screen remains positive lifelong in individuals with resolved or successfully treated infections. If reactive, patients must submit a negative HCV RNA PCR (viral load) test to verify they are currently non-infectious.</p>
                  </div>
                  <div className="bg-[#0D4F6C]/5 p-4 rounded-xl space-y-2.5">
                    <p><strong>• HIV Screens:</strong> Screening requires a 4th-generation Antigen/Antibody combination assay. In case of borderline or reactive screening, clinical protocol mandates confirmatory Western Blot or HIV RNA PCR assays. Semen providers must meet window period compliance (testing &gt;12 weeks post-exposure).</p>
                    <p><strong>• Hepatitis B Vaccine Factor:</strong> Patients who have recently received a Hepatitis B vaccine can exhibit transient HBsAg positivity for up to 14 days post-vaccination. If HBsAg is positive within this window, testing for HBV DNA by PCR is required to rule out infection.</p>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <div className="flex gap-2">
                    <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={16} />
                    <div>
                      <h5 className="font-bold text-xs text-amber-800">Compassionate Referral Policy:</h5>
                      <p className="text-xs text-amber-700 leading-relaxed mt-1">
                        MicroSort® laboratories are clinical sorting facilities not bio-equipped to process samples with active viral loads of HIV, HBV, or HCV. However, a positive screening is not a dead end for your fertility journey. If a patient is diagnosed with an active infection, we provide a compassionate referral pathway to specialized tertiary medical centers and partner fertility clinics equipped with high-containment double-washing laboratories that can safely process gametes (e.g., sperm washing to isolate virus-free sperm).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* SECTION 6: Semen-Analysis Requirements and Backup Options */}
          <motion.div variants={itemVariants} className="bg-white border border-[#E2E8ED] rounded-3xl shadow-sm card-container overflow-hidden">
            <button
              onClick={() => toggleSection(5)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:bg-[#0D4F6C]/5 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center shrink-0">
                  <Activity size={20} className="stroke-[1.75]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display text-[#0D4F6C] font-normal">
                  5. Semen-Analysis Requirements & backup options
                </h3>
              </div>
              <ChevronDown size={20} className={`text-muted transition-transform duration-300 shrink-0 ${isOpen(5) ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isOpen(5) ? 'block' : 'hidden print:block'} px-6 pb-6 sm:px-8 sm:pb-8 border-t border-[#E2E8ED]/60 pt-6`}>
              <p className="text-base text-[#4F5E6A] leading-relaxed mb-6">
                To ensure flow cytometry sorting can proceed, a diagnostic semen analysis is <strong>mandatory</strong> prior to final booking. The analysis must be performed within <strong>90 days</strong> of the planned sort date.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Parameters Table */}
                <div className="lg:col-span-7 bg-[#F8F9FB] border border-[#E2E8ED] rounded-2xl p-6">
                  <h4 className="text-sm font-bold text-[#0D4F6C] uppercase tracking-wider mb-4">Minimum Semen Viability Thresholds (WHO 6th Ed.)</h4>
                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between border-b border-[#E2E8ED] pb-2">
                      <span className="text-muted">Ejaculate Volume</span>
                      <span className="font-bold text-[#0D4F6C]">&ge; 1.5 mL</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E2E8ED] pb-2">
                      <span className="text-muted">Sperm Concentration (Count)</span>
                      <span className="font-bold text-[#0D4F6C]">&ge; 15 million / mL</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E2E8ED] pb-2">
                      <span className="text-muted">Progressive Motility</span>
                      <span className="font-bold text-[#0D4F6C]">&ge; 30% (or &ge; 40% total motility)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E2E8ED] pb-2">
                      <span className="text-muted">Normal Morphology</span>
                      <span className="font-bold text-[#0D4F6C]">&ge; 4% (Kruger strict criteria)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Total Motile Sperm Count (TMSC)</span>
                      <span className="font-bold text-[#0D4F6C]">&ge; 10 million motile cells per ejaculate</span>
                    </div>
                  </div>
                </div>

                {/* Low/Borderline semen alternatives */}
                <div className="lg:col-span-5 bg-[#0D4F6C]/5 border border-[#0D4F6C]/10 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#0D4F6C] mb-2">Borderline or Low Sperm Quality Options</h4>
                    <p className="text-xs text-[#4F5E6A] leading-relaxed mb-4">
                      If the diagnostic analysis falls below the thresholds, you do not lose the option to perform the procedure. We provide the following clinical backup options:
                    </p>
                    <ul className="space-y-2 text-xs text-[#4F5E6A] list-disc list-inside">
                      <li><strong>Repeat Analysis:</strong> Retest after adjusting collection factors.</li>
                      <li><strong>Frozen Backups:</strong> Ship or deposit a frozen backup sample to aggregate cells.</li>
                      <li><strong>Treatment Conversion:</strong> Convert an IUI cycle to IVF/ICSI (which requires fewer motile sperm).</li>
                    </ul>
                  </div>
                  <p className="text-[10px] text-muted italic mt-4 pt-4 border-t border-[#E2E8ED]">
                    * A final viability decision is made by the laboratory director upon reviewing the fresh sample on the day of treatment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>


          {/* SECTION 7: Collection / Day-of Instructions */}
          <motion.div variants={itemVariants} className="bg-white border border-[#E2E8ED] rounded-3xl shadow-sm card-container overflow-hidden">
            <button
              onClick={() => toggleSection(6)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:bg-[#0D4F6C]/5 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center shrink-0">
                  <Thermometer size={20} className="stroke-[1.75]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display text-[#0D4F6C] font-normal">
                  6. Collection & Day-of Instructions
                </h3>
              </div>
              <ChevronDown size={20} className={`text-muted transition-transform duration-300 shrink-0 ${isOpen(6) ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isOpen(6) ? 'block' : 'hidden print:block'} px-6 pb-6 sm:px-8 sm:pb-8 border-t border-[#E2E8ED]/60 pt-6`}>
              <p className="text-[#4F5E6A] text-base leading-relaxed mb-6">
                To maximize the yield of highly active sperm cells on the day of sorting, patients must adhere strictly to these preparation instructions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#F8F9FB] border border-[#E2E8ED] p-5 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-[#0D4F6C]/10 text-[#0D4F6C] flex items-center justify-center font-bold text-xs mb-3">01</div>
                  <h5 className="font-bold text-sm text-[#0D4F6C] mb-2">Abstinence Window</h5>
                  <p className="text-xs text-[#4F5E6A] leading-relaxed">
                    Provide the sample after exactly <strong>2 to 3 days</strong> (48 to 72 hours) of sexual abstinence. Shorter abstinence reduces count; longer abstinence decreases motility and increases DNA fragmentation.
                  </p>
                </div>

                <div className="bg-[#F8F9FB] border border-[#E2E8ED] p-5 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-[#0D4F6C]/10 text-[#0D4F6C] flex items-center justify-center font-bold text-xs mb-3">02</div>
                  <h5 className="font-bold text-sm text-[#0D4F6C] mb-2">Alcohol Restriction</h5>
                  <p className="text-xs text-[#4F5E6A] leading-relaxed">
                    Avoid all alcoholic beverages during the abstinence window. Alcohol has a transient, toxic effect on sperm motility and cellular respiration, which directly impacts the sort yield.
                  </p>
                </div>

                <div className="bg-[#F8F9FB] border border-[#E2E8ED] p-5 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-[#0D4F6C]/10 text-[#0D4F6C] flex items-center justify-center font-bold text-xs mb-3">03</div>
                  <h5 className="font-bold text-sm text-[#0D4F6C] mb-2">Avoid High Heat & Strain</h5>
                  <p className="text-xs text-[#4F5E6A] leading-relaxed">
                    Avoid hot tubs, saunas, heavy cycling, steam baths, and vigorous pelvic activities for 90 days preceding the sort, as heat impairs spermatogenesis. Label cycles with fevers &gt; 38°C (100.4°F) for clinical review.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>


          {/* SECTION 8: Fees, Cancellation, and Financial Transparency */}
          <motion.div variants={itemVariants} className="bg-white border border-[#E2E8ED] rounded-3xl shadow-sm card-container overflow-hidden">
            <button
              onClick={() => toggleSection(7)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:bg-[#0D4F6C]/5 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center shrink-0">
                  <Lock size={20} className="stroke-[1.75]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display text-[#0D4F6C] font-normal">
                  7. Fees, Cancellation & Refund Policy
                </h3>
              </div>
              <ChevronDown size={20} className={`text-muted transition-transform duration-300 shrink-0 ${isOpen(7) ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isOpen(7) ? 'block' : 'hidden print:block'} px-6 pb-6 sm:px-8 sm:pb-8 border-t border-[#E2E8ED]/60 pt-6`}>
              <div className="space-y-4 text-base text-[#4F5E6A] leading-relaxed">
                <p>
                  Fee structures, billing methods, and cancellation policies vary by clinical center and laboratory location.
                </p>
                <div className="bg-[#F8F9FB] border border-[#E2E8ED] rounded-2xl p-6 text-center mt-4">
                  <p className="text-primary font-medium mb-4">
                    For more Details Contact Us
                  </p>
                  <Link to="/contact">
                    <Button variant="primary" size="md" className="inline-flex">
                      Contact Coordination Office
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
   
   
          {/* SECTION 9: Secure Document Submission & Privacy */}
          <motion.div variants={itemVariants} className="bg-white border border-[#E2E8ED] rounded-3xl shadow-sm card-container overflow-hidden">
            <button
              onClick={() => toggleSection(8)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:bg-[#0D4F6C]/5 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center shrink-0">
                  <Lock size={20} className="stroke-[1.75] text-emerald-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display text-[#0D4F6C] font-normal">
                  8. Secure Document Submission & Privacy Compliance
                </h3>
              </div>
              <ChevronDown size={20} className={`text-muted transition-transform duration-300 shrink-0 ${isOpen(8) ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isOpen(8) ? 'block' : 'hidden print:block'} px-6 pb-6 sm:px-8 sm:pb-8 border-t border-[#E2E8ED]/60 pt-6`}>
              <div className="space-y-4 text-base text-[#4F5E6A] leading-relaxed">
                <p>
                  We maintain the highest clinical standards of data protection. Patient medical records, infectious disease panels, and identity certificates are governed by strict confidentiality:
                </p>
   
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F8F9FB] p-6 rounded-2xl border border-[#E2E8ED] text-xs">
                  <div className="space-y-2">
                    <h5 className="font-bold text-[#0D4F6C] flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      Encrypted Portals
                    </h5>
                    <p className="leading-relaxed">All diagnostic reports must be uploaded directly via our HIPAA-compliant client portal. Files are encrypted in transit (TLS 1.3) and at rest (AES-256).</p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-[#0D4F6C] flex items-center gap-1.5">
                      <Lock size={14} className="text-emerald-600" />
                      Confidential Review
                    </h5>
                    <p className="leading-relaxed">Access is restricted to authorized laboratory coordinators and clinical directors. We do not store or transmit medical reports through email or general inquiry forms.</p>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-bold text-[#0D4F6C] flex items-center gap-1.5">
                      <Calendar size={14} className="text-emerald-600" />
                      Retention & Deletion
                    </h5>
                    <p className="leading-relaxed">Clinical records are retained for a regulatory period of 5 years following treatment, after which they are securely purged from our servers.</p>
                  </div>
                </div>
   
                <div className="border-t border-[#E2E8ED] pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                  <span className="text-muted">
                    For privacy concerns or data access requests, contact our Compliance Officer at: <a href="mailto:privacy@microsort.com" className="text-[#1A7FA0] hover:underline font-semibold font-sans">privacy@microsort.com</a>
                  </span>
                  <span className="text-muted italic shrink-0">
                    Last reviewed: June 2026 | Next review: June 2027
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
   
   
          {/* SECTION 10: FAQ / Glossary & CTAs (no-print) */}
          <motion.div variants={itemVariants} className="bg-white border border-[#E2E8ED] rounded-3xl shadow-sm no-print card-container overflow-hidden">
            <button
              onClick={() => toggleSection(9)}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:bg-[#0D4F6C]/5 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D4F6C]/5 text-[#0D4F6C] flex items-center justify-center shrink-0">
                  <HelpCircle size={20} className="stroke-[1.75]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display text-[#0D4F6C] font-normal">
                  9. Clinical Glossary & Definitions
                </h3>
              </div>
              <ChevronDown size={20} className={`text-muted transition-transform duration-300 shrink-0 ${isOpen(9) ? 'rotate-180' : ''}`} />
            </button>

            <div className={`${isOpen(9) ? 'block' : 'hidden print:block'} px-6 pb-6 sm:px-8 sm:pb-8 border-t border-[#E2E8ED]/60 pt-6`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#4F5E6A] mb-8">
                <div>
                  <h5 className="font-bold text-[#0D4F6C] mb-2">IUI (Intrauterine Insemination)</h5>
                  <p>A fertility treatment where sorted, concentrated sperm is placed directly inside the uterus around ovulation.</p>
                </div>
                <div>
                  <h5 className="font-bold text-[#0D4F6C] mb-2">IVF (In Vitro Fertilization)</h5>
                  <p>A procedure where eggs are retrieved and fertilized by sorted sperm outside the body in a laboratory.</p>
                </div>
                <div>
                  <h5 className="font-bold text-[#0D4F6C] mb-2">ICSI (Intracytoplasmic Sperm Injection)</h5>
                  <p>An IVF technique where a single sorted sperm cell is injected directly into a mature egg.</p>
                </div>
                <div>
                  <h5 className="font-bold text-[#0D4F6C] mb-2">VDRL (Venereal Disease Research Lab)</h5>
                  <p>A screening blood test for Syphilis. Reactive screens require confirmatory diagnostic tests.</p>
                </div>
                <div>
                  <h5 className="font-bold text-[#0D4F6C] mb-2">PGT-M (Preimplantation Genetic Testing)</h5>
                  <p>Biopsy testing on embryos to detect specific monogenic genetic mutations before embryo transfer.</p>
                </div>
                <div>
                  <h5 className="font-bold text-[#0D4F6C] mb-2">HBsAg (Hepatitis B Surface Antigen)</h5>
                  <p>A blood marker indicating active Hepatitis B infection. Vaccine recipient HBsAg flags need PCR review.</p>
                </div>
              </div>
   
              {/* CTAs */}
              <div className="border-t border-[#E2E8ED] pt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button 
                  href="/contact" 
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto text-center font-sans"
                >
                  <span>Check Eligibility</span>
                </Button>
                <Button 
                  onClick={handlePrint}
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-center font-sans"
                >
                  <Printer size={16} />
                  <span>Print My Testing Checklist</span>
                </Button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
      
      <LeadMagnet />
      <CtaModule />
    </div>
  );
}
