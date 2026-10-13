import React from 'react';
import { 
  X, 
  CheckCircle, 
  Star, 
  MapPin, 
  Clock, 
  Award, 
  BookOpen, 
  Languages, 
  CalendarCheck,
  ShieldCheck,
  Video
} from 'lucide-react';
import { Doctor } from '../../types/hospital';

interface DoctorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
  onBookSlot: (doctor: Doctor) => void;
}

export const DoctorProfileModal: React.FC<DoctorProfileModalProps> = ({
  isOpen,
  onClose,
  doctor,
  onBookSlot
}) => {
  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-blue-400 font-semibold uppercase">
              Super-Specialist Credential Dossier
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close doctor profile"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {/* Doctor Header Banner */}
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <img
                src={doctor.photoUrl}
                alt={doctor.name}
                className="w-20 h-20 rounded-xl object-cover border-2 border-slate-200 shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white">
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide block">
                {doctor.department}
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {doctor.name}
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                {doctor.qualifications}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                  {doctor.rating}
                </span>
                <span className="text-slate-400 text-xs">({doctor.totalReviews} verified reviews)</span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-semibold text-blue-700">
                  {doctor.experienceYears}+ Yrs Exp
                </span>
              </div>
            </div>
          </div>

          {/* Badges */}
          {doctor.badges && doctor.badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {doctor.badges.map((b, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  <span>{b}</span>
                </span>
              ))}
            </div>
          )}

          {/* Biography */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Clinical Background & Expertise
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Practice Location & Timings */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-700">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="font-semibold">{doctor.campusName}</span>
              </div>
              <span className="font-mono text-slate-600">{doctor.opdRoom}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-700">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Next Slot: <strong className="text-slate-900">{doctor.nextAvailable}</strong></span>
              </div>
              <span className="font-semibold text-blue-700">Fee: ₹{doctor.consultationFee}</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-600 pt-1 border-t border-slate-200">
              <Languages className="w-4 h-4 text-slate-400" />
              <span>Languages: {doctor.languages.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Modal Action */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Cashless TPA & PM-JAY Empaneled
          </div>
          <button
            onClick={() => {
              onClose();
              onBookSlot(doctor);
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book OPD Slot</span>
          </button>
        </div>

      </div>
    </div>
  );
};
