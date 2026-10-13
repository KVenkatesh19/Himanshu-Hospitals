import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// In-memory appointments and state
const appointments: any[] = [];
let liveQueueCounter = 39;

// --- API Endpoints ---

// 1. Server Health
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'HEALTHY',
    service: 'Himanshu Hospitals Clinical Backend & ABDM Gateway',
    timestamp: new Date().toISOString(),
    liveQueueServing: liveQueueCounter,
    totalBookings: appointments.length
  });
});

// 2. ABDM Verification Endpoint
app.post('/api/abdm/verify', (req: Request, res: Response) => {
  const { abhaId, authChannel } = req.body;
  if (!abhaId || typeof abhaId !== 'string') {
    return res.status(400).json({ error: 'Valid 14-digit ABHA ID is required' });
  }

  // Simulated MoHFW ABDM verification
  res.json({
    status: 'ACTIVE_VERIFIED',
    abhaId,
    patientName: 'Rahul K. Sharma',
    gender: 'MALE',
    dob: '1984-04-12',
    linkedRecordsCount: 2,
    moHfwTimestamp: new Date().toISOString()
  });
});

// 3. Appointment Slot Booking & Queue Token Generation
app.post('/api/appointments', (req: Request, res: Response) => {
  const { doctorId, campusId, date, timeSlot, patientName, patientPhone, abhaId, consultType } = req.body;

  if (!doctorId || !date || !timeSlot || !patientName) {
    return res.status(400).json({ error: 'Missing required appointment fields' });
  }

  const generatedToken = Math.floor(Math.random() * 20) + 40;
  const newAppointment = {
    id: `apt-${Date.now()}`,
    tokenNumber: generatedToken,
    doctorId,
    campusId,
    date,
    timeSlot,
    patientName,
    patientPhone: patientPhone || '+91 98765 43210',
    abhaId: abhaId || '91-8821-4091-2311',
    consultType: consultType || 'OPD_IN_PERSON',
    status: 'CONFIRMED',
    createdAt: new Date().toISOString()
  };

  appointments.push(newAppointment);

  res.status(201).json({
    message: 'Appointment reserved successfully',
    appointment: newAppointment
  });
});

// 4. Live OPD Queue Advance (Doctor room consultation trigger)
app.post('/api/queue/advance', (req: Request, res: Response) => {
  liveQueueCounter += 1;
  res.json({
    currentServingToken: liveQueueCounter,
    updatedAt: new Date().toISOString()
  });
});

// 5. Cashless TPA & PM-JAY Policy Pre-Authorization Check
app.post('/api/tpa/verify', (req: Request, res: Response) => {
  const { providerId, policyNumber, patientName } = req.body;

  res.json({
    verified: true,
    policyNumber: policyNumber || 'POL-941824',
    patientName: patientName || 'Rahul K. Sharma',
    cashlessEligible: true,
    coPayPercent: 0,
    preAuthSlaMins: 20,
    deskLocation: 'TPA Desk #4, Ground Floor'
  });
});

// 6. Emergency 15-Minute Fleet Ambulance Dispatch
app.post('/api/emergency/dispatch', (req: Request, res: Response) => {
  const { category, pickupLocation, contactNumber } = req.body;

  res.json({
    dispatched: true,
    vehicleUnitId: 'KA-01-ER-892',
    etaMinutes: 11,
    assignedCampus: 'Bengaluru Central Campus',
    triageCategory: category || 'STEMI_CARDIAC_ARREST',
    doorToBalloonStandby: true
  });
});

// --- Vite / Static Files Mounting ---

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // In dev mode, mount Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Himanshu Hospitals server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
