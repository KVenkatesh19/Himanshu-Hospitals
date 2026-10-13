import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Calendar, 
  FileText, 
  QrCode, 
  Clock, 
  Video, 
  Pill, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  RefreshCw,
  Ambulance,
  User,
  Bell,
  MessageCircle,
  Download,
  Wifi,
  BatteryMedium,
  Activity,
  Lock,
  Sparkles
} from 'lucide-react';
import { DOCTORS_DATA, HEALTH_RECORDS_DATA } from '../../data/hospitalData';

interface MobileAppViewProps {
  onBackToWebsite: () => void;
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
}

export const MobileAppView: React.FC<MobileAppViewProps> = ({
  onBackToWebsite,
  onOpenBooking,
  onOpenEmergency
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'appointments' | 'records' | 'telemed' | 'sos'>('home');
  const [devicePlatform, setDevicePlatform] = useState<'ios' | 'android'>('ios');
  const [currentToken, setCurrentToken] = useState(39);
  const myToken = 42;
  const [whatsAppSyncEnabled, setWhatsAppSyncEnabled] = useState(true);
  const [telemedCallActive, setTelemedCallActive] = useState(false);
  const [showQrCard, setShowQrCard] = useState(false);

  const waitMinutes = Math.max(0, (myToken - currentToken) * 4);

  const advanceToken = () => {
    if (currentToken < myToken) {
      setCurrentToken(prev => prev + 1);
    } else {
      setCurrentToken(38);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-8 px-4 flex flex-col items-center justify-center">
      
      {/* Top Controller Bar */}
      <div className="w-full max-w-md mb-4 flex items-center justify-between text-xs text-slate-300">
        <button
          onClick={onBackToWebsite}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
        >
          <span>← Back to Hospital Website</span>
        </button>

        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setDevicePlatform('ios')}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
              devicePlatform === 'ios' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            iOS iPhone
          </button>
          <button
            onClick={() => setDevicePlatform('android')}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
              devicePlatform === 'android' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Android
          </button>
        </div>
      </div>

      {/* Mobile Device Frame */}
      <div className={`w-full max-w-[390px] bg-slate-900 rounded-[48px] p-3 shadow-2xl border-4 ${
        devicePlatform === 'ios' ? 'border-slate-700' : 'border-slate-800 rounded-[36px]'
      } relative overflow-hidden`}>
        
        {/* Device Screen Area */}
        <div className="w-full bg-slate-50 text-slate-900 rounded-[40px] overflow-hidden flex flex-col h-[740px] relative">
          
          {/* iOS / Android Status Bar */}
          <div className="pt-3 px-6 pb-2 bg-slate-900 text-white flex items-center justify-between text-xs select-none">
            <span className="font-semibold text-[13px] font-mono">09:41</span>
            
            {/* Dynamic Island or Camera Hole */}
            <div className={`bg-black ${
              devicePlatform === 'ios' ? 'w-24 h-4 rounded-full' : 'w-4 h-4 rounded-full'
            }`}></div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <Wifi className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold">5G</span>
              <BatteryMedium className="w-4 h-4" />
            </div>
          </div>

          {/* App Header */}
          <div className="bg-slate-900 text-white px-5 pt-2 pb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                  H+
                </div>
                <div>
                  <span className="text-xs font-extrabold tracking-tight">HIMANSHU HOSPITALS</span>
                  <span className="text-[10px] text-blue-400 block -mt-0.5">Patient Care Mobile</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowQrCard(!showQrCard)}
                  className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 cursor-pointer"
                  title="Digital Health Card QR"
                >
                  <QrCode className="w-4 h-4" />
                </button>
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  RS
                </div>
              </div>
            </div>

            {/* Patient Greeting & ABHA badge */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-400">Namaste,</p>
                <h3 className="text-sm font-bold text-white">Rahul K. Sharma</h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  ABHA: 91-8821...2311
                </span>
              </div>
            </div>
          </div>

          {/* Screen Content Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Show QR Digital Health Card if toggled */}
            {showQrCard && (
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-4 rounded-2xl shadow-lg space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    ABHA Digital Health Passport
                  </span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono">
                    MoHFW Verified
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl text-slate-900 flex items-center justify-between gap-3">
                  <div className="w-20 h-20 bg-slate-900 text-white flex items-center justify-center rounded-lg font-mono text-xs">
                    [QR CODE]
                  </div>
                  <div className="text-xs space-y-0.5 font-mono">
                    <div className="font-bold font-sans text-sm">Rahul K. Sharma</div>
                    <div>ABHA: 91-8821-4091-2311</div>
                    <div>UHID: HH-BLR-094182</div>
                    <div className="text-[10px] text-emerald-600 font-sans font-bold">● Active 100% Cashless</div>
                  </div>
                </div>
              </div>
            )}

            {/* Live OPD Queue Token Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Active OPD Queue
                  </span>
                </div>
                <span className="text-xs font-mono font-extrabold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Token #{myToken}
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Consulting Room</span>
                  <strong className="text-xs font-bold text-slate-900">Room 204, Dr. Rajesh V. Raman</strong>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 block">Current Serving</span>
                  <strong className="text-sm font-extrabold font-mono text-slate-900">#{currentToken}</strong>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <div className="flex items-center gap-1 text-slate-600 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Est. Wait: <strong className="text-slate-900">~{waitMinutes} mins</strong></span>
                </div>

                <button
                  onClick={advanceToken}
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Advance Queue</span>
                </button>
              </div>
            </div>

            {/* Quick 1-Tap SOS Emergency Ambulance Bar */}
            <div className="bg-gradient-to-r from-rose-600 to-red-700 text-white p-3.5 rounded-2xl shadow-md flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <Ambulance className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold">1-Tap SOS Dispatch</h4>
                  <p className="text-[10px] text-rose-100">Golden Hour 15-Min Ambulance SLA</p>
                </div>
              </div>
              <button
                onClick={onOpenEmergency}
                className="px-3 py-1.5 bg-white text-rose-700 rounded-lg text-xs font-bold shadow-xs hover:bg-rose-50 transition-colors cursor-pointer"
              >
                SOS 108
              </button>
            </div>

            {/* Tele-Consultation or Lab Reports Section */}
            {activeTab === 'home' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Digital Health Hub
                  </span>
                  <span className="text-[11px] text-blue-600 font-medium">ABDM Linked</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={onOpenBooking}
                    className="p-3 bg-white rounded-xl border border-slate-200 text-left hover:border-blue-400 transition-colors shadow-2xs cursor-pointer"
                  >
                    <Calendar className="w-5 h-5 text-blue-600 mb-1.5" />
                    <div className="text-xs font-bold text-slate-900">Book OPD Slot</div>
                    <div className="text-[10px] text-slate-500">500+ Super Specialists</div>
                  </button>

                  <button
                    onClick={() => setActiveTab('telemed')}
                    className="p-3 bg-white rounded-xl border border-slate-200 text-left hover:border-blue-400 transition-colors shadow-2xs cursor-pointer"
                  >
                    <Video className="w-5 h-5 text-emerald-600 mb-1.5" />
                    <div className="text-xs font-bold text-slate-900">Tele-Consult</div>
                    <div className="text-[10px] text-slate-500">Encrypted Video Booth</div>
                  </button>
                </div>

                {/* WhatsApp Sync Settings Card */}
                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">WhatsApp Lab Sync</div>
                      <div className="text-[10px] text-slate-500">Auto-deliver NABL results to WhatsApp</div>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={whatsAppSyncEnabled}
                    onChange={(e) => setWhatsAppSyncEnabled(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                </div>

                {/* Recent Verified Records */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Recent NABL Reports & Prescriptions
                  </span>
                  {HEALTH_RECORDS_DATA.map((r) => (
                    <div
                      key={r.id}
                      className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="text-xs font-bold text-slate-900 truncate">{r.title}</div>
                        <div className="text-[10px] text-slate-500">{r.date} · {r.doctorName}</div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                        {r.status.split(' ')[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TeleMed Booth Tab Simulation */}
            {activeTab === 'telemed' && (
              <div className="space-y-3">
                <div className="bg-slate-900 text-white rounded-2xl p-4 text-center space-y-3">
                  <div className="relative aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
                    {telemedCallActive ? (
                      <div className="relative w-full h-full">
                        <img
                          src={DOCTORS_DATA[0].photoUrl}
                          alt="Doctor Video"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-mono">
                          HD 1080p · Encrypted
                        </div>
                        <div className="absolute bottom-2 right-2 w-16 h-12 bg-slate-800 rounded border border-white/20 overflow-hidden">
                          <div className="w-full h-full bg-slate-700 flex items-center justify-center text-[9px] text-white">
                            You
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-4">
                        <Video className="w-8 h-8 text-blue-400 mx-auto mb-1" />
                        <span className="text-xs text-slate-400 block">Doctor Waiting Room</span>
                        <strong className="text-xs text-white">Dr. Rajesh V. Raman</strong>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setTelemedCallActive(!telemedCallActive)}
                    className={`w-full py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                      telemedCallActive ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'
                    }`}
                  >
                    {telemedCallActive ? 'End Consultation' : 'Join Video Consultation'}
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Mobile Tab Bar */}
          <div className="bg-white border-t border-slate-200 px-4 py-2.5 flex items-center justify-between text-[11px] font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-0.5 ${activeTab === 'home' ? 'text-blue-600 font-bold' : ''}`}
            >
              <Activity className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => { setActiveTab('appointments'); onOpenBooking(); }}
              className={`flex flex-col items-center gap-0.5 ${activeTab === 'appointments' ? 'text-blue-600 font-bold' : ''}`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setActiveTab('records')}
              className={`flex flex-col items-center gap-0.5 ${activeTab === 'records' ? 'text-blue-600 font-bold' : ''}`}
            >
              <FileText className="w-4 h-4" />
              <span>Records</span>
            </button>
            <button
              onClick={() => setActiveTab('telemed')}
              className={`flex flex-col items-center gap-0.5 ${activeTab === 'telemed' ? 'text-blue-600 font-bold' : ''}`}
            >
              <Video className="w-4 h-4" />
              <span>TeleMed</span>
            </button>
            <button
              onClick={onOpenEmergency}
              className="flex flex-col items-center gap-0.5 text-rose-600 font-bold"
            >
              <Ambulance className="w-4 h-4" />
              <span>SOS</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
