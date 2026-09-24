export const BOOKING_STATUS_OPTIONS = ["Confirmed", "Pending", "Rejected", "Cancelled"];
export const BOOKING_STATUS_VARIANT = { Confirmed: "success", Pending: "warning", Rejected: "danger", Cancelled: "default" };
export const PAYMENT_STATUS_OPTIONS = ["Paid", "Pending", "Refunded"];
export const PAYMENT_STATUS_VARIANT = { Paid: "success", Pending: "warning", Refunded: "danger" };
export const FACILITY_OPTIONS = ["Main Hall", "Conference Room", "Church Grounds"];
export const BOOKING_TYPE_OPTIONS = ["Private Event", "Church Event", "Community Event"];
export const SETUP_TYPE_OPTIONS = ["Banquet", "Theatre", "Classroom", "Open Floor"];

export const FACILITY_BOOKING_STATS_MOCK = {
  totalBookings: { value: 48, sub: "All Time" },
  upcomingBookings: { value: 18, sub: "Next 30 Days" },
  todaysBookings: { value: 3, sub: "May 24, 2026" },
  pendingRequests: { value: 5, sub: "Awaiting Approval" },
};

export const BOOKINGS_BY_STATUS_DONUT_MOCK = {
  total: 48,
  breakdown: [
    { label: "Confirmed", count: 26, pct: 54.2, color: "#16A34A" },
    { label: "Pending", count: 12, pct: 25.0, color: "#F97316" },
    { label: "Rejected", count: 6, pct: 12.5, color: "#DC2626" },
    { label: "Cancelled", count: 4, pct: 8.3, color: "#9CA3AF" },
  ],
};

export const UPCOMING_BOOKINGS_MOCK = [
  { id: "BK-2026-048", month: "MAY", day: "24", title: "Wedding Reception", facility: "Main Hall", time: "06:00 PM – 10:00 PM" },
  { id: "BK-2026-047", month: "MAY", day: "25", title: "Committee Meeting", facility: "Conference Room", time: "10:00 AM – 12:00 PM" },
  { id: "BK-2026-046", month: "MAY", day: "25", title: "Youth Program", facility: "Main Hall", time: "05:00 PM – 08:00 PM" },
];

const BOOKINGS_SEED = [
  {
    id: "BK-2026-048", facility: "Main Hall", bookedByName: "Mr. Daniel Abraham", bookedByPhone: "+91 98765 43210",
    purpose: "Wedding Reception", date: "2026-05-24", dateLabel: "May 24, 2026", timeLabel: "06:00 PM – 10:00 PM",
    status: "Confirmed", paymentStatus: "Paid", amount: 15000,
  },
  {
    id: "BK-2026-047", facility: "Conference Room", bookedByName: "Mrs. Mary Elizabeth", bookedByPhone: "+91 91234 56789",
    purpose: "Committee Meeting", date: "2026-05-25", dateLabel: "May 25, 2026", timeLabel: "10:00 AM – 12:00 PM",
    status: "Confirmed", paymentStatus: "Paid", amount: 2000,
  },
  {
    id: "BK-2026-046", facility: "Main Hall", bookedByName: "John Samuel", bookedByPhone: "+91 99887 76655",
    purpose: "Youth Program", date: "2026-05-25", dateLabel: "May 25, 2026", timeLabel: "05:00 PM – 08:00 PM",
    status: "Pending", paymentStatus: "Pending", amount: 8000,
  },
  {
    id: "BK-2026-045", facility: "Church Grounds", bookedByName: "Sunday School Dept.", bookedByPhone: "+91 90000 11122",
    purpose: "Sunday School Picnic", date: "2026-05-26", dateLabel: "May 26, 2026", timeLabel: "08:00 AM – 05:00 PM",
    status: "Confirmed", paymentStatus: "Paid", amount: 0,
  },
  {
    id: "BK-2026-044", facility: "Main Hall", bookedByName: "Mr. Thomas Mathew", bookedByPhone: "+91 94455 66778",
    purpose: "Birthday Celebration", date: "2026-05-27", dateLabel: "May 27, 2026", timeLabel: "07:00 PM – 09:30 PM",
    status: "Confirmed", paymentStatus: "Paid", amount: 5000,
  },
  {
    id: "BK-2026-043", facility: "Conference Room", bookedByName: "Women's Fellowship", bookedByPhone: "+91 98888 22334",
    purpose: "Prayer Meeting", date: "2026-05-28", dateLabel: "May 28, 2026", timeLabel: "03:00 PM – 05:00 PM",
    status: "Rejected", paymentStatus: "Refunded", amount: 0,
  },
  {
    id: "BK-2026-042", facility: "Main Hall", bookedByName: "Mr. George Philip", bookedByPhone: "+91 97979 79797",
    purpose: "Engagement Ceremony", date: "2026-05-29", dateLabel: "May 29, 2026", timeLabel: "06:00 PM – 09:00 PM",
    status: "Confirmed", paymentStatus: "Paid", amount: 12000,
  },
  {
    id: "BK-2026-041", facility: "Church Grounds", bookedByName: "Scouts & Guides", bookedByPhone: "+91 94433 22110",
    purpose: "Annual Camp", date: "2026-05-30", dateLabel: "May 30 – May 31, 2026", timeLabel: "09:00 AM – 05:00 PM",
    status: "Pending", paymentStatus: "Pending", amount: 0,
  },
  {
    id: "BK-2026-040", facility: "Main Hall", bookedByName: "Mr. Alex John", bookedByPhone: "+91 99999 00011",
    purpose: "Memorial Service", date: "2026-05-31", dateLabel: "May 31, 2026", timeLabel: "04:00 PM – 06:00 PM",
    status: "Confirmed", paymentStatus: "Paid", amount: 3000,
  },
  {
    id: "BK-2026-039", facility: "Conference Room", bookedByName: "Mission Team", bookedByPhone: "+91 94411 22333",
    purpose: "Planning Meeting", date: "2026-06-01", dateLabel: "Jun 01, 2026", timeLabel: "11:00 AM – 01:00 PM",
    status: "Confirmed", paymentStatus: "Paid", amount: 1000,
  },
];

