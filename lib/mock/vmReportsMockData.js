export const VM_REPORTS_OVERVIEW_STATS_MOCK = {
  totalMembers: { value: 1256, delta: "4.5%", trendUp: true },
  activeVolunteers: { value: 156, delta: "3.2%", trendUp: true },
  servicesConducted: { value: 14, delta: "7.7%", trendUp: true },
  totalOfferings: { value: "₹ 2,45,680", delta: "8.1%", trendUp: true },
};

export const VM_FREQUENTLY_USED_REPORTS_MOCK = [
  { key: "member", title: "Member Report", description: "View member details, status, groups, and family information.", icon: "Users2" },
  { key: "attendance", title: "Attendance Report", description: "Track attendance for services, events and ministries.", icon: "CalendarCheck" },
  { key: "volunteer", title: "Volunteer Report", description: "View volunteer details, roles, assignments and statistics.", icon: "HeartHandshake" },
  { key: "ministry", title: "Ministry Report", description: "View ministry details, team members, and activity summary.", icon: "Church" },
  { key: "offering", title: "Offering Report", description: "View offering collections, trends and contribution summary.", icon: "CircleDollarSign" },
  { key: "assignment", title: "Service Assignment Report", description: "View service assignments and volunteer participation.", icon: "ClipboardList" },
  { key: "event", title: "Event Report", description: "View events, registrations, and participation details.", icon: "CalendarDays" },
  { key: "custom", title: "Custom Report", description: "Create and download custom reports as per your requirements.", icon: "Download" },
];

const VM_REPORT_SUMMARY_SEED = [
  { id: "R-001", name: "Weekly Attendance Report", description: "Attendance summary by services and events", generatedOn: "2026-05-24T10:30:00", generatedBy: "Parish Office", format: "PDF" },
  { id: "R-002", name: "Offering Summary", description: "Weekly offering collection summary", generatedOn: "2026-05-24T09:15:00", generatedBy: "Parish Office", format: "Excel" },
  { id: "R-003", name: "Member Directory", description: "Active members list with contact details", generatedOn: "2026-05-23T18:40:00", generatedBy: "Parish Office", format: "PDF" },
  { id: "R-004", name: "Volunteer Report", description: "Volunteer list and participation summary", generatedOn: "2026-05-23T16:20:00", generatedBy: "Parish Office", format: "Excel" },
];

export const VM_REPORT_SUMMARY_MOCK = Array.from({ length: 12 }, (_, i) => {
  const seed = VM_REPORT_SUMMARY_SEED[i % VM_REPORT_SUMMARY_SEED.length];
  if (i < VM_REPORT_SUMMARY_SEED.length) return seed;
  return { ...seed, id: `R-${String(5 + i).padStart(3, "0")}` };
});

export const VM_ATTENDANCE_TREND_MOCK = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  values: [60, 210, 140, 90, 190, 230, 340],
};

export const VM_REPORTS_RECENT_MOCK = [
  { title: "Attendance Report", date: "2026-05-24", time: "10:30 AM", user: "Parish Office" },
  { title: "Offering Summary", date: "2026-05-24", time: "9:15 AM", user: "Parish Office" },
  { title: "Member List", date: "2026-05-23", time: "6:40 PM", user: "Parish Office" },
  { title: "Volunteer Report", date: "2026-05-23", time: "4:20 PM", user: "Parish Office" },
];
