import React, { useState } from 'react';
import { 
  Play, 
  RotateCw, 
  Maximize2, 
  Cpu, 
  Layers, 
  Wind, 
  CheckCircle,
  Eye,
  Pause
} from 'lucide-react';

export const RoboticTheatreVirtualTour: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeViewMode, setActiveViewMode] = useState<'mako' | 'cath' | 'airflow'>('mako');

  const tourFeatures = [
    {
      id: 'mako',
      icon: Cpu,
      title: 'Mako 3.0 Robotic Joint Arm',
      description: 'CT-guided robotic bone resection with bone preservation and micro-recovery.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
      specs: '0.5mm Bone Resection Boundary'
    },
    {
      id: 'cath',
      icon: Layers,
      title: 'Azurion Biplane Cath Lab',
      description: 'Ultra-low dose radiation 3D coronary mapping & real-time stent visualization.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
      specs: 'ClarityIQ 73% Dose Reduction'
    },
    {
      id: 'airflow',
      icon: Wind,
      title: 'Laminar Positive Pressure Airflow',
      description: 'Zero-infection HEPA class-100 sterile operating environments.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      specs: 'ISO Class 5 Air Cleansing'
    }
  ];

  const currentFeature = tourFeatures.find(f => f.id === activeViewMode) || tourFeatures[0];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
          STATE-OF-THE-ART CLINICAL INFRASTRUCTURE
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Virtual Tour: Inside Himanshu Advanced Robotic Theatres
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          Step inside Asia's advanced digital biplane Cath Labs, Mako robotic joint suites, and laminar airflow surgical complexes.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Video / 360 Tour Player */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/10] bg-slate-950 group">
            <img
              src={currentFeature.image}
              alt="Himanshu Advanced Robotic Theatre"
              className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105 filter brightness-105' : 'group-hover:scale-102 brightness-90'}`}
            />

            {/* Dark overlay with interactive play button */}
            <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center shadow-2xl backdrop-blur-xs transition-all hover:scale-110 cursor-pointer"
                aria-label={isPlaying ? 'Pause virtual tour' : 'Play 360 virtual tour'}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                )}
              </button>
            </div>

            {/* Top Tour Angle Switchers */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 pointer-events-auto">
                {tourFeatures.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveViewMode(f.id as any)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold backdrop-blur-md transition-colors cursor-pointer ${
                      activeViewMode === f.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-black/60 text-white/80 hover:bg-black/80'
                    }`}
                  >
                    {f.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {isPlaying && (
                <div className="bg-red-600 text-white px-2 py-0.5 rounded text-[11px] font-mono font-bold flex items-center gap-1.5 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>LIVE 360° STREAM</span>
                </div>
              )}
            </div>

            {/* Bottom Bar: 4K Ultra-HD 360° Tour & Duration */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium bg-black/60 backdrop-blur-md rounded-lg px-3.5 py-2">
              <div className="flex items-center gap-2">
                <RotateCw className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>4K Ultra-HD 360° Tour</span>
              </div>
              <span className="font-mono text-slate-300">03:45 Mins</span>
            </div>
          </div>
        </div>

        {/* Right Feature Highlights */}
        <div className="lg:col-span-5 space-y-4">
          {tourFeatures.map((feat) => {
            const Icon = feat.icon;
            const isSelected = activeViewMode === feat.id;
            return (
              <div
                key={feat.id}
                onClick={() => setActiveViewMode(feat.id as any)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50/70 border-blue-300 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-blue-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900">
                        {feat.title}
                      </h4>
                      {isSelected && (
                        <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                          Viewing
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>{feat.specs}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
