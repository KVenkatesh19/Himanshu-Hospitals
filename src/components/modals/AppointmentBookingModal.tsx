import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  QrCode,
  Video,
  Hospital
} from 'lucide-react';
import { DOCTORS_DATA, CAMPUSES_DATA } from '../../data/hospitalData';
import { Doctor } from '../../types/hospital';

interface AppointmentBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: Doctor | null;
  onSuccessBooking?: (appointment: any) => void;
}

export const AppointmentBookingModal: React.FC<AppointmentBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctor,
  onSuccessBooking
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDocId, setSelectedDocId] = useState<string>(preselectedDoctor?.id || DOCTORS_DATA[0].id);
  const [selectedCampusId, setSelectedCampusId] = useState<string>(preselectedDoctor?.campusId || CAMPUSES_DATA[0].id);
  const [consultType, setConsultType] = useState<'OPD_IN_PERSON' | 'TELE_CONSULT'>('OPD_IN_PERSON');
  const [selectedDate, setSelectedDate] = useState<string>('Today, 13 Oct');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('03:30 PM');
  
  // Patient details form
  const [patientName, setPatientName] = useState('Rahul K. Sharma');
  const [patientPhone, setPatientPhone] = useState('+91 98765 43210');
  const [patientAge, setPatientAge] = useState('42');
  const [abhaId, setAbhaId] = useState('91-8821-4091-2311');
  const [hasTpa, setHasTpa] = useState(false);

  // Confirmed booking state
  const [confirmedToken, setConfirmedToken] = useState<number | null>(null);

  const currentDoctor = DOCTORS_DATA.find(d => d.id === selectedDocId) || DOCTORS_DATA[0];
  const currentCampus = CAMPUSES_DATA.find(c => c.id === selectedCampusId) || CAMPUSES_DATA[0];

  const timeSlots = [
    '09:30 AM', '10:15 AM', '11:00 AM', '02:15 PM', '03:30 PM', '04:45 PM', '05:30 PM'
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const token = Math.floor(Math.random() * 20) + 40; // e.g. #45
    setConfirmedToken(token);
    setStep(3);

    if (onSuccessBooking) {
      onSuccessBooking({
        tokenNumber: token,
        doctor: currentDoctor,
        campus: currentCampus,
        time: selectedTimeSlot,
        date: selectedDate,
        patientName,
        type: consultType
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              H+
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {step === 3 ? 'Appointment Confirmed' : 'Book Specialist Appointment'}
              </h3>
              <p className="text-xs text-slate-300">
                {step === 3 ? 'OPD Token Generated & Synced with ABDM' : 'NABH Verified Slot Reservation'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <div className="space-y-5">
              {/* Consultation Type Selector */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Consultation Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultType('OPD_IN_PERSON')}
                    className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                      consultType === 'OPD_IN_PERSON'
                        ? 'border-blue-600 bg-blue-50/60 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Hospital className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">In-Person OPD</div>
                      <div className="text-[11px] text-slate-500">Visit campus clinic</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultType('TELE_CONSULT')}
                    className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                      consultType === 'TELE_CONSULT'
                        ? 'border-blue-600 bg-blue-50/60 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Video className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Tele-Consultation</div>
                      <div className="text-[11px] text-slate-500">Encrypted HD video call</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Select Doctor */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Select Specialist
                </label>
                <select
                  value={selectedDocId}
                  onChange={(e) => setSelectedDocId(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  {DOCTORS_DATA.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} — {d.department} ({d.campusName})
                    </option>
                  ))}
                </select>
              </div>

              {/* Campus */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Hospital Campus
                </label>
                <select
                  value={selectedCampusId}
                  onChange={(e) => setSelectedCampusId(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                >
                  {CAMPUSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} — {c.city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Select Available Time Slot
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['Today, 13 Oct', 'Tomorrow, 14 Oct', 'Wed, 15 Oct'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                        selectedDate === d
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`p-2 text-center rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                        selectedTimeSlot === slot
                          ? 'bg-blue-600 text-white shadow-xs font-bold'
                          : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Doctor Quick Preview Card */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                <img
                  src={currentDoctor.photoUrl}
                  alt={currentDoctor.name}
                  className="w-12 h-12 rounded-lg object-cover border border-slate-200"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-slate-900">{currentDoctor.name}</div>
                  <div className="text-[11px] text-slate-500 truncate">{currentDoctor.specialtyTag}</div>
                  <div className="text-[11px] text-blue-600 font-medium">Fee: ₹{currentDoctor.consultationFee} (Cashless Empaneled)</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue to Patient Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleConfirm} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Patient Full Name
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Enter full legal name"
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    required
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    placeholder="42"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Ayushman Bharat Health Account (ABHA ID)
                  </label>
                  <span className="text-[11px] text-blue-600 font-medium">Recommended</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={abhaId}
                    onChange={(e) => setAbhaId(e.target.value)}
                    placeholder="91-8821-4091-2311"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-mono focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center text-emerald-600 text-xs font-semibold gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Linked</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Enables paperless prescription and instant NABL lab sync.
                </p>
              </div>

              {/* TPA checkbox */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasTpa}
                    onChange={(e) => setHasTpa(e.target.checked)}
                    className="mt-1 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900">Avail Cashless TPA / Ayushman Bharat PM-JAY</span>
                    <p className="text-slate-500 mt-0.5">
                      Show your insurance card or PM-JAY golden card at Desk #4 for 100% cashless coverage.
                    </p>
                  </div>
                </label>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Slot Reservation</span>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center space-y-4 py-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-slate-900">
                  Appointment Confirmed!
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Confirmation SMS & WhatsApp sent to <strong className="text-slate-700">{patientPhone}</strong>
                </p>
              </div>

              {/* Token Ticket Card */}
              <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 text-left space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] text-blue-400 font-mono uppercase tracking-wider block">
                      Live Queue Token
                    </span>
                    <span className="text-2xl font-extrabold text-white font-mono">
                      #{confirmedToken}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">Room</span>
                    <span className="text-sm font-bold text-white font-mono">
                      {currentDoctor.opdRoom}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Specialist</span>
                    <strong className="text-white">{currentDoctor.name}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Time</span>
                    <strong className="text-white">{selectedDate}, {selectedTimeSlot}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Campus</span>
                    <strong className="text-white">{currentCampus.name}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">ABHA ID</span>
                    <strong className="text-emerald-400 font-mono">{abhaId}</strong>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 flex items-center gap-2 text-left">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  Please arrive 15 minutes before your time slot. Live queue progression is actively tracked in your Patient Portal and Mobile App.
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
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
