export const ATTENDANCE_STATUS_OPTIONS = ["Present", "Absent", "Late", "Not Marked"];

export const ATTENDANCE_STATUS_VARIANT = {
  Present: "success",
  Absent: "danger",
  Late: "warning",
  "Not Marked": "default",
};

export const ATTENDANCE_MINISTRY_OPTIONS = [
  "Worship Ministry",
  "Youth Ministry",
  "Choir Ministry",
  "Discipleship Ministry",
  "Prayer Ministry",
  "Media Ministry",
  "Hospitality Ministry",
  "Usher Ministry",
];

export const ATTENDANCE_SERVICE_OPTIONS = [
  "Sunday Service - 9:00 AM",
  "Youth Service - 5:00 PM",
  "Choir Practice",
  "Bible Study",
  "Prayer Meeting",
];

const ATTENDANCE_SEED = [
  { id: "A-2001", volunteerId: "V-1001", name: "Sophia Daniel", ministry: "Worship Ministry", service: "Sunday Service - 9:00 AM", date: "2026-05-24", status: "Present", checkInTime: "8:45 AM" },
  { id: "A-2002", volunteerId: "V-1002", name: "John Samuel", ministry: "Youth Ministry", service: "Youth Service - 5:00 PM", date: "2026-05-24", status: "Present", checkInTime: "4:55 PM" },
  { id: "A-2003", volunteerId: "V-1003", name: "Mary Grace", ministry: "Choir Ministry", service: "Choir Practice", date: "2026-05-23", status: "Present", checkInTime: "6:30 PM" },
  { id: "A-2004", volunteerId: "V-1004", name: "Daniel Paul", ministry: "Discipleship Ministry", service: "Bible Study", date: "2026-05-22", status: "Absent", checkInTime: null },
  { id: "A-2005", volunteerId: "V-1005", name: "Lydia Benjamin", ministry: "Prayer Ministry", service: "Prayer Meeting", date: "2026-05-22", status: "Present", checkInTime: "7:00 PM" },
  { id: "A-2006", volunteerId: "V-1006", name: "Thomas Philip", ministry: "Media Ministry", service: "Sunday Service - 9:00 AM", date: "2026-05-18", status: "Present", checkInTime: "8:30 AM" },
  { id: "A-2007", volunteerId: "V-1007", name: "Emily Johnson", ministry: "Hospitality Ministry", service: "Sunday Service - 9:00 AM", date: "2026-05-18", status: "Not Marked", checkInTime: null },
  { id: "A-2008", volunteerId: "V-1008", name: "Michael David", ministry: "Usher Ministry", service: "Sunday Service - 9:00 AM", date: "2026-05-18", status: "Absent", checkInTime: null },
];

/** Pad the seed list out to 156 entries to match "Showing 1 to 8 of 156 records". */
export const ATTENDANCE_LIST_MOCK = Array.from({ length: 156 }, (_, i) => {
  const seed = ATTENDANCE_SEED[i % ATTENDANCE_SEED.length];
  if (i < ATTENDANCE_SEED.length) return seed;
  return { ...seed, id: `A-${String(2009 + i).padStart(4, "0")}` };
});

export const ATTENDANCE_OVERVIEW_STATS_MOCK = {
  totalAssigned: 156,
  totalPresent: { value: 112, pct: 71.8 },
  totalAbsent: { value: 32, pct: 20.5 },
  notMarked: { value: 12, pct: 7.7 },
};

export const ATTENDANCE_SUMMARY_DONUT_MOCK = {
  total: 156,
  breakdown: [
    { label: "Present", count: 112, pct: 71.8, color: "#16A34A" },
    { label: "Absent", count: 32, pct: 20.5, color: "#DC2626" },
    { label: "Not Marked", count: 12, pct: 7.7, color: "#94A3B8" },
  ],
};

export const SERVICE_ATTENDANCE_MOCK = [
  { title: "Sunday Service - 9:00 AM", date: "2026-05-24", present: 92, total: 120, pct: 76.7 },
  { title: "Youth Service - 5:00 PM", date: "2026-05-24", present: 28, total: 40, pct: 70.0 },
  { title: "Choir Practice", date: "2026-05-23", present: 18, total: 25, pct: 72.0 },
  { title: "Bible Study", date: "2026-05-22", present: 22, total: 30, pct: 73.3 },
  { title: "Prayer Meeting", date: "2026-05-22", present: 12, total: 20, pct: 60.0 },
];

export const ATTENDANCE_RECENT_ACTIVITY_MOCK = [
  { type: "create", title: "Attendance marked for Sunday Service - 9:00 AM", date: "2026-05-24", time: "10:15 AM", user: "Parish Office" },
  { type: "update", title: "Bulk attendance updated for Bible Study", date: "2026-05-22", time: "8:45 PM", user: "Mary Grace" },
  { type: "event", title: "Attendance report generated", date: "2026-05-20", time: "6:30 PM", user: "Parish Office" },
];

