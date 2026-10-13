import { Doctor, Department, Campus, HealthRecord, RecoveryStory, InsuranceProvider, HealthPackage } from '../types/hospital';

export const DEPARTMENTS_DATA: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Cath Lab',
    category: 'cardiac',
    categoryLabel: 'Cardiac & Cath Lab',
    description: '24/7 Primary PCI, structural heart repairs, electrophysiology & robotic bypass surgeries.',
    tags: ['TAVR / TAVI', 'Cardiac ICU'],
    iconName: 'HeartPulse',
    stats: '12,000+ Successful PCIs',
    headDoctor: 'Dr. Rajesh V. Raman'
  },
  {
    id: 'oncology',
    name: 'Oncology Care',
    category: 'onco',
    categoryLabel: 'Oncology Care',
    description: 'Comprehensive tumor boards, robotic onco-surgery, PET-CT, and targeted immunotherapy regimens.',
    tags: ['Tumor Board', 'Precision Radiation'],
    iconName: 'Activity',
    stats: 'Multidisciplinary Tumor Board',
    headDoctor: 'Dr. Meenakshi Sundaram'
  },
  {
    id: 'neurology',
    name: 'Neurology & Stroke',
    category: 'neuro',
    categoryLabel: 'Neurology & Stroke',
    description: 'Rapid mechanical thrombectomy, deep brain stimulation, epilepsy telemetry and neuro-rehabilitation.',
    tags: ['Stroke Code', 'Neuro-ICU'],
    iconName: 'Brain',
    stats: '<45 min Door-to-Needle',
    headDoctor: 'Dr. Sunita Deshmukh'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Robotic Joints',
    category: 'ortho',
    categoryLabel: 'Robotic Orthopedics',
    description: 'Mako robotic knee & hip arthroplasty, complex sports medicine, and endoscopic spine stabilization.',
    tags: ['Robotic Knee', 'Spine Navigation'],
    iconName: 'Bone',
    stats: 'Sub-millimeter Precision',
    headDoctor: 'Dr. Arvind K. Rao'
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    category: 'gastro',
    categoryLabel: 'Gastroenterology',
    description: 'Advanced endosonography, liver transplant critical care, and ERCP therapeutic interventions.',
    tags: ['Liver Clinic', 'Endo-Surgical'],
    iconName: 'Stethoscope',
    stats: 'Advanced ERCP Suite',
    headDoctor: 'Dr. K. Srinivas'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Level-III NICU',
    category: 'pediatric',
    categoryLabel: 'Pediatrics & Level-III NICU',
    description: 'Neonatal critical care units, pediatric intensive care (PICU), and specialized developmental clinics.',
    tags: ['NICU Level 3', 'Pediatric Surgery'],
    iconName: 'Baby',
    stats: 'Zero-Air Contamination NICU',
    headDoctor: 'Dr. Shalini Varma'
  },
  {
    id: 'nephrology',
    name: 'Nephrology & Renal Care',
    category: 'renal',
    categoryLabel: 'Nephrology & Renal Care',
    description: 'Hemodialysis suites, laparoscopic kidney transplant programs, and diabetic renal management.',
    tags: ['Renal Transplant', 'Dialysis Hub'],
    iconName: 'Building2',
    stats: '98.6% Graft Survival Rate',
    headDoctor: 'Dr. Ramesh Naidu'
  },
  {
    id: 'pulmonology',
    name: 'Pulmonology & ECMO',
    category: 'pulmonary',
    categoryLabel: 'Pulmonology & ECMO',
    description: 'Advanced ECMO life support, sleep medicine labs, and interventional bronchoscopy suites.',
    tags: ['ECMO Team', 'Bronchoscopy'],
    iconName: 'Wind',
    stats: '24/7 Mobile ECMO Retrieval',
    headDoctor: 'Dr. Anita Roy'
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Rajesh V. Raman',
    department: 'Cardiology & Cath Lab',
    specialtyTag: 'Cardiology & Cath Lab',
    qualifications: 'MBBS, MD (Gen Med), DM (Cardiology)',
    experienceYears: 18,
    campusId: 'campus-bengaluru',
    campusName: 'Bengaluru Central',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    nextAvailable: 'Today, 03:30 PM',
    consultationFee: 1200,
    languages: ['English', 'Hindi', 'Kannada'],
    rating: 4.95,
    totalReviews: 842,
    opdRoom: 'Room 204, Tower A',
    bio: 'Director of Interventional Cardiology. Pioneer in structural heart interventions, TAVR procedures, and complex bifurcation stenting with over 6,500 coronary catheterizations.',
    badges: ['Director Interventional Cardiology', 'AIIMS Gold Medalist'],
    mode: ['In-Clinic']
  },
  {
    id: 'doc-2',
    name: 'Dr. Sunita Deshmukh',
    department: 'Neurology & Stroke',
    specialtyTag: 'Neurology & Stroke',
    qualifications: 'MBBS, MD, DM (Neurology), FINR',
    experienceYears: 14,
    campusId: 'campus-delhi',
    campusName: 'Delhi NCR Campus',
    photoUrl: 'https://images.unsplash.com/photo-1594824813576-96b170ff4c10?auto=format&fit=crop&w=600&q=80',
    nextAvailable: 'Tomorrow, 10:00 AM',
    consultationFee: 1100,
    languages: ['English', 'Hindi', 'Marathi'],
    rating: 4.92,
    totalReviews: 610,
    opdRoom: 'Room 312, Neurosciences Block',
    bio: 'Senior Stroke & Neuro-Interventionist specializing in endovascular mechanical thrombectomy, acute stroke code management, and intracranial aneurysm coiling.',
    badges: ['Stroke Code Lead', 'Fellow Interventional Neuro'],
    mode: ['In-Clinic']
  },
  {
    id: 'doc-3',
    name: 'Dr. Arvind K. Rao',
    department: 'Orthopedics & Robotic Joints',
    specialtyTag: 'Orthopedics & Robotic Surgery',
    qualifications: 'MBBS, MS (Ortho), MCh (Joint Repl.)',
    experienceYears: 21,
    campusId: 'campus-bengaluru',
    campusName: 'Bengaluru Central',
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    nextAvailable: 'Today, 05:15 PM',
    consultationFee: 1300,
    languages: ['English', 'Telugu', 'Kannada'],
    rating: 4.98,
    totalReviews: 1120,
    opdRoom: 'Room 108, Ortho Robotic Wing',
    bio: 'Chief Robotic Joint Replacement Surgeon. Pioneer in Mako CT-guided robotic knee and hip arthroplasty with sub-millimeter component alignment and rapid same-day mobilization.',
    badges: ['Chief Robotic Joint Surgeon', 'Mako Certified Specialist'],
    mode: ['Video & In-Clinic']
  },
  {
    id: 'doc-4',
    name: 'Dr. Meenakshi Sundaram',
    department: 'Oncology Care',
    specialtyTag: 'Surgical Oncology & Robotic Onco',
    qualifications: 'MBBS, MS (Gen Surg), MCh (Surgical Oncology)',
    experienceYears: 16,
    campusId: 'campus-mumbai',
    campusName: 'Mumbai South Medical Hub',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    nextAvailable: 'Tomorrow, 02:00 PM',
    consultationFee: 1400,
    languages: ['English', 'Hindi', 'Tamil'],
    rating: 4.91,
    totalReviews: 530,
    opdRoom: 'Room 402, Onco Care Center',
    bio: 'Head of Surgical Oncology specializing in DaVinci robotic tumor resections, organ-preserving breast oncology, and HIPEC peritoneal surgeries.',
    badges: ['Tumor Board Chair', 'Robotic Onco Specialist'],
    mode: ['Video & In-Clinic']
  },
  {
    id: 'doc-5',
    name: 'Dr. K. Srinivas',
    department: 'Gastroenterology',
    specialtyTag: 'Hepato-Pancreato-Biliary & ERCP',
    qualifications: 'MBBS, MD, DM (Gastroenterology)',
    experienceYears: 19,
    campusId: 'campus-hyderabad',
    campusName: 'Hyderabad Hitec City',
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    nextAvailable: 'Today, 04:45 PM',
    consultationFee: 1250,
    languages: ['English', 'Telugu', 'Hindi'],
    rating: 4.94,
    totalReviews: 780,
    opdRoom: 'Room 215, Digestive Health Block',
    bio: 'Senior Consultant Gastroenterologist with over 15,000 endoscopic ultrasound (EUS) and complex therapeutic ERCP interventions.',
    badges: ['Lead Liver Transplant Hepatologist'],
    mode: ['In-Clinic']
  }
];

