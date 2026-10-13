import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Building, 
  ArrowRight,
  FileCheck2,
  Clock
} from 'lucide-react';
import { INSURANCE_PROVIDERS_DATA } from '../../data/hospitalData';

interface TpaInsuranceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TpaInsuranceModal: React.FC<TpaInsuranceModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [selectedProviderId, setSelectedProviderId] = useState(INSURANCE_PROVIDERS_DATA[0].id);
  const [policyNumber, setPolicyNumber] = useState('STAR-HLT-2026-981244');
  const [patientName, setPatientName] = useState('Rahul K. Sharma');
  const [verificationResult, setVerificationResult] = useState<any | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const selectedProvider = INSURANCE_PROVIDERS_DATA.find(p => p.id === selectedProviderId) || INSURANCE_PROVIDERS_DATA[0];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationResult({
        status: 'ELIGIBLE_100_PERCENT_CASHLESS',
        sumInsured: '₹15,00,000',
        copay: '0% Co-Pay',
        preAuthSpeed: selectedProvider.claimTurnaroundTime,
        deskLocation: 'TPA Desk #4, Ground Floor (All Campuses)',
        pmJayStatus: selectedProvider.id === 'pm-jay' ? 'Biometric Ayushman Bharat Verified' : 'IRDAI Approved Network'
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#0F172A] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                100% Cashless Admission & TPA Desk
              </h3>
              <p className="text-xs text-slate-300">
                Empaneled with 50+ Private Insurers & Ayushman Bharat (PM-JAY)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close TPA modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                Select Insurance Partner / TPA
              </label>
              <select
                value={selectedProviderId}
                onChange={(e) => {
                  setSelectedProviderId(e.target.value);
                  setVerificationResult(null);
                }}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                {INSURANCE_PROVIDERS_DATA.map((prov) => (
                  <option key={prov.id} value={prov.id}>
                    {prov.name} ({prov.type}) — {prov.cashlessApprovalRate} Approval
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Policy / TPA Card Number
                </label>
                <input
                  type="text"
                  required
                  value={policyNumber}
                  onChange={(e) => setPolicyNumber(e.target.value)}
                  placeholder="e.g. STAR-091-881"
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm font-mono text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Patient Full Name
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Legal name on policy"
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isVerifying ? (
                <span>Checking IRDAI / ABDM Network...</span>
              ) : (
                <>
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  <span>Verify Pre-Authorization & Cashless Status</span>
                </>
              )}
            </button>
          </form>

          {/* Verification Result Card */}
          {verificationResult && (
            <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-slate-900 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-emerald-200 pb-2.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wide">
                      Instant Cashless Pre-Approved
                    </h4>
                    <p className="text-[11px] text-emerald-800">
                      Zero-Deposit Admission at all Himanshu Campuses
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-600 text-white">
                  ACTIVE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <span className="text-slate-500 text-[10px] block">Sum Insured:</span>
                  <strong className="text-slate-900">{verificationResult.sumInsured}</strong>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Co-Payment:</span>
                  <strong className="text-emerald-700">{verificationResult.copay}</strong>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Est. Discharge Approval:</span>
                  <strong className="text-slate-900">{verificationResult.preAuthSpeed}</strong>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">Assistance Desk:</span>
                  <strong className="text-slate-900">{verificationResult.deskLocation}</strong>
                </div>
              </div>

              <div className="text-[11px] text-emerald-900 bg-white/80 p-2.5 rounded-lg border border-emerald-200">
                Please present your Policy E-Card or Aadhaar biometric at Desk #4 upon arrival. Our in-house insurance coordinator will manage all hospital paperwork.
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