export const BOOKED_BY_OPTIONS = BOOKINGS_SEED.map((b) => b.bookedByName);

export const BOOKINGS_LIST_MOCK = Array.from({ length: 48 }, (_, i) => {
  const seed = BOOKINGS_SEED[i % BOOKINGS_SEED.length];
  if (i < BOOKINGS_SEED.length) return seed;
  return { ...seed, id: `BK-2026-${String(38 - (i - BOOKINGS_SEED.length)).padStart(3, "0")}` };
});

export const ALL_BOOKINGS_STATS_MOCK = {
  total: 128,
  confirmed: { count: 78, pct: 60.9 },
  pending: { count: 26, pct: 20.3 },
  rejected: { count: 12, pct: 9.4 },
  cancelled: { count: 12, pct: 9.4 },
};

export const ALL_BOOKINGS_QUICK_SUMMARY_MOCK = {
  totalAmount: 96000, paidAmount: 63000, pendingAmount: 21000, refundedAmount: 0,
};

export const ALL_BOOKINGS_LIST_MOCK = Array.from({ length: 128 }, (_, i) => {
  const seed = BOOKINGS_SEED[i % BOOKINGS_SEED.length];
  if (i < BOOKINGS_SEED.length) return seed;
  return { ...seed, id: `BK-2026-${String(38 - (i - BOOKINGS_SEED.length)).padStart(3, "0")}` };
});

export const FACILITY_DETAILS_MOCK = {
  "Main Hall": { name: "Main Hall", location: "Church Campus", capacity: "300 People", amenities: "AC, Sound System, Chairs, Tables, Projector" },
  "Conference Room": { name: "Conference Room", location: "Church Campus", capacity: "40 People", amenities: "AC, Projector, Whiteboard, Wi-Fi" },
  "Church Grounds": { name: "Church Grounds", location: "Church Campus", capacity: "500 People", amenities: "Open Ground, Tents, Power Backup" },
};

export const BOOKING_DETAIL_MOCK = {
  id: "BK-2026-048",
  status: "Confirmed",
  statusNote: "Confirmed on May 11, 2026 by Parish Office",
  bookingInfo: {
    bookingId: "BK-2026-048", facility: "Main Hall", bookingType: "Private Event",
    purpose: "Wedding Reception", setupType: "Banquet", numberOfPeople: 250,
  },
  dateTime: { date: "2026-05-24", dayLabel: "Saturday", timeLabel: "06:00 PM – 10:00 PM (4 Hours)" },
  bookedOn: "2026-05-10T10:15:00",
  bookedBy: { name: "Mr. Daniel Abraham", phone: "+91 98765 43210" },
  expectedAttendance: 250,
  payment: {
    status: "Paid", totalAmount: 15000, paidAmount: 15000,
    paymentDate: "2026-05-11", paymentMethod: "UPI (Ref: UPI/4562/2026)",
    transactionId: "TXN984512365487",
  },
  booker: {
    name: "Mr. Daniel Abraham", phone: "+91 98765 43210", email: "daniel.abraham@gmail.com",
    address: "12, St. John's Street, Nagercoil, Kanyakumari, Tamil Nadu - 629001",
  },
  facility: FACILITY_DETAILS_MOCK["Main Hall"],
  timeline: [
    { event: "Booking Created", date: "2026-05-10T10:15:00", by: "Mr. Daniel Abraham" },
    { event: "Booking Confirmed", date: "2026-05-11T09:30:00", by: "Parish Office" },
    { event: "Payment Received", date: "2026-05-11T09:45:00", by: "Parish Office" },
    { event: "Reminder Sent", date: "2026-05-22T10:00:00", by: "System" },
  ],
  additional: {
    specialRequests: "Stage decoration allowed.\nAccess from 4:00 PM for setup.",
    stageDecoration: "Floral", accessTimeForSetup: "04:00 PM", organizerName: "Mr. Daniel Abraham",
  },
};

