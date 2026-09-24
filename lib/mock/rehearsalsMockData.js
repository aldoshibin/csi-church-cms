// Mock data for Choir & Worship Team > Rehearsals — maps to choir_worship/rehearsals/views.py once wired up.

export const REHEARSAL_TEAM_OPTIONS = ["Worship Team", "Choir", "Band"];
export const REHEARSAL_LOCATION_OPTIONS = ["Main Hall", "Choir Room", "Youth Room"];
export const REHEARSAL_STATUS_OPTIONS = ["Upcoming", "Completed", "Cancelled"];
export const REHEARSAL_STATUS_VARIANT = { Upcoming: "info", Completed: "success", Cancelled: "danger" };
export const REHEARSAL_TEAM_BADGE_COLOR = {
  "Worship Team": "text-interactive-600",
  Choir: "text-[#7C3AED]",
  Band: "text-warning-600",
};

const REHEARSALS_SEED = [
  { id: "REH-001", title: "Sunday Worship Rehearsal", subtitle: "Worship songs for Sunday service", team: "Worship Team", date: "2026-05-27", day: "Tue", timeRange: "6:00 PM - 8:00 PM", location: "Main Hall", leadBy: "Daniel Paul", leadRole: "Worship Leader", present: 24, expected: 28, status: "Upcoming" },
  { id: "REH-002", title: "Choir Rehearsal", subtitle: "Hymns & anthems practice", team: "Choir", date: "2026-05-24", day: "Sat", timeRange: "4:00 PM - 6:00 PM", location: "Choir Room", leadBy: "Melissa Grace", leadRole: "Choir Director", present: 18, expected: 22, status: "Completed" },
  { id: "REH-003", title: "Band Practice", subtitle: "Worship band practice", team: "Band", date: "2026-05-20", day: "Tue", timeRange: "7:00 PM - 9:00 PM", location: "Main Hall", leadBy: "John Samuel", leadRole: "Band Leader", present: 10, expected: 12, status: "Completed" },
  { id: "REH-004", title: "Full Team Rehearsal", subtitle: "Full team run-through", team: "Worship Team", date: "2026-05-17", day: "Sat", timeRange: "5:00 PM - 8:00 PM", location: "Main Hall", leadBy: "Daniel Paul", leadRole: "Worship Leader", present: 26, expected: 28, status: "Completed" },
  { id: "REH-005", title: "Special Program Practice", subtitle: "Pentecost special program", team: "Choir", date: "2026-05-13", day: "Tue", timeRange: "6:30 PM - 8:30 PM", location: "Choir Room", leadBy: "Melissa Grace", leadRole: "Choir Director", present: 19, expected: 22, status: "Cancelled" },
  { id: "REH-006", title: "Worship Team Practice", subtitle: "New song arrangements", team: "Worship Team", date: "2026-05-10", day: "Sat", timeRange: "4:30 PM - 7:00 PM", location: "Main Hall", leadBy: "Daniel Paul", leadRole: "Worship Leader", present: 22, expected: 28, status: "Completed" },
  { id: "REH-007", title: "Band Sound Check", subtitle: "Sound check & coordination", team: "Band", date: "2026-05-06", day: "Tue", timeRange: "6:00 PM - 7:30 PM", location: "Main Hall", leadBy: "John Samuel", leadRole: "Band Leader", present: 9, expected: 12, status: "Completed" },
];

/** Pad the seed list out to 18 entries to match "Showing 1 to 7 of 18 rehearsals". */
export const REHEARSALS_LIST_MOCK = Array.from({ length: 18 }, (_, i) => {
  const seed = REHEARSALS_SEED[i % REHEARSALS_SEED.length];
  if (i < REHEARSALS_SEED.length) return seed;
  return { ...seed, id: `REH-${String(i + 1).padStart(3, "0")}` };
});

export const REHEARSALS_UPCOMING_MOCK = [
  { title: "Sunday Worship Rehearsal", day: "Today", timeRange: "6:00 PM - 8:00 PM", location: "Main Hall" },
  { title: "Youth Worship Practice", day: "May 30, Saturday", timeRange: "4:00 PM - 6:00 PM", location: "Youth Room" },
  { title: "Choir Harmony Practice", day: "Jun 1, Monday", timeRange: "6:30 PM - 8:30 PM", location: "Choir Room" },
  { title: "Band Practice", day: "Jun 3, Wednesday", timeRange: "7:00 PM - 9:00 PM", location: "Main Hall" },
  { title: "Full Team Rehearsal", day: "Jun 5, Friday", timeRange: "6:00 PM - 8:30 PM", location: "Main Hall" },
];

export const TEAM_ATTENDANCE_MOCK = {
  average: 82,
  breakdown: [
    { label: "Worship Team", pct: 86, color: "#7C3AED" },
    { label: "Choir", pct: 80, color: "#16A34A" },
    { label: "Band", pct: 75, color: "#F97316" },
  ],
};

export const REHEARSALS_QUICK_ACTIONS_TARGETS = {
  add: "/choir-worship/rehearsals/add",
};
