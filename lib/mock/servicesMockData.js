// Mock data for Choir & Worship Team > Services — maps to choir_worship/services/views.py once wired up.

export const SERVICE_TYPE_OPTIONS = ["Worship Service", "Youth Service", "Special Service", "Prayer Service", "Communion Service", "Thanksgiving Service", "Children Service", "Festival Service"];
export const SERVICE_LOCATION_OPTIONS = ["Main Hall", "Youth Room", "Prayer Room", "Children Room", "Choir Room"];
export const SERVICE_LANGUAGE_OPTIONS = ["English", "Tamil", "Hindi", "Bilingual (English & Tamil)"];
export const SERVICE_DRESS_CODE_OPTIONS = ["Formal", "Semi-formal", "Casual", "Festive Attire"];
export const SERVICE_DEPARTMENT_OPTIONS = ["Worship Team", "Choir", "Youth Ministry", "Children's Ministry", "Prayer Ministry"];
export const SERVICE_ORGANIZED_BY_OPTIONS = ["Worship Team", "Choir", "Youth Ministry", "Children's Ministry", "Prayer Ministry", "Parish Office"];
export const SERVICE_LEADER_OPTIONS = ["Daniel Paul", "Melissa Grace", "John Samuel", "Rev. Michael", "Sophia Williams"];
export const SERVICE_STATUS_OPTIONS = ["Upcoming", "Completed", "Cancelled"];
export const SERVICE_SONGS_SETLIST_OPTIONS = ["Sunday Worship Set", "Youth Praise Set", "Prayer & Reflection Set", "Festival Special Set"];

export const SERVICE_STATUS_VARIANT = { Upcoming: "info", Completed: "success", Cancelled: "danger" };

