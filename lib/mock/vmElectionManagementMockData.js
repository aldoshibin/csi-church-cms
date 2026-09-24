export const ELECTION_MANAGEMENT_STATS_MOCK = {
  upcomingElections: { value: 2, linkLabel: "View all upcoming elections", href: "/election-management/elections" },
  totalPositions: { value: 8, sub: "Across all elections" },
  totalCandidates: { value: 24, sub: "Across all elections" },
  totalVoters: { value: 512, sub: "Registered voters" },
  completedElections: { value: 3, linkLabel: "View past elections", href: "/election-management/elections" },
};

export const ELECTION_TABS = ["Upcoming Elections", "Ongoing Elections", "Completed Elections"];

export const ELECTION_TYPE_BADGE_MAP = {
  "Parish Committee": "info",
  "Ministry Committee": "success",
  "Trust Board": "accent",
};

export const UPCOMING_ELECTIONS_MOCK = [
  {
    id: "ELEC-1001", name: "Parish Committee Election 2026", type: "Parish Committee",
    description: "Annual election for parish committee",
    electionDate: "2026-06-15", timeRange: "09:00 AM - 05:00 PM",
    positions: 6, status: "Upcoming", daysRemaining: 45,
  },
  {
    id: "ELEC-1002", name: "Sunday School Committee Election 2026", type: "Ministry Committee",
    description: "Election for Sunday School committee",
    electionDate: "2026-07-10", timeRange: "09:00 AM - 03:00 PM",
    positions: 4, status: "Upcoming", daysRemaining: 70,
  },
  {
    id: "ELEC-1003", name: "Trust Board Election 2026", type: "Trust Board",
    description: "Election for Trust Board members",
    electionDate: "2026-08-05", timeRange: "09:00 AM - 05:00 PM",
    positions: 5, status: "Upcoming", daysRemaining: 96,
  },
];

export const ONGOING_ELECTIONS_MOCK = [];

export const COMPLETED_ELECTIONS_MOCK = [
  {
    id: "ELEC-0901", name: "Women's Fellowship Committee Election 2025", type: "Ministry Committee",
    description: "Election for Women's Fellowship committee",
    electionDate: "2025-11-10", timeRange: "09:00 AM - 05:00 PM",
    positions: 4, status: "Completed", daysRemaining: 0,
  },
  {
    id: "ELEC-0902", name: "Youth Fellowship Committee Election 2025", type: "Ministry Committee",
    description: "Election for Youth Fellowship committee",
    electionDate: "2025-09-05", timeRange: "09:00 AM - 04:00 PM",
    positions: 4, status: "Completed", daysRemaining: 0,
  },
  {
    id: "ELEC-0903", name: "Parish Committee Election 2025", type: "Parish Committee",
    description: "Annual election for parish committee",
    electionDate: "2025-06-12", timeRange: "09:00 AM - 05:00 PM",
    positions: 6, status: "Completed", daysRemaining: 0,
  },
];

export const ELECTION_TIMELINE_MOCK = [
  { key: "nomination-start", label: "Nomination Start Date", date: "2026-05-01", time: "10:00 AM", icon: "CalendarPlus", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]" },
  { key: "nomination-end", label: "Nomination End Date", date: "2026-05-20", time: "05:00 PM", icon: "CalendarX2", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]" },
  { key: "voting-start", label: "Voting Start Date", date: "2026-06-15", time: "09:00 AM", icon: "Vote", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
  { key: "voting-end", label: "Voting End Date", date: "2026-06-15", time: "05:00 PM", icon: "Vote", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]" },
  { key: "result-declaration", label: "Result Declaration", date: "2026-06-16", time: "10:00 AM", icon: "Trophy", iconBg: "bg-[#FEF3C7]", iconColor: "text-[#D97706]" },
];

export const RECENT_ACTIVITY_MOCK = [
  {
    id: "ACT-1", title: "New candidate nominated", description: "John Mathew nominated for Parish Committee Member",
    icon: "Users", iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", on: "2026-05-24T14:30:00",
  },
  {
    id: "ACT-2", title: "Nomination approved", description: "Sarah Mathew's nomination for Choir Committee approved",
    icon: "UserCheck", iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", on: "2026-05-23T11:15:00",
  },
  {
    id: "ACT-3", title: "Election created", description: "Parish Committee Election 2026 has been created",
    icon: "Vote", iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", on: "2026-05-20T09:40:00",
  },
  {
    id: "ACT-4", title: "Voter registered", description: "5 new voters registered for upcoming elections",
    icon: "UserPlus", iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", on: "2026-05-18T16:20:00",
  },
  {
    id: "ACT-5", title: "Results published", description: "Women's Fellowship Committee Election 2025 results published",
    icon: "FileBarChart", iconBg: "bg-[#FFE5E5]", iconColor: "text-[#DC2626]", on: "2026-05-10T10:30:00",
  },
];

export const ELECTION_OVERVIEW_MOCK = {
  total: 5,
  breakdown: [
    { label: "Upcoming", value: 2, color: "#2563EB" },
    { label: "Ongoing", value: 0, color: "#16A34A" },
    { label: "Completed", value: 3, color: "#C4B5FD" },
  ],
};

export const ELECTION_QUICK_ACTIONS = [
  { key: "create", label: "Create New Election", description: "Set up a new election", icon: "PlusCircle", href: "/election-management/elections/add" },
  { key: "positions", label: "Manage Positions", description: "Add or manage election positions", icon: "Users2", href: "/election-management/positions" },
  { key: "candidates", label: "Manage Candidates", description: "View and manage candidates", icon: "UsersRound", href: "/election-management/candidates" },
  { key: "voters", label: "Manage Voters", description: "View and manage voters", icon: "Users", href: "/election-management/voters" },
  { key: "reports", label: "Generate Reports", description: "Generate election reports", icon: "FileText", href: "/election-management/reports" },
];

export const ELECTION_NOTE_TEXT =
  "Ensure all election dates and times are set correctly. Changes cannot be made once voting has started.";
