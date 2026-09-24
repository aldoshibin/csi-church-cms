// Mock data for Men's Fellowship > Activities — maps to mens_fellowship/activities/views.py once wired up.

export const ACTIVITY_TYPE_OPTIONS = ["Community Service", "Spiritual", "Sports", "Outdoor", "Training"];
export const ACTIVITY_ORGANIZER_OPTIONS = ["Men's Fellowship", "Men of Faith", "Warriors in Christ", "Truth Seekers", "Brothers United", "Overcomers"];
export const ACTIVITY_LOCATION_OPTIONS = ["Church Premises", "Fellowship Hall", "St. John's School Ground", "Prayer Room", "Church Parking", "Nandi Hills", "Conference Room", "Green Valley Resort"];
export const ACTIVITY_STATUS_OPTIONS = ["Planned", "Upcoming", "Completed", "Cancelled"];
export const ACTIVITY_VISIBILITY_OPTIONS = ["Visible to all members", "Visible to group leaders only", "Visible to organizers only"];
export const ACTIVITY_TARGET_PARTICIPANTS_OPTIONS = ["All Members", "Men of Faith", "Warriors in Christ", "Truth Seekers", "Brothers United", "Overcomers"];

export const ACTIVITY_STATUS_VARIANT = {
  Completed: "success",
  Upcoming: "info",
  Planned: "info",
  Cancelled: "danger",
};

