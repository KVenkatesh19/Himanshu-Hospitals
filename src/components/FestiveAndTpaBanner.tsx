import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, Building, CheckCircle2 } from 'lucide-react';

interface FestiveAndTpaBannerProps {
  onBookPackage: () => void;
  onVerifyTpa: () => void;
}

export const FestiveAndTpaBanner: React.FC<FestiveAndTpaBannerProps> = ({
  onBookPackage,
  onVerifyTpa
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Card 1: 50% Off Festive Health */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50/50 rounded-xl border border-blue-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                50% OFF FESTIVE HEALTH
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              Comprehensive Whole-Body Health Check
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-normal">
              68 Vital Tests including Cardiac ECHO, USG Abdomen & HbA1c
            </p>
          </div>

          <button
            onClick={onBookPackage}
            className="self-start sm:self-center shrink-0 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book @ ₹2,499</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2: Ayushman Bharat & 100% Cashless TPA */}
        <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-xl border border-slate-800 p-5 text-white shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                AYUSHMAN BHARAT & TPA
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              100% Cashless Admission Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-normal">
              Empaneled with Star, Care, HDFC ERGO, ICICI Lombard & PM-JAY
            </p>
          </div>

          <button
            onClick={onVerifyTpa}
            className="self-start sm:self-center shrink-0 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-900 rounded-lg text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Verify TPA</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </button>
        </div>

      </div>
    </section>
  );
};
