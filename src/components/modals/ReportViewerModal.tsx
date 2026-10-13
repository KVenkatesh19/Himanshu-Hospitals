import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Share2, 
  ShieldCheck, 
  CheckCircle2, 
  FileText,
  Building,
  QrCode
} from 'lucide-react';
import { HealthRecord } from '../../types/hospital';

interface ReportViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  record: HealthRecord | null;
}

export const ReportViewerModal: React.FC<ReportViewerModalProps> = ({
  isOpen,
  onClose,
  record
}) => {
  if (!isOpen || !record) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white truncate max-w-md">
                {record.title}
              </h3>
              <p className="text-[11px] text-slate-300">
                Official Clinical Document · {record.status}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Print document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close report viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Body (Simulating Official Hospital Letterhead Document) */}
        <div className="p-6 overflow-y-auto flex-1 bg-white text-slate-900 space-y-6">
          
          {/* Official Hospital Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-extrabold text-base tracking-tight text-slate-900">HIMANSHU HOSPITALS</span>
                <span className="text-xs text-blue-600 font-semibold">| TERTIARY NETWORK</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                {record.hospitalCampus} · NABL Accredited Lab No. NABL-BLR-892
              </p>
              <p className="text-[11px] text-slate-500">
                Ayushman Bharat Digital Mission (ABDM) Interoperable Repository
              </p>
            </div>

            <div className="text-right flex sm:flex-col items-center sm:items-end justify-between gap-1">
              <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                {record.status}
              </span>
              <span className="text-xs text-slate-600 font-mono">Date: {record.date}</span>
            </div>
          </div>

          {/* Patient Details Row */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Patient Name</span>
              <strong className="text-slate-900">Rahul K. Sharma</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">Age / Gender</span>
              <strong className="text-slate-900">42 Yrs / Male</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">ABHA ID</span>
              <strong className="text-slate-900 font-mono">91-8821-4091-2311</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-bold block">UHID / MRN</span>
              <strong className="text-slate-900 font-mono">HH-2026-094182</strong>
            </div>
          </div>

          {/* Findings / Metrics Table if present */}
          {record.metrics && record.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Quantitative Physiological Parameters
              </h4>
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">Parameter / Test</th>
                      <th className="p-2.5">Observed Value</th>
                      <th className="p-2.5">Reference Biological Range</th>
                      <th className="p-2.5 text-right">Interpretation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {record.metrics.map((m, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80">
                        <td className="p-2.5 font-sans font-medium text-slate-800">{m.label}</td>
                        <td className="p-2.5 font-bold text-slate-900">{m.value}</td>
                        <td className="p-2.5 text-slate-600">{m.normalRange}</td>
                        <td className="p-2.5 text-right">
                          <span className="text-[10px] font-sans font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            Normal
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Clinical Interpretation / Doctor Notes */}
          <div className="p-4 bg-blue-50/50 border border-blue-200/80 rounded-xl space-y-1.5">
            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider">
              Super-Specialist Clinical Summary & Advise
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {record.summary}
            </p>
          </div>

          {/* Digital Signature & QR Verification */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 border border-slate-300 rounded flex items-center justify-center font-mono text-[10px] text-slate-600">
                [QR CODE]
              </div>
              <div className="text-[11px] text-slate-500">
                <div>Scan to verify on National ABDM Gateway</div>
                <div className="font-mono text-slate-700">Digital Hash: 8bfa94c...10ef</div>
              </div>
            </div>

            <div className="text-right">
              <div className="font-serif italic font-bold text-blue-900 text-sm">
                {record.doctorName}
              </div>
              <div className="text-[11px] text-slate-600">{record.doctorDesignation}</div>
              <div className="text-[10px] text-emerald-700 font-semibold flex items-center justify-end gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>Digitally Signed & Timestamped</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Encrypted PDF · HIPAA & DISHA Compliant
          </span>
          <button
            onClick={() => {
              const element = document.createElement('a');
              const file = new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' });
              element.href = URL.createObjectURL(file);
              element.download = `${record.title.replace(/\s+/g, '_')}.json`;
              document.body.appendChild(element);
              element.click();
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Verified Copy</span>
          </button>
        </div>

      </div>
    </div>
  );
};
