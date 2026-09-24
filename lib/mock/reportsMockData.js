export const REPORT_CATEGORY_OPTIONS = ["Members", "Families", "Sacraments", "Finance", "Ministry", "Sunday School", "General"];
export const REPORT_DATE_RANGE_OPTIONS = ["This Month", "Last Month", "This Quarter", "This Year", "Custom Range"];

export const REPORTS_STATS_MOCK = {
  totalMembers: { value: 1256, delta: "8.4%", trendUp: true, sub: "vs last month" },
  newMembers: { value: 48, delta: "12.5%", trendUp: true, sub: "vs last month" },
  totalFamilies: { value: 342, delta: "5.7%", trendUp: true, sub: "vs last month" },
  baptismsThisYear: { value: 26, delta: "18.2%", trendUp: true, sub: "vs last year" },
  totalGivingThisMonth: { value: 245678, delta: "16.3%", trendUp: true, sub: "vs last month", isCurrency: true },
  totalEvents: { value: 28, delta: "12.0%", trendUp: true, sub: "vs last month" },
};

const REPORTS_SEED = [
  { id: "RPT-001", name: "Member Directory", category: "Members", description: "Complete list of all church members", lastGenerated: "2026-05-31", lastGeneratedTime: "10:30 AM" },
  { id: "RPT-002", name: "Family Report", category: "Families", description: "Detailed family information report", lastGenerated: "2026-05-31", lastGeneratedTime: "10:15 AM" },
  { id: "RPT-003", name: "Baptism Report", category: "Sacraments", description: "List of all baptism records", lastGenerated: "2026-05-31", lastGeneratedTime: "09:45 AM" },
  { id: "RPT-004", name: "Communion Report", category: "Sacraments", description: "Holy communion participation report", lastGenerated: "2026-05-31", lastGeneratedTime: "09:30 AM" },
  { id: "RPT-005", name: "Giving Report", category: "Finance", description: "Donations and giving summary", lastGenerated: "2026-05-31", lastGeneratedTime: "11:00 AM" },
  { id: "RPT-006", name: "Events Report", category: "Ministry", description: "List of all events and participation", lastGenerated: "2026-05-31", lastGeneratedTime: "08:50 AM" },
  { id: "RPT-007", name: "Sunday School Report", category: "Sunday School", description: "Classes, students and attendance", lastGenerated: "2026-05-31", lastGeneratedTime: "08:20 AM" },
  { id: "RPT-008", name: "Volunteer Report", category: "Ministry", description: "Active volunteers and service hours", lastGenerated: "2026-05-31", lastGeneratedTime: "08:10 AM" },
  { id: "RPT-009", name: "Attendance Report", category: "General", description: "Overall attendance summary", lastGenerated: "2026-05-31", lastGeneratedTime: "07:50 AM" },
  { id: "RPT-010", name: "Financial Summary", category: "Finance", description: "Income, expenses and balance summary", lastGenerated: "2026-05-31", lastGeneratedTime: "11:30 AM" },
];

/** Pad the seed list out to 24 entries to match "Showing 1 to 10 of 24 reports". */
export const REPORTS_MOCK = Array.from({ length: 24 }, (_, i) => {
  const seed = REPORTS_SEED[i % REPORTS_SEED.length];
  if (i < REPORTS_SEED.length) return seed;
  return { ...seed, id: `RPT-${String(i + 1).padStart(3, "0")}` };
});

export const REPORT_CATEGORIES_SUMMARY_MOCK = [
  { label: "Members", count: 6 },
  { label: "Families", count: 3 },
  { label: "Sacraments", count: 4 },
  { label: "Finance", count: 5 },
  { label: "Ministry", count: 4 },
  { label: "Sunday School", count: 2 },
];

export const MEMBER_OVERVIEW_MOCK = {
  total: 1256,
  breakdown: [
    { label: "Active Members", count: 956, pct: 76.1, color: "#16A34A" },
    { label: "Inactive Members", count: 168, pct: 13.4, color: "#2563EB" },
    { label: "New This Month", count: 48, pct: 3.8, color: "#7C3AED" },
    { label: "Visitors", count: 84, pct: 6.7, color: "#F59E0B" },
  ],
};

export const GIVING_OVERVIEW_MOCK = {
  totalGiving: 245678,
  averagePerDay: 7925,
  trend: [
    { label: "May 1", amount: 12000 }, { label: "May 4", amount: 18000 }, { label: "May 8", amount: 22000 },
    { label: "May 11", amount: 26000 }, { label: "May 15", amount: 35000 }, { label: "May 18", amount: 42000 },
    { label: "May 22", amount: 55000 }, { label: "May 25", amount: 78000 }, { label: "May 28", amount: 85000 },
    { label: "May 31", amount: 98000 },
  ],
};
