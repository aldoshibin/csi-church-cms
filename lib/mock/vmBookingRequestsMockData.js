export const REQUEST_STATUS_OPTIONS = ["Pending", "Approved", "Rejected"];
export const REQUEST_STATUS_VARIANT = { Pending: "warning", Approved: "success", Rejected: "danger" };

export const AVATAR_COLORS = [
  { bg: "#DCFCE7", color: "#16A34A" },
  { bg: "#FFEDD5", color: "#EA580C" },
  { bg: "#DBEAFE", color: "#2563EB" },
  { bg: "#F3E8FF", color: "#7C3AED" },
  { bg: "#FCE7F3", color: "#DB2777" },
];

export const BOOKING_REQUESTS_STATS_MOCK = {
  total: { value: 24, sub: "All Time" },
  pending: { value: 8, sub: "Awaiting Response" },
  approved: { value: 12, sub: "This Month" },
  rejected: { value: 4, sub: "This Month" },
};

export const REQUEST_STATUS_DONUT_MOCK = {
  total: 24,
  breakdown: [
    { label: "Pending", count: 8, pct: 33.3, color: "#F97316" },
    { label: "Approved", count: 12, pct: 50.0, color: "#16A34A" },
    { label: "Rejected", count: 4, pct: 16.7, color: "#DC2626" },
  ],
};

export const POPULAR_FACILITIES_MOCK = [
  { name: "Main Hall", count: 8 },
  { name: "Church Grounds", count: 6 },
  { name: "Conference Room", count: 4 },
  { name: "Sunday School Room", count: 3 },
  { name: "Choir Room", count: 3 },
];

const REQUESTS_SEED = [
  {
    id: "REQ-2026-024", requesterName: "John Baptiste", email: "john@example.com", phone: "+91 98765 43210",
    facility: "Main Hall", event: "Wedding Reception", date: "2026-05-30", dateLabel: "May 30, 2026", timeLabel: "06:00 PM - 10:00 PM",
    guests: 250, status: "Pending", requestedOn: "2026-05-20T10:30:00",
  },
  {
    id: "REQ-2026-023", requesterName: "Sarah Mathew", email: "sarahm@example.com", phone: "+91 91234 56789",
    facility: "Conference Room", event: "Business Meeting", date: "2026-05-28", dateLabel: "May 28, 2026", timeLabel: "10:00 AM - 01:00 PM",
    guests: 15, status: "Approved", requestedOn: "2026-05-18T16:15:00",
  },
  {
    id: "REQ-2026-022", requesterName: "Thomas Cherian", email: "thomasc@example.com", phone: "+91 99887 76655",
    facility: "Church Grounds", event: "Community Event", date: "2026-05-25", dateLabel: "May 25, 2026", timeLabel: "04:00 PM - 09:00 PM",
    guests: 300, status: "Pending", requestedOn: "2026-05-17T11:20:00",
  },
  {
    id: "REQ-2026-021", requesterName: "Anita Rajan", email: "anitar@example.com", phone: "+91 90000 11223",
    facility: "Sunday School Room", event: "Training Session", date: "2026-05-24", dateLabel: "May 24, 2026", timeLabel: "02:00 PM - 05:00 PM",
    guests: 30, status: "Approved", requestedOn: "2026-05-16T09:45:00",
  },
  {
    id: "REQ-2026-020", requesterName: "David Christopher", email: "davidc@example.com", phone: "+91 97890 12345",
    facility: "Choir Room", event: "Choir Practice", date: "2026-05-22", dateLabel: "May 22, 2026", timeLabel: "06:00 PM - 08:00 PM",
    guests: 25, status: "Rejected", requestedOn: "2026-05-15T14:10:00",
  },
  {
    id: "REQ-2026-019", requesterName: "Linda Mathews", email: "lindam@example.com", phone: "+91 94444 55667",
    facility: "Main Hall", event: "Birthday Celebration", date: "2026-05-21", dateLabel: "May 21, 2026", timeLabel: "05:00 PM - 09:00 PM",
    guests: 100, status: "Pending", requestedOn: "2026-05-14T10:00:00",
  },
  {
    id: "REQ-2026-018", requesterName: "Michael Varghese", email: "michaelv@example.com", phone: "+91 88999 66778",
    facility: "Conference Room", event: "Team Meeting", date: "2026-05-20", dateLabel: "May 20, 2026", timeLabel: "11:00 AM - 01:00 PM",
    guests: 12, status: "Approved", requestedOn: "2026-05-13T15:30:00",
  },
  {
    id: "REQ-2026-017", requesterName: "Peter Benjamin", email: "peterb@example.com", phone: "+91 95555 77889",
    facility: "Church Grounds", event: "Youth Sports Day", date: "2026-05-19", dateLabel: "May 19, 2026", timeLabel: "08:00 AM - 04:00 PM",
    guests: 200, status: "Rejected", requestedOn: "2026-05-12T13:05:00",
  },
];

