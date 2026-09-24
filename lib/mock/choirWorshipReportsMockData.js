// Mock data for Choir & Worship Team > Reports — maps to choir_worship/reports/views.py once wired up.
// NOTE: distinct from lib/mock/fellowshipReportsMockData.js (Men's Fellowship) and
// lib/mock/reportsMockData.js (church-wide Reports & Analytics).

export const CW_REPORT_TYPE_OPTIONS = ["All Reports", "Songs", "Setlists", "Services", "Members", "Rehearsals", "Attendance"];
export const CW_REPORT_DATE_RANGE_OPTIONS = ["Today", "This Week", "This Month", "This Quarter", "This Year", "Custom Range"];
export const CW_REPORT_MINISTRY_OPTIONS = ["All Ministries", "Choir", "Worship Team", "Band"];
export const CW_REPORT_SERVICE_TYPE_OPTIONS = ["All Services", "Sunday Worship", "Youth Worship", "Midweek Service", "Special Service"];

export const CW_REPORTS_DATE_RANGE_LABEL = "May 20, 2026 - May 26, 2026";

export const CW_REPORTS_STATS_MOCK = {
  totalSongs: { value: 186, delta: "16", trendUp: true, deltaLabel: "vs last 7 days" },
  totalSetlists: { value: 32, delta: "4", trendUp: true, deltaLabel: "vs last 7 days" },
  services: { value: 18, delta: "3", trendUp: true, deltaLabel: "vs last 7 days" },
  activeMembers: { value: 45, delta: "5", trendUp: true, deltaLabel: "vs last 7 days" },
  totalRehearsals: { value: 12, delta: "2", trendUp: false, deltaLabel: "vs last 7 days" },
};

export const SONGS_BY_CATEGORY_MOCK = {
  total: 186,
  breakdown: [
    { label: "Praise & Worship", count: 42, pct: 23, color: "#7C3AED" },
    { label: "Hymns", count: 38, pct: 20, color: "#2563EB" },
    { label: "Worship", count: 36, pct: 19, color: "#16A34A" },
    { label: "Tamil Worship", count: 28, pct: 15, color: "#F97316" },
    { label: "Choral", count: 22, pct: 12, color: "#DB2777" },
    { label: "Others", count: 20, pct: 11, color: "#94A3B8" },
  ],
};

export const SETLISTS_BY_SERVICE_TYPE_MOCK = {
  total: 32,
  breakdown: [
    { label: "Sunday Worship", count: 16, pct: 50, color: "#7C3AED" },
    { label: "Youth Worship", count: 7, pct: 22, color: "#2563EB" },
    { label: "Midweek Service", count: 5, pct: 16, color: "#16A34A" },
    { label: "Special Service", count: 4, pct: 12, color: "#F97316" },
  ],
};

export const SERVICES_OVERVIEW_MOCK = [
  { label: "Sunday Worship", count: 18 },
  { label: "Youth Worship", count: 7 },
  { label: "Midweek Service", count: 5 },
  { label: "Special Service", count: 3 },
];

export const RECENT_SETLISTS_MOCK = [
  { id: "SL-001", name: "Sunday Worship Setlist", serviceType: "Sunday Worship Service", date: "2026-05-25", songs: 8, leader: "Daniel Paul", members: 12, status: "Completed" },
  { id: "SL-002", name: "Youth Praise Night Setlist", serviceType: "Youth Worship Service", date: "2026-05-24", songs: 7, leader: "John Samuel", members: 9, status: "Completed" },
  { id: "SL-003", name: "Midweek Prayer Setlist", serviceType: "Midweek Prayer Service", date: "2026-05-22", songs: 6, leader: "Melissa Grace", members: 8, status: "Completed" },
  { id: "SL-004", name: "Special Thanksgiving Setlist", serviceType: "Special Service", date: "2026-05-21", songs: 9, leader: "Daniel Paul", members: 14, status: "Completed" },
  { id: "SL-005", name: "Tamil Worship Setlist", serviceType: "Sunday Worship Service", date: "2026-05-18", songs: 7, leader: "John Samuel", members: 10, status: "Draft" },
];

export const RECENT_SETLIST_STATUS_VARIANT = { Completed: "success", Draft: "warning" };

export const REPORT_SHORTCUTS_MOCK = [
  { label: "Songs Report", key: "songs" },
  { label: "Setlists Report", key: "setlists" },
  { label: "Services Report", key: "services" },
  { label: "Members Report", key: "members" },
  { label: "Rehearsals Report", key: "rehearsals" },
  { label: "Attendance Report", key: "attendance" },
  { label: "Ministry Performance", key: "ministry" },
];
