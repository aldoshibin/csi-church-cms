// Mock data for Volunteer Management → Service Assignments — maps to volunteer_management/assignments/* views.py once wired up.

export const ASSIGNMENT_SERVICE_TYPE_OPTIONS = ["Sunday Service", "Youth Service", "Bible Study", "Choir Practice", "Outreach Visit", "Prayer Meeting", "Special Event", "Other"];
export const ASSIGNMENT_MINISTRY_TEAM_OPTIONS = ["Worship Ministry", "Youth Ministry", "Choir Ministry", "Discipleship Ministry", "Outreach Ministry", "Prayer Ministry", "Media Ministry", "Hospitality Ministry"];
export const ASSIGNMENT_TEAM_OPTIONS = ["Worship Band", "Youth Core Team", "Choir Team", "Bible Study Team", "Outreach Team", "Intercessors Team", "Sound & Media Team", "Cleaning Team"];
export const ASSIGNMENT_LOCATION_OPTIONS = ["Main Sanctuary", "Youth Hall", "Choir Room", "Fellowship Hall", "City Center", "Prayer Room"];
export const ASSIGNMENT_DRESS_CODE_OPTIONS = ["Formal", "Casual", "Smart Casual", "Choir Robes", "Uniform"];
export const ASSIGNMENT_ROLE_OPTIONS = ["Worship Leader", "Speaker", "Choir Leader", "Facilitator", "Coordinator", "Sound Operator", "Volunteer", "Usher"];
export const ASSIGNMENT_STATUS_OPTIONS = ["Confirmed", "Pending", "Completed", "Cancelled"];

export const ASSIGNMENT_STATUS_VARIANT = { Confirmed: "success", Pending: "warning", Completed: "default", Cancelled: "danger" };

export const ASSIGNMENT_ICON_STYLE = {
  "Sunday Service - 9:00 AM": { bg: "bg-success-50", color: "text-success-600", icon: "Church" },
  "Youth Service - 5:00 PM": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", icon: "Users" },
  "Choir Practice": { bg: "bg-warning-50", color: "text-warning-600", icon: "Music" },
  "Bible Study": { bg: "bg-warning-50", color: "text-warning-600", icon: "BookOpen" },
  "Outreach Visit": { bg: "bg-danger-50", color: "text-danger-600", icon: "Heart" },
  "Prayer Meeting": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]", icon: "HeartHandshake" },
  "Sound & Media Service": { bg: "bg-interactive-50", color: "text-interactive-600", icon: "Volume2" },
  "Sanctuary Cleaning": { bg: "bg-success-50", color: "text-success-600", icon: "Sparkles" },
};

