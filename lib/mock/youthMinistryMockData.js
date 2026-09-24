export const YM_STATS_MOCK = {
  totalYouth: { value: 156, delta: "8.3%", trendUp: true },
  activeYouthGroups: { value: 6, sub: "No change", flat: true },
  upcomingEvents: { value: 4, delta: "33.3%", trendUp: true },
  volunteers: { value: 18, delta: "12.5%", trendUp: true },
  attendanceThisMonth: { value: "82%", delta: "5.6%", trendUp: true },
};

export const YM_UPCOMING_EVENTS_MOCK = [
  { month: "MAY", day: "24", icon: "music", color: "#DB2777", title: "Youth Worship Night", time: "6:00 PM - 8:30 PM", venue: "Main Hall", status: "Upcoming" },
  { month: "MAY", day: "31", icon: "book", color: "#2563EB", title: "Bible Study & Fellowship", time: "10:00 AM - 12:00 PM", venue: "Conference Room", status: "Upcoming" },
  { month: "JUN", day: "07", icon: "star", color: "#F59E0B", title: "Youth Outreach Program", time: "9:00 AM - 1:00 PM", venue: "City Center", status: "Upcoming" },
  { month: "JUN", day: "14", icon: "star", color: "#7C3AED", title: "Leadership Training", time: "3:00 PM - 5:00 PM", venue: "Training Room", status: "Upcoming" },
];

export const YM_RECENT_ACTIVITIES_MOCK = [
  { type: "check", bold: "Youth Worship Night", rest: "attendance recorded", date: "May 17, 2026 at 8:45 PM", by: "Sarah Wilson" },
  { type: "group", bold: "New youth group \u201cCollege & Career\u201d", rest: "created", date: "May 16, 2026 at 3:20 PM", by: "Rev. Michael" },
  { type: "event", bold: "Event \u201cYouth Outreach Program\u201d", rest: "scheduled", date: "May 15, 2026 at 11:10 AM", by: "Grace Wilson" },
  { type: "volunteer", bold: "New volunteer James David", rest: "added", date: "May 14, 2026 at 4:30 PM", by: "Sarah Wilson" },
];

export const YM_MINISTRY_FOCUS_MOCK = [
  { title: "Discipleship", desc: "Helping young people grow in faith and character.", icon: "cross", color: "#16A34A" },
  { title: "Fellowship", desc: "Building relationships and strong community.", icon: "heart", color: "#7C3AED" },
  { title: "Service", desc: "Encouraging youth to serve others with love.", icon: "hand", color: "#EA580C" },
  { title: "Worship", desc: "Leading a lifestyle of worship and devotion.", icon: "book", color: "#2563EB" },
];

export const YM_YOUTH_GROUPS_OVERVIEW_MOCK = {
  totalMembers: 191,
  groups: [
    { name: "Junior (Ages 10-12)", members: 28, color: "#16A34A" },
    { name: "Youth (Ages 13-18)", members: 64, color: "#2563EB" },
    { name: "Young Adults (19-25)", members: 42, color: "#EA580C" },
    { name: "College & Career", members: 18, color: "#DB2777" },
    { name: "Worship Team", members: 24, color: "#DC2626" },
    { name: "Outreach Team", members: 15, color: "#7C3AED" },
  ],
};

export const YM_ACTIVITY_TYPE_OPTIONS = ["Worship", "Bible Study", "Outreach", "Training", "Social", "Retreat", "Fellowship"];
export const YM_ACTIVITY_CATEGORY_OPTIONS = ["Discipleship", "Fellowship", "Service", "Worship", "Leadership"];
export const YM_ORGANIZER_OPTIONS = ["Youth Ministry Team", "Worship Team", "Outreach Team", "College & Career", "Leadership Team"];
export const YM_REGISTRATION_REQUIRED_OPTIONS = ["Yes", "No"];
export const YM_TARGET_AUDIENCE_OPTIONS = ["Children (0-12)", "Youth (13-18)", "Young Adults (19-35)", "Adults (36-60)", "Seniors (60+)", "All Ages"];
export const YM_VISIBILITY_OPTIONS = [
  { value: "Public", label: "Public", desc: "Visible to all members" },
  { value: "Church Members Only", label: "Church Members Only", desc: "Visible to church members" },
  { value: "Ministry/Group Only", label: "Ministry/Group Only", desc: "Visible to selected ministry or group" },
];

export const NEW_YOUTH_ACTIVITY_DEFAULTS = {
  title: "",
  activityType: "",
  category: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  venue: "",
  capacity: "",
  isOnline: false,
  meetingLink: "",
  shortDescription: "",
  detailedDescription: "",
  organizer: "",
  contactPerson: "",
  contactNumber: "",
  email: "",
  registrationRequired: "",
  registrationDeadline: "",
  sendNotifications: false,
  addToMinistryCalendar: true,
  allowVolunteerSignup: false,
  requireParentalConsent: false,
  imageName: "",
  targetAudience: ["Youth (13-18)"],
  visibility: "Public",
};
