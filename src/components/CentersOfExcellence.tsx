import React, { useState } from 'react';
import { 
  HeartPulse, 
  Activity, 
  Brain, 
  Bone, 
  Stethoscope, 
  Baby, 
  Building2, 
  Wind, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { DEPARTMENTS_DATA } from '../data/hospitalData';
import { Department } from '../types/hospital';

interface CentersOfExcellenceProps {
  onSelectDepartment: (dept: Department) => void;
  onViewAllDepartments: () => void;
}

export const CentersOfExcellence: React.FC<CentersOfExcellenceProps> = ({
  onSelectDepartment,
  onViewAllDepartments
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Centers' },
    { id: 'cardiac', label: 'Cardiac & Cath Lab' },
    { id: 'neuro', label: 'Neurology & Stroke' },
    { id: 'ortho', label: 'Robotic Orthopedics' },
    { id: 'onco', label: 'Oncology Care' }
  ];

  const filteredDepartments = activeFilter === 'all'
    ? DEPARTMENTS_DATA
    : DEPARTMENTS_DATA.filter(dept => dept.category === activeFilter);

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-blue-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-blue-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-blue-600" />;
      case 'Bone': return <Bone className="w-5 h-5 text-blue-600" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-blue-600" />;
      case 'Baby': return <Baby className="w-5 h-5 text-blue-600" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-blue-600" />;
      case 'Wind': return <Wind className="w-5 h-5 text-blue-600" />;
      default: return <Activity className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="departments" className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
            CLINICAL SPECIALIZATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Centers of Excellence
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            Super-specialty departments equipped with precision diagnostics and multidisciplinary boards.
          </p>
        </div>

        <button
          onClick={onViewAllDepartments}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group"
        >
          <span>View All 32 Departments</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === tab.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 8 Department Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredDepartments.map((dept) => (
          <div
            key={dept.id}
            className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <div className="group-hover:[&>svg]:text-white transition-colors">
                  {getIcon(dept.iconName)}
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {dept.name}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {dept.description}
              </p>

              {/* Badges / Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {dept.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Link */}
            <button
              onClick={() => onSelectDepartment(dept)}
              className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors w-full cursor-pointer group-hover:text-blue-700"
            >
              <span>Explore Clinical Team</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
