import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FestiveAndTpaBanner } from './components/FestiveAndTpaBanner';
import { KeyMetricsBar } from './components/KeyMetricsBar';
import { CentersOfExcellence } from './components/CentersOfExcellence';
import { VerifiedDoctorsSection } from './components/VerifiedDoctorsSection';
import { RoboticTheatreVirtualTour } from './components/RoboticTheatreVirtualTour';
import { AbdmPassportSection } from './components/AbdmPassportSection';
import { PatientJourneySection } from './components/PatientJourneySection';
import { TertiaryCampusesSection } from './components/TertiaryCampusesSection';
import { ClinicalStoriesSection } from './components/ClinicalStoriesSection';
import { Footer } from './components/Footer';

// Modals
import { AppointmentBookingModal } from './components/modals/AppointmentBookingModal';
import { EmergencyTriageModal } from './components/modals/EmergencyTriageModal';
import { TpaInsuranceModal } from './components/modals/TpaInsuranceModal';
import { AbhaLinkingModal } from './components/modals/AbhaLinkingModal';
import { ReportViewerModal } from './components/modals/ReportViewerModal';
import { DoctorProfileModal } from './components/modals/DoctorProfileModal';

// Dedicated Views
import { MobileAppView } from './components/mobile/MobileAppView';
import { QaAutomationView } from './components/qa/QaAutomationView';

// Data & Types
import { DOCTORS_DATA, HEALTH_RECORDS_DATA } from './data/hospitalData';
import { Doctor, Department, Campus, HealthRecord } from './types/hospital';