export const BOOKING_REQUESTS_LIST_MOCK = Array.from({ length: 24 }, (_, i) => {
  const seed = REQUESTS_SEED[i % REQUESTS_SEED.length];
  if (i < REQUESTS_SEED.length) return seed;
  return { ...seed, id: `REQ-2026-${String(16 - (i - REQUESTS_SEED.length)).padStart(3, "0")}` };
});

export const REQUEST_DETAIL_MOCK = {
  id: "REQ-2026-024",
  requesterName: "John Baptiste", email: "john@example.com", phone: "+91 98765 43210", status: "Pending",
  requestedOn: "2026-05-20T10:30:00",
  facilityEvent: "Main Hall - Wedding Reception",
  dateTimeLabel: "May 30, 2026 | 06:00 PM - 10:00 PM",
  totalGuests: "250 People",
  setupType: "Banquet",
  advanceBookingDays: "10 Days",
  bookingAllowed: "Yes",
  maxBookingHours: "8 Hours",
  cancellationPolicy: "24 Hours Before Booking",
  descriptionNotes: "We would like to celebrate our wedding reception in the main hall.\nPlease arrange chairs, tables, and sound system.\nKindly confirm availability.",
  specialRequirements: ["Stage with decoration", "Sound system with 2 wireless mics", "AC", "Parking for at least 50 vehicles"],
  contact: {
    fullName: "John Baptiste", email: "john@example.com", phone: "+91 98765 43210",
    address: "12, Lake View Road, Nagercoil - 629001, Tamil Nadu, India",
  },
  usage: {
    numberOfDoors: 2, numberOfWindows: 8, totalArea: "3,000 sq ft",
    amenitiesRequested: ["AC", "Sound System", "Chairs", "Tables", "Stage", "Parking"],
  },
  attachments: [
    { name: "Hall Layout Plan.pdf", size: "1.2 MB", type: "pdf" },
    { name: "Decoration Reference.jpg", size: "2.4 MB", type: "image" },
  ],
  history: [
    { event: "Booking request submitted by John Baptiste.", date: "2026-05-20T10:30:00" },
  ],
};

export function buildRequestDetailMock(id) {
  const seed = REQUESTS_SEED.find((r) => r.id === id);
  if (!seed) return { ...REQUEST_DETAIL_MOCK, id: id || REQUEST_DETAIL_MOCK.id };
  return {
    ...REQUEST_DETAIL_MOCK,
    id: seed.id, requesterName: seed.requesterName, email: seed.email, phone: seed.phone, status: seed.status,
    requestedOn: seed.requestedOn,
    facilityEvent: `${seed.facility} - ${seed.event}`,
    dateTimeLabel: `${seed.dateLabel} | ${seed.timeLabel}`,
    totalGuests: `${seed.guests} People`,
    contact: { ...REQUEST_DETAIL_MOCK.contact, fullName: seed.requesterName, email: seed.email, phone: seed.phone },
    history: [{ event: `Booking request submitted by ${seed.requesterName}.`, date: seed.requestedOn }],
  };
}
