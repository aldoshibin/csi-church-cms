export const WF_STATS_MOCK = {
  totalGroups: { value: 12, delta: "9.1%", trendUp: true },
  totalMembers: { value: 256, delta: "7.8%", trendUp: true },
  eventsThisMonth: { value: 8, delta: "14.3%", trendUp: true },
  activitiesThisMonth: { value: 5, delta: "11.2%", trendUp: true },
  attendanceAvg: { value: "78%", delta: "6.5%", trendUp: true },
};

export const WF_GROUP_STATUS_VARIANT = { Active: "success", Inactive: "default" };

const WF_GROUPS_SEED = [
  { id: "WFG-001", name: "Ruth Fellowship", establishedYear: 2018, leader: "Mrs. Sarah Wilson", members: 28, meetingDay: "Every Sunday", meetingTime: "4:00 PM - 5:30 PM", status: "Active", icon: "flower", color: "#16A34A" },
  { id: "WFG-002", name: "Esther Fellowship", establishedYear: 2019, leader: "Mrs. Grace Thomas", members: 32, meetingDay: "Every Saturday", meetingTime: "10:00 AM - 11:30 AM", status: "Active", icon: "crown", color: "#7C3AED" },
  { id: "WFG-003", name: "Martha Fellowship", establishedYear: 2020, leader: "Mrs. Linda Scott", members: 26, meetingDay: "Every Friday", meetingTime: "6:00 PM - 7:30 PM", status: "Active", icon: "heart", color: "#EA580C" },
  { id: "WFG-004", name: "Mary Fellowship", establishedYear: 2017, leader: "Mrs. Anitha Kumar", members: 30, meetingDay: "Every Thursday", meetingTime: "5:00 PM - 6:30 PM", status: "Active", icon: "flower", color: "#DB2777" },
  { id: "WFG-005", name: "Deborah Fellowship", establishedYear: 2021, leader: "Mrs. Priya Raj", members: 22, meetingDay: "Every Wednesday", meetingTime: "5:30 PM - 7:00 PM", status: "Active", icon: "crown", color: "#2563EB" },
];

/** Pad the seed list out to 12 entries to match "Showing 1 to 5 of 12 groups". */
export const WF_RECENT_GROUPS_MOCK = Array.from({ length: 12 }, (_, i) => {
  const seed = WF_GROUPS_SEED[i % WF_GROUPS_SEED.length];
  if (i < WF_GROUPS_SEED.length) return seed;
  return { ...seed, id: `WFG-${String(i + 1).padStart(3, "0")}` };
});

export const WF_UPCOMING_EVENTS_MOCK = [
  { month: "MAY", day: "24", title: "Women's Prayer Meeting", time: "4:00 PM - 5:30 PM", venue: "Fellowship Hall", category: "Prayer", color: "#16A34A" },
  { month: "MAY", day: "31", title: "Ladies Bible Study", time: "10:00 AM - 11:30 AM", venue: "Room 2", category: "Bible Study", color: "#7C3AED" },
  { month: "JUN", day: "07", title: "Women's Fellowship Meet", time: "5:00 PM - 7:00 PM", venue: "Church Grounds", category: "Fellowship", color: "#F59E0B" },
  { month: "JUN", day: "15", title: "Outreach Activity", time: "10:00 AM - 1:00 PM", venue: "Community Center", category: "Outreach", color: "#16A34A" },
];

export const WF_MEMBERS_BY_AGE_GROUP_MOCK = {
  total: 256,
  breakdown: [
    { label: "18 - 30 Years", count: 32, pct: 12.5, color: "#16A34A" },
    { label: "31 - 45 Years", count: 98, pct: 38.3, color: "#7C3AED" },
    { label: "46 - 60 Years", count: 78, pct: 30.5, color: "#F59E0B" },
    { label: "60+ Years", count: 48, pct: 18.7, color: "#06B6D4" },
  ],
};

export const WF_ATTENDANCE_TREND_MOCK = [
  { label: "May 1", thisMonth: 65, lastMonth: 40 },
  { label: "May 4", thisMonth: 72, lastMonth: 48 },
  { label: "May 8", thisMonth: 68, lastMonth: 55 },
  { label: "May 11", thisMonth: 80, lastMonth: 50 },
  { label: "May 15", thisMonth: 75, lastMonth: 58 },
  { label: "May 18", thisMonth: 85, lastMonth: 52 },
  { label: "May 22", thisMonth: 78, lastMonth: 60 },
  { label: "May 25", thisMonth: 82, lastMonth: 55 },
  { label: "May 28", thisMonth: 76, lastMonth: 58 },
  { label: "May 31", thisMonth: 80, lastMonth: 56 },
];