export function buildBookingDetailMock(id) {
  const seed = BOOKINGS_SEED.find((b) => b.id === id);
  if (!seed) return { ...BOOKING_DETAIL_MOCK, id: id || BOOKING_DETAIL_MOCK.id };
  return {
    ...BOOKING_DETAIL_MOCK,
    id: seed.id,
    status: seed.status,
    statusNote: `${seed.status === "Confirmed" ? "Confirmed" : seed.status} on ${seed.dateLabel} by Parish Office`,
    bookingInfo: {
      ...BOOKING_DETAIL_MOCK.bookingInfo,
      bookingId: seed.id, facility: seed.facility, purpose: seed.purpose,
    },
    dateTime: { ...BOOKING_DETAIL_MOCK.dateTime, date: seed.date, timeLabel: seed.timeLabel },
    bookedBy: { name: seed.bookedByName, phone: seed.bookedByPhone },
    payment: {
      ...BOOKING_DETAIL_MOCK.payment, status: seed.paymentStatus,
      totalAmount: seed.amount, paidAmount: seed.paymentStatus === "Paid" ? seed.amount : 0,
    },
    booker: { ...BOOKING_DETAIL_MOCK.booker, name: seed.bookedByName, phone: seed.bookedByPhone },
    facility: FACILITY_DETAILS_MOCK[seed.facility] ?? FACILITY_DETAILS_MOCK["Main Hall"],
  };
}

export const PAYMENT_METHOD_OPTIONS = ["UPI", "Cash", "Card", "Bank Transfer", "Cheque"];

export const NEW_BOOKING_DEFAULTS = {
  facility: "", bookingType: "", purpose: "", setupType: "", setupTime: "", numberOfPeople: "", expectedAttendance: "",
  date: "", startTime: "", endTime: "", bookedByName: "", bookedByPhone: "", bookedByEmail: "", bookedByAddress: "",
  specialRequests: "",
  paymentMethod: "", paymentStatus: "", totalAmount: "", paidAmount: "", paymentDate: "", transactionRefId: "",
};

export const BOOKING_CATEGORY_STYLE = {
  "Wedding / Reception": { bg: "#DCFCE7", color: "#16A34A" },
  "Service / Worship": { bg: "#DBEAFE", color: "#2563EB" },
  "Choir / Music": { bg: "#F3E8FF", color: "#7C3AED" },
  "Meeting / Study": { bg: "#FCE7F3", color: "#DB2777" },
  "Prayer / Fellowship": { bg: "#FFEDD5", color: "#EA580C" },
  "Youth / Program": { bg: "#FEE2E2", color: "#DC2626" },
  Others: { bg: "#F3F4F6", color: "#6B7280" },
};

export const BOOKING_CALENDAR_LEGEND_MOCK = Object.keys(BOOKING_CATEGORY_STYLE).map((label) => ({
  label, color: BOOKING_CATEGORY_STYLE[label].color,
}));

export const CALENDAR_MONTH_LABEL = "May 2026";

const ev = (time, title, facility, category) => ({ time, title, facility, category });