/** Weekly mark-attendance roster for the Sunday Service - 9:00 AM / Worship Ministry assignment. */
export const MARK_ATTENDANCE_ROSTER_MOCK = [
  { volunteerId: "V-1001", name: "Sophia Daniel", role: "Worship Leader", checkInTime: "8:45 AM", status: "Present", remarks: "" },
  { volunteerId: "V-1002", name: "John Samuel", role: "Vocalist", checkInTime: "8:55 AM", status: "Present", remarks: "" },
  { volunteerId: "V-1003", name: "Mary Grace", role: "Choir Member", checkInTime: null, status: "Absent", remarks: "On Leave" },
  { volunteerId: "V-1004", name: "Daniel Paul", role: "Sound Team", checkInTime: "8:40 AM", status: "Present", remarks: "" },
  { volunteerId: "V-1005", name: "Lydia Benjamin", role: "Prayer Team", checkInTime: "9:02 AM", status: "Late", remarks: "Traffic delay" },
  { volunteerId: "V-1006", name: "Thomas Philip", role: "Media Team", checkInTime: null, status: "Absent", remarks: "Not available" },
  { volunteerId: "V-1007", name: "Emily Johnson", role: "Hospitality Team", checkInTime: "8:50 AM", status: "Present", remarks: "" },
  { volunteerId: "V-1008", name: "Michael David", role: "Usher", checkInTime: null, status: "Not Marked", remarks: "" },
];

export const MARK_ATTENDANCE_SUMMARY_MOCK = {
  present: { value: 5, pct: 62.5 },
  absent: { value: 2, pct: 25.0 },
  late: { value: 1, pct: 12.5 },
  notMarked: { value: 0, pct: 0 },
};

export const MARK_ATTENDANCE_SERVICE_DETAILS_MOCK = {
  service: "Sunday Service - 9:00 AM",
  ministry: "Worship Ministry",
  date: "2026-05-24",
  location: "Main Church",
  totalAssigned: 8,
};

export const NEW_MARK_ATTENDANCE_DEFAULTS = {
  service: ATTENDANCE_SERVICE_OPTIONS[0],
  ministry: ATTENDANCE_MINISTRY_OPTIONS[0],
  date: "2026-05-24",
  location: "Main Church",
  assignedBy: "Parish Office (Admin)",
  checkInTime: "8:45 AM",
};

export const ATTENDANCE_DETAIL_MOCK = {
  id: "A-2001",
  volunteerId: "V-1001",
  name: "Sophia Daniel",
  status: "Present",
  ministry: "Worship Ministry",
  role: "Worship Leader",
  email: "sophia.daniel@example.com",
  phone: "+91 98765 43210",
  service: "Sunday Service - 9:00 AM",
  date: "2026-05-24",
  checkInTime: "8:45 AM",
  checkOutTime: "11:15 AM",
  totalDuration: "2h 30m",
  markedBy: "Parish Office (Admin)",
  markedOn: "2026-05-24T08:50:00",
  notes: [
    { text: "Arrived early to prepare for worship. Sound check and team prayer done.", by: "Mary Grace", date: "2026-05-24", time: "11:20 AM" },
  ],
  serviceAssignment: {
    service: "Sunday Service - 9:00 AM",
    location: "Main Church",
    role: "Worship Leader",
    assignedOn: "2026-05-10",
    assignedBy: "Parish Office (Admin)",
    notes: "Lead worship and coordinate with the worship team.",
  },
  summary: {
    present: 2,
    absent: 1,
    late: 0,
    notMarked: 0,
  },
  weekAttendance: [
    { day: "Sun, May 24, 2026", status: "Present" },
    { day: "Sat, May 23, 2026", status: "Absent" },
    { day: "Fri, May 22, 2026", status: "Present" },
    { day: "Thu, May 21, 2026", status: "Present" },
    { day: "Wed, May 20, 2026", status: "Not Marked" },
  ],
  checkInHistory: [
    { date: "2026-05-24", service: "Sunday Service - 9:00 AM", checkIn: "8:45 AM", checkOut: "11:15 AM", status: "Present" },
    { date: "2026-05-17", service: "Sunday Service - 9:00 AM", checkIn: "8:50 AM", checkOut: "11:20 AM", status: "Present" },
    { date: "2026-05-10", service: "Sunday Service - 9:00 AM", checkIn: "9:05 AM", checkOut: "11:10 AM", status: "Late" },
  ],
};

export function buildAttendanceDetailMock(id) {
  const fallback = ATTENDANCE_LIST_MOCK.find((a) => a.id === id);
  if (!fallback) return { ...ATTENDANCE_DETAIL_MOCK, id };
  return {
    ...ATTENDANCE_DETAIL_MOCK,
    id,
    volunteerId: fallback.volunteerId,
    name: fallback.name,
    ministry: fallback.ministry,
    status: fallback.status,
    service: fallback.service,
    date: fallback.date,
    checkInTime: fallback.checkInTime,
  };
}