const ASSIGNMENTS_SEED = [
  {
    id: "ASG-1001", title: "Sunday Service - 9:00 AM", location: "Main Sanctuary", ministryTeam: "Worship Ministry", team: "Worship Band",
    date: "2026-05-25", startTime: "9:00 AM", endTime: "11:00 AM",
    assignedTo: { type: "single", name: "Sophia Daniel", volunteerId: "V-1001" }, role: "Worship Leader", status: "Confirmed",
  },
  {
    id: "ASG-1002", title: "Youth Service - 5:00 PM", location: "Youth Hall", ministryTeam: "Youth Ministry", team: "Youth Core Team",
    date: "2026-05-24", startTime: "5:00 PM", endTime: "6:30 PM",
    assignedTo: { type: "single", name: "John Samuel", volunteerId: "V-1002" }, role: "Speaker", status: "Confirmed",
  },
  {
    id: "ASG-1003", title: "Choir Practice", location: "Choir Room", ministryTeam: "Choir Ministry", team: "Choir Team",
    date: "2026-05-23", startTime: "4:00 PM", endTime: "6:00 PM",
    assignedTo: { type: "single", name: "Mary Grace", volunteerId: "V-1003" }, role: "Choir Leader", status: "Confirmed",
  },
  {
    id: "ASG-1004", title: "Bible Study", location: "Fellowship Hall", ministryTeam: "Discipleship Ministry", team: "Bible Study Team",
    date: "2026-05-22", startTime: "7:00 PM", endTime: "8:30 PM",
    assignedTo: { type: "single", name: "Daniel Paul", volunteerId: "V-1004" }, role: "Facilitator", status: "Confirmed",
  },
  {
    id: "ASG-1005", title: "Outreach Visit", location: "City Center", ministryTeam: "Outreach Ministry", team: "Outreach Team",
    date: "2026-05-21", startTime: "10:00 AM", endTime: "1:00 PM",
    assignedTo: { type: "group", count: 8 }, role: "Volunteer", status: "Confirmed",
  },
  {
    id: "ASG-1006", title: "Prayer Meeting", location: "Prayer Room", ministryTeam: "Prayer Ministry", team: "Intercessors Team",
    date: "2026-05-20", startTime: "6:30 PM", endTime: "7:30 PM",
    assignedTo: { type: "single", name: "Lydia Benjamin", volunteerId: "V-1005" }, role: "Coordinator", status: "Pending",
  },
  {
    id: "ASG-1007", title: "Sound & Media Service", location: "Main Sanctuary", ministryTeam: "Media Ministry", team: "Sound & Media Team",
    date: "2026-05-18", startTime: "9:00 AM", endTime: "11:00 AM",
    assignedTo: { type: "single", name: "Thomas Philip", volunteerId: "V-1006" }, role: "Sound Operator", status: "Pending",
  },
  {
    id: "ASG-1008", title: "Sanctuary Cleaning", location: "Main Sanctuary", ministryTeam: "Hospitality Ministry", team: "Cleaning Team",
    date: "2026-05-17", startTime: "8:00 AM", endTime: "10:00 AM",
    assignedTo: { type: "group", count: 6 }, role: "Volunteer", status: "Completed",
  },
];

/** Pad the seed list out to 86 entries to match "Showing 1 to 8 of 86 assignments". */
export const ASSIGNMENTS_LIST_MOCK = Array.from({ length: 86 }, (_, i) => {
  const seed = ASSIGNMENTS_SEED[i % ASSIGNMENTS_SEED.length];
  if (i < ASSIGNMENTS_SEED.length) return seed;
  return { ...seed, id: `ASG-${String(1009 + i).padStart(4, "0")}` };
});

export const ASSIGNMENT_OVERVIEW_STATS_MOCK = {
  totalAssignments: { value: 86, delta: "18%", trendUp: true },
  upcomingAssignments: { value: 26, delta: "12%", trendUp: true },
  completedAssignments: { value: 38, delta: "5%", trendUp: true },
  pendingAssignments: { value: 22, delta: "8%", trendUp: false },
};

export const ASSIGNMENTS_BY_STATUS_MOCK = {
  total: 86,
  breakdown: [
    { label: "Confirmed", count: 38, pct: 44, color: "#16A34A" },
    { label: "Pending", count: 22, pct: 26, color: "#F97316" },
    { label: "Completed", count: 18, pct: 21, color: "#94A3B8" },
    { label: "Cancelled", count: 8, pct: 9, color: "#2563EB" },
  ],
};

export const UPCOMING_ASSIGNMENTS_MINI_MOCK = [
  { title: "Sunday Service - 9:00 AM", date: "2026-05-25", time: "9:00 AM", relative: "In 2 days" },
  { title: "Youth Service - 5:00 PM", date: "2026-05-24", time: "5:00 PM", relative: "In 1 day" },
  { title: "Choir Practice", date: "2026-05-23", time: "4:00 PM", relative: "Tomorrow" },
];

