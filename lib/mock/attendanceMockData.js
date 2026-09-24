export const ATTENDANCE_CLASS_OPTIONS = [
  "Beginner (Ages 4-6)", "Primary (Ages 7-9)", "Junior (Ages 10-12)",
  "Teen (Ages 13-15)", "Youth (Ages 16-18)", "Young Adults (19+)",
];

export const ATTENDANCE_STATS_MOCK = {
  totalStudents: { value: 256, sub: "All Classes" },
  presentToday: { value: 198, sub: "77.3% of total" },
  absentToday: { value: 58, sub: "22.7% of total" },
  lateToday: { value: 12, sub: "4.7% of total" },
  attendanceRate: { value: "87.6%", sub: "This Month" },
};

export const ATTENDANCE_OVERVIEW_MOCK = [
  { className: "Beginner (Ages 4-6)", total: 32, present: 26, absent: 5, late: 1, pct: 81.3 },
  { className: "Primary (Ages 7-9)", total: 45, present: 36, absent: 7, late: 2, pct: 80.0 },
  { className: "Junior (Ages 10-12)", total: 48, present: 38, absent: 8, late: 2, pct: 79.2 },
  { className: "Teen (Ages 13-15)", total: 52, present: 41, absent: 9, late: 2, pct: 78.8 },
  { className: "Youth (Ages 16-18)", total: 47, present: 35, absent: 8, late: 5, pct: 74.5 },
  { className: "Young Adults (19+)", total: 32, present: 22, absent: 7, late: 0, pct: 68.8 },
];
export const ATTENDANCE_OVERVIEW_TOTAL = { total: 256, present: 198, absent: 58, late: 12, pct: 77.3 };

export const ATTENDANCE_BY_STATUS_MOCK = {
  total: 256,
  breakdown: [
    { label: "Present", count: 198, pct: 77.3, color: "#16A34A" },
    { label: "Absent", count: 58, pct: 22.7, color: "#DC2626" },
    { label: "Late", count: 12, pct: 4.7, color: "#F59E0B" },
  ],
};

export const ATTENDANCE_TREND_MOCK = [
  { label: "May 4", pct: 75 }, { label: "May 5", pct: 78 }, { label: "May 6", pct: 74 },
  { label: "May 7", pct: 80 }, { label: "May 8", pct: 83 }, { label: "May 9", pct: 79 },
  { label: "May 10", pct: 76 }, { label: "May 11", pct: 81 }, { label: "May 12", pct: 85 },
  { label: "May 13", pct: 82 }, { label: "May 14", pct: 84 }, { label: "May 15", pct: 80 },
  { label: "May 16", pct: 86 }, { label: "May 17", pct: 83 }, { label: "May 18", pct: 87.6 },
];

const RECENT_ATTENDANCE_RECORDS_SEED = [
  { date: "2026-05-18", className: "Junior (Ages 10-12)", markedBy: "Sarah Thomas", present: 38, absent: 8, late: 2 },
  { date: "2026-05-18", className: "Primary (Ages 7-9)", markedBy: "Daniel Mark", present: 36, absent: 7, late: 2 },
  { date: "2026-05-18", className: "Teen (Ages 13-15)", markedBy: "Grace Wilson", present: 41, absent: 9, late: 2 },
  { date: "2026-05-18", className: "Beginner (Ages 4-6)", markedBy: "Joyce Wilson", present: 26, absent: 5, late: 1 },
  { date: "2026-05-17", className: "Youth (Ages 16-18)", markedBy: "Samuel Rai", present: 34, absent: 10, late: 3 },
];

/** Pad the seed list out to 10 entries to match "Showing 1 to 5 of 10 records". */
export const RECENT_ATTENDANCE_RECORDS_MOCK = Array.from({ length: 10 }, (_, i) => {
  const seed = RECENT_ATTENDANCE_RECORDS_SEED[i % RECENT_ATTENDANCE_RECORDS_SEED.length];
  return { id: i + 1, ...seed };
});