export default function App() {
  const [currentView, setCurrentView] = useState<'desktop' | 'mobile' | 'qa'>('desktop');

  // Modal visibility states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isTpaOpen, setIsTpaOpen] = useState(false);
  const [isAbhaOpen, setIsAbhaOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [profileDoctor, setProfileDoctor] = useState<Doctor | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<HealthRecord | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenBooking = (doctor?: Doctor) => {
    if (doctor) {
      setSelectedDoctor(doctor);
    } else {
      setSelectedDoctor(null);
    }
    setIsBookingOpen(true);
  };

  const handleSearch = (query: string, campus: string, type: string) => {
    showToast(`Searching ${type} catalog for "${query || 'All'}" in ${campus}...`);
    const docSection = document.getElementById('find-doctors');
    if (docSection) {
      docSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDepartment = (dept: Department) => {
    showToast(`Selected ${dept.name}. Filtering clinical staff...`);
    const docSection = document.getElementById('find-doctors');
    if (docSection) {
      docSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCampus = (campus: Campus) => {
    showToast(`Selected ${campus.name}. Opening appointment booking...`);
    setIsBookingOpen(true);
  };

  const handleGetDirections = (campus: Campus) => {
    showToast(`Directions to ${campus.name} (${campus.metroInfo}) loaded.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 text-xs font-semibold flex items-center gap-2 animate-in slide-in-from-bottom duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Switch between Desktop Website, Patient Mobile App, or QA Suite */}
      {currentView === 'mobile' ? (
        <MobileAppView
          onBackToWebsite={() => setCurrentView('desktop')}
          onOpenBooking={() => handleOpenBooking()}
          onOpenEmergency={() => setIsEmergencyOpen(true)}
        />
      ) : currentView === 'qa' ? (
        <QaAutomationView
          onBackToWebsite={() => setCurrentView('desktop')}
        />
      ) : (
        /* Full Desktop Website */
        <>
          <Header
            onOpenBooking={() => handleOpenBooking()}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
            onOpenPatientPortal={() => setIsAbhaOpen(true)}
            onOpenTpa={() => setIsTpaOpen(true)}
            currentView={currentView}
            onViewChange={setCurrentView}
          />

          <main className="flex-1">
            {/* Hero Section */}
            <HeroSection
              onSearch={handleSearch}
              onOpenBooking={() => handleOpenBooking()}
              onOpenTeleConsult={() => {
                showToast('Tele-Consultation selected. Linking video booth...');
                handleOpenBooking();
              }}
              onOpenAbdm={() => setIsAbhaOpen(true)}
              onOpenPackages={() => {
                showToast('Comprehensive Whole-Body Health Check selected.');
                handleOpenBooking();
              }}
            />

            {/* Festive Health Check & 100% Cashless TPA Banners */}
            <FestiveAndTpaBanner
              onBookPackage={() => {
                showToast('Festive Health Check @ ₹2,499 selected.');
                handleOpenBooking();
              }}
              onVerifyTpa={() => setIsTpaOpen(true)}
            />

            {/* 4 Pillars / Key Stats Bar */}
            <KeyMetricsBar />

            {/* Centers of Excellence */}
            <CentersOfExcellence
              onSelectDepartment={handleSelectDepartment}
              onViewAllDepartments={() => {
                showToast('Displaying all 32 clinical super-specialty departments.');
              }}
            />

            {/* Verified Medical Staff */}
            <VerifiedDoctorsSection
              onBookDoctor={(doc) => handleOpenBooking(doc)}
              onViewDoctorProfile={(doc) => setProfileDoctor(doc)}
            />

            {/* Virtual Tour: Inside Advanced Robotic Theatres */}
            <RoboticTheatreVirtualTour />

            {/* ABDM Health Records & Live OPD Queue Passport */}
            <AbdmPassportSection
              onLinkAbha={() => setIsAbhaOpen(true)}
              onCheckToken={() => {
                showToast('Live Token #42 verified. Current consulting is #39 (Est. wait 12 mins).');
              }}
              onViewRecord={(record) => setSelectedRecord(record)}
            />

            {/* Patient Journey: Visit Preparation & Care Guide */}
            <PatientJourneySection
              onOpenChecklist={() => {
                showToast('Pre-Visit Checklist PDF downloaded.');
              }}
              onOpenTpa={() => setIsTpaOpen(true)}
              onOpenTimings={() => {
                showToast('OPD Timings: 08:00 AM - 08:00 PM. Visiting Hours: 05:00 PM - 07:00 PM.');
              }}
              onOpenPharmacy={() => {
                showToast('Hospital Integrated Pharmacy Doorstep Refill opened.');
              }}
            />

            {/* Tertiary Care Campuses */}
            <TertiaryCampusesSection
              onBookCampus={handleBookCampus}
              onGetDirections={handleGetDirections}
            />

            {/* Verified Clinical Recovery Stories */}
            <ClinicalStoriesSection />
          </main>

          {/* Footer */}
          <Footer
            onOpenBooking={() => handleOpenBooking()}
            onOpenAbdm={() => setIsAbhaOpen(true)}
            onOpenPackages={() => handleOpenBooking()}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        </>
      )}

      {/* Global Modals */}
      <AppointmentBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedDoctor={selectedDoctor}
        onSuccessBooking={(appointment) => {
          showToast(`Slot reserved with ${appointment.doctor.name}! Live Token #${appointment.tokenNumber} generated.`);
        }}
      />

      <EmergencyTriageModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />

      <TpaInsuranceModal
        isOpen={isTpaOpen}
        onClose={() => setIsTpaOpen(false)}
      />

      <AbhaLinkingModal
        isOpen={isAbhaOpen}
        onClose={() => setIsAbhaOpen(false)}
        onSuccess={(abha) => {
          showToast(`ABHA ID ${abha} successfully linked with ABDM Health Passport!`);
        }}
      />

      <ReportViewerModal
        isOpen={!!selectedRecord}
        onClose={() => setSelectedRecord(null)}
        record={selectedRecord}
      />

      <DoctorProfileModal
        isOpen={!!profileDoctor}
        onClose={() => setProfileDoctor(null)}
        doctor={profileDoctor}
        onBookSlot={(doc) => handleOpenBooking(doc)}
      />

    </div>
  );
}