export const CAMPUSES_DATA: Campus[] = [
  {
    id: 'campus-bengaluru',
    name: 'Bengaluru Central Campus',
    badge: 'Flagship Quaternary Center',
    address: 'No. 42 Richmond Road, Ashok Nagar, Bengaluru 560025',
    city: 'Bengaluru',
    pincode: '560025',
    erHotline: '+91 80 4900 1100',
    metroInfo: 'MG Road Station (800m)',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    imageUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
    bedCapacity: 650,
    traumaLevel: 'Level-1 Quaternary'
  },
  {
    id: 'campus-delhi',
    name: 'Delhi NCR Care Campus',
    badge: 'Multi-Specialty Campus',
    address: 'Plot 18A, Institutional Area, Sector 62, Noida 201309',
    city: 'Delhi NCR',
    pincode: '201309',
    erHotline: '+91 120 4900 2200',
    metroInfo: 'Noida Electronic City (500m)',
    coordinates: { lat: 28.628, lng: 77.3649 },
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    bedCapacity: 500,
    traumaLevel: 'Level-1 Tertiary'
  },
  {
    id: 'campus-hyderabad',
    name: 'Hyderabad Hitec City',
    badge: 'Transplant Excellence',
    address: 'Mindspace Cyberabad Road, Madhapur, Hyderabad 500081',
    city: 'Hyderabad',
    pincode: '500081',
    erHotline: '+91 40 4900 3300',
    metroInfo: 'Raidurg Metro Station (1.1km)',
    coordinates: { lat: 17.4399, lng: 78.382 },
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    bedCapacity: 450,
    traumaLevel: 'Level-1 Organ Transplant'
  },
  {
    id: 'campus-mumbai',
    name: 'Mumbai South Medical Hub',
    badge: 'Comprehensive Oncology',
    address: 'Dr. Annie Besant Road, Worli Seaface, Mumbai 400018',
    city: 'Mumbai',
    pincode: '400018',
    erHotline: '+91 22 4900 4400',
    metroInfo: 'Acharya Atre Chowk (400m)',
    coordinates: { lat: 18.9986, lng: 72.8174 },
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    bedCapacity: 400,
    traumaLevel: 'Comprehensive Cancer Center'
  }
];

