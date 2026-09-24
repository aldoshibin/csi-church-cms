// Mock data for Volunteer Management → Ministries & Teams — maps to volunteer_management/* views.py once wired up.

export const MINISTRY_CATEGORY_OPTIONS = ["Worship", "Discipleship", "Outreach", "Hospitality", "Youth", "Spiritual Growth", "Technical", "Other"];
export const MINISTRY_STATUS_OPTIONS = ["Active", "Inactive", "Archived"];
export const MINISTRY_HEAD_OPTIONS = ["John Samuel", "Mary Grace", "Daniel Paul", "Sophia Daniel", "Thomas Philip", "Anita Joseph"];
export const MINISTRY_SERVICE_TIME_OPTIONS = ["Sunday - 9:00 AM", "Sunday - 11:00 AM", "Wednesday - 6:00 PM", "Friday - 7:00 PM", "Weekends", "Flexible"];

export const MINISTRY_STATUS_VARIANT = { Active: "success", Inactive: "default", Archived: "default" };

export const MINISTRY_CATEGORY_BADGE = {
  Worship: { bg: "bg-warning-50", color: "text-warning-600" },
  Discipleship: { bg: "bg-interactive-50", color: "text-interactive-600" },
  Outreach: { bg: "bg-[#FFEDD5]", color: "text-[#C2410C]" },
  Hospitality: { bg: "bg-success-50", color: "text-success-600" },
  Youth: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Spiritual Growth": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  Technical: { bg: "bg-[#FEF3C7]", color: "text-[#92400E]" },
  Other: { bg: "bg-surface-muted", color: "text-ink-subtle" },
};

export const MINISTRY_ICON_STYLE = {
  "Worship Ministry": { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]", icon: "Music" },
  "Children Ministry": { bg: "bg-interactive-50", color: "text-interactive-600", icon: "Users" },
  "Youth Ministry": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", icon: "Users" },
  "Prayer Ministry": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", icon: "HeartHandshake" },
  "Outreach Ministry": { bg: "bg-danger-50", color: "text-danger-600", icon: "Heart" },
  "Hospitality Ministry": { bg: "bg-success-50", color: "text-success-600", icon: "UsersRound" },
  "Usher Ministry": { bg: "bg-success-50", color: "text-success-600", icon: "UsersRound" },
  "Media Ministry": { bg: "bg-warning-50", color: "text-warning-600", icon: "PlayCircle" },
};

const MINISTRIES_SEED = [
  {
    id: "MIN-1001", name: "Worship Ministry", description: "Leading worship and music ministry", category: "Worship",
    teams: 4, volunteers: 38, status: "Active",
  },
  {
    id: "MIN-1002", name: "Children Ministry", description: "Nurturing children in faith", category: "Discipleship",
    teams: 5, volunteers: 45, status: "Active",
  },
  {
    id: "MIN-1003", name: "Youth Ministry", description: "Empowering youth to grow in Christ", category: "Discipleship",
    teams: 4, volunteers: 32, status: "Active",
  },
  {
    id: "MIN-1004", name: "Prayer Ministry", description: "Interceding for church and community", category: "Spiritual Growth",
    teams: 3, volunteers: 22, status: "Active",
  },
  {
    id: "MIN-1005", name: "Outreach Ministry", description: "Reaching out to the community", category: "Outreach",
    teams: 4, volunteers: 28, status: "Active",
  },
  {
    id: "MIN-1006", name: "Hospitality Ministry", description: "Welcoming and caring for members & guests", category: "Hospitality",
    teams: 3, volunteers: 20, status: "Active",
  },
  {
    id: "MIN-1007", name: "Usher Ministry", description: "Ushering and assisting in services", category: "Hospitality",
    teams: 3, volunteers: 18, status: "Active",
  },
  {
    id: "MIN-1008", name: "Media Ministry", description: "Audio visual and live streaming", category: "Technical",
    teams: 3, volunteers: 15, status: "Inactive",
  },
];

/** Pad the seed list out to 18 entries to match "Showing 1 to 8 of 18 ministries". */
export const MINISTRIES_LIST_MOCK = Array.from({ length: 18 }, (_, i) => {
  const seed = MINISTRIES_SEED[i % MINISTRIES_SEED.length];
  if (i < MINISTRIES_SEED.length) return seed;
  return { ...seed, id: `MIN-${String(1009 + i).padStart(4, "0")}` };
});

export const MINISTRY_OVERVIEW_STATS_MOCK = {
  newMinistries: { value: 2, delta: "100%", trendUp: true },
  newTeams: { value: 4, delta: "33%", trendUp: true },
  activeTeams: { value: 34, delta: "6%", trendUp: true },
  totalVolunteers: { value: 256, delta: "8%", trendUp: true },
};

export const TOP_MINISTRIES_BY_VOLUNTEERS_MOCK = {
  total: 256,
  breakdown: [
    { label: "Children Ministry", count: 45, pct: 18, color: "#16A34A" },
    { label: "Worship Ministry", count: 38, pct: 15, color: "#2563EB" },
    { label: "Youth Ministry", count: 32, pct: 13, color: "#7C3AED" },
    { label: "Outreach Ministry", count: 28, pct: 11, color: "#F97316" },
    { label: "Others", count: 113, pct: 43, color: "#94A3B8" },
  ],
};

export const RECENT_MINISTRY_ACTIVITIES_MOCK = [
  { title: "Youth Ministry - Core Team added", date: "2026-05-18", time: "10:30 AM", type: "create" },
  { title: "Children Choir Team updated", date: "2026-05-17", time: "3:45 PM", type: "update" },
  { title: "Outreach Ministry meeting scheduled", date: "2026-05-16", time: "11:00 AM", type: "event" },
];

export const NEW_MINISTRY_DEFAULTS = {
  name: "",
  category: "",
  description: "",
  iconName: "",
  ministryHead: "",
  contactEmail: "",
  contactPhone: "",
  establishedOn: "",
  preferredServiceTime: "",
  status: "Active",
  location: "",
  allowTeams: true,
  allowVolunteersToJoin: true,
  showInDirectory: true,
};

// ---------------------------------------------------------------------------
// Ministry detail (Worship Ministry) — full detail page
// ---------------------------------------------------------------------------

export const MINISTRY_DETAIL_MOCK = {
  id: "MIN-1001",
  name: "Worship Ministry",
  description: "Leading worship services through music, singing, and creating an atmosphere of praise and worship.",
  category: "Worship",
  status: "Active",
  establishedOn: "2018-01-10",
  ministryHead: "John Samuel",
  contactEmail: "worship@stjohnschurch.org",
  contactPhone: "+91 91234 56789",
  preferredServiceTime: "Sunday - 9:00 AM",
  location: "Main Sanctuary",
  createdBy: "Parish Office",
  lastUpdated: "2026-05-18",
  lastUpdatedBy: "Parish Office",
  totalTeams: 4,
  totalVolunteers: 38,
  activeVolunteers: 36,
  inactiveVolunteers: 2,
  totalAssignments: 56,
  thisMonthAssignments: 12,
  teamsInMinistry: [
    { id: "TEAM-01", name: "Worship Band", description: "Musicians and instrumentalists", leader: "John Samuel", volunteers: 12, status: "Active", icon: "Music" },
    { id: "TEAM-02", name: "Choir Team", description: "Lead vocalists and choir members", leader: "Mary Grace", volunteers: 15, status: "Active", icon: "Users" },
    { id: "TEAM-03", name: "Sound & Media Team", description: "Sound system and media operators", leader: "Daniel Paul", volunteers: 7, status: "Active", icon: "Monitor" },
    { id: "TEAM-04", name: "Worship Support Team", description: "Stage setup and worship support", leader: "Thomas Philip", volunteers: 4, status: "Active", icon: "Sparkles" },
  ],
  recentAssignments: [
    { title: "Sunday Service - 9:00 AM", team: "Worship Band", date: "2026-05-25", status: "Upcoming" },
    { title: "Youth Service - 5:00 PM", team: "Choir Team", date: "2026-05-25", status: "Upcoming" },
    { title: "Midweek Prayer - 6:30 PM", team: "Worship Band", date: "2026-05-27", status: "Upcoming" },
  ],
  documents: [
    { name: "Worship Ministry Guidelines.pdf", type: "PDF", size: "245 KB", date: "2026-05-10" },
    { name: "Team Roles & Responsibilities.docx", type: "DOCX", size: "182 KB", date: "2026-04-28" },
    { name: "Worship Schedule - May 2026.pdf", type: "PDF", size: "312 KB", date: "2026-05-01" },
  ],
};

export function buildMinistryDetailMock(id) {
  if (!id || id === MINISTRY_DETAIL_MOCK.id) return MINISTRY_DETAIL_MOCK;
  const fallback = MINISTRIES_LIST_MOCK.find((m) => m.id === id);
  if (!fallback) return { ...MINISTRY_DETAIL_MOCK, id };
  return {
    ...MINISTRY_DETAIL_MOCK,
    id,
    name: fallback.name,
    description: fallback.description,
    category: fallback.category,
    status: fallback.status,
    totalTeams: fallback.teams,
    totalVolunteers: fallback.volunteers,
  };
}
