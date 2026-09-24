// Mock data for Men's Fellowship > Meeting Attendance — maps to mens_fellowship/attendance/views.py once wired up.

export const ATTENDANCE_MEETING_TYPE_OPTIONS = ["Fellowship", "Bible Study", "Prayer Meeting", "Mentorship", "Planning Meeting", "Worship", "Training", "Leadership"];

export const ATTENDANCE_LIST_STATUS_VARIANT = {
  Completed: "success",
  Upcoming: "info",
  Cancelled: "danger",
};

function rateColor(rate) {
  if (rate >= 75) return "text-success-600";
  if (rate >= 60) return "text-warning-600";
  return "text-danger-600";
}
export { rateColor };

const ATTENDANCE_SEED = [
  { id: "ATM-001", title: "Monthly Fellowship Meeting", subtitle: "May Monthly Meeting", type: "Fellowship", date: "2024-05-25", day: "Saturday", time: "6:00 PM", venue: "Fellowship Hall", expected: 40, present: 32, status: "Completed" },
  { id: "ATM-002", title: "Bible Study Meeting", subtitle: "Gospel of John - Chapter 5", type: "Bible Study", date: "2024-05-18", day: "Saturday", time: "7:00 PM", venue: "Room 3", expected: 35, present: 28, status: "Completed" },
  { id: "ATM-003", title: "Prayer Meeting", subtitle: "Intercessory Prayer", type: "Prayer Meeting", date: "2024-05-11", day: "Saturday", time: "6:30 PM", venue: "Prayer Room", expected: 30, present: 22, status: "Completed" },
  { id: "ATM-004", title: "Youth Mentorship Meeting", subtitle: "Guiding the Next Generation", type: "Mentorship", date: "2024-05-04", day: "Saturday", time: "6:00 PM", venue: "Fellowship Hall", expected: 40, present: 30, status: "Completed" },
  { id: "ATM-005", title: "Outreach Planning Meeting", subtitle: "Community Service Discussion", type: "Planning Meeting", date: "2024-04-27", day: "Saturday", time: "5:30 PM", venue: "Conference Room", expected: 25, present: 18, status: "Completed" },
  { id: "ATM-006", title: "Scripture Reflection", subtitle: "Proverbs - Chapter 3", type: "Bible Study", date: "2024-04-20", day: "Saturday", time: "7:00 PM", venue: "Room 2", expected: 35, present: 20, status: "Completed" },
  { id: "ATM-007", title: "Worship & Praise Meeting", subtitle: "Praise and Worship Night", type: "Worship", date: "2024-04-13", day: "Saturday", time: "6:00 PM", venue: "Fellowship Hall", expected: 50, present: 38, status: "Completed" },
  { id: "ATM-008", title: "Monthly Fellowship Meeting", subtitle: "April Monthly Meeting", type: "Fellowship", date: "2024-04-06", day: "Saturday", time: "6:00 PM", venue: "Fellowship Hall", expected: 40, present: 25, status: "Completed" },
  { id: "ATM-009", title: "Evangelism Training", subtitle: "Sharing the Gospel", type: "Training", date: "2024-03-30", day: "Saturday", time: "6:00 PM", venue: "Conference Room", expected: 30, present: 21, status: "Completed" },
  { id: "ATM-010", title: "Leadership Meeting", subtitle: "Team Coordination", type: "Leadership", date: "2024-03-23", day: "Saturday", time: "5:30 PM", venue: "Room 3", expected: 15, present: 12, status: "Completed" },
];

/** Pad the seed list out to 24 entries to match "Showing 1 to 10 of 24 meetings". */
export const ATTENDANCE_LIST_MOCK = Array.from({ length: 24 }, (_, i) => {
  const seed = ATTENDANCE_SEED[i % ATTENDANCE_SEED.length];
  if (i < ATTENDANCE_SEED.length) return seed;
  return { ...seed, id: `ATM-${String(i + 1).padStart(3, "0")}` };
});

export const ATTENDANCE_STATS_MOCK = {
  totalMeetings: { value: 24, delta: "33.3%", trendUp: true },
  avgAttendance: { value: 28, delta: "12.5%", trendUp: true },
  totalMembers: { value: 56, delta: null, trendUp: true },
  meetingsHeld: { value: 20, delta: "25%", trendUp: true },
};