export const RECOVERY_STORIES_DATA: RecoveryStory[] = [
  {
    id: 'story-1',
    patientName: 'Ananya Narayanan',
    patientInitial: 'AN',
    condition: 'Cath Lab Emergency',
    badgeText: 'Cath Lab Emergency',
    treatedBy: 'Dr. Rajesh Raman',
    campus: 'Bengaluru Central',
    rating: 5,
    story: '"When my father suffered acute chest pain, the 15-minute emergency ambulance reached our residence in Indiranagar. The primary angioplasty was completed within the golden hour door-to-balloon window."'
  },
  {
    id: 'story-2',
    patientName: 'Col. S. K. Sharma (Retd.)',
    patientInitial: 'SK',
    condition: 'Robotic Knee Replacement',
    badgeText: 'Robotic Knee Replacement',
    treatedBy: 'Dr. Arvind Rao',
    campus: 'Delhi NCR',
    rating: 5,
    story: '"I had severe bilateral osteoarthritis and was bedridden. The robotic total knee arthroplasty gave me full mobility within 48 hours. The cashless insurance TPA desk made admission and discharge 100% paperless."'
  },
  {
    id: 'story-3',
    patientName: 'Pradeep Reddy',
    patientInitial: 'PR',
    condition: 'Stroke Unit Recovery',
    badgeText: 'Stroke Unit Recovery',
    treatedBy: 'Dr. Sunita Deshmukh',
    campus: 'Hyderabad',
    rating: 5,
    story: '"The hyper-acute stroke team was ready before the ambulance pulled in. Mechanical thrombectomy restored blood flow and reversed the paralysis completely. The ABDM digital portal synced every CT scan with my phone."'
  }
];

export const HEALTH_RECORDS_DATA: HealthRecord[] = [
  {
    id: 'rec-lipid',
    title: 'Comprehensive Lipid Profile (NABL)',
    type: 'LAB_REPORT',
    date: '12 Oct 2026',
    doctorName: 'Dr. P. Mehta, MD Pathologist',
    doctorDesignation: 'Lead Clinical Biochemist, NABL Lab ID: NABL-BLR-892',
    department: 'Pathology & Biochemistry',
    hospitalCampus: 'Bengaluru Central Campus',
    summary: 'Serum Cholesterol, Triglycerides, HDL, LDL, VLDL, and Atherogenic Ratio within target physiological range.',
    status: 'Verified (NABL)',
    metrics: [
      { label: 'Total Cholesterol', value: '172 mg/dL', normalRange: '< 200 mg/dL', status: 'normal' },
      { label: 'HDL (Good Cholesterol)', value: '54 mg/dL', normalRange: '> 40 mg/dL', status: 'normal' },
      { label: 'LDL (Bad Cholesterol)', value: '98 mg/dL', normalRange: '< 100 mg/dL', status: 'normal' },
      { label: 'Triglycerides', value: '110 mg/dL', normalRange: '< 150 mg/dL', status: 'normal' },
      { label: 'Non-HDL Cholesterol', value: '118 mg/dL', normalRange: '< 130 mg/dL', status: 'normal' }
    ]
  },
  {
    id: 'rec-rx-cardio',
    title: 'Electronic Prescription - Cardiology OPD',
    type: 'PRESCRIPTION',
    date: '10 Oct 2026',
    doctorName: 'Dr. Rajesh V. Raman',
    doctorDesignation: 'Director of Interventional Cardiology',
    department: 'Cardiology & Cath Lab',
    hospitalCampus: 'Bengaluru Central Campus',
    summary: 'Post-stenting 6-month clinical review. Hemodynamically stable, BP 118/76 mmHg, ECG normal sinus rhythm. Continue dual antiplatelet regimen and statin therapy.',
    status: 'Signed (Digital)',
    metrics: [
      { label: 'Blood Pressure', value: '118/76 mmHg', normalRange: '< 120/80 mmHg', status: 'normal' },
      { label: 'Heart Rate', value: '72 bpm (Regular)', normalRange: '60 - 100 bpm', status: 'normal' },
      { label: 'Oxygen Saturation (SpO2)', value: '99% on Room Air', normalRange: '95 - 100%', status: 'normal' },
      { label: 'LVEF (Echocardiogram)', value: '62%', normalRange: '> 55%', status: 'normal' }
    ]
  }
];