export const ACTIVITY_TYPE_ICON_BG = {
  "Community Service": { bg: "bg-success-50", color: "text-success-600" },
  Spiritual: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  Sports: { bg: "bg-warning-50", color: "text-warning-600" },
  Outdoor: { bg: "bg-interactive-50", color: "text-interactive-600" },
  Training: { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
};

export const ACTIVITY_ICON_OPTIONS = ["heart-hands", "book", "music", "people", "cross", "heart", "calendar", "calendar-alt", "megaphone", "target", "star", "heart-pulse", "flag"];
export const ACTIVITY_COLOR_OPTIONS = ["#16A34A", "#2563EB", "#7C3AED", "#F97316", "#DC2626", "#0D9488", "#78716C"];

const ACTIVITIES_SEED = [
  { id: "ACT-001", title: "Community Service - Clean Drive", description: "Church premises cleaning and maintenance", type: "Community Service", date: "2024-05-25", day: "Saturday", timeRange: "7:00 AM - 10:00 AM", location: "Church Premises", target: 40, participants: 32, status: "Completed" },
  { id: "ACT-002", title: "Bible Quiz Competition", description: "Inter group Bible quiz for members", type: "Spiritual", date: "2024-05-18", day: "Saturday", timeRange: "4:00 PM - 6:00 PM", location: "Fellowship Hall", target: 60, participants: 56, status: "Completed" },
  { id: "ACT-003", title: "Men's Fellowship Sports Meet", description: "Indoor games and fellowship", type: "Sports", date: "2024-05-11", day: "Saturday", timeRange: "3:00 PM - 7:00 PM", location: "St. John's School Ground", target: 50, participants: 45, status: "Completed" },
  { id: "ACT-004", title: "Prayer & Fasting Day", description: "Day of prayer and fasting for church", type: "Spiritual", date: "2024-05-04", day: "Saturday", timeRange: "9:00 AM - 4:00 PM", location: "Prayer Room", target: 35, participants: 28, status: "Completed" },
  { id: "ACT-005", title: "Guest Speaker Session", description: "Session by Rev. Samuel Johnson", type: "Spiritual", date: "2024-05-02", day: "Thursday", timeRange: "6:30 PM - 8:30 PM", location: "Fellowship Hall", target: 100, participants: 78, status: "Completed" },
  { id: "ACT-006", title: "Blood Donation Camp", description: "In association with City Blood Bank", type: "Community Service", date: "2024-04-27", day: "Saturday", timeRange: "9:00 AM - 1:00 PM", location: "Church Parking", target: 80, participants: 61, status: "Completed" },
  { id: "ACT-007", title: "Trekking & Fellowship", description: "One day trekking and fellowship", type: "Outdoor", date: "2024-06-01", day: "Saturday", timeRange: "6:00 AM - 4:00 PM", location: "Nandi Hills", target: 30, participants: 20, status: "Upcoming" },
  { id: "ACT-008", title: "Worship & Music Evening", description: "Worship and praise night", type: "Spiritual", date: "2024-06-08", day: "Saturday", timeRange: "6:00 PM - 8:30 PM", location: "Fellowship Hall", target: 60, participants: null, status: "Upcoming" },
  { id: "ACT-009", title: "Leadership Training", description: "Training for group leaders", type: "Training", date: "2024-06-15", day: "Saturday", timeRange: "10:00 AM - 4:00 PM", location: "Conference Room", target: 25, participants: 18, status: "Upcoming" },
  { id: "ACT-010", title: "Annual Picnic", description: "Family picnic and games", type: "Outdoor", date: "2024-04-20", day: "Saturday", timeRange: null, location: "Green Valley Resort", target: 60, participants: null, status: "Cancelled" },
];

/** Pad the seed list out to 32 entries to match "Showing 1 to 10 of 32 activities". */
export const ACTIVITIES_LIST_MOCK = Array.from({ length: 32 }, (_, i) => {
  const seed = ACTIVITIES_SEED[i % ACTIVITIES_SEED.length];
  if (i < ACTIVITIES_SEED.length) return seed;
  return { ...seed, id: `ACT-${String(i + 1).padStart(3, "0")}` };
});

export const ACTIVITY_OVERVIEW_MOCK = {
  total: 32,
  breakdown: [
    { label: "Completed", count: 18, pct: 56.3, color: "#16A34A" },
    { label: "Upcoming", count: 9, pct: 28.1, color: "#2563EB" },
    { label: "Cancelled", count: 5, pct: 15.6, color: "#DC2626" },
  ],
};

export const UPCOMING_ACTIVITIES_LIST_MOCK = [
  { day: "01", month: "JUN", title: "Trekking & Fellowship", location: "Nandi Hills", timeRange: "6:00 AM - 4:00 PM" },
  { day: "08", month: "JUN", title: "Worship & Music Evening", location: "Fellowship Hall", timeRange: "6:00 PM - 8:30 PM" },
  { day: "15", month: "JUN", title: "Leadership Training", location: "Conference Room", timeRange: "10:00 AM - 4:00 PM" },
];

export const ACTIVITY_TYPES_BREAKDOWN_MOCK = [
  { label: "Spiritual", count: 14, pct: 43.8 },
  { label: "Community Service", count: 7, pct: 21.9 },
  { label: "Sports", count: 4, pct: 12.5 },
  { label: "Outdoor", count: 4, pct: 12.5 },
  { label: "Training", count: 3, pct: 9.4 },
];

export const NEW_ACTIVITY_DEFAULTS = {
  title: "",
  type: "",
  organizedBy: "",
  description: "",
  purpose: "",
  date: "",
  startTime: "",
  endTime: "",
  allDayEvent: false,
  location: "",
  address: "",
  room: "",
  addOnlineDetails: false,
  targetParticipants: "",
  expectedParticipants: "",
  allowRegistration: true,
  isMandatory: false,
  publishToCalendar: true,
  sendNotifications: true,
  agenda: [],
  attachments: [],
  icon: "heart-hands",
  color: "#16A34A",
  reminders: [
    { id: "r1", offset: "1 Day Before", time: "09:00 AM" },
    { id: "r2", offset: "1 Hour Before", time: "06:00 PM" },
  ],
  status: "Planned",
  visibility: "Visible to all members",
};

// ---------------------------------------------------------------------------
// Activity detail (Community Service - Clean Drive)
// ---------------------------------------------------------------------------

export const ACTIVITY_DETAIL_MOCK = {
  id: "ACT-001",
  title: "Community Service - Clean Drive",
  subtitle: "Church premises cleaning and maintenance",
  status: "Completed",
  type: "Community Service",
  organizedBy: "Men's Fellowship",
  description: "A community service activity to clean and maintain the church premises. All members are encouraged to participate.",
  date: "2024-05-25",
  day: "Saturday",
  timeRange: "7:00 AM - 10:00 AM",
  location: "Church Premises",
  createdBy: "Rev. Michael",
  createdOn: "2024-05-10T09:30:00",
  lastUpdated: "2024-05-25T11:15:00",
  agenda: [
    { order: 1, item: "Registration & Welcome", time: "7:00 AM - 7:15 AM" },
    { order: 2, item: "Group Briefing & Instructions", time: "7:15 AM - 7:30 AM" },
    { order: 3, item: "Cleaning - Area 1 (Main Hall & Rooms)", time: "7:30 AM - 8:30 AM" },
    { order: 4, item: "Cleaning - Area 2 (Prayer Room & Office)", time: "8:30 AM - 9:30 AM" },
    { order: 5, item: "Cleaning - Area 3 (Compound & Garden)", time: "9:30 AM - 10:00 AM" },
    { order: 6, item: "Final Inspection & Closing Prayer", time: "10:00 AM - 10:15 AM" },
  ],
  notes: [
    "All cleaning materials and gloves were provided. Please wear appropriate attire.",
    "Thank you to everyone who participated and supported this initiative.",
  ],
  attachments: [
    { name: "Clean_Drive_Guidelines.pdf", size: "245 KB", kind: "pdf" },
    { name: "Cleaning_Areas_Map.jpg", size: "1.2 MB", kind: "image" },
  ],
  summary: {
    totalParticipants: 40,
    attended: 32,
    absent: 8,
    participationRate: 80,
    breakdown: [
      { label: "Completed", count: 32, color: "#16A34A" },
      { label: "Upcoming", count: 0, color: "#2563EB" },
      { label: "Cancelled", count: 8, color: "#DC2626" },
    ],
  },
  locationDetail: {
    name: "Church Premises",
    address: "St. John's Church, 123 Faith Street, Nandivaram, Chennai - 600 030",
  },
  activityInfo: {
    reminderSentOn: "2024-05-22T20:00:00",
    reminderSentBy: "System",
    followUpSentOn: "2024-05-26T19:30:00",
    followUpSentBy: "Rev. Michael",
  },
};

export function buildActivityDetailMock(id) {
  if (!id || id === ACTIVITY_DETAIL_MOCK.id) return ACTIVITY_DETAIL_MOCK;
  const fallback = ACTIVITIES_LIST_MOCK.find((a) => a.id === id);
  if (!fallback) return { ...ACTIVITY_DETAIL_MOCK, id };
  return {
    ...ACTIVITY_DETAIL_MOCK,
    id,
    title: fallback.title,
    subtitle: fallback.description,
    type: fallback.type,
    date: fallback.date,
    day: fallback.day,
    timeRange: fallback.timeRange ?? "—",
    location: fallback.location,
    status: fallback.status,
    summary: {
      ...ACTIVITY_DETAIL_MOCK.summary,
      totalParticipants: fallback.target,
      attended: fallback.participants ?? 0,
      absent: fallback.participants != null ? fallback.target - fallback.participants : fallback.target,
      participationRate: fallback.participants != null ? Math.round((fallback.participants / fallback.target) * 100) : 0,
    },
  };
}

// ---------------------------------------------------------------------------
// Activity participants (for the Participants tab)
// ---------------------------------------------------------------------------

export const ACTIVITY_PARTICIPANTS_MOCK = [
  { memberId: "MEM-001", name: "Mr. David Paul", group: "Men of Faith", status: "Attended" },
  { memberId: "MEM-002", name: "Mr. John Samuel", group: "Men of Faith", status: "Attended" },
  { memberId: "MEM-003", name: "Mr. Peter Jacob", group: "Warriors in Christ", status: "Attended" },
  { memberId: "MEM-004", name: "Mr. Michael Thomas", group: "Brothers United", status: "Absent" },
  { memberId: "MEM-005", name: "Mr. Daniel Raj", group: "Men of Faith", status: "Attended" },
];

export const ACTIVITY_PARTICIPANT_STATUS_VARIANT = {
  Attended: "success",
  Absent: "danger",
  Registered: "info",
};
