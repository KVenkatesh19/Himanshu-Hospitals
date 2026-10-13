import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { RECOVERY_STORIES_DATA } from '../data/hospitalData';

export const ClinicalStoriesSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
          PATIENT TRUST & CLINICAL IMPACT
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Verified Clinical Recovery Stories
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Real patient accounts documenting clinical precision, nursing empathy, and seamless ABDM discharge support.
        </p>
      </div>

      {/* 3 Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RECOVERY_STORIES_DATA.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Stars & Condition Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-blue-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  {story.badgeText}
                </span>
              </div>

              {/* Patient quote */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                {story.story}
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-800 shrink-0">
                {story.patientInitial}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  {story.patientName}
                </h4>
                <p className="text-[11px] text-slate-500 truncate">
                  {story.campus} | Treated by {story.treatedBy}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
