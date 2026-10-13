import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  Video, 
  FileText, 
  Package, 
  Activity, 
  ChevronLeft, 
  ChevronRight,
  HeartPulse,
  Radio
} from 'lucide-react';
import { CAMPUSES_DATA } from '../data/hospitalData';

interface HeroSectionProps {
  onSearch: (query: string, campus: string, type: string) => void;
  onOpenBooking: () => void;
  onOpenTeleConsult: () => void;
  onOpenAbdm: () => void;
  onOpenPackages: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onOpenBooking,
  onOpenTeleConsult,
  onOpenAbdm,
  onOpenPackages
}) => {
  const [activeTab, setActiveTab] = useState<'doctor' | 'symptom' | 'diagnostic'>('doctor');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCampus, setSelectedCampus] = useState(CAMPUSES_DATA[0].id);
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Robotic Hybrid Operating Suite',
      subtitle: 'Real-time bed triage & telemetry active',
      imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
      bedsAvailable: 8,
      status: 'Connected'
    },
    {
      title: 'Azurion Biplane Cath Lab',
      subtitle: 'Door-to-balloon rapid coronary intervention bay',
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      bedsAvailable: 4,
      status: 'Standby Ready'
    },
    {
      title: 'Neuro-Critical Resuscitation Bay',
      subtitle: 'Mechanical thrombectomy and acute stroke unit',
      imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
      bedsAvailable: 6,
      status: 'Connected'
    }
  ];

  const currentSlideData = heroSlides[heroSlide];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, selectedCampus, activeTab);
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 pb-12 px-4 sm:px-8 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Accreditation Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>NABH & NABL Accredited | ABDM Interoperable</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              World-Class Clinical Precision.{' '}
              <span className="text-blue-600 block sm:inline">Compassionate, Connected Care.</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              NABH-accredited multi-specialty tertiary care hospital network with seamless ABDM digital health records, verified super-specialists, and rapid Golden Hour intervention.
            </p>

            {/* Interactive Search Card */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200/80 p-4 sm:p-5 transition-shadow hover:shadow-xl">
              {/* Tab Selector */}
              <div className="flex items-center gap-1 sm:gap-2 border-b border-slate-200 pb-3 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('doctor')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'doctor'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  <span>Find Doctor</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('symptom')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'symptom'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                  <span>Symptom / Condition</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('diagnostic')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    activeTab === 'diagnostic'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Diagnostic & Lab</span>
                </button>
              </div>

              {/* Input row */}
              <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-2.5">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      activeTab === 'doctor'
                        ? 'Specialty or Doctor Name (e.g. Cardiologist)'
                        : activeTab === 'symptom'
                        ? 'Enter symptom (e.g. Chest pain, Knee stiffness)'
                        : 'Lab test or scan (e.g. Lipid Profile, MRI Brain)'
                    }
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="relative md:w-56">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <select
                    value={selectedCampus}
                    onChange={(e) => setSelectedCampus(e.target.value)}
                    aria-label="Select hospital campus"
                    className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none transition-all font-medium cursor-pointer"
                  >
                    {CAMPUSES_DATA.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                    <span className="text-xs">▼</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Quick Pills Below Search */}
              <div className="flex flex-wrap items-center gap-2 pt-3 mt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>Book OPD Slot</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenTeleConsult}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <Video className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tele-Consultation</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenAbdm}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  <span>ABDM Lab Reports</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenPackages}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <Package className="w-3.5 h-3.5 text-amber-600" />
                  <span>Health Packages</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Operating Theatre & Live Telemetry */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/3] bg-slate-950 group">
              <img
                src={currentSlideData.imageUrl}
                alt={currentSlideData.title}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 brightness-95"
              />

              {/* Blue atmospheric tint gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

              {/* Carousel controls */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-900/70 backdrop-blur-md rounded-full p-1 border border-white/10 z-10">
                <button
                  onClick={() => setHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-white/70 font-mono px-1">
                  {heroSlide + 1}/{heroSlides.length}
                </span>
                <button
                  onClick={() => setHeroSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Live OT & Trauma Watch Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
                      <Radio className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        Live OT & Trauma Watch
                      </h4>
                      <p className="text-[11px] text-slate-300">
                        {currentSlideData.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2.5 py-1 rounded-full text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>● Connected</span>
                  </div>
                </div>

                {/* Vitals Telemetry bar */}
                <div className="mt-2.5 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[10px] text-slate-300 font-mono">
                  <span>Cath Bays: {currentSlideData.bedsAvailable} Ready</span>
                  <span className="text-emerald-400">ICU Telemetry: Normal Sinus</span>
                  <span className="text-blue-300">ABDM Sync: Live</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