export const CALENDAR_MAY_2026_MOCK = [
  { date: "2026-04-26", dayNumber: 26, inMonth: false, events: [] },
  { date: "2026-04-27", dayNumber: 27, inMonth: false, events: [] },
  { date: "2026-04-28", dayNumber: 28, inMonth: false, events: [] },
  { date: "2026-04-29", dayNumber: 29, inMonth: false, events: [] },
  { date: "2026-04-30", dayNumber: 30, inMonth: false, events: [] },
  { date: "2026-05-01", dayNumber: 1, inMonth: true, events: [ev("06:00 PM", "Wedding Reception", "Main Hall", "Wedding / Reception")] },
  { date: "2026-05-02", dayNumber: 2, inMonth: true, events: [ev("10:00 AM", "Choir Practice", "Choir Room", "Choir / Music")], extraCount: 1 },

  { date: "2026-05-03", dayNumber: 3, inMonth: true, events: [ev("09:00 AM", "Sunday Service", "Main Hall", "Service / Worship")] },
  { date: "2026-05-04", dayNumber: 4, inMonth: true, events: [ev("07:00 PM", "Prayer Meeting", "Prayer Hall", "Prayer / Fellowship"), ev("04:00 PM", "Youth Meeting", "Conference Room", "Meeting / Study")] },
  { date: "2026-05-05", dayNumber: 5, inMonth: true, events: [] },
  { date: "2026-05-06", dayNumber: 6, inMonth: true, events: [ev("06:00 PM", "Choir Practice", "Choir Room", "Choir / Music")] },
  { date: "2026-05-07", dayNumber: 7, inMonth: true, events: [ev("05:00 PM", "Bible Study", "Conference Room", "Meeting / Study")] },
  { date: "2026-05-08", dayNumber: 8, inMonth: true, events: [ev("06:00 PM", "Wedding Reception", "Main Hall", "Wedding / Reception")] },
  { date: "2026-05-09", dayNumber: 9, inMonth: true, events: [] },

  { date: "2026-05-10", dayNumber: 10, inMonth: true, events: [ev("09:00 AM", "Sunday Service", "Main Hall", "Service / Worship")] },
  { date: "2026-05-11", dayNumber: 11, inMonth: true, events: [ev("07:00 PM", "Prayer Meeting", "Prayer Hall", "Prayer / Fellowship")] },
  { date: "2026-05-12", dayNumber: 12, inMonth: true, events: [] },
  { date: "2026-05-13", dayNumber: 13, inMonth: true, events: [ev("06:00 PM", "Choir Practice", "Choir Room", "Choir / Music")] },
  { date: "2026-05-14", dayNumber: 14, inMonth: true, events: [] },
  { date: "2026-05-15", dayNumber: 15, inMonth: true, events: [ev("06:00 PM", "Wedding Reception", "Main Hall", "Wedding / Reception"), ev("08:00 PM", "Committee Meeting", "Conference Room", "Meeting / Study")] },
  { date: "2026-05-16", dayNumber: 16, inMonth: true, events: [ev("10:00 AM", "Youth Program", "Main Hall", "Youth / Program")], extraCount: 1 },

  { date: "2026-05-17", dayNumber: 17, inMonth: true, events: [ev("09:00 AM", "Sunday Service", "Main Hall", "Service / Worship")] },
  { date: "2026-05-18", dayNumber: 18, inMonth: true, events: [ev("07:00 PM", "Prayer Meeting", "Prayer Hall", "Prayer / Fellowship")] },
  { date: "2026-05-19", dayNumber: 19, inMonth: true, events: [] },
  { date: "2026-05-20", dayNumber: 20, inMonth: true, events: [ev("06:00 PM", "Choir Practice", "Choir Room", "Choir / Music")] },
  { date: "2026-05-21", dayNumber: 21, inMonth: true, events: [ev("05:00 PM", "Bible Study", "Conference Room", "Meeting / Study")] },
  { date: "2026-05-22", dayNumber: 22, inMonth: true, events: [ev("06:00 PM", "Wedding Reception", "Main Hall", "Wedding / Reception")], extraCount: 2 },
  { date: "2026-05-23", dayNumber: 23, inMonth: true, events: [] },

  { date: "2026-05-24", dayNumber: 24, inMonth: true, events: [ev("09:00 AM", "Sunday Service", "Main Hall", "Service / Worship")] },
  { date: "2026-05-25", dayNumber: 25, inMonth: true, events: [ev("07:00 PM", "Prayer Meeting", "Prayer Hall", "Prayer / Fellowship")] },
  { date: "2026-05-26", dayNumber: 26, inMonth: true, events: [] },
  { date: "2026-05-27", dayNumber: 27, inMonth: true, isToday: true, events: [ev("06:00 PM", "Choir Practice", "Choir Room", "Choir / Music")] },
  { date: "2026-05-28", dayNumber: 28, inMonth: true, events: [] },
  { date: "2026-05-29", dayNumber: 29, inMonth: true, events: [ev("06:00 PM", "Wedding Reception", "Main Hall", "Wedding / Reception")] },
  { date: "2026-05-30", dayNumber: 30, inMonth: true, events: [ev("09:00 AM", "Annual Camp", "Church Grounds", "Youth / Program")], extraCount: 1 },

  { date: "2026-05-31", dayNumber: 31, inMonth: true, events: [ev("09:00 AM", "Sunday Service", "Main Hall", "Service / Worship")] },
  { date: "2026-06-01", dayNumber: 1, inMonth: false, events: [] },
  { date: "2026-06-02", dayNumber: 2, inMonth: false, events: [] },
  { date: "2026-06-03", dayNumber: 3, inMonth: false, events: [] },
  { date: "2026-06-04", dayNumber: 4, inMonth: false, events: [] },
  { date: "2026-06-05", dayNumber: 5, inMonth: false, events: [] },
  { date: "2026-06-06", dayNumber: 6, inMonth: false, events: [] },
];