export const ATTENDANCE_OVERVIEW_MOCK = {
  breakdown: [
    { label: "75% - 100%", count: 12, pct: 50.0, color: "#16A34A" },
    { label: "50% - 74%", count: 8, pct: 33.3, color: "#2563EB" },
    { label: "Below 50%", count: 4, pct: 16.7, color: "#F97316" },
  ],
};

export const ATTENDANCE_TREND_MOCK = [
  { label: "Apr 20", rate: 57.1 },
  { label: "Apr 27", rate: 72.0 },
  { label: "May 4", rate: 75.0 },
  { label: "May 11", rate: 73.3 },
  { label: "May 18", rate: 80.0 },
  { label: "May 25", rate: 80.0 },
];

export const TOP_ATTENDED_MEETINGS_MOCK = [
  { title: "Monthly Fellowship Meeting (May)", date: "2024-05-25", present: 32, expected: 40, pct: 80.0 },
  { title: "Bible Study - Gospel of John", date: "2024-05-18", present: 28, expected: 35, pct: 80.0 },
  { title: "Youth Mentorship Meeting", date: "2024-05-04", present: 30, expected: 40, pct: 75.0 },
];

// ---------------------------------------------------------------------------
// Attendance detail (Monthly Fellowship Meeting)
// ---------------------------------------------------------------------------

export const ATTENDANCE_DETAIL_MOCK = {
  id: "ATM-001",
  title: "Monthly Fellowship Meeting",
  subtitle: "May Monthly Meeting",
  status: "Completed",
  type: "Fellowship",
  date: "2024-05-25",
  day: "Saturday",
  timeRange: "6:00 PM - 8:00 PM",
  venue: "Fellowship Hall",
  conductedBy: "Men's Fellowship Team",
  expected: 40,
  present: 32,
  absent: 6,
  excused: 2,
  attendanceRate: 80.0,
  createdBy: "Rev. Michael",
  createdOn: "2024-04-20T09:15:00",
  lastUpdated: "2024-05-25T22:30:00",
  description: "Our monthly fellowship gathering to strengthen our bond in Christ, share testimonies, and encourage one another in faith.",
  agenda: [
    "Welcome & Opening Prayer",
    "Worship & Praise",
    "Scripture Reading - Philippians 4:13",
    "Fellowship Message",
    "Testimonies & Sharing",
    "Announcements",
    "Closing Prayer",
  ],
  attachments: [
    { name: "Meeting_Agenda.pdf", size: "245 KB", kind: "pdf" },
    { name: "Meeting_Notes.docx", size: "120 KB", kind: "docx" },
  ],
  overview: {
    breakdown: [
      { label: "Present", count: 32, pct: 80.0, color: "#16A34A" },
      { label: "Absent", count: 6, pct: 15.0, color: "#2563EB" },
      { label: "Excused", count: 2, pct: 5.0, color: "#F97316" },
    ],
  },
};

export function buildAttendanceDetailMock(id) {
  if (!id || id === ATTENDANCE_DETAIL_MOCK.id) return ATTENDANCE_DETAIL_MOCK;
  const fallback = ATTENDANCE_LIST_MOCK.find((m) => m.id === id);
  if (!fallback) return { ...ATTENDANCE_DETAIL_MOCK, id };
  const rate = fallback.expected ? Math.round((fallback.present / fallback.expected) * 1000) / 10 : 0;
  const absent = Math.max(fallback.expected - fallback.present - 0, 0);
  return {
    ...ATTENDANCE_DETAIL_MOCK,
    id,
    title: fallback.title,
    subtitle: fallback.subtitle,
    type: fallback.type,
    date: fallback.date,
    day: fallback.day,
    venue: fallback.venue,
    status: fallback.status,
    expected: fallback.expected,
    present: fallback.present,
    absent,
    excused: 0,
    attendanceRate: rate,
    overview: {
      breakdown: [
        { label: "Present", count: fallback.present, pct: rate, color: "#16A34A" },
        { label: "Absent", count: absent, pct: fallback.expected ? Math.round((absent / fallback.expected) * 1000) / 10 : 0, color: "#2563EB" },
        { label: "Excused", count: 0, pct: 0, color: "#F97316" },
      ],
    },
  };
}
