// Mock data for Choir & Worship Team — maps to choir_worship/* views.py once wired up.

export const CW_ROLE_OPTIONS = ["Choir Leader", "Soprano", "Alto", "Tenor", "Bass", "Worship Leader", "Guitarist", "Keyboardist", "Drummer", "Vocalist"];
export const CW_TEAM_OPTIONS = ["Choir", "Worship Team"];
export const CW_STATUS_OPTIONS = ["Active", "Inactive"];

export const CW_STATUS_VARIANT = { Active: "success", Inactive: "warning" };
export const CW_TEAM_BADGE = {
  Choir: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Worship Team": { bg: "bg-interactive-50", color: "text-interactive-600" },
};

export const CW_DASHBOARD_STATS_MOCK = {
  totalMembers: { value: 42, delta: "8.2%", trendUp: true },
  choirMembers: { value: 24, delta: "10.0%", trendUp: true },
  worshipTeamMembers: { value: 18, delta: "5.6%", trendUp: true },
  rehearsalsThisMonth: { value: 8, delta: "14.3%", trendUp: true },
  servicesThisMonth: { value: 12, delta: "20.0%", trendUp: true },
  songsInLibrary: { value: 76, delta: "6.7%", trendUp: true },
};

const CW_MEMBERS_SEED = [
  { id: "CWM-001", name: "Michael John", role: "Choir Leader", team: "Choir", phone: "+91 98765 43210", status: "Active" },
  { id: "CWM-002", name: "Sarah Thomas", role: "Soprano", team: "Choir", phone: "+91 98765 43211", status: "Active" },
  { id: "CWM-003", name: "David Samuel", role: "Alto", team: "Choir", phone: "+91 98765 43212", status: "Active" },
  { id: "CWM-004", name: "Grace Mary", role: "Worship Leader", team: "Worship Team", phone: "+91 98765 43213", status: "Active" },
  { id: "CWM-005", name: "James Peter", role: "Guitarist", team: "Worship Team", phone: "+91 98765 43214", status: "Active" },
];

/** Pad the seed list out to 42 entries to match "Showing 1 to 5 of 42 members". */
export const CW_MEMBERS_MOCK = Array.from({ length: 42 }, (_, i) => {
  const seed = CW_MEMBERS_SEED[i % CW_MEMBERS_SEED.length];
  if (i < CW_MEMBERS_SEED.length) return seed;
  return { ...seed, id: `CWM-${String(i + 1).padStart(3, "0")}` };
});

export const CW_TEAM_DISTRIBUTION_MOCK = {
  breakdown: [
    { label: "Choir", count: 24, pct: 57.1, color: "#7C3AED" },
    { label: "Worship Team", count: 18, pct: 42.9, color: "#2563EB" },
    { label: "Others", count: 0, pct: 0, color: "#94A3B8" },
  ],
};

export const CW_ACTIVITY_OVERVIEW_MOCK = {
  breakdown: [
    { label: "Rehearsals", count: 8, pct: 36.4, color: "#F97316" },
    { label: "Services", count: 12, pct: 54.5, color: "#16A34A" },
    { label: "Other Activities", count: 2, pct: 9.1, color: "#2563EB" },
  ],
};

export const CW_UPCOMING_REHEARSALS_MOCK = [
  { day: "25", month: "MAY", title: "Choir Rehearsal", meta: "Saturday", time: "5:00 PM - 6:30 PM", location: "Choir Room" },
  { day: "26", month: "MAY", title: "Worship Team Practice", meta: "Sunday", time: "4:00 PM - 5:30 PM", location: "Worship Hall" },
  { day: "28", month: "MAY", title: "Combined Rehearsal", meta: "Tuesday", time: "6:00 PM - 8:00 PM", location: "Main Hall" },
];

export const CW_UPCOMING_SERVICES_MOCK = [
  { day: "25", month: "MAY", title: "Sunday Morning Service", meta: "Sunday", time: "9:00 AM", location: "Main Sanctuary", team: "Choir" },
  { day: "25", month: "MAY", title: "Evening Worship", meta: "Sunday", time: "6:00 PM", location: "Main Hall", team: "Worship Team" },
  { day: "29", month: "MAY", title: "Midweek Service", meta: "Wednesday", time: "6:30 PM", location: "Main Sanctuary", team: "Choir" },
];

// ---------------------------------------------------------------------------
// Generic "Add New" item form (used from every Quick Action on the dashboard)
// ---------------------------------------------------------------------------

export const CW_ITEM_CATEGORY_OPTIONS = ["Member", "Rehearsal", "Service", "Song", "Setlist", "Announcement"];
export const CW_RELATED_TO_OPTIONS = ["Choir", "Worship Team", "Both Teams", "General"];
export const CW_ASSIGNED_TO_OPTIONS = ["Michael John", "Sarah Thomas", "David Samuel", "Grace Mary", "James Peter"];
export const CW_ITEM_STATUS_OPTIONS = ["Draft", "Scheduled", "Active", "Completed", "Cancelled"];
export const CW_VISIBILITY_OPTIONS = ["Visible to all members", "Visible to team leaders only", "Visible to organizers only"];

export const NEW_CW_ITEM_DEFAULTS = {
  title: "",
  category: "",
  date: "",
  time: "",
  location: "",
  relatedTo: "",
  description: "",
  assignedTo: "",
  status: "",
  visibility: "",
  notes: "",
  attachments: [],
};
