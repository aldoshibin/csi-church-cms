export const EVENT_STATUS_OPTIONS = ["Upcoming", "Ongoing", "Completed", "Cancelled"];
export const EVENT_CATEGORY_OPTIONS = ["Youth Ministry", "Spiritual Growth", "Children Ministry", "Worship", "Outreach", "Training", "Special Events", "Women's Ministry"];
export const EVENT_TYPE_OPTIONS = ["Worship", "Seminar", "Celebration", "Outreach", "Training", "Meeting", "Retreat"];
export const EVENT_REGISTRATION_REQUIRED_OPTIONS = ["Yes", "No"];
export const EVENT_VISIBILITY_OPTIONS = [
  { value: "Public", label: "Public", desc: "Visible to all members and visitors" },
  { value: "Church Members Only", label: "Church Members Only", desc: "Visible to church members only" },
  { value: "Ministry/Group Only", label: "Ministry/Group Only", desc: "Visible to selected ministry or group" },
];
export const EVENT_TARGET_AUDIENCE_OPTIONS = ["Children (0-12)", "Youth (13-18)", "Young Adults (19-35)", "Adults (36-60)", "Seniors (60+)", "All Ages"];

export const EVENT_STATUS_VARIANT = {
  Upcoming: "info",
  Ongoing: "success",
  Completed: "default",
  Cancelled: "danger",
};

const EVENT_ICON_COLORS = ["#7C3AED", "#16A34A", "#EA580C", "#DB2777", "#2563EB", "#F59E0B", "#0891B2", "#65A30D"];

const EVENTS_SEED = [
  { id: "EVT-001", title: "Youth Worship Night", category: "Youth Ministry", date: "2026-05-24", time: "6:00 PM - 8:30 PM", venue: "Main Hall", registered: 45, capacity: 80, status: "Upcoming" },
  { id: "EVT-002", title: "Bible Study Seminar", category: "Spiritual Growth", date: "2026-05-31", time: "10:00 AM - 1:00 PM", venue: "Conference Room", registered: 28, capacity: 50, status: "Upcoming" },
  { id: "EVT-003", title: "Children's Day Celebration", category: "Children Ministry", date: "2026-06-07", time: "9:00 AM - 12:00 PM", venue: "Church Grounds", registered: 62, capacity: 100, status: "Upcoming" },
  { id: "EVT-004", title: "Praise & Worship Evening", category: "Worship", date: "2026-05-18", time: "7:00 PM - 9:00 PM", venue: "Main Hall", registered: 120, capacity: 150, status: "Ongoing" },
  { id: "EVT-005", title: "Community Outreach", category: "Outreach", date: "2026-05-17", time: "8:00 AM - 1:00 PM", venue: "City Center", registered: 35, capacity: 60, status: "Completed" },
  { id: "EVT-006", title: "Leadership Training", category: "Training", date: "2026-05-10", time: "9:00 AM - 5:00 PM", venue: "Conference Room", registered: 22, capacity: 40, status: "Completed" },
  { id: "EVT-007", title: "Easter Celebration 2026", category: "Special Events", date: "2026-04-20", time: "6:00 AM - 11:00 AM", venue: "Church Campus", registered: 310, capacity: 500, status: "Completed" },
  { id: "EVT-008", title: "Women's Fellowship Meet", category: "Women's Ministry", date: "2026-05-03", time: "3:00 PM - 5:00 PM", venue: "Fellowship Hall", registered: 38, capacity: 60, status: "Completed" },
];

/** Pad the seed list out to 28 entries to match "Showing 1 to 8 of 28 events". */
export const EVENTS_MOCK = Array.from({ length: 28 }, (_, i) => {
  const seed = EVENTS_SEED[i % EVENTS_SEED.length];
  const color = EVENT_ICON_COLORS[i % EVENT_ICON_COLORS.length];
  if (i < EVENTS_SEED.length) return { ...seed, color };
  return { ...seed, id: `EVT-${String(i + 1).padStart(3, "0")}`, color };
});

export const EVENTS_STATS_MOCK = {
  totalEvents: { value: 28, delta: "12%", trendUp: true },
  upcomingEvents: { value: 9, delta: "18%", trendUp: true },
  ongoingEvents: { value: 2, delta: "No change", flat: true },
  completedEvents: { value: 17, delta: "6%", trendUp: true },
  totalRegistrations: { value: 326, delta: "15%", trendUp: true },
};

export const EVENTS_BY_CATEGORY_MOCK = [
  { label: "Youth Ministry", count: 6 },
  { label: "Spiritual Growth", count: 5 },
  { label: "Worship", count: 4 },
  { label: "Outreach", count: 4 },
  { label: "Children Ministry", count: 3 },
  { label: "Others", count: 6 },
];

export const UPCOMING_EVENTS_MOCK = [
  { month: "MAY", day: "24", title: "Youth Worship Night", venue: "Main Hall", time: "6:00 PM - 8:30 PM" },
  { month: "MAY", day: "31", title: "Bible Study Seminar", venue: "Conference Room", time: "10:00 AM - 1:00 PM" },
  { month: "JUN", day: "07", title: "Children's Day Celebration", venue: "Church Grounds", time: "9:00 AM - 12:00 PM" },
];

export const NEW_EVENT_DEFAULTS = {
  title: "",
  category: "",
  eventType: "",
  date: "",
  startTime: "",
  endTime: "",
  venue: "",
  capacity: "",
  isOnline: false,
  meetingLink: "",
  status: "Upcoming",
  registrationRequired: "Yes",
  shortDescription: "",
  detailedDescription: "",
  registrationLimit: "",
  registrationStartDate: "",
  registrationEndDate: "",
  allowWaitlist: false,
  visibility: "Public",
  targetAudience: ["All Ages"],
  customAudience: "",
  sendNotifications: false,
  addToChurchCalendar: true,
  showInWebsite: false,
  allowVolunteerSignup: false,
  imageName: "",
};

/** Full event detail record shown on the Event Details page (matches EVT-001 seed). */
export const EVENT_DETAIL_MOCK = {
  id: "EVT-001",
  title: "Youth Worship Night",
  status: "Upcoming",
  date: "2026-05-24",
  time: "6:00 PM - 8:30 PM",
  category: "Youth Ministry",
  venue: "Main Hall",
  registered: 45,
  capacity: 80,
  eventType: "Worship",
  targetAudience: "Youth & Young Adults",
  ageGroup: "Youth (Ages 13-18)",
  maximumCapacity: 80,
  organizer: "Youth Ministry Team",
  openForRegistration: true,
  description: "Join us for a special Youth Worship Night filled with praise, prayer and fellowship. This is a time for our youth to come together, grow in faith, and experience the love of Christ through worship and God's Word.",
  keyHighlights: ["Live Worship & Praise", "Inspirational Message", "Fellowship & Snacks", "Group Activities"],
  venueAddress: "Main Hall, St. John's Church, Church Road, Chennai - 600 001",
  recentUpdates: [
    { text: "Event created by Rev. Michael on May 10, 2026 at 10:24 AM", initials: "RM" },
  ],
};
