export const ELECTION_REPORTS_STATS_MOCK = {
  totalElections: { value: 8, sub: "All time" },
  completedElections: { value: 5, sub: "62.50%" },
  totalEligibleVoters: { value: 1254, sub: "Across all elections" },
  totalVotesCast: { value: 968, sub: "77.09% turnout" },
  reportsGenerated: { value: 24, sub: "All time" },
};

export const REPORT_ELECTION_OPTIONS = ["Parish Committee Election 2026", "Youth Committee Election 2026"];
export const REPORT_TYPE_OPTIONS = ["Results Report", "Analytics Report", "Voters Report", "Summary Report"];
export const REPORT_STATUS_OPTIONS = ["Completed", "Processing", "Failed"];

export const REPORT_FORMAT_BADGE_MAP = {
  PDF: "danger",
  Excel: "success",
  CSV: "warning",
};

export const RECENT_REPORTS_MOCK = [
  { id: "REP-1", name: "Position Results Report", election: "Parish Committee Election 2026", type: "Results Report", generatedByName: "Rev. Michael", generatedOn: "2026-05-08T10:45:00", format: "PDF" },
  { id: "REP-2", name: "Voter Turnout Report", election: "Parish Committee Election 2026", type: "Analytics Report", generatedByName: "Admin User", generatedOn: "2026-05-08T10:30:00", format: "PDF" },
  { id: "REP-3", name: "Voters List Report", election: "Youth Committee Election 2026", type: "Voters Report", generatedByName: "Admin User", generatedOn: "2026-05-07T16:15:00", format: "Excel" },
  { id: "REP-4", name: "Nomination Summary Report", election: "Parish Committee Election 2026", type: "Summary Report", generatedByName: "Admin User", generatedOn: "2026-05-06T11:20:00", format: "PDF" },
  { id: "REP-5", name: "Election Summary Report", election: "Parish Committee Election 2026", type: "Summary Report", generatedByName: "Rev. Michael", generatedOn: "2026-05-05T09:00:00", format: "PDF" },
];

// 19 more filler rows to reach "Showing 1 to 5 of 24 reports" / 3 pages,
// cycling through the same report types/elections/formats shown above.
const FILLER_NAMES = ["Candidate List Report", "Election Timeline Report", "Voting Activity Report", "Position Summary Report", "Voter Eligibility Report"];
export const RECENT_REPORTS_FULL_MOCK = [
  ...RECENT_REPORTS_MOCK,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `REP-${6 + i}`,
    name: FILLER_NAMES[i % FILLER_NAMES.length],
    election: i % 3 === 0 ? "Youth Committee Election 2026" : "Parish Committee Election 2026",
    type: REPORT_TYPE_OPTIONS[i % REPORT_TYPE_OPTIONS.length],
    generatedByName: i % 2 === 0 ? "Admin User" : "Rev. Michael",
    generatedOn: `2026-05-0${1 + (i % 4)}T${9 + (i % 8)}:00:00`,
    format: i % 3 === 0 ? "Excel" : i % 7 === 0 ? "CSV" : "PDF",
  })),
];

export const REPORTS_OVER_TIME_MOCK = [
  { date: "May 02", count: 3 },
  { date: "May 03", count: 6 },
  { date: "May 04", count: 4 },
  { date: "May 05", count: 8 },
  { date: "May 06", count: 5 },
  { date: "May 07", count: 10 },
  { date: "May 08", count: 12 },
];

export const REPORTS_BY_FORMAT_MOCK = {
  total: 24,
  breakdown: [
    { label: "PDF", value: 16, color: "#DC2626" },
    { label: "Excel", value: 6, color: "#16A34A" },
    { label: "CSV", value: 2, color: "#D97706" },
  ],
};

export const REPORT_CATEGORIES_MOCK = {
  total: 24,
  breakdown: [
    { label: "Results Reports", value: 8, color: "#16A34A" },
    { label: "Voter Reports", value: 6, color: "#D97706" },
    { label: "Analytics Reports", value: 5, color: "#7C3AED" },
    { label: "Summary Reports", value: 5, color: "#DB2777" },
  ],
};

export const ELECTION_REPORTS_QUICK_ACTIONS = [
  { key: "generate", label: "Generate New Report", description: "Create a custom report", icon: "PlusCircle", href: "#" },
  { key: "template", label: "Download Report Template", description: "Download report template", icon: "Download", href: "#" },
  { key: "schedule", label: "Schedule Report", description: "Schedule reports to run automatically", icon: "CalendarClock", href: "#" },
  { key: "export", label: "Export All Reports", description: "Export reports list as Excel", icon: "FileSpreadsheet", href: "#" },
];

export const ELECTION_REPORTS_NOTE_TEXT =
  "Reports contain sensitive election data. Please ensure that reports are handled securely and shared only with authorized personnel.";
