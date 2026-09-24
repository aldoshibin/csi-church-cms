export const YME_STATUS_OPTIONS = ["Upcoming", "Ongoing", "Completed", "Cancelled"];
export const YME_CATEGORY_OPTIONS = ["Youth Ministry", "Spiritual Growth", "Worship", "Outreach", "Children Ministry", "Training", "Special Events", "Women's Ministry"];
export const YME_EVENT_TYPE_OPTIONS = ["Worship", "Seminar", "Celebration", "Outreach", "Training", "Meeting", "Retreat"];
export const YME_ORGANIZER_OPTIONS = ["Youth Ministry Team", "Worship Team", "Outreach Team", "College & Career", "Leadership Team"];
export const YME_TARGET_AUDIENCE_OPTIONS = ["Children (0-12)", "Youth (13-18)", "Young Adults (19-35)", "Adults (36-60)", "Seniors (60+)", "All Ages"];
export const YME_VISIBILITY_OPTIONS = [
  { value: "Public", label: "Public", desc: "Visible to all members" },
  { value: "Church Members Only", label: "Church Members Only", desc: "Visible to church members" },
  { value: "Ministry/Group Only", label: "Ministry/Group Only", desc: "Visible to selected ministry or group" },
];

export const YME_STATUS_VARIANT = {
  Upcoming: "info",
  Ongoing: "success",
  Completed: "default",
  Cancelled: "danger",
};

const YME_ICON_COLORS = ["#DB2777", "#2563EB", "#EA580C", "#7C3AED", "#DC2626", "#16A34A", "#F59E0B", "#0891B2"];

const YM_EVENTS_SEED = [
  { id: "YME-001", title: "Youth Worship Night", category: "Youth Ministry", date: "2026-05-24", time: "6:00 PM - 8:30 PM", venue: "Main Hall", registered: 45, capacity: 80, status: "Upcoming" },
  { id: "YME-002", title: "Bible Study Seminar", category: "Spiritual Growth", date: "2026-05-31", time: "10:00 AM - 1:00 PM", venue: "Conference Room", registered: 28, capacity: 50, status: "Upcoming" },
  { id: "YME-003", title: "Children's Day Celebration", category: "Children Ministry", date: "2026-06-07", time: "9:00 AM - 12:00 PM", venue: "Church Grounds", registered: 62, capacity: 100, status: "Upcoming" },
  { id: "YME-004", title: "Praise & Worship Evening", category: "Worship", date: "2026-05-18", time: "7:00 PM - 9:00 PM", venue: "Main Hall", registered: 120, capacity: 150, status: "Ongoing" },
  { id: "YME-005", title: "Community Outreach", category: "Outreach", date: "2026-05-17", time: "8:00 AM - 1:00 PM", venue: "City Center", registered: 35, capacity: 60, status: "Completed" },
  { id: "YME-006", title: "Leadership Training", category: "Training", date: "2026-05-10", time: "9:00 AM - 5:00 PM", venue: "Conference Room", registered: 22, capacity: 40, status: "Completed" },
  { id: "YME-007", title: "Easter Celebration 2026", category: "Special Events", date: "2026-04-20", time: "6:00 AM - 11:00 AM", venue: "Church Campus", registered: 120, capacity: 150, status: "Completed" },
  { id: "YME-008", title: "Women's Fellowship Meet", category: "Women's Ministry", date: "2026-05-03", time: "3:00 PM - 5:00 PM", venue: "Fellowship Hall", registered: 38, capacity: 60, status: "Completed" },
];

/** Pad the seed list out to 28 entries to match "Showing 1 to 8 of 28 events". */
export const YM_EVENTS_MOCK = Array.from({ length: 28 }, (_, i) => {
  const seed = YM_EVENTS_SEED[i % YM_EVENTS_SEED.length];
  const color = YME_ICON_COLORS[i % YME_ICON_COLORS.length];
  if (i < YM_EVENTS_SEED.length) return { ...seed, color };
  return { ...seed, id: `YME-${String(i + 1).padStart(3, "0")}`, color };
});

export const YME_BY_CATEGORY_MOCK = [
  { label: "Youth Ministry", count: 6 },
  { label: "Spiritual Growth", count: 5 },
  { label: "Worship", count: 4 },
  { label: "Outreach", count: 4 },
  { label: "Children Ministry", count: 3 },
  { label: "Others", count: 6 },
];

export const YME_UPCOMING_EVENTS_MOCK = [
  { month: "MAY", day: "24", title: "Youth Worship Night", venue: "Main Hall", time: "6:00 PM - 8:30 PM" },
  { month: "MAY", day: "31", title: "Bible Study Seminar", venue: "Conference Room", time: "10:00 AM - 1:00 PM" },
  { month: "JUN", day: "07", title: "Children's Day Celebration", venue: "Church Grounds", time: "9:00 AM - 12:00 PM" },
];

export const NEW_YM_EVENT_DEFAULTS = {
  title: "",
  category: "",
  eventType: "",
  organizer: "",
  status: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  venue: "",
  additionalVenueDetails: "",
  isOnline: false,
  meetingLink: "",
  shortDescription: "",
  detailedDescription: "",
  targetAudience: "",
  registrationLimit: "",
  registrationDeadline: "",
  contactPerson: "",
  contactPhone: "",
  contactEmail: "",
  websiteInfo: "",
  enableRegistration: true,
  sendReminder: false,
  addToChurchCalendar: true,
  sendNotifications: false,
  requireApproval: false,
  imageName: "",
  eventCategory: "",
  visibility: "Public",
};

/** Full event detail record shown on the Event Details page (matches YME-001 seed). */
export const YM_EVENT_DETAIL_MOCK = {
  id: "YME-001",
  title: "Youth Worship Night",
  status: "Upcoming",
  organizer: "Youth Ministry Team",
  date: "2026-05-24",
  day: "Sunday",
  time: "6:00 PM - 8:30 PM",
  venue: "Main Hall",
  venueOrg: "CSI St. John's Church",
  registrationLimit: 80,
  registered: 45,
  category: "Youth Ministry",
  eventStatus: "Upcoming",
  visibility: "Public",
  visibilityDesc: "Visible to all members",
  createdOn: "2026-04-25",
  createdBy: "Rev. Michael",
  description: "Join us for an evening of powerful worship, uplifting messages, and fellowship. Let's come together to praise, connect, and grow in faith.",
  eventHighlights: [
    { icon: "gift", text: "Dynamic worship and praise" },
    { icon: "book", text: "Inspirational message and testimony" },
    { icon: "game", text: "Fun games and fellowship" },
    { icon: "cup", text: "Refreshments will be served" },
  ],
  contact: { coordinator: "Samuel Paul", phone: "+91 98765 43210", email: "samuel.paul@stjohnschurch.org" },
  registrationSummary: {
    total: 45,
    breakdown: [
      { label: "Registered", count: 45, pct: 56, color: "#16A34A" },
      { label: "Pending", count: 15, pct: 19, color: "#2563EB" },
      { label: "Cancelled", count: 10, pct: 12, color: "#EA580C" },
      { label: "Available", count: 10, pct: 13, color: "#CBD5E1" },
    ],
    totalLimit: 80,
  },
  timeline: [
    { label: "Event Created", date: "Apr 25, 2026", time: "By Rev. Michael", state: "done" },
    { label: "Registrations Opened", date: "Apr 26, 2026", time: "9:00 AM", state: "done" },
    { label: "Reminder Sent", date: "May 20, 2026", time: "6:00 PM", state: "current" },
    { label: "Event Date", date: "May 24, 2026", time: "6:00 PM - 8:30 PM", state: "future" },
  ],
};
