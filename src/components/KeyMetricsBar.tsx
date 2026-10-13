import React from 'react';
import { UserCheck, ShieldAlert, Ambulance, Network, CheckCircle } from 'lucide-react';

export const KeyMetricsBar: React.FC = () => {
  const metrics = [
    {
      icon: UserCheck,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      value: '500+',
      label: 'Super Specialists',
      badge: 'Verified',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      description: 'Board-certified clinicians from premier AIIMS, PGI & global institutions.'
    },
    {
      icon: ShieldAlert,
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50',
      value: '24x7',
      label: 'Level-1 Trauma & Cath Lab',
      badge: 'NABH Tier-1',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200',
      description: 'Comprehensive resuscitation bays with dedicated in-house neuro & cardiac teams.'
    },
    {
      icon: Ambulance,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
      value: '15-Min',
      label: 'Avg Fleet Response',
      badge: 'GPS-Tracked',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
      description: 'Equipped with automated CPR, telemedicine monitors and ventilator systems.'
    },
    {
      icon: Network,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      value: 'ABDM / ABHA',
      label: 'Instant Interoperability',
      badge: 'MoHFW Ready',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      description: 'Zero-friction medical record linking across nationwide clinical networks.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-lg ${item.iconBg} flex items-center justify-center ${item.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-2">
                  {item.label}
                </h4>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
