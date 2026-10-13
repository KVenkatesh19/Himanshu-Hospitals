export interface Doctor {
  id: string;
  name: string;
  department: string;
  specialtyTag: string;
  qualifications: string;
  experienceYears: number;
  campusId: string;
  campusName: string;
  photoUrl: string;
  nextAvailable: string;
  consultationFee: number;
  languages: string[];
  rating: number;
  totalReviews: number;
  opdRoom: string;
  bio: string;
  badges?: string[];
  mode: ('In-Clinic' | 'Video & In-Clinic')[];
}

export interface Department {
  id: string;
  name: string;
  category: 'cardiac' | 'neuro' | 'ortho' | 'onco' | 'gastro' | 'pediatric' | 'renal' | 'pulmonary';
  categoryLabel: string;
  description: string;
  tags: string[];
  iconName: string;
  stats: string;
  headDoctor: string;
}

export interface Campus {
  id: string;
  name: string;
  badge: string;
  address: string;
  city: string;
  pincode: string;
  erHotline: string;
  metroInfo: string;
  coordinates: { lat: number; lng: number };
  imageUrl: string;
  bedCapacity: number;
  traumaLevel: string;
}

export interface Appointment {
  id: string;
  tokenNumber: number;
  doctorId: string;
  doctorName: string;
  department: string;
  campusId: string;
  campusName: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  patientAge: number;
  abhaId?: string;
  consultationType: 'OPD_IN_PERSON' | 'TELE_CONSULT';
  status: 'CONFIRMED' | 'IN_CONSULTATION' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
  tpaInsurance?: string;
}

export interface HealthRecord {
  id: string;
  title: string;
  type: 'LAB_REPORT' | 'PRESCRIPTION' | 'DISCHARGE_SUMMARY' | 'IMAGING';
  date: string;
  doctorName: string;
  doctorDesignation: string;
  department: string;
  hospitalCampus: string;
  pdfUrl?: string;
  summary: string;
  status: 'Verified (NABL)' | 'Signed (Digital)' | 'Archived';
  metrics?: { label: string; value: string; normalRange: string; status: 'normal' | 'borderline' | 'abnormal' }[];
}

export interface RecoveryStory {
  id: string;
  patientName: string;
  patientInitial: string;
  condition: string;
  badgeText: string;
  treatedBy: string;
  campus: string;
  rating: number;
  story: string;
}

export interface InsuranceProvider {
  id: string;
  name: string;
  type: 'Private TPA' | 'Government PM-JAY' | 'Corporate';
  cashlessApprovalRate: string;
  claimTurnaroundTime: string;
  popularPlans: string[];
  logoText: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  testsCount: number;
  badge: string;
  price: number;
  originalPrice: number;
  description: string;
  includedChecks: string[];
}
