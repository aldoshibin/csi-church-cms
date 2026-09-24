// Mock data for Volunteer Management → Availability — maps to volunteer_management/availability/* views.py once wired up.

export const AVAILABILITY_TYPE_OPTIONS = [
  { key: "weekly", label: "Weekly Availability", helper: "Set your regular weekly availability" },
  { key: "range", label: "Date Range Availability", helper: "Set availability for a specific date range" },
  { key: "specific", label: "Specific Dates", helper: "Set availability for specific dates" },
];

export const TIME_PREFERENCE_OPTIONS = ["Morning", "Afternoon", "Evening", "Night", "Flexible"];
export const AVAILABILITY_STATUS_OPTIONS = ["Available", "Limited", "Unavailable", "Not Set"];
export const AVAILABILITY_MINISTRY_OPTIONS = ["Worship Ministry", "Youth Ministry", "Choir Ministry", "Discipleship Ministry", "Prayer Ministry", "Media Ministry", "Hospitality Ministry", "Usher Ministry"];
export const AVAILABILITY_ROLE_OPTIONS = ["Worship Leader", "Speaker", "Choir Leader", "Facilitator", "Coordinator", "Sound Operator", "Volunteer", "Usher"];

export const AVAILABILITY_STATUS_VARIANT = { Available: "success", Limited: "warning", Unavailable: "danger", "Not Set": "default" };

export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const DAY_SHORT = { Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed", Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun" };

export const TIME_SLOTS = [
  { key: "allDay", label: "All Day" },
  { key: "morning", label: "Morning", range: "6 AM - 12 PM" },
  { key: "afternoon", label: "Afternoon", range: "12 PM - 6 PM" },
  { key: "evening", label: "Evening", range: "6 PM - 10 PM" },
  { key: "night", label: "Night", range: "10 PM - 6 AM" },
];

export const QUICK_PRESETS = ["Weekdays (Mon - Fri)", "Weekends (Sat - Sun)", "Mornings Only", "Afternoons Only", "Evenings Only", "All Day (Every Day)"];

export const CURRENT_WEEK_MOCK = { start: "2026-05-18", end: "2026-05-24" };

/** Mon 2026-05-18 .. Sun 2026-05-24, matching CURRENT_WEEK_MOCK. */
export const WEEK_DATES_MOCK = [
  { day: "Monday", date: "2026-05-18" },
  { day: "Tuesday", date: "2026-05-19" },
  { day: "Wednesday", date: "2026-05-20" },
  { day: "Thursday", date: "2026-05-21" },
  { day: "Friday", date: "2026-05-22" },
  { day: "Saturday", date: "2026-05-23" },
  { day: "Sunday", date: "2026-05-24" },
];

const AVAILABILITY_SEED = [
  {
    id: "V-1001", name: "Sophia Daniel", ministry: "Worship Ministry",
    week: { Monday: { status: "Available" }, Tuesday: { status: "Available" }, Wednesday: { status: "Available" }, Thursday: { status: "Limited", note: "After 6 PM" }, Friday: { status: "Unavailable" }, Saturday: { status: "Available" }, Sunday: { status: "Available" } },
  },
  {
    id: "V-1002", name: "John Samuel", ministry: "Youth Ministry",
    week: { Monday: { status: "Available" }, Tuesday: { status: "Available" }, Wednesday: { status: "Limited", note: "Evening" }, Thursday: { status: "Available" }, Friday: { status: "Available" }, Saturday: { status: "Unavailable" }, Sunday: { status: "Available" } },
  },
  {
    id: "V-1003", name: "Mary Grace", ministry: "Choir Ministry",
    week: { Monday: { status: "Available" }, Tuesday: { status: "Available" }, Wednesday: { status: "Available" }, Thursday: { status: "Limited", note: "After 5 PM" }, Friday: { status: "Available" }, Saturday: { status: "Available" }, Sunday: { status: "Unavailable" } },
  },
  {
    id: "V-1004", name: "Daniel Paul", ministry: "Discipleship Ministry",
    week: { Monday: { status: "Available" }, Tuesday: { status: "Limited", note: "After 6 PM" }, Wednesday: { status: "Available" }, Thursday: { status: "Available" }, Friday: { status: "Unavailable" }, Saturday: { status: "Available" }, Sunday: { status: "Available" } },
  },
  {
    id: "V-1005", name: "Lydia Benjamin", ministry: "Prayer Ministry",
    week: { Monday: { status: "Available" }, Tuesday: { status: "Unavailable" }, Wednesday: { status: "Available" }, Thursday: { status: "Available" }, Friday: { status: "Available" }, Saturday: { status: "Limited", note: "Morning" }, Sunday: { status: "Available" } },
  },
  {
    id: "V-1006", name: "Thomas Philip", ministry: "Media Ministry",
    week: { Monday: { status: "Available" }, Tuesday: { status: "Available" }, Wednesday: { status: "Limited", note: "Morning" }, Thursday: { status: "Available" }, Friday: { status: "Available" }, Saturday: { status: "Unavailable" }, Sunday: { status: "Available" } },
  },
  {
    id: "V-1007", name: "Emily Johnson", ministry: "Hospitality Ministry",
    week: { Monday: { status: "Limited", note: "Evening" }, Tuesday: { status: "Available" }, Wednesday: { status: "Available" }, Thursday: { status: "Unavailable" }, Friday: { status: "Available" }, Saturday: { status: "Available" }, Sunday: { status: "Limited", note: "After 6 PM" } },
  },
  {
    id: "V-1008", name: "Michael David", ministry: "Usher Ministry",
    week: { Monday: { status: "Available" }, Tuesday: { status: "Available" }, Wednesday: { status: "Unavailable" }, Thursday: { status: "Available" }, Friday: { status: "Available" }, Saturday: { status: "Available" }, Sunday: { status: "Available" } },
  },
];

