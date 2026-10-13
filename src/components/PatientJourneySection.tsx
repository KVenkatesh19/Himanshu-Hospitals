import React from 'react';
import { ArrowRight, FileCheck, Shield, Clock, Pill } from 'lucide-react';

interface PatientJourneySectionProps {
  onOpenChecklist: () => void;
  onOpenTpa: () => void;
  onOpenTimings: () => void;
  onOpenPharmacy: () => void;
}

export const PatientJourneySection: React.FC<PatientJourneySectionProps> = ({
  onOpenChecklist,
  onOpenTpa,
  onOpenTimings,
  onOpenPharmacy
}) => {
  const steps = [
    {
      number: '01',
      title: 'Pre-Visit Checklist',
      description: 'Carry Government Photo ID (Aadhaar / Voter ID), previous clinical prescriptions, past imaging discs, and list of ongoing medications.',
      linkText: 'Download Checklist PDF',
      onClick: onOpenChecklist
    },
    {
      number: '02',
      title: 'Cashless & TPA Desk',
      description: 'Empaneled with 50+ private insurance providers, corporate TPAs, and central/state Ayushman Bharat PM-JAY programs.',
      linkText: 'Verify Empaneled Insurer',
      onClick: onOpenTpa
    },
    {
      number: '03',
      title: 'OPD & Visitor Timings',
      description: 'Consultations run 08:00 AM - 08:00 PM. Inpatient visitor hours: 05:00 PM - 07:00 PM daily. Free multi-level valet parking on all campuses.',
      linkText: 'Visitor Guidelines',
      onClick: onOpenTimings
    },
    {
      number: '04',
      title: 'Follow-up & Pharmacy',
      description: 'Schedule free 7-day post-op reviews online. Order home doorstep medication delivery through hospital integrated pharmacy.',
      linkText: 'Order Medication Refills',
      onClick: onOpenPharmacy
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
          PATIENT JOURNEY
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Visit Preparation & Care Guide
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Everything you and your caregiver need to know before visiting our tertiary medical centers.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                {step.number}
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {step.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                {step.description}
              </p>
            </div>

            <button
              onClick={step.onClick}
              className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group-hover:translate-x-0.5"
            >
              <span>{step.linkText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
