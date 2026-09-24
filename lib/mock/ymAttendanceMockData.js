export const ATT_MINISTRY_OPTIONS = ["Youth Ministry", "Worship Services", "Bible Study", "Prayer Meetings", "Others"];
export const ATT_YOUTH_GROUP_OPTIONS = ["Junior Youth", "Youth Fellowship", "Young Adults", "College & Career", "Worship Team", "Outreach Team"];
export const ATT_STATUS_OPTIONS = ["Present", "Late", "Absent", "Not Marked"];

export const ATT_STATUS_VARIANT = {
  Present: "success",
  Late: "warning",
  Absent: "danger",
  "Not Marked": "default",
};

export const ATTENDANCE_MAIN_STATS_MOCK = {
  totalAttendanceThisMonth: { value: 1256, delta: "12.4%", trendUp: true },
  eventsConducted: { value: 24, delta: "9.1%", trendUp: true },
  averageAttendance: { value: 52, delta: "8.6%", trendUp: true },
  highestAttendance: { value: 128, sub: "Praise & Worship Evening" },
  attendanceRate: { value: "76%", delta: "6.2%", trendUp: true },
};

export const ATTENDANCE_OVERVIEW_TREND_MOCK = [
  { label: "May 1", value: 70 }, { label: "May 3", value: 95 }, { label: "May 6", value: 60 },
  { label: "May 8", value: 105 }, { label: "May 11", value: 55 }, { label: "May 13", value: 90 },
  { label: "May 16", value: 130 }, { label: "May 18", value: 65 }, { label: "May 21", value: 75 },
  { label: "May 23", value: 110 }, { label: "May 26", value: 95 }, { label: "May 28", value: 80 },
  { label: "May 31", value: 100 },
];

export const ATTENDANCE_BY_MINISTRY_MOCK = {
  total: 1256,
  breakdown: [
    { label: "Youth Ministry", count: 478, pct: 38, color: "#16A34A" },
    { label: "Worship Services", count: 352, pct: 28, color: "#2563EB" },
    { label: "Bible Study", count: 201, pct: 16, color: "#EA580C" },
    { label: "Prayer Meetings", count: 126, pct: 10, color: "#DB2777" },
    { label: "Others", count: 99, pct: 8, color: "#94A3B8" },
  ],
};

export const ATT_UPCOMING_EVENTS_MOCK = [
  { month: "MAY", day: "24", title: "Youth Worship Night", time: "6:00 PM - 8:30 PM", venue: "Main Hall", rsvp: 65 },
  { month: "MAY", day: "31", title: "Bible Study Seminar", time: "10:00 AM - 1:00 PM", venue: "Conference Room", rsvp: 40 },
  { month: "JUN", day: "07", title: "Children's Day Celebration", time: "9:00 AM - 12:00 PM", venue: "Church Grounds", rsvp: 80 },
];

const RECENT_ATTENDANCE_RECORDS_SEED = [
  { id: "ATT-001", date: "2026-05-18", event: "Praise & Worship Evening", category: "Worship", totalAttendance: 128, newVisitors: 15, recordedBy: "Sarah Wilson", icon: "music", color: "#DB2777" },
  { id: "ATT-002", date: "2026-05-17", event: "Youth Fellowship", category: "Youth Ministry", totalAttendance: 86, newVisitors: 8, recordedBy: "Daniel Mark", icon: "users", color: "#16A34A" },
  { id: "ATT-003", date: "2026-05-16", event: "Bible Study", category: "Spiritual Growth", totalAttendance: 45, newVisitors: 5, recordedBy: "Grace Wilson", icon: "book", color: "#2563EB" },
  { id: "ATT-004", date: "2026-05-14", event: "Prayer Meeting", category: "Prayer Ministry", totalAttendance: 32, newVisitors: 2, recordedBy: "Linda Scott", icon: "cross", color: "#EA580C" },
  { id: "ATT-005", date: "2026-05-10", event: "Sunday Worship Service", category: "Worship", totalAttendance: 112, newVisitors: 12, recordedBy: "Michael Brown", icon: "music", color: "#DB2777" },
];