export const INSURANCE_PROVIDERS_DATA: InsuranceProvider[] = [
  {
    id: 'star-health',
    name: 'Star Health & Allied Insurance',
    type: 'Private TPA',
    cashlessApprovalRate: '99.2%',
    claimTurnaroundTime: '25 Mins',
    popularPlans: ['Comprehensive Health', 'Young Star Insurance', 'Cardiac Care Platinum'],
    logoText: 'Star Health'
  },
  {
    id: 'care-health',
    name: 'Care Health Insurance',
    type: 'Private TPA',
    cashlessApprovalRate: '98.9%',
    claimTurnaroundTime: '30 Mins',
    popularPlans: ['Care Supreme', 'Care Advantage 1 Cr', 'Care Heart Gold'],
    logoText: 'Care Health'
  },
  {
    id: 'hdfc-ergo',
    name: 'HDFC ERGO General Insurance',
    type: 'Private TPA',
    cashlessApprovalRate: '99.5%',
    claimTurnaroundTime: '20 Mins',
    popularPlans: ['Optima Secure', 'my:Health Medisure', 'Optima Restore'],
    logoText: 'HDFC ERGO'
  },
  {
    id: 'icici-lombard',
    name: 'ICICI Lombard General Insurance',
    type: 'Private TPA',
    cashlessApprovalRate: '99.1%',
    claimTurnaroundTime: '22 Mins',
    popularPlans: ['Complete Health Insurance', 'Health Shield 360', 'MaxProtect Super'],
    logoText: 'ICICI Lombard'
  },
  {
    id: 'pm-jay',
    name: 'Ayushman Bharat (PM-JAY)',
    type: 'Government PM-JAY',
    cashlessApprovalRate: '100% (Govt Empaneled)',
    claimTurnaroundTime: 'Instant Biometric',
    popularPlans: ['National Health Protection Mission', 'AB-PMJAY Golden Card', 'State Arogya Karnataka / Rajiv Aarogyasri'],
    logoText: 'PM-JAY'
  }
];

export const HEALTH_PACKAGES_DATA: HealthPackage[] = [
  {
    id: 'pkg-festive',
    name: 'Comprehensive Whole-Body Health Check',
    testsCount: 68,
    badge: '50% OFF FESTIVE HEALTH',
    price: 2499,
    originalPrice: 4999,
    description: '68 Vital Tests including Cardiac ECHO, USG Abdomen & HbA1c with super-specialist physical evaluation.',
    includedChecks: [
      '2D Color Doppler Echocardiogram',
      'Ultrasound Whole Abdomen & Pelvis',
      'Glycosylated Hemoglobin (HbA1c)',
      'Complete Hemogram (24 parameters)',
      'Lipid Profile & Liver Function Tests',
      'Kidney Function & Serum Creatinine',
      'Thyroid Stimulating Hormone (TSH)',
      'Super-Specialist Doctor Consultation'
    ]
  },
  {
    id: 'pkg-cardiac',
    name: 'Advanced Cardiac Precision Screening',
    testsCount: 42,
    badge: 'GOLDEN HOUR PREVENTIVE',
    price: 3999,
    originalPrice: 6500,
    description: 'Targeted assessment for coronary artery risk, stress ECG (TMT), and calcium scoring evaluation.',
    includedChecks: [
      'Treadmill Test (Stress TMT)',
      '2D Echocardiogram & Doppler',
      'High-Sensitivity C-Reactive Protein (hs-CRP)',
      'Lipoprotein (a) & Apolipoprotein A1/B',
      'Serum Homocysteine',
      'Consultation with Dr. Rajesh V. Raman'
    ]
  }
];
