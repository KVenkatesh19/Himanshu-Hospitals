import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Smartphone, 
  QrCode, 
  Lock, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';

interface AbhaLinkingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (abhaId: string) => void;
}

export const AbhaLinkingModal: React.FC<AbhaLinkingModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  if (!isOpen) return null;

  const [abhaNumber, setAbhaNumber] = useState('91-8821-4091-2311');
  const [authMethod, setAuthMethod] = useState<'aadhaar_otp' | 'mobile_otp'>('mobile_otp');
  const [otpCode, setOtpCode] = useState('');
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(2);
      setOtpCode('749201'); // prefill mock OTP for smooth verification
    }, 500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(3);
      onSuccess(abhaNumber);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0A0E1A] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Link ABDM / ABHA Health ID
              </h3>
              <p className="text-xs text-slate-400">
                National Digital Health Network (MoHFW)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close ABHA modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <form onSubmit={handleRequestOtp} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  14-Digit ABHA Number or Health ID
                </label>
                <input
                  type="text"
                  required
                  value={abhaNumber}
                  onChange={(e) => setAbhaNumber(e.target.value)}
                  placeholder="e.g. 91-8821-4091-2311"
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm font-mono text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Authentication Channel
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setAuthMethod('mobile_otp')}
                    className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors ${
                      authMethod === 'mobile_otp'
                        ? 'border-blue-600 bg-blue-50/60 font-semibold text-blue-900'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Mobile OTP (Linked SIM)
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthMethod('aadhaar_otp')}
                    className={`p-2.5 rounded-lg border text-left cursor-pointer transition-colors ${
                      authMethod === 'aadhaar_otp'
                        ? 'border-blue-600 bg-blue-50/60 font-semibold text-blue-900'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Aadhaar Biometric / OTP
                  </button>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg text-[11px] text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  <span>256-Bit Encrypted MoHFW Gateway</span>
                </div>
                <p>
                  By linking, you consent to secure interoperable retrieval of diagnostic lab tests, discharge summaries, and OPD electronic prescriptions.
                </p>
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isVerifying ? (
                  <span>Generating Secure OTP...</span>
                ) : (
                  <>
                    <span>Generate OTP</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  Enter 6-Digit OTP
                </h4>
                <p className="text-xs text-slate-500">
                  Sent to mobile linked with ABHA ({abhaNumber})
                </p>
              </div>

              <div>
                <input
                  type="text"
                  maxLength={6}
                  required
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  className="w-full text-center tracking-[0.5em] text-xl font-mono font-bold p-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="000000"
                />
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isVerifying ? (
                  <span>Verifying with ABDM Gateway...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Authorize & Link Health Card</span>
                  </>
                )}
              </button>
            </form>
          )}

          {step === 3 && (
            <div className="text-center space-y-4 py-2">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  ABHA ID Successfully Linked!
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-mono">
                  {abhaNumber} · Active Patient
                </p>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 text-left space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Records Automatically Synchronized:</span>
                </div>
                <ul className="list-disc pl-5 text-[11px] text-emerald-800 space-y-0.5">
                  <li>Comprehensive Lipid Profile (NABL)</li>
                  <li>Cardiology OPD Electronic Prescription</li>
                  <li>Live Queue Token #42</li>
                </ul>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold"
              >
                Done
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
