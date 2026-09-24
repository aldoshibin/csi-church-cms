// Mock data for Men's Fellowship > Meetings — maps to mens_fellowship/meetings/views.py once wired up.

export const MEETING_TYPE_OPTIONS = ["Fellowship", "Bible Study", "Prayer Meeting", "Discussion", "Teaching", "Special Meeting", "Workshop"];
export const MEETING_LOCATION_OPTIONS = ["Fellowship Hall", "Room 1", "Room 2", "Room 3", "Room 4", "Room 5", "Green Valley Resort"];
export const MEETING_SPEAKER_OPTIONS = ["Mr. David Paul", "Mr. John Samuel", "Mr. Peter Jacob", "Mr. Michael Thomas", "Mr. Daniel Raj", "Mr. Sam Clifford"];
export const MEETING_STATUS_OPTIONS = ["Completed", "Upcoming", "Cancelled"];

export const MEETING_STATUS_VARIANT = {
  Completed: "success",
  Upcoming: "info",
  Cancelled: "danger",
};

export const MEETING_TYPE_ICON_BG = {
  Fellowship: { bg: "bg-success-50", color: "text-success-600" },
  "Bible Study": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Prayer Meeting": { bg: "bg-warning-50", color: "text-warning-600" },
  Discussion: { bg: "bg-interactive-50", color: "text-interactive-600" },
  Teaching: { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  "Special Meeting": { bg: "bg-interactive-50", color: "text-interactive-600" },
  Workshop: { bg: "bg-surface-muted", color: "text-ink-subtle" },
};

const MEETINGS_SEED = [
  { id: "MTG-001", title: "Monthly Fellowship Meeting", type: "Fellowship", speaker: "Mr. David Paul", date: "2024-05-19", day: "Sunday", timeRange: "6:00 PM - 8:00 PM", location: "Fellowship Hall", invited: 45, attended: 38, status: "Completed" },
  { id: "MTG-002", title: "Bible Study - Book of James", type: "Bible Study", speaker: "Mr. Peter Jacob", date: "2024-05-12", day: "Sunday", timeRange: "6:00 PM - 7:30 PM", location: "Room 3", invited: 44, attended: 36, status: "Completed" },
  { id: "MTG-003", title: "Prayer & Praise Meeting", type: "Prayer Meeting", speaker: "Mr. John Samuel", date: "2024-05-05", day: "Sunday", timeRange: "6:00 PM - 7:30 PM", location: "Fellowship Hall", invited: 45, attended: 40, status: "Completed" },
  { id: "MTG-004", title: "Men's Breakfast Fellowship", type: "Fellowship", speaker: "Mr. David Paul", date: "2024-04-28", day: "Sunday", timeRange: "7:30 AM - 9:00 AM", location: "Fellowship Hall", invited: 45, attended: 32, status: "Completed" },
  { id: "MTG-005", title: "Discussion on Faith", type: "Discussion", speaker: "Mr. John Samuel", date: "2024-04-21", day: "Sunday", timeRange: "6:00 PM - 8:00 PM", location: "Room 4", invited: 45, attended: 34, status: "Completed" },
  { id: "MTG-006", title: "Topic: Walking in Faith", type: "Teaching", speaker: "Mr. Peter Jacob", date: "2024-04-14", day: "Sunday", timeRange: "6:00 PM - 7:30 PM", location: "Room 2", invited: 45, attended: null, status: "Upcoming" },
  { id: "MTG-007", title: "Guest Speaker Session", type: "Teaching", speaker: "Mr. Daniel Raj", date: "2024-04-07", day: "Sunday", timeRange: "6:00 PM - 7:30 PM", location: "Fellowship Hall", invited: 45, attended: null, status: "Upcoming" },
  { id: "MTG-008", title: "Easter Reflection Meeting", type: "Special Meeting", speaker: "Mr. Michael Thomas", date: "2024-03-31", day: "Sunday", timeRange: "6:00 PM - 8:00 PM", location: "Fellowship Hall", invited: 45, attended: null, status: "Upcoming" },
  { id: "MTG-009", title: "Financial Planning Session", type: "Workshop", speaker: "Mr. Sam Clifford", date: "2024-03-24", day: "Sunday", timeRange: "6:00 PM - 8:00 PM", location: "Room 5", invited: 45, attended: null, status: "Cancelled" },
  { id: "MTG-010", title: "Outdoor Fellowship", type: "Fellowship", speaker: "Mr. David Paul", date: "2024-03-17", day: "Sunday", timeRange: "5:00 PM - 8:00 PM", location: "Green Valley Resort", invited: 45, attended: null, status: "Cancelled" },
];

/** Pad the seed list out to 24 entries to match "Showing 1 to 10 of 24 meetings". */
export const MEETINGS_LIST_MOCK = Array.from({ length: 24 }, (_, i) => {
  const seed = MEETINGS_SEED[i % MEETINGS_SEED.length];
  if (i < MEETINGS_SEED.length) return seed;
  return { ...seed, id: `MTG-${String(i + 1).padStart(3, "0")}` };
});

export const MEETINGS_QUICK_ACTIONS_TARGETS = {
  schedule: "/mens-fellowship/meetings/add",
};

export const RECENT_MEETINGS_MOCK = [
  { title: "Monthly Fellowship Meeting", date: "2024-05-19", status: "Completed" },
  { title: "Bible Study - Book of James", date: "2024-05-12", status: "Completed" },
  { title: "Prayer & Praise Meeting", date: "2024-05-05", status: "Completed" },
  { title: "Men's Breakfast Fellowship", date: "2024-04-28", status: "Completed" },
  { title: "Discussion on Faith", date: "2024-04-21", status: "Completed" },
];

export const UPCOMING_MEETINGS_LIST_MOCK = [
  { day: "19", month: "MAY", title: "Monthly Fellowship Meeting", location: "Fellowship Hall", timeRange: "6:00 PM - 8:00 PM" },
  { day: "19", month: "MAY", title: "Bible Study - Book of James", location: "Room 3", timeRange: "6:00 PM - 7:30 PM" },
  { day: "14", month: "APR", title: "Topic: Walking in Faith", location: "Room 2", timeRange: "6:00 PM - 7:30 PM" },
  { day: "07", month: "APR", title: "Guest Speaker Session", location: "Fellowship Hall", timeRange: "6:00 PM - 7:30 PM" },
];

export const NEW_MEETING_DEFAULTS = {
  title: "",
  type: "",
  fellowshipGroup: "",
  speaker: "",
  purpose: "",
  description: "",
  date: "",
  startTime: "",
  endTime: "",
  timeZone: "(GMT+05:30) Asia/Kolkata",
  location: "",
  address: "",
  room: "",
  addOnlineDetails: false,
  agenda: [],
  invitedMemberIds: [],
  sendEmailInvitation: true,
  sendSmsReminder: true,
  allowAddToCalendar: true,
  publishToGroupMembers: true,
  reminders: [
    { id: "r1", offset: "1 Day Before", time: "09:00 AM" },
    { id: "r2", offset: "1 Hour Before", time: "06:00 PM" },
  ],
};

export const INVITE_MEMBERS_MOCK = [
  { id: "MEM-002", name: "Mr. John Samuel", group: "Men of Faith" },
  { id: "MEM-003", name: "Mr. Peter Jacob", group: "Warriors in Christ" },
  { id: "MEM-005", name: "Mr. Daniel Raj", group: "Men of Faith" },
  { id: "MEM-004", name: "Mr. Michael Thomas", group: "Brothers United" },
  { id: "MEM-006", name: "Mr. Sam Clifford", group: "Overcomers" },
];

export const REMINDER_OFFSET_OPTIONS = ["1 Hour Before", "3 Hours Before", "1 Day Before", "2 Days Before", "1 Week Before"];

// ---------------------------------------------------------------------------
// Meeting detail (Monthly Fellowship Meeting)
// ---------------------------------------------------------------------------

export const MEETING_DETAIL_MOCK = {
  id: "MTG-001",
  title: "Monthly Fellowship Meeting",
  status: "Completed",
  type: "Fellowship",
  speaker: "Mr. David Paul",
  description: "A time of worship, fellowship and sharing of God's word among the men of our church.",
  date: "2024-05-19",
  day: "Sunday",
  timeRange: "6:00 PM - 8:00 PM",
  location: "Fellowship Hall",
  createdBy: "Rev. Michael",
  createdByInitials: "RM",
  createdOn: "2024-05-10T10:30:00",
  lastUpdated: "2024-05-19T20:15:00",
  agenda: [
    { order: 1, item: "Opening Prayer", time: "6:00 PM - 6:10 PM" },
    { order: 2, item: "Praise & Worship", time: "6:10 PM - 6:30 PM" },
    { order: 3, item: "Scripture Reading", time: "6:30 PM - 6:45 PM" },
    { order: 4, item: "Message by Speaker", time: "6:45 PM - 7:30 PM" },
    { order: 5, item: "Group Discussion", time: "7:30 PM - 7:50 PM" },
    { order: 6, item: "Announcements", time: "7:50 PM - 8:00 PM" },
    { order: 7, item: "Closing Prayer", time: "8:00 PM" },
  ],
  notes: [
    "The speaker encouraged the members to grow in faith and be committed to serving the Lord wholeheartedly.",
    "Special prayer was offered for the upcoming church outreach program.",
  ],
  attachments: [
    { name: "Meeting_Agenda.pdf", size: "210 KB", kind: "pdf" },
    { name: "Sermon_Notes.docx", size: "156 KB", kind: "docx" },
  ],
  overview: {
    totalInvited: 45,
    totalAttended: 38,
    attendanceRate: 84,
    completed: true,
    cancelled: false,
    breakdown: [
      { label: "Attended", count: 38, color: "#16A34A" },
      { label: "Upcoming", count: 0, color: "#2563EB" },
      { label: "Cancelled", count: 2, color: "#DC2626" },
    ],
  },
  attendanceSummary: {
    totalInvited: 45,
    attended: 38,
    absent: 5,
    attendanceRate: 84,
  },
  meetingInfo: {
    reminderSentOn: "2024-05-17T09:00:00",
    reminderSentBy: "System",
    followUpSentOn: "2024-05-20T10:00:00",
    followUpSentBy: "Rev. Michael",
  },
};

export function buildMeetingDetailMock(id) {
  if (!id || id === MEETING_DETAIL_MOCK.id) return MEETING_DETAIL_MOCK;
  const fallback = MEETINGS_LIST_MOCK.find((m) => m.id === id);
  if (!fallback) return { ...MEETING_DETAIL_MOCK, id };
  return {
    ...MEETING_DETAIL_MOCK,
    id,
    title: fallback.title,
    type: fallback.type,
    speaker: fallback.speaker,
    date: fallback.date,
    day: fallback.day,
    timeRange: fallback.timeRange,
    location: fallback.location,
    status: fallback.status,
    overview: {
      ...MEETING_DETAIL_MOCK.overview,
      totalInvited: fallback.invited,
      totalAttended: fallback.attended ?? 0,
      attendanceRate: fallback.attended ? Math.round((fallback.attended / fallback.invited) * 100) : 0,
      completed: fallback.status === "Completed",
      cancelled: fallback.status === "Cancelled",
    },
    attendanceSummary: {
      totalInvited: fallback.invited,
      attended: fallback.attended ?? 0,
      absent: fallback.attended ? fallback.invited - fallback.attended : fallback.invited,
      attendanceRate: fallback.attended ? Math.round((fallback.attended / fallback.invited) * 100) : 0,
    },
  };
}
