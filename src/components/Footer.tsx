import React from 'react';
import { Phone, ShieldCheck, MessageCircle, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAbdm: () => void;
  onOpenPackages: () => void;
  onOpenEmergency: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenAbdm,
  onOpenPackages,
  onOpenEmergency
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-700 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-serif font-bold text-lg">
                H+
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-base tracking-tight text-slate-900 uppercase">HIMANSHU</span>
                  <span className="font-light text-base tracking-wider text-blue-600 uppercase">HOSPITALS</span>
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Clinical excellence, patient-first care, and unified ABDM digital health infrastructure across India.
            </p>

            <div className="pt-2 space-y-1.5 text-xs">
              <div className="text-slate-500 font-medium">National Helpline & Ambulances:</div>
              <a 
                href="tel:108" 
                className="font-bold text-slate-900 text-sm hover:text-blue-600 transition-colors block font-mono"
              >
                +91 (0) 80 4900 1100 / 108
              </a>
              <div className="flex items-center gap-1.5 text-blue-700 font-semibold pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Integrated with Ayushman Bharat Digital Mission (ABDM)</span>
              </div>
            </div>
          </div>

          {/* Network Hospitals */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3 text-xs">
              Network Hospitals
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#campuses" className="hover:text-blue-600 transition-colors">Bangalore Central (Flagship)</a></li>
              <li><a href="#campuses" className="hover:text-blue-600 transition-colors">Delhi NCR Care Campus</a></li>
              <li><a href="#campuses" className="hover:text-blue-600 transition-colors">Hyderabad Hi-Tech City</a></li>
              <li><a href="#campuses" className="hover:text-blue-600 transition-colors">Mumbai Western Suburbs</a></li>
            </ul>
          </div>

          {/* Clinical Care */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3 text-xs">
              Clinical Care
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#departments" className="hover:text-blue-600 transition-colors">Centers of Excellence</a></li>
              <li><button onClick={onOpenAbdm} className="hover:text-blue-600 transition-colors text-left cursor-pointer">NABL Diagnostic Reports</button></li>
              <li><button onClick={onOpenPackages} className="hover:text-blue-600 transition-colors text-left cursor-pointer">Preventive Health Packages</button></li>
              <li><button onClick={onOpenAbdm} className="hover:text-blue-600 transition-colors text-left cursor-pointer">Link ABHA / Health ID</button></li>
            </ul>
          </div>

          {/* Compliance & Aid */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3 text-xs">
              Compliance & Aid
            </h4>
            <ul className="space-y-2 text-slate-600 mb-4">
              <li><span className="hover:text-blue-600 cursor-pointer">NABH / Bio-Medical Compliance</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer">Patient Rights & Charter</span></li>
              <li><span className="hover:text-blue-600 cursor-pointer">Clinical Privacy Policy</span></li>
            </ul>

            <a
              href="https://wa.me/918049001100?text=Hi%20Himanshu%20Hospitals,%20I%20need%20assistance"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Himanshu Hospitals Group Ltd. All rights reserved. Registered under Clinical Establishments Act.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={onOpenEmergency} className="hover:text-slate-900 transition-colors">Emergency SOP</button>
            <span>·</span>
            <span className="hover:text-slate-900 cursor-pointer">Privacy Notice</span>
            <span>·</span>
            <button onClick={onOpenAbdm} className="hover:text-slate-900 transition-colors">ABDM Interoperability</button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