/** Pad the seed list out to 28 entries to match "Showing 1 to 8 of 28 volunteers". */
export const AVAILABILITY_LIST_MOCK = Array.from({ length: 28 }, (_, i) => {
  const seed = AVAILABILITY_SEED[i % AVAILABILITY_SEED.length];
  if (i < AVAILABILITY_SEED.length) return seed;
  return { ...seed, id: `V-${String(1009 + i).padStart(4, "0")}` };
});

export const AVAILABILITY_OVERVIEW_STATS_MOCK = {
  available: { value: 142, pct: 56 },
  limited: { value: 56, pct: 22 },
  unavailable: { value: 44, pct: 17 },
  notSet: { value: 14, pct: 5 },
};

export const MINISTRY_AVAILABILITY_BREAKDOWN_MOCK = {
  total: 256,
  breakdown: [
    { label: "Worship Ministry", count: 72, pct: 28, color: "#16A34A" },
    { label: "Youth Ministry", count: 56, pct: 22, color: "#2563EB" },
    { label: "Choir Ministry", count: 48, pct: 19, color: "#7C3AED" },
    { label: "Prayer Ministry", count: 40, pct: 16, color: "#F97316" },
    { label: "Others", count: 40, pct: 15, color: "#94A3B8" },
  ],
};

export const UPCOMING_SERVICES_MOCK = [
  { title: "Sunday Service - 9:00 AM", date: "2026-05-25", assigned: 12, icon: "Church", bg: "bg-success-50", color: "text-success-600" },
  { title: "Youth Service - 5:00 PM", date: "2026-05-24", assigned: 8, icon: "Music", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  { title: "Bible Study", date: "2026-05-22", assigned: 10, icon: "BookOpen", bg: "bg-warning-50", color: "text-warning-600" },
];

export const NEW_AVAILABILITY_DEFAULTS = {
  volunteerId: "",
  ministryTeam: "",
  role: "",
  availabilityType: "weekly",
  rangeStart: CURRENT_WEEK_MOCK.start,
  rangeEnd: CURRENT_WEEK_MOCK.end,
  timePreference: "",
  schedule: DAYS.reduce((acc, day) => {
    acc[day] = { allDay: day !== "Wednesday" && day !== "Thursday" && day !== "Friday" && day !== "Saturday", morning: true, afternoon: true, evening: day !== "Tuesday", night: false };
    return acc;
  }, {}),
  notes: "",
};

// ---------------------------------------------------------------------------
// Volunteer availability detail (Sophia Daniel) — full detail page
// ---------------------------------------------------------------------------

export const AVAILABILITY_DETAIL_MOCK = {
  id: "V-1001",
  name: "Sophia Daniel",
  status: "Available",
  ministry: "Worship Ministry",
  role: "Worship Leader",
  volunteerId: "V-1001",
  phone: "+91 98765 43210",
  email: "sophia.daniel@example.com",
  address: "No. 12, Church Street, Chennai - 600001",
  joinedOn: "2024-01-15",
  summary: {
    available: { value: 38, pct: 54 },
    limited: { value: 10, pct: 14 },
    unavailable: { value: 8, pct: 11 },
    notSet: { value: 14, pct: 20 },
  },
  weeklyAvailability: [
    { day: "Monday", date: "2026-05-18", status: "Available", label: "All Day" },
    { day: "Tuesday", date: "2026-05-19", status: "Available", label: "All Day" },
    { day: "Wednesday", date: "2026-05-20", status: "Available", label: "All Day" },
    { day: "Thursday", date: "2026-05-21", status: "Limited", label: "After 6 PM" },
    { day: "Friday", date: "2026-05-22", status: "Unavailable", label: "All Day" },
    { day: "Saturday", date: "2026-05-23", status: "Available", label: "All Day" },
    { day: "Sunday", date: "2026-05-24", status: "Available", label: "All Day" },
  ],
  availabilityDetails: [
    { day: "Monday", status: "Available", time: "All Day", notes: "—" },
    { day: "Tuesday", status: "Available", time: "All Day", notes: "—" },
    { day: "Wednesday", status: "Available", time: "All Day", notes: "—" },
    { day: "Thursday", status: "Limited", time: "After 6:00 PM", notes: "Available until 6 PM" },
    { day: "Friday", status: "Unavailable", time: "All Day", notes: "Family commitment" },
    { day: "Saturday", status: "Available", time: "All Day", notes: "—" },
    { day: "Sunday", status: "Available", time: "All Day", notes: "—" },
  ],
  upcomingAssignments: [
    { title: "Sunday Service - 9:00 AM", date: "2026-05-25", time: "9:00 AM", status: "Confirmed" },
    { title: "Youth Service - 5:00 PM", date: "2026-05-24", time: "5:00 PM", status: "Confirmed" },
    { title: "Bible Study", date: "2026-05-22", time: "7:00 PM", status: "Pending" },
  ],
  timeOffUpcoming: [
    { range: "May 30 – May 31, 2026", type: "Personal", status: "Approved" },
  ],
};

export function buildAvailabilityDetailMock(id) {
  if (!id || id === AVAILABILITY_DETAIL_MOCK.id) return AVAILABILITY_DETAIL_MOCK;
  const fallback = AVAILABILITY_LIST_MOCK.find((v) => v.id === id);
  if (!fallback) return { ...AVAILABILITY_DETAIL_MOCK, id };
  return {
    ...AVAILABILITY_DETAIL_MOCK,
    id,
    name: fallback.name,
    ministry: fallback.ministry,
    volunteerId: fallback.id,
  };
}
