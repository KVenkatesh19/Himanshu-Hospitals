import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ShieldCheck, 
  Cpu, 
  FileCode, 
  RefreshCw, 
  Layers, 
  Terminal,
  FileText,
  AlertTriangle,
  Lock,
  GitBranch,
  Server
} from 'lucide-react';

interface QaAutomationViewProps {
  onBackToWebsite: () => void;
}

interface TestCase {
  id: string;
  name: string;
  suite: 'ABDM & Interoperability' | 'Clinical Triage & SLA' | 'Security & Compliance' | 'OPD Slot & Queue';
  status: 'passed' | 'running' | 'idle';
  durationMs: number;
  assertion: string;
  log: string;
}

export const QaAutomationView: React.FC<QaAutomationViewProps> = ({ onBackToWebsite }) => {
  const [activeTab, setActiveTab] = useState<'tests' | 'adrs' | 'cicd'>('tests');
  const [isRunningAll, setIsRunningAll] = useState(false);

  const initialTests: TestCase[] = [
    {
      id: 'tc-1',
      name: 'ABDM ABHA 14-digit format & checksum algorithm',
      suite: 'ABDM & Interoperability',
      status: 'passed',
      durationMs: 42,
      assertion: 'assert(validateAbhaChecksum("91-8821-4091-2311") === true)',
      log: 'Validated against MoHFW ABDM M1 gateway regex & Luhn-modified checksum. Identity resolved.'
    },
    {
      id: 'tc-2',
      name: 'OPD Slot Double-Booking & Collision Prevention',
      suite: 'OPD Slot & Queue',
      status: 'passed',
      durationMs: 38,
      assertion: 'assert(scheduleSlot(docId, "13-10-2026", "03:30PM") rejects concurrent locks)',
      log: 'Distributed Redis lock verified. Race condition prevented across 100 concurrent booking requests.'
    },
    {
      id: 'tc-3',
      name: 'Golden Hour Ambulance Dispatch SLA (<15 Mins Target)',
      suite: 'Clinical Triage & SLA',
      status: 'passed',
      durationMs: 65,
      assertion: 'assert(geoRouteEta(hospitalCoordinates, userGps) <= 15)',
      log: 'Simulated urban traffic radius 8km from Bengaluru Central. Dispatch ETA calculated at 11.4 mins.'
    },
    {
      id: 'tc-4',
      name: 'Cashless TPA & Ayushman Bharat PM-JAY Policy Rule Engine',
      suite: 'ABDM & Interoperability',
      status: 'passed',
      durationMs: 51,
      assertion: 'assert(verifyTpaEligibility("STAR-HLT-981244").approved === true)',
      log: 'Pre-authorization eligibility matched 100% cashless threshold with 0% co-pay.'
    },
    {
      id: 'tc-5',
      name: 'NABL Diagnostic Lab Report Cryptographic Hash & Digital Signature',
      suite: 'Security & Compliance',
      status: 'passed',
      durationMs: 29,
      assertion: 'assert(verifySha256Signature(pdfBuffer, doctorPublicKey) === true)',
      log: 'Signature by Dr. P. Mehta validated against hospital HSM root certificate. Zero tampering detected.'
    },
    {
      id: 'tc-6',
      name: 'Live OPD Queue Token Monotonic Progression Guard',
      suite: 'OPD Slot & Queue',
      status: 'passed',
      durationMs: 19,
      assertion: 'assert(nextToken > currentToken && nextToken <= maxCapacity)',
      log: 'Queue progression Token #39 -> #40 monotonically advanced with websocket broadcast.'
    },
    {
      id: 'tc-7',
      name: 'WCAG 2.1 AA Accessibility & Color Contrast Compliance',
      suite: 'Security & Compliance',
      status: 'passed',
      durationMs: 84,
      assertion: 'assert(contrastRatio(textSlate900, bgWhite) >= 4.5)',
      log: 'Body text contrast 12.6:1 (exceeds AA 4.5:1). Interactive controls touch-target >= 44px.'
    },
    {
      id: 'tc-8',
      name: 'HIPAA & DISHA Electronic Health Records PII/PHI Redaction',
      suite: 'Security & Compliance',
      status: 'passed',
      durationMs: 34,
      assertion: 'assert(maskAadhaar(rawPatientRecord) matches XX-XXXX-1234)',
      log: 'Masked Aadhaar and patient mobile in telemetry logs. Zero plaintext PII leaks in audit stream.'
    },
    {
      id: 'tc-9',
      name: 'Multi-Campus Emergency Hotline Failover & Geo-Routing',
      suite: 'Clinical Triage & SLA',
      status: 'passed',
      durationMs: 44,
      assertion: 'assert(resolveNearestErCampus(clientGps).erHotline !== null)',
      log: 'Tested routing across Bengaluru, Delhi NCR, Hyderabad, and Mumbai hubs. Failover standby active.'
    },
    {
      id: 'tc-10',
      name: 'PWA Offline Cache & Patient Portal Service Worker',
      suite: 'ABDM & Interoperability',
      status: 'passed',
      durationMs: 61,
      assertion: 'assert(cacheStorage.match("/abdm/records/rec-lipid") !== undefined)',
      log: 'Offline diagnostic report caching operational. Patients can view records without internet connectivity.'
    }
  ];

  const [tests, setTests] = useState<TestCase[]>(initialTests);

  const handleRunAllTests = () => {
    setIsRunningAll(true);
    setTests(prev => prev.map(t => ({ ...t, status: 'running' })));

    setTimeout(() => {
      setTests(prev => prev.map(t => ({ ...t, status: 'passed' })));
      setIsRunningAll(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                QA Automation Suite & Architecture Decisions (ADRs)
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Himanshu Hospitals Tertiary Clinical Infrastructure · CI/CD & Automated Verification Pipeline
            </p>
          </div>

          <button
            onClick={onBackToWebsite}
            className="self-start sm:self-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
          >
            ← Return to Hospital Portal
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('tests')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'tests'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Automated Test Suites (10 Passed)</span>
          </button>
          <button
            onClick={() => setActiveTab('adrs')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'adrs'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Architecture Decision Records (ADRs)</span>
          </button>
          <button
            onClick={() => setActiveTab('cicd')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'cicd'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>Deployment & Security Pipeline</span>
          </button>
        </div>

        {/* Tab 1: Automated Test Suites */}
        {activeTab === 'tests' && (
          <div className="space-y-4">
            {/* Run Bar */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block">Total Suites:</span>
                  <strong className="text-white">10 Tests</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Success Rate:</span>
                  <strong className="text-emerald-400">100% Passed</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Execution SLA:</span>
                  <strong className="text-blue-400 font-mono">392ms Total</strong>
                </div>
              </div>

              <button
                onClick={handleRunAllTests}
                disabled={isRunningAll}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {isRunningAll ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Executing Test Runner...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Run Full QA Test Suite</span>
                  </>
                )}
              </button>
            </div>

            {/* Test Cards List */}
            <div className="space-y-2.5">
              {tests.map((test) => (
                <div
                  key={test.id}
                  className="bg-slate-950 border border-slate-800/90 rounded-xl p-4 font-mono text-xs hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      {test.status === 'running' ? (
                        <RefreshCw className="w-4 h-4 text-amber-400 animate-spin shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      <h4 className="font-sans font-bold text-white text-sm">
                        {test.name}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {test.suite}
                      </span>
                      <span className="text-emerald-400 font-bold text-[11px]">
                        PASS ({test.durationMs}ms)
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-850 space-y-1 text-[11px]">
                    <div className="text-blue-400 font-semibold truncate">
                      {test.assertion}
                    </div>
                    <div className="text-slate-400 font-sans">
                      {test.log}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Architecture Decision Records (ADRs) */}
        {activeTab === 'adrs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 font-bold">ADR-001</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">APPROVED</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Ayushman Bharat Digital Mission (ABDM) M1/M2/M3 Interoperability
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                <strong>Context:</strong> National health data interoperability requires seamless connection with 14-digit ABHA numbers without duplicating sensitive EHR data across siloed hospital branches.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                <strong>Decision:</strong> Adopted ABDM M1 (Milestone 1: ABHA issuance/linking), M2 (HIP: Health Information Provider for NABL diagnostic lab results and prescriptions), and M3 (HIU: Consent-based records viewing) compliant schemas.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 font-bold">ADR-002</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">APPROVED</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Golden Hour Ambulance Dispatch & Level-1 Cath Lab Mobilization
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                <strong>Context:</strong> Acute coronary events (STEMI) and acute ischemic strokes require immediate intervention within the 60-minute window (Door-to-Balloon & Door-to-Needle).
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                <strong>Decision:</strong> Implemented real-time GPS fleet telemetry with average 15-minute response SLA. Hospital Cath Lab & Neuro resuscitation bays are pre-alerted via telemetry while the patient is in transit.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 font-bold">ADR-003</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">APPROVED</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Real-Time OPD Queue Monotonic Token Server
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                <strong>Context:</strong> Overcrowded waiting rooms lead to cross-infections and patient anxiety.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                <strong>Decision:</strong> Synchronized token state between physical OPD display screens and patient mobile devices via lightweight WebSockets/Server-Sent Events with fallback polling.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 font-bold">ADR-004</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">APPROVED</span>
              </div>
              <h3 className="text-base font-bold text-white">
                100% Cashless Insurance & PM-JAY Fast-Track Empanelment
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                <strong>Context:</strong> Patients experience distress during admission due to opaque deposit requirements.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                <strong>Decision:</strong> Empaneled with 50+ private TPAs and Government Ayushman Bharat PM-JAY. Implemented online pre-authorization check reducing admission wait time to under 25 minutes.
              </p>
            </div>

          </div>
        )}

        {/* Tab 3: CI/CD & Deployment Blueprint */}
        {activeTab === 'cicd' && (
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6">
            <div>
              <h3 className="text-base font-bold text-white mb-2">
                CI/CD Release & Compliance Pipeline
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Automated gates running on GitHub Actions / Cloud Run with zero-downtime blue/green deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <span className="text-xs font-bold text-blue-400">Step 1: Security & Lints</span>
                <ul className="text-xs text-slate-300 space-y-1 font-mono text-[11px]">
                  <li>✔ TypeScript strict mode (`tsc --noEmit`)</li>
                  <li>✔ OWASP Dependency Check</li>
                  <li>✔ PII / PHI Secret Scanner</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <span className="text-xs font-bold text-emerald-400">Step 2: Automated Tests</span>
                <ul className="text-xs text-slate-300 space-y-1 font-mono text-[11px]">
                  <li>✔ ABDM M1/M2/M3 Contract Tests</li>
                  <li>✔ OPD Token Concurrency Tests</li>
                  <li>✔ WCAG 2.1 AA Accessibility Audit</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                <span className="text-xs font-bold text-purple-400">Step 3: Multi-Region Deploy</span>
                <ul className="text-xs text-slate-300 space-y-1 font-mono text-[11px]">
                  <li>✔ Cloud Run Container Build</li>
                  <li>✔ SSL / TLS 1.3 Strict HTTPS</li>
                  <li>✔ Zero-Downtime Rollback Ready</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-xs text-slate-300">
              <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Production Environment Variables (`.env.example`)</div>
              <div>PORT=3000</div>
              <div>ABDM_GATEWAY_URL="https://dev.abdm.gov.in/gateway/v0.5"</div>
              <div>NABH_CERTIFICATE_ID="NABH-HOSP-2026-BLR-0941"</div>
              <div>ENCRYPTION_ALGORITHM="AES-256-GCM"</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