export const SERVICE_TYPE_ICON_COLOR = {
  "Worship Service": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Youth Service": { bg: "bg-success-50", color: "text-success-600" },
  "Special Service": { bg: "bg-warning-50", color: "text-warning-600" },
  "Prayer Service": { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Communion Service": { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  "Thanksgiving Service": { bg: "bg-orange-50", color: "text-orange-600" },
  "Children Service": { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  "Festival Service": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
};

const SERVICES_SEED = [
  { id: "SV-2026-0017", title: "Sunday Worship Service", type: "Worship Service", date: "2026-05-27", day: "Tuesday", timeRange: "6:00 PM - 8:00 PM", location: "Main Hall", leadBy: "Daniel Paul", leadRole: "Worship Leader", attendance: 312, expected: 312, attendancePct: 87, status: "Upcoming" },
  { id: "SV-2026-0016", title: "Youth Worship Service", type: "Youth Service", date: "2026-05-24", day: "Sunday", timeRange: "4:00 PM - 6:00 PM", location: "Youth Room", leadBy: "Melissa Grace", leadRole: "Youth Director", attendance: 156, expected: 200, attendancePct: 78, status: "Completed" },
  { id: "SV-2026-0015", title: "Choir Special Service", type: "Special Service", date: "2026-05-20", day: "Wednesday", timeRange: "7:00 PM - 9:00 PM", location: "Main Hall", leadBy: "John Samuel", leadRole: "Choir Director", attendance: 289, expected: 318, attendancePct: 91, status: "Completed" },
  { id: "SV-2026-0014", title: "Midweek Prayer Service", type: "Prayer Service", date: "2026-05-17", day: "Sunday", timeRange: "7:00 PM - 8:30 PM", location: "Prayer Room", leadBy: "Rev. Michael", leadRole: "Parish Priest", attendance: 89, expected: 159, attendancePct: 56, status: "Completed" },
  { id: "SV-2026-0013", title: "Special Communion Service", type: "Communion Service", date: "2026-05-13", day: "Wednesday", timeRange: "6:30 PM - 8:30 PM", location: "Main Hall", leadBy: "Rev. Michael", leadRole: "Parish Priest", attendance: 341, expected: 363, attendancePct: 94, status: "Completed" },
  { id: "SV-2026-0012", title: "Family Thanksgiving Service", type: "Thanksgiving Service", date: "2026-05-10", day: "Sunday", timeRange: "10:00 AM - 12:00 PM", location: "Main Hall", leadBy: "Daniel Paul", leadRole: "Worship Leader", attendance: 276, expected: 314, attendancePct: 88, status: "Cancelled" },
  { id: "SV-2026-0011", title: "Children's Sunday Service", type: "Children Service", date: "2026-05-06", day: "Wednesday", timeRange: "9:00 AM - 10:30 AM", location: "Children Room", leadBy: "Sophia Williams", leadRole: "Children Director", attendance: 64, expected: 89, attendancePct: 72, status: "Completed" },
  { id: "SV-2026-0010", title: "Easter Sunday Service", type: "Festival Service", date: "2026-05-03", day: "Sunday", timeRange: "6:00 AM - 8:00 AM", location: "Main Hall", leadBy: "Rev. Michael", leadRole: "Parish Priest", attendance: 512, expected: 533, attendancePct: 96, status: "Completed" },
];

/** Pad the seed list out to 48 entries to match "Showing 1 to 8 of 48 services". */
export const SERVICES_LIST_MOCK = Array.from({ length: 48 }, (_, i) => {
  const seed = SERVICES_SEED[i % SERVICES_SEED.length];
  if (i < SERVICES_SEED.length) return seed;
  return { ...seed, id: `SV-2026-${String(48 - i).padStart(4, "0")}` };
});

export const SERVICES_UPCOMING_MOCK = [
  { day: "27", month: "MAY", title: "Sunday Worship Service", meta: "Today", timeRange: "6:00 PM - 8:00 PM", location: "Main Hall" },
  { day: "30", month: "MAY", title: "Youth Worship Service", meta: "Saturday", timeRange: "4:00 PM - 6:00 PM", location: "Youth Room" },
  { day: "03", month: "JUN", title: "Midweek Prayer Service", meta: "Tuesday", timeRange: "7:00 PM - 8:30 PM", location: "Prayer Room" },
  { day: "07", month: "JUN", title: "Choir Practice Service", meta: "Saturday", timeRange: "5:00 PM - 6:30 PM", location: "Choir Room" },
];

export const SERVICE_ATTENDANCE_MOCK = {
  average: 274,
  breakdown: [
    { label: "Worship Services", pct: 45, color: "#7C3AED" },
    { label: "Youth Services", pct: 25, color: "#16A34A" },
    { label: "Prayer Services", pct: 15, color: "#F97316" },
    { label: "Others", pct: 15, color: "#DC2626" },
  ],
};

export const NEW_SERVICE_DEFAULTS = {
  title: "",
  type: "",
  shortCode: "",
  description: "",
  department: "",
  status: "Upcoming",
  date: "",
  startTime: "",
  endTime: "",
  timezone: "(GMT+05:30) Asia/Kolkata",
  location: "",
  language: "",
  dressCode: "",
  livestream: true,
  expectedAttendance: "",
  locationCapacity: "",
  organizedBy: "",
  ledBy: "",
  songsSetlist: "",
  notes: "",
  attachments: [],
};

// ---------------------------------------------------------------------------
// Service detail (Sunday Worship Service) — shown in the Service Details drawer
// ---------------------------------------------------------------------------

export const SERVICE_DETAIL_MOCK = {
  id: "SV-2026-0017",
  title: "Sunday Worship Service",
  status: "Upcoming",
  type: "Worship Service",
  date: "2026-05-27",
  day: "Tuesday",
  timeRange: "6:00 PM - 8:00 PM",
  location: "Main Hall",
  leadBy: "Daniel Paul",
  leadRole: "Worship Leader",
  organizedBy: "Worship Team",
  expectedAttendance: 312,
  actualAttendance: null,
  createdOn: "2026-05-10",
  createdBy: "Rev. Michael",
  lastUpdatedOn: "2026-05-20",
  lastUpdatedBy: "Daniel Paul",
  description: "A time of worship, praise, and the Word. All are welcome to join and experience God's presence.",
  language: "English",
  dressCode: "Formal",
  livestream: true,
  teamInvolved: [
    { name: "Daniel Paul", role: "Worship Leader" },
    { name: "John Samuel", role: "Keyboardist" },
    { name: "Stephen Raj", role: "Sound Engineer" },
    { name: "Gloria Thomas", role: "Media Operator" },
    { name: "Mark David", role: "Ushers Coordinator" },
  ],
  teamCount: 12,
  notes: "Please arrive by 5:30 PM for sound check and final preparation.",
  attachments: [
    { name: "Service Flow - May 27.pdf", size: "1.2 MB", kind: "pdf" },
  ],
};

export function buildServiceDetailMock(id) {
  if (!id || id === SERVICE_DETAIL_MOCK.id) return SERVICE_DETAIL_MOCK;
  const fallback = SERVICES_LIST_MOCK.find((s) => s.id === id);
  if (!fallback) return { ...SERVICE_DETAIL_MOCK, id };
  return {
    ...SERVICE_DETAIL_MOCK,
    id,
    title: fallback.title,
    type: fallback.type,
    date: fallback.date,
    day: fallback.day,
    timeRange: fallback.timeRange,
    location: fallback.location,
    leadBy: fallback.leadBy,
    leadRole: fallback.leadRole,
    status: fallback.status,
    expectedAttendance: fallback.expected,
    actualAttendance: fallback.status === "Completed" ? fallback.attendance : null,
  };
}
