import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Search, 
  User, 
  ChevronRight, 
  ShieldAlert, 
  Activity, 
  Smartphone, 
  Cpu, 
  Globe2, 
  Menu, 
  X,
  Stethoscope,
  CalendarCheck
} from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
  onOpenPatientPortal: () => void;
  onOpenTpa: () => void;
  currentView: 'desktop' | 'mobile' | 'qa';
  onViewChange: (view: 'desktop' | 'mobile' | 'qa') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenEmergency,
  onOpenPatientPortal,
  onOpenTpa,
  currentView,
  onViewChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'HI' | 'KN'>('EN');
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'larger'>('normal');

  const handleFontChange = (level: 'normal' | 'large' | 'larger') => {
    setFontSizeLevel(level);
    const root = document.documentElement;
    if (level === 'normal') root.style.fontSize = '16px';
    if (level === 'large') root.style.fontSize = '17.5px';
    if (level === 'larger') root.style.fontSize = '19px';
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-xs">
      {/* View Switcher Bar for Reviewers & Engineers */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-[11px] font-semibold border border-blue-500/30">
            SYSTEM MODES
          </span>
          <span className="hidden sm:inline text-slate-400">
            Switch between full hospital portal, patient mobile app, or QA test runner:
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onViewChange('desktop')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'desktop'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>Hospital Website</span>
          </button>
          <button
            onClick={() => onViewChange('mobile')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'mobile'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Patient Mobile App (iOS/Android)</span>
          </button>
          <button
            onClick={() => onViewChange('qa')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
              currentView === 'qa'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>QA Tests & ADR Specs</span>
          </button>
        </div>
      </div>

      {/* Top Emergency & Accreditation Bar */}
      <div className="bg-[#0B0F19] text-white text-xs px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button 
              onClick={onOpenEmergency}
              className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-semibold px-2.5 py-0.5 rounded-full transition-colors cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span>24x7 Emergency & Trauma: 108 / +91 (0) 80 4900 1100</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-slate-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>NABH & NABL Accredited | ABDM Integrated</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-slate-300 font-mono text-[11px]">
              <span className="text-slate-400 mr-1">Font:</span>
              <button 
                onClick={() => handleFontChange('normal')} 
                className={`hover:text-white px-1 ${fontSizeLevel === 'normal' ? 'text-blue-400 font-bold' : ''}`}
                title="Default font size"
              >
                A-
              </button>
              <button 
                onClick={() => handleFontChange('large')} 
                className={`hover:text-white px-1 ${fontSizeLevel === 'large' ? 'text-blue-400 font-bold' : ''}`}
                title="Large font size"
              >
                A
              </button>
              <button 
                onClick={() => handleFontChange('larger')} 
                className={`hover:text-white px-1 ${fontSizeLevel === 'larger' ? 'text-blue-400 font-bold' : ''}`}
                title="Largest font size"
              >
                A+
              </button>
            </div>

            <div className="h-3 w-px bg-slate-700"></div>

            <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
              <button 
                onClick={() => setLanguage('EN')} 
                className={`px-1 rounded ${language === 'EN' ? 'bg-blue-600 text-white' : 'hover:text-white'}`}
              >
                EN
              </button>
              <span>·</span>
              <button 
                onClick={() => setLanguage('HI')} 
                className={`px-1 rounded ${language === 'HI' ? 'bg-blue-600 text-white' : 'hover:text-white'}`}
              >
                हिंदी
              </button>
              <span>·</span>
              <button 
                onClick={() => setLanguage('KN')} 
                className={`px-1 rounded ${language === 'KN' ? 'bg-blue-600 text-white' : 'hover:text-white'}`}
              >
                ಕನ್ನಡ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <div className="relative">
                <span className="text-xl font-bold font-serif leading-none">H</span>
                <span className="absolute -top-1 -right-2 text-[10px] text-emerald-300 font-sans">+</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 uppercase">HIMANSHU</span>
                <span className="font-light text-lg tracking-wider text-blue-600 uppercase">HOSPITALS</span>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Tertiary & Quaternary Care</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#find-doctors" className="hover:text-blue-600 transition-colors">Find Doctors</a>
            <a href="#departments" className="hover:text-blue-600 transition-colors">Departments & Centers</a>
            <button onClick={onOpenBooking} className="hover:text-blue-600 transition-colors text-left">Book Appointment</button>
            <a href="#abdm-records" className="hover:text-blue-600 transition-colors">Diagnostics & Lab</a>
            <a href="#campuses" className="hover:text-blue-600 transition-colors">International Patients</a>
            <a href="#packages" className="hover:text-blue-600 transition-colors">Health Packages</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenPatientPortal}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/60 transition-colors cursor-pointer border border-slate-200"
            >
              <User className="w-4 h-4 text-blue-600" />
              <span>Patient Portal</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <span>Book Care</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-md text-xs font-semibold bg-blue-600 text-white"
            >
              Book Care
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
            <a 
              href="#find-doctors" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-800 py-2 border-b border-slate-100"
            >
              Find Doctors
            </a>
            <a 
              href="#departments" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-800 py-2 border-b border-slate-100"
            >
              Departments & Centers
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full text-left text-sm font-medium text-slate-800 py-2 border-b border-slate-100"
            >
              Book Appointment
            </button>
            <a 
              href="#abdm-records" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-800 py-2 border-b border-slate-100"
            >
              Diagnostics & ABDM Lab Reports
            </a>
            <a 
              href="#campuses" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-800 py-2 border-b border-slate-100"
            >
              Tertiary Campuses & Locations
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenPatientPortal(); }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 text-slate-800 font-medium text-sm"
              >
                <User className="w-4 h-4 text-blue-600" />
                <span>Patient Portal & ABHA</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm"
              >
                Book Care Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Red/Emergency Callout Ribbon */}
      <div className="bg-[#FFF1F2] border-b border-rose-200 px-4 sm:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-600 shrink-0">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs text-rose-950">Need Immediate Emergency Attention?</span>
              </div>
              <p className="text-xs text-rose-800">
                Golden Hour trauma, cardiac arrest & stroke triage teams standing by.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <a
              href="tel:108"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-bold shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>108 / +91 80 4900 1100</span>
            </a>
            <a
              href="#campuses"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>Locate Nearest 24/7 ER</span>
            </a>
            <button
              onClick={onOpenEmergency}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Golden Hour Triage</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
