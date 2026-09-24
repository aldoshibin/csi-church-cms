// Mock data for Prayer Ministry > Prayer Calendar — maps to prayer_ministry/calendar/views.py once wired up.

export const CALENDAR_EVENT_TYPE_OPTIONS = ["Morning Prayer", "Intercession", "Youth Prayer", "Family Prayer", "Leaders Prayer", "Missions Prayer", "Healing Prayer", "Bible Study Prayer", "Thanksgiving Prayer"];
export const CALENDAR_PRAYER_AREA_OPTIONS = ["Church Leaders", "Families", "Youth", "Missions", "Sick & Healing", "Others"];
export const CALENDAR_COLOR_OPTIONS = [
  { value: "Green", hex: "#16A34A" },
  { value: "Pink", hex: "#DB2777" },
  { value: "Purple", hex: "#7C3AED" },
  { value: "Blue", hex: "#2563EB" },
  { value: "Orange", hex: "#F97316" },
  { value: "Yellow", hex: "#EAB308" },
];
export const CALENDAR_REPEAT_OPTIONS = ["Does not repeat", "Daily", "Weekly", "Bi-weekly", "Monthly"];
export const CALENDAR_DURATION_OPTIONS = ["30 minutes", "1 hour", "1.5 hours", "2 hours", "Half day"];
export const CALENDAR_REMINDER_OPTIONS = ["15 minutes before", "1 hour before", "1 day before", "2 days before"];

export const EVENT_TYPE_DOT_COLOR = {
  "Morning Prayer": "#16A34A",
  Intercession: "#DB2777",
  "Youth Prayer": "#7C3AED",
  "Family Prayer": "#38BDF8",
  "Leaders Prayer": "#F97316",
  "Missions Prayer": "#2563EB",
  "Healing Prayer": "#EAB308",
  "Bible Study Prayer": "#2563EB",
  "Thanksgiving Prayer": "#DB2777",
};

export const EVENT_TYPE_BG_CLASS = {
  "Morning Prayer": "bg-success-50 text-success-700",
  Intercession: "bg-[#FCE7F3] text-[#DB2777]",
  "Youth Prayer": "bg-[#F3E8FF] text-[#7C3AED]",
  "Family Prayer": "bg-sky-50 text-sky-700",
  "Leaders Prayer": "bg-warning-50 text-warning-700",
  "Missions Prayer": "bg-interactive-50 text-interactive-700",
  "Healing Prayer": "bg-yellow-50 text-yellow-700",
  "Bible Study Prayer": "bg-interactive-50 text-interactive-700",
  "Thanksgiving Prayer": "bg-[#FCE7F3] text-[#DB2777]",
};

/** May 2026 events keyed by day-of-month. */
export const CALENDAR_MAY_2026_EVENTS = {
  1: [{ title: "Morning Prayer", time: "6:00 AM" }, { title: "Youth Prayer", time: "" }],
  3: [{ title: "Healing Prayer", time: "" }],
  5: [{ title: "Mission Prayer", time: "" }],
  6: [{ title: "Intercession Night", time: "7:00 PM" }],
  8: [{ title: "Morning Prayer", time: "" }],
  10: [{ title: "Family Prayer", time: "" }],
  12: [{ title: "Bible Study Prayer", time: "6:30 PM" }],
  14: [{ title: "Leaders Prayer", time: "6:00 AM" }],
  17: [{ title: "Thanksgiving Prayer", time: "" }],
  20: [{ title: "Youth Prayer", time: "7:00 PM" }],
  22: [{ title: "Morning Prayer", time: "" }],
  26: [{ title: "Missions Prayer", time: "" }],
  28: [{ title: "Intercession Night", time: "7:00 PM" }],
};

export const CALENDAR_LEGEND = [
  { label: "Morning Prayer", color: "#16A34A" },
  { label: "Intercession", color: "#DB2777" },
  { label: "Youth", color: "#7C3AED" },
  { label: "Family", color: "#38BDF8" },
  { label: "Leaders", color: "#F97316" },
  { label: "Missions", color: "#2563EB" },
  { label: "Healing", color: "#EAB308" },
];

export const PRAYER_AREAS_MOCK = [
  { name: "Church Leaders", events: 12, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
  { name: "Families", events: 8, iconBg: "bg-orange-50", iconColor: "text-orange-600" },
  { name: "Youth", events: 6, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  { name: "Missions", events: 7, iconBg: "bg-success-50", iconColor: "text-success-600" },
  { name: "Sick & Healing", events: 5, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
  { name: "Others", events: 3, iconBg: "bg-surface-muted", iconColor: "text-ink-subtle" },
];

export const CALENDAR_UPCOMING_EVENTS_MOCK = [
  { title: "Morning Prayer", date: "2026-05-16", time: "6:00 AM - 7:00 AM" },
  { title: "Intercession Night", date: "2026-05-18", time: "7:00 PM - 8:30 PM" },
  { title: "Mission Prayer", date: "2026-05-19", time: "6:30 AM - 7:30 AM" },
  { title: "Leaders Prayer", date: "2026-05-21", time: "6:00 AM - 7:00 AM" },
  { title: "Youth Prayer", date: "2026-05-22", time: "7:00 PM - 8:00 PM" },
];

export const CALENDAR_OVERVIEW_MOCK = {
  totalEvents: 28,
  prayerHours: 112,
  prayerAreas: 7,
  peopleInvolved: 45,
};

export const NEW_PRAYER_EVENT_DEFAULTS = {
  title: "",
  eventType: "",
  prayerArea: "",
  color: "Green",
  description: "",
  focusTheme: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  allDay: false,
  repeat: "Does not repeat",
  repeatEvery: 1,
  repeatEveryUnit: "Week(s)",
  repeatOnDays: [],
  ends: "Never",
  endsOnDate: "",
  endsAfterOccurrences: 1,
  timeSlot: "",
  estimatedDuration: "",
  reminder: "",
  organizedBy: "",
  location: "",
  notes: "",
  notifyIntercessors: true,
  visibility: "Public",
  addToCalendar: true,
  sendPrayerRequest: false,
};