/** Pad the seed list out to 24 entries to match "Showing 1 to 5 of 24 records". */
export const RECENT_ATTENDANCE_RECORDS_MOCK = Array.from({ length: 24 }, (_, i) => {
  const seed = RECENT_ATTENDANCE_RECORDS_SEED[i % RECENT_ATTENDANCE_RECORDS_SEED.length];
  if (i < RECENT_ATTENDANCE_RECORDS_SEED.length) return seed;
  return { ...seed, id: `ATT-${String(i + 1).padStart(3, "0")}` };
});

/** Attendance detail (event-level) shown on the Attendance Details / Edit Attendance pages. */
export const ATTENDANCE_EVENT_DETAIL_MOCK = {
  id: "EVT-001",
  title: "Youth Worship Night",
  status: "Upcoming",
  date: "2026-05-24",
  day: "Sunday",
  time: "6:00 PM - 8:30 PM",
  venue: "Main Hall",
  venueOrg: "CSI St. John's Church",
  organizer: "Youth Ministry Team",
  category: "Youth Ministry",
  totalRegistered: 80,
  totalPresent: 45,
  totalPresentPct: 56.25,
  totalAbsent: 20,
  totalAbsentPct: 25.00,
  lateArrivals: 5,
  lateArrivalsPct: 6.25,
  notMarked: 10,
  notMarkedPct: 12.50,
  notes: "Attendance is marked based on check-in at the event. Members can be marked present, absent or as late arrivals.",
};

const ATTENDANCE_MEMBERS_SEED = [
  { id: 1, name: "Sarah Wilson", initials: "SW", group: "Junior Youth", status: "Present", checkIn: "5:55 PM", checkOut: "8:35 PM", recordedBy: "Sarah Wilson", notes: "" },
  { id: 2, name: "Daniel Mark", initials: "DM", group: "Youth Fellowship", status: "Present", checkIn: "5:58 PM", checkOut: "8:30 PM", recordedBy: "Daniel Mark", notes: "" },
  { id: 3, name: "Grace Wilson", initials: "GW", group: "Young Adults", status: "Late", checkIn: "6:15 PM", checkOut: "8:32 PM", recordedBy: "Grace Wilson", notes: "Arrived late" },
  { id: 4, name: "Michael Brown", initials: "MB", group: "College & Career", status: "Absent", checkIn: "", checkOut: "", recordedBy: "Daniel Mark", notes: "" },
  { id: 5, name: "Linda Scott", initials: "LS", group: "Outreach Team", status: "Present", checkIn: "5:50 PM", checkOut: "8:31 PM", recordedBy: "Linda Scott", notes: "" },
  { id: 6, name: "Amit Kumar", initials: "AK", group: "Worship Team", status: "Present", checkIn: "5:45 PM", checkOut: "8:33 PM", recordedBy: "Amit Kumar", notes: "" },
  { id: 7, name: "Rachel Thomas", initials: "RT", group: "Junior Youth", status: "Late", checkIn: "6:10 PM", checkOut: "8:30 PM", recordedBy: "Rachel Thomas", notes: "Traffic delay" },
  { id: 8, name: "Kevin Mathew", initials: "KM", group: "Youth Fellowship", status: "Not Marked", checkIn: "", checkOut: "", recordedBy: "Daniel Mark", notes: "" },
  { id: 9, name: "Sneha James", initials: "SJ", group: "Young Adults", status: "Present", checkIn: "5:57 PM", checkOut: "8:29 PM", recordedBy: "Sneha James", notes: "" },
  { id: 10, name: "John David", initials: "JD", group: "Prayer Meetings", status: "Absent", checkIn: "", checkOut: "", recordedBy: "Daniel Mark", notes: "" },
];

/** Pad the seed list out to 80 entries to match "Showing 1 to 10 of 80 members/records". */
export const ATTENDANCE_MEMBERS_MOCK = Array.from({ length: 80 }, (_, i) => {
  const seed = ATTENDANCE_MEMBERS_SEED[i % ATTENDANCE_MEMBERS_SEED.length];
  if (i < ATTENDANCE_MEMBERS_SEED.length) return { ...seed, checked: seed.status === "Present" || seed.status === "Late" };
  return { ...seed, id: i + 1, checked: seed.status === "Present" || seed.status === "Late" };
});
