import React from 'react';
import { Phone, MapPin, Train, ArrowRight, Navigation } from 'lucide-react';
import { CAMPUSES_DATA } from '../data/hospitalData';
import { Campus } from '../types/hospital';

interface TertiaryCampusesSectionProps {
  onBookCampus: (campus: Campus) => void;
  onGetDirections: (campus: Campus) => void;
}

export const TertiaryCampusesSection: React.FC<TertiaryCampusesSectionProps> = ({
  onBookCampus,
  onGetDirections
}) => {
  return (
    <section id="campuses" className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
          MULTI-CITY NETWORK
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Our Tertiary Care Campuses
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Advanced infrastructure, helipad connectivity, and rapid emergency units.
        </p>
      </div>

      {/* 4 Campuses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAMPUSES_DATA.map((campus) => (
          <div
            key={campus.id}
            className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Campus Image / Map Preview */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={campus.imageUrl}
                  alt={campus.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                  {campus.badge}
                </div>
              </div>

              {/* Campus Information */}
              <div className="p-4 space-y-2.5">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {campus.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed min-h-[36px]">
                  {campus.address}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-1.5 text-rose-600 font-semibold">
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>ER Hotline: <span className="font-mono">{campus.erHotline}</span></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Metro: <strong className="text-slate-700 font-medium">{campus.metroInfo}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 pt-0 grid grid-cols-2 gap-2">
              <button
                onClick={() => onGetDirections(campus)}
                className="py-1.5 px-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <Navigation className="w-3 h-3 text-blue-600" />
                <span>Get Directions</span>
              </button>
              <button
                onClick={() => onBookCampus(campus)}
                className="py-1.5 px-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Book Care</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