export const ASSIGNMENT_TEMPLATES_MOCK = [
  { name: "Sunday Service", helper: "Regular Sunday Worship Service", icon: "Church", bg: "bg-success-50", color: "text-success-600" },
  { name: "Youth Service", helper: "Youth Worship & Fellowship", icon: "Users", bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  { name: "Bible Study", helper: "Weekly Bible Study", icon: "BookOpen", bg: "bg-warning-50", color: "text-warning-600" },
  { name: "Choir Practice", helper: "Choir Rehearsal", icon: "Music", bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  { name: "Outreach Visit", helper: "Community Outreach", icon: "HeartHandshake", bg: "bg-interactive-50", color: "text-interactive-600" },
];

export const RECENT_ASSIGNMENTS_FORM_MOCK = [
  { title: "Youth Service - 5:00 PM", date: "2026-05-24", time: "5:00 PM", status: "Confirmed" },
  { title: "Choir Practice", date: "2026-05-23", time: "4:00 PM", status: "Pending" },
  { title: "Bible Study", date: "2026-05-22", time: "7:00 PM", status: "Confirmed" },
];

export const NEW_ASSIGNMENT_DEFAULTS = {
  title: "",
  date: "",
  serviceType: "",
  ministryTeam: "",
  startTime: "",
  dressCode: "",
  location: "",
  endTime: "",
  description: "",
  role: "",
  volunteersNeeded: 1,
  checkinTime: "",
  instructions: "",
  assignTo: "manual",
  selectedVolunteers: [],
};

// ---------------------------------------------------------------------------
// Assignment detail (Sunday Service - 9:00 AM) — full detail page
// ---------------------------------------------------------------------------

export const ASSIGNMENT_DETAIL_MOCK = {
  id: "ASG-1001",
  title: "Sunday Service - 9:00 AM",
  status: "Confirmed",
  location: "Main Sanctuary",
  date: "2026-05-25",
  dayLabel: "Sunday",
  startTime: "9:00 AM",
  endTime: "11:00 AM",
  volunteersCount: 12,
  ministryTeam: "Worship Ministry",
  role: "Worship Leader",
  description: "Leading the Sunday worship service including praise & worship, prayer, and the Word.",
  dressCode: "Formal",
  checkinTime: "8:00 AM",
  preparedBy: "Parish Office",
  remarks: "Please arrive on time and check your equipment before the service.",
  createdBy: "Parish Office",
  createdOn: "2026-05-10T10:30:00",
  lastUpdated: "2026-05-18T15:45:00",
  lastUpdatedBy: "Parish Office",
  volunteersAssigned: [
    { name: "John Samuel", role: "Speaker", ministry: "Worship Ministry", contact: "+91 91234 56789", status: "Confirmed" },
    { name: "Sophia Daniel", role: "Worship Leader", ministry: "Worship Ministry", contact: "+91 98765 43210", status: "Confirmed" },
    { name: "Mary Grace", role: "Choir Leader", ministry: "Choir Ministry", contact: "+91 90000 11122", status: "Confirmed" },
    { name: "Daniel Paul", role: "Facilitator", ministry: "Discipleship Ministry", contact: "+91 95555 66777", status: "Confirmed" },
    { name: "Lydia Benjamin", role: "Coordinator", ministry: "Prayer Ministry", contact: "+91 94444 88990", status: "Confirmed" },
  ],
  totalVolunteersAssigned: 12,
  relatedAssignments: [
    { title: "Youth Service - 5:00 PM", date: "2026-05-24", status: "Confirmed" },
    { title: "Choir Practice", date: "2026-05-23", status: "Pending" },
    { title: "Bible Study", date: "2026-05-22", status: "Confirmed" },
  ],
};

export function buildAssignmentDetailMock(id) {
  if (!id || id === ASSIGNMENT_DETAIL_MOCK.id) return ASSIGNMENT_DETAIL_MOCK;
  const fallback = ASSIGNMENTS_LIST_MOCK.find((a) => a.id === id);
  if (!fallback) return { ...ASSIGNMENT_DETAIL_MOCK, id };
  return {
    ...ASSIGNMENT_DETAIL_MOCK,
    id,
    title: fallback.title,
    location: fallback.location,
    ministryTeam: fallback.ministryTeam,
    date: fallback.date,
    startTime: fallback.startTime,
    endTime: fallback.endTime,
    role: fallback.role,
    status: fallback.status,
  };
}
