import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MessageSquare, 
  FileText, 
  Download, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  RefreshCw,
  Eye,
  Hash
} from 'lucide-react';
import { HEALTH_RECORDS_DATA } from '../data/hospitalData';
import { HealthRecord } from '../types/hospital';

interface AbdmPassportSectionProps {
  onLinkAbha: () => void;
  onCheckToken: () => void;
  onViewRecord: (record: HealthRecord) => void;
}

export const AbdmPassportSection: React.FC<AbdmPassportSectionProps> = ({
  onLinkAbha,
  onCheckToken,
  onViewRecord
}) => {
  const [currentToken, setCurrentToken] = useState(39);
  const myToken = 42;
  const waitMinutes = Math.max(0, (myToken - currentToken) * 4);

  const handleSimulateQueueStep = () => {
    if (currentToken < myToken) {
      setCurrentToken(prev => prev + 1);
    } else {
      setCurrentToken(38);
    }
  };

  return (
    <section id="abdm-records" className="bg-[#0A0E1A] text-white py-16 px-4 sm:px-8 mb-20 scroll-mt-24 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/80 border border-blue-800/80 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Ayushman Bharat Digital Mission (ABDM) Compliant</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Your Health Records, Safe, Unified & Instantly Accessible.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect your 14-digit ABHA ID to access paperless prescriptions, real-time live OPD queue tokens, NABL diagnostic lab results, and automated follow-up tele-consultations directly on your phone.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                <div className="w-7 h-7 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2 font-mono font-bold text-sm">
                  #
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Live OPD Token Monitor</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Track queue progression in real-time. Avoid waiting room congestion.
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                <div className="w-7 h-7 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">WhatsApp Lab Sync</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  NABL verified lab and MRI reports delivered to your verified WhatsApp.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onLinkAbha}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Link ABHA ID / Health Card</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onCheckToken}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Check OPD Token Status</span>
              </button>
            </div>
          </div>

          {/* Right Column: Himanshu Health Passport Card */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    HA
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      Himanshu Health Passport
                    </h3>
                    <p className="text-xs font-mono text-slate-500 font-medium">
                      ABHA: 91-8821-4091-2311
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Active Patient
                </span>
              </div>

              {/* Live OPD Queue Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Live OPD Queue Tracking
                    </span>
                  </div>
                  <span className="text-sm font-extrabold text-blue-600 font-mono">
                    Token #{myToken}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs">
                  <div className="text-slate-600">
                    Current Token Consulting: <strong className="text-slate-900 font-bold font-mono">#{currentToken}</strong>
                  </div>
                  <div className="text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Est. Wait: <strong className="text-slate-800">~{waitMinutes} mins</strong></span>
                  </div>
                </div>

                {/* Simulation trigger */}
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Dr. Rajesh V. Raman · Room 204</span>
                  <button
                    onClick={handleSimulateQueueStep}
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 cursor-pointer"
                    title="Advance OPD Queue token"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Simulate Next Patient</span>
                  </button>
                </div>
              </div>

              {/* Verified Clinical Records List */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    VERIFIED CLINICAL RECORDS
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">2 Available</span>
                </div>

                <div className="space-y-2">
                  {HEALTH_RECORDS_DATA.map((record) => (
                    <div
                      key={record.id}
                      className="p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-slate-900 truncate">
                            {record.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 truncate">
                            {record.doctorName}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => onViewRecord(record)}
                          className="px-2.5 py-1 text-xs font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-200 hover:border-blue-600 rounded transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Eye className="w-3 h-3" />
                          <span>View</span>
                        </button>
                        <button
                          onClick={() => onViewRecord(record)}
                          className="px-2 py-1 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 rounded transition-colors flex items-center gap-1 cursor-pointer"
                          title="Download official PDF with digital signature"
                        >
                          <Download className="w-3 h-3" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
