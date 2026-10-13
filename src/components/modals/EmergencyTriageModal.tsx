import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  AlertTriangle, 
  MapPin, 
  Ambulance, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Navigation,
  ShieldAlert
} from 'lucide-react';
import { CAMPUSES_DATA } from '../../data/hospitalData';

interface EmergencyTriageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyTriageModal: React.FC<EmergencyTriageModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [triageCategory, setTriageCategory] = useState<'cardiac' | 'stroke' | 'trauma' | 'pediatric'>('cardiac');
  const [patientLocation, setPatientLocation] = useState('Indiranagar 100ft Road, Bengaluru (GPS Detected)');
  const [isDispatched, setIsDispatched] = useState(false);
  const [etaMinutes, setEtaMinutes] = useState(11);

  const categories = [
    {
      id: 'cardiac',
      name: 'Severe Chest Pain / Heart Attack',
      protocol: 'Door-to-Balloon < 60 mins. Cath Lab team on immediate standby.',
      color: 'border-rose-500 bg-rose-50/50 text-rose-900'
    },
    {
      id: 'stroke',
      name: 'Acute Stroke Code (Face / Arm / Speech)',
      protocol: 'Door-to-Needle < 45 mins. CT Angio & Thrombectomy ready.',
      color: 'border-purple-500 bg-purple-50/50 text-purple-900'
    },
    {
      id: 'trauma',
      name: 'Level-1 Polytrauma / Road Accident',
      protocol: 'Comprehensive resuscitation bay with orthopedics & neuro surgery.',
      color: 'border-amber-500 bg-amber-50/50 text-amber-900'
    },
    {
      id: 'pediatric',
      name: 'Pediatric / Neonatal Emergency',
      protocol: 'Level-III NICU / PICU retrieval transport equipped with neonatal ventilators.',
      color: 'border-blue-500 bg-blue-50/50 text-blue-900'
    }
  ];

  const handleDispatch = () => {
    setIsDispatched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-rose-200 w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-rose-950 text-white px-6 py-4 flex items-center justify-between border-b border-rose-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-rose-600 flex items-center justify-center text-white animate-pulse">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <span>Golden Hour Emergency Triage</span>
              </h3>
              <p className="text-xs text-rose-300">
                24x7 Level-1 Trauma & Mobile Cath Lab Dispatch
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-rose-300 hover:text-white rounded-lg hover:bg-rose-900 transition-colors cursor-pointer"
            aria-label="Close emergency modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {/* Urgent Direct Callout */}
          <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block">
                Immediate Clinical Hotline
              </span>
              <div className="text-xl font-extrabold text-rose-950 font-mono">
                108 / +91 80 4900 1100
              </div>
            </div>
            <a
              href="tel:108"
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg text-xs shadow-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 108 Now</span>
            </a>
          </div>

          {!isDispatched ? (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Select Emergency Severity & Protocol
                </label>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => setTriageCategory(cat.id as any)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        triageCategory === cat.id
                          ? `${cat.color} border-2 shadow-xs`
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-900">
                          {cat.name}
                        </h4>
                        {triageCategory === cat.id && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1">
                        {cat.protocol}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
                  Ambulance Pickup Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={patientLocation}
                    onChange={(e) => setPatientLocation(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                  />
                  <MapPin className="w-4 h-4 text-rose-600 absolute left-3 top-3" />
                </div>
              </div>

              <button
                type="button"
                onClick={handleDispatch}
                className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-extrabold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Ambulance className="w-5 h-5" />
                <span>Dispatch Nearest Level-1 ICU Fleet (<span className="underline">Avg 15 Min SLA</span>)</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4 text-center py-2">
              <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto border-4 border-rose-200">
                <Ambulance className="w-8 h-8 animate-bounce" />
              </div>

              <div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 inline-block mb-1">
                  AMBULANCE DISPATCHED
                </span>
                <h4 className="text-lg font-extrabold text-slate-900">
                  Unit #KA-01-ER-892 En Route
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Assigned from {CAMPUSES_DATA[0].name}
                </p>
              </div>

              {/* Status HUD */}
              <div className="bg-slate-900 text-white rounded-xl p-4 text-left font-mono text-xs space-y-2 border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Estimated Arrival (ETA):</span>
                  <span className="text-rose-400 font-bold text-sm">~{etaMinutes} Minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Onboard Equipment:</span>
                  <span className="text-emerald-400">Ventilator + Auto-CPR + Telemetry</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">ER Bay Pre-Alert:</span>
                  <span className="text-blue-400 font-bold">Cath Lab Team Mobilized</span>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                A paramedic will call <strong className="text-slate-800">+91 98765 43210</strong> in under 60 seconds to provide pre-arrival guidance.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-xs"
              >
                Close & Keep Live Telemetry Active
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
