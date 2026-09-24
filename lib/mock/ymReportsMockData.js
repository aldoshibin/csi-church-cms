export const REP_STATS_MOCK = {
  totalMembers: { value: 856, delta: "8.5%", trendUp: true, sub: "vs Apr 1 - Apr 30" },
  attendanceAvg: { value: 312, delta: "6.3%", trendUp: true, sub: "vs Apr 1 - Apr 30" },
  lessonsConducted: { value: 48, delta: "14.3%", trendUp: true, sub: "vs Apr 1 - Apr 30" },
  activeVolunteers: { value: 128, delta: "9.1%", trendUp: true, sub: "vs Apr 1 - Apr 30" },
  offeringsReceived: { value: 245680, delta: "12.8%", trendUp: true, sub: "vs Apr 1 - Apr 30", isCurrency: true },
};

export const REP_ATTENDANCE_TREND_MOCK = [
  { label: "May 1", thisMonth: 220, lastMonth: 200 },
  { label: "May 4", thisMonth: 260, lastMonth: 210 },
  { label: "May 8", thisMonth: 300, lastMonth: 240 },
  { label: "May 11", thisMonth: 250, lastMonth: 260 },
  { label: "May 15", thisMonth: 340, lastMonth: 230 },
  { label: "May 18", thisMonth: 260, lastMonth: 280 },
  { label: "May 22", thisMonth: 280, lastMonth: 250 },
  { label: "May 25", thisMonth: 380, lastMonth: 260 },
  { label: "May 28", thisMonth: 300, lastMonth: 240 },
  { label: "May 31", thisMonth: 340, lastMonth: 270 },
];

export const REP_ATTENDANCE_SUMMARY_MOCK = {
  highest: { value: 428, date: "2026-05-18" },
  lowest: { value: 198, date: "2026-05-04" },
  average: { value: 312, sub: "This Month" },
  total: { value: 9660, sub: "This Month" },
};

export const REP_MEMBERS_BY_MINISTRY_MOCK = {
  total: 856,
  breakdown: [
    { label: "Youth Ministry", count: 256, pct: 29.9, color: "#16A34A" },
    { label: "Children Ministry", count: 198, pct: 23.1, color: "#7C3AED" },
    { label: "Worship Team", count: 156, pct: 18.2, color: "#F59E0B" },
    { label: "Prayer Ministry", count: 104, pct: 12.1, color: "#06B6D4" },
    { label: "Choir", count: 72, pct: 8.4, color: "#DB2777" },
    { label: "Others", count: 70, pct: 8.2, color: "#94A3B8" },
  ],
};

export const REP_TOP_YOUTH_GROUPS_MOCK = [
  { name: "Youth (13-18)", members: 132, attendanceAvg: 82 },
  { name: "Children (6-12)", members: 98, attendanceAvg: 78 },
  { name: "Young Adults (19-25)", members: 76, attendanceAvg: 75 },
  { name: "Juniors (3-5)", members: 54, attendanceAvg: 72 },
  { name: "Teens (13-15)", members: 48, attendanceAvg: 70 },
];

export const REP_OFFERINGS_MOCK = {
  totalReceived: 245680,
  delta: "12.8%",
  general: { amount: 145200, pct: 59.1 },
  special: { amount: 100480, pct: 40.9 },
};

export const REP_LESSONS_TREND_MOCK = [
  { label: "May 1-7", value: 8 },
  { label: "May 8-14", value: 11 },
  { label: "May 15-21", value: 15 },
  { label: "May 22-28", value: 9 },
  { label: "May 29-31", value: 5 },
];

export const REP_LESSONS_SUMMARY_MOCK = {
  totalLessons: 48,
  published: 36,
  draft: 8,
  scheduled: 7,
};

export const REP_UPCOMING_EVENTS_MOCK = [
  { month: "MAY", day: "24", title: "Youth Worship Night", time: "6:00 PM - 8:30 PM", venue: "Main Hall", ministry: "Youth Ministry", color: "#16A34A" },
  { month: "MAY", day: "31", title: "Bible Study Seminar", time: "10:00 AM - 1:00 PM", venue: "Conference Room", ministry: "Worship Team", color: "#7C3AED" },
  { month: "JUN", day: "07", title: "Children's Day Celebration", time: "9:00 AM - 12:00 PM", venue: "Church Grounds", ministry: "Children Ministry", color: "#F59E0B" },
  { month: "JUN", day: "15", title: "Prayer Meet", time: "7:00 PM - 8:30 PM", venue: "Prayer Hall", ministry: "Prayer Ministry", color: "#06B6D4" },
];

export const REP_TABS = ["Overview", "Attendance", "Lessons", "Volunteers", "Giving", "Events", "Youth Groups"];
