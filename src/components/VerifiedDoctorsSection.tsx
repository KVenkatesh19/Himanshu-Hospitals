import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Languages, 
  Video, 
  User, 
  SlidersHorizontal, 
  Star,
  CheckCircle,
  CalendarCheck
} from 'lucide-react';
import { DOCTORS_DATA } from '../data/hospitalData';
import { Doctor } from '../types/hospital';

interface VerifiedDoctorsSectionProps {
  onBookDoctor: (doctor: Doctor) => void;
  onViewDoctorProfile: (doctor: Doctor) => void;
}

export const VerifiedDoctorsSection: React.FC<VerifiedDoctorsSectionProps> = ({
  onBookDoctor,
  onViewDoctorProfile
}) => {
  const [activeSpecialty, setActiveSpecialty] = useState<string>('all');

  const specialties = [
    { id: 'all', label: 'All Specialties' },
    { id: 'Cardiology & Cath Lab', label: 'Cardiology' },
    { id: 'Neurology & Stroke', label: 'Neurology' },
    { id: 'Orthopedics & Robotic Joints', label: 'Orthopedics' }
  ];

  const filteredDoctors = activeSpecialty === 'all'
    ? DOCTORS_DATA
    : DOCTORS_DATA.filter(doc => doc.department === activeSpecialty);

  return (
    <section id="find-doctors" className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
            VERIFIED MEDICAL STAFF
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Book In-Person & Tele-OPD Specialists
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            Direct slot reservation with board-certified consultants across campuses.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {specialties.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSpecialty(item.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                activeSpecialty === item.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setActiveSpecialty('all')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Doctor Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.slice(0, 3).map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow p-5 flex flex-col justify-between"
          >
            <div>
              {/* Top Doctor Profile Row */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative shrink-0">
                  <img
                    src={doctor.photoUrl}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-lg object-cover border border-slate-200 shadow-2xs"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-semibold text-blue-600 block mb-0.5">
                    {doctor.specialtyTag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 truncate">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium truncate">
                    {doctor.qualifications}
                  </p>
                  <span className="text-xs font-semibold text-blue-700 block mt-0.5">
                    {doctor.experienceYears}+ Years Experience
                  </span>
                </div>
              </div>

              {/* Location & Schedule Details */}
              <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-medium text-slate-800">{doctor.campusName}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-800 font-medium">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Next: <strong className="text-slate-900 font-semibold">{doctor.nextAvailable}</strong></span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Languages className="w-3.5 h-3.5 text-slate-400" />
                    <span>Languages: <span className="text-slate-700">{doctor.languages.join(', ')}</span></span>
                  </div>
                  {doctor.mode.includes('Video & In-Clinic') && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      <Video className="w-3 h-3" />
                      <span>Video & In-Clinic</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex items-center gap-2">
              <button
                onClick={() => onBookDoctor(doctor)}
                className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book OPD Slot</span>
              </button>
              <button
                onClick={() => onViewDoctorProfile(doctor)}
                className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 rounded-lg transition-colors cursor-pointer"
                aria-label="View doctor profile"
                title="View full credentials & clinical biography"
              >
                <User className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
