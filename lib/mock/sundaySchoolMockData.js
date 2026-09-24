export const SS_STATS_MOCK = {
  totalStudents: { value: 248, delta: "12.4%", trendUp: true },
  totalTeachers: { value: 26, delta: "8.3%", trendUp: true },
  totalClasses: { value: 18, delta: "5.6%", trendUp: true },
  todaysAttendance: { value: 186, sub: "75.0% Attendance Rate" },
  thisMonthEvents: { value: 6, sub: "2 Upcoming Events" },
};

export const SS_ATTENDANCE_OVERVIEW_MOCK = [
  { label: "1 Apr", value: 42 }, { label: "3 Apr", value: 48 }, { label: "5 Apr", value: 55 },
  { label: "7 Apr", value: 50 }, { label: "9 Apr", value: 58 }, { label: "11 Apr", value: 62 },
  { label: "14 Apr", value: 60 }, { label: "16 Apr", value: 65 }, { label: "18 Apr", value: 63 },
  { label: "21 Apr", value: 58 }, { label: "23 Apr", value: 68 }, { label: "25 Apr", value: 70 },
  { label: "28 Apr", value: 75 },
];

export const SS_CLASS_WISE_ATTENDANCE_MOCK = {
  total: 186, totalPct: 75.0,
  breakdown: [
    { label: "Primary (6-8 yrs)", present: 85, pct: 82.5, color: "#16A34A" },
    { label: "Junior (9-12 yrs)", present: 62, pct: 72.9, color: "#2563EB" },
    { label: "Teen (13-16 yrs)", present: 28, pct: 66.7, color: "#F97316" },
    { label: "Youth (17+ yrs)", present: 11, pct: 55.0, color: "#7C3AED" },
  ],
};

export const SS_CLASS_OPTIONS = ["Primary (6-8 yrs)", "Junior (9-12 yrs)", "Teen (13-16 yrs)", "Youth (17+ yrs)"];

const RECENT_ATTENDANCE_SEED = [
  { date: "2025-04-27", day: "Sun", className: "Primary (6-8 yrs)", teacher: "Sarah Thomas", scheduled: 32, present: 28, absent: 4 },
  { date: "2025-04-27", day: "Sun", className: "Junior (9-12 yrs)", teacher: "Jonathan David", scheduled: 27, present: 19, absent: 8 },
  { date: "2025-04-27", day: "Sun", className: "Teen (13-16 yrs)", teacher: "Grace Mathew", scheduled: 21, present: 14, absent: 7 },
  { date: "2025-04-27", day: "Sun", className: "Youth (17+ yrs)", teacher: "Michael Joseph", scheduled: 20, present: 10, absent: 10 },
  { date: "2025-04-26", day: "Sat", className: "Primary (6-8 yrs)", teacher: "Sarah Thomas", scheduled: 32, present: 26, absent: 6 },
];

/** Pad the seed list out to 25 entries to match "Showing 1 to 5 of 25 records". */
export const RECENT_ATTENDANCE_MOCK = Array.from({ length: 25 }, (_, i) => {
  const seed = RECENT_ATTENDANCE_SEED[i % RECENT_ATTENDANCE_SEED.length];
  return { id: i + 1, ...seed };
});

export const SS_UPCOMING_EVENTS_MOCK = [
  { month: "MAY", day: "04", title: "Children's Sunday Service", time: "09:00 AM - 10:30 AM", location: "Main Hall", status: "Upcoming" },
  { month: "MAY", day: "11", title: "Sunday School Outing", time: "08:00 AM - 02:00 PM", location: "St. Mary's Park", status: "Upcoming" },
  { month: "MAY", day: "18", title: "Bible Quiz Competition", time: "10:30 AM - 12:00 PM", location: "Sunday School Room", status: "Upcoming" },
  { month: "MAY", day: "25", title: "Teachers Meeting", time: "04:00 PM - 05:00 PM", location: "Conference Room", status: "Upcoming" },
];
