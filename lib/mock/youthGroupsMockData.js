export const YG_STATUS_OPTIONS = ["Active", "Inactive"];
export const YG_AGE_GROUP_OPTIONS = ["10 - 12 Years", "13 - 18 Years", "19 - 25 Years", "22 - 30 Years", "30+ Years"];
export const YG_GROUP_TYPE_OPTIONS = ["Age-Based Group", "Ministry Team", "Fellowship Group", "Outreach Team", "Worship Team"];
export const YG_MEETING_DAY_OPTIONS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const YG_LEADER_OPTIONS = ["Sarah Wilson", "Daniel Mark", "Grace Wilson", "Michael Brown", "Amit Kumar", "Linda Scott"];

export const YG_LEADER_CONTACTS = {
  "Sarah Wilson": { email: "sarah.wilson@stjohnschurch.org", phone: "+91 98765 43210" },
  "Daniel Mark": { email: "daniel.mark@stjohnschurch.org", phone: "+91 91234 56789" },
  "Grace Wilson": { email: "grace.wilson@stjohnschurch.org", phone: "+91 98765 11223" },
  "Michael Brown": { email: "michael.brown@stjohnschurch.org", phone: "+91 87654 22110" },
  "Amit Kumar": { email: "amit.kumar@stjohnschurch.org", phone: "+91 66554 33221" },
  "Linda Scott": { email: "linda.scott@stjohnschurch.org", phone: "+91 77665 44332" },
};

export const YG_STATUS_VARIANT = {
  Active: "success",
  Inactive: "default",
};

const YOUTH_GROUPS_SEED = [
  { id: "YG-001", name: "Junior Youth", ageGroup: "10 - 12", ageLabel: "10-12", members: 28, leader: "Sarah Wilson", meetingDay: "Sundays", meetingTime: "4:00 PM - 5:30 PM", status: "Active", color: "#16A34A" },
  { id: "YG-002", name: "Youth Fellowship", ageGroup: "13 - 18", ageLabel: "13-18", members: 64, leader: "Daniel Mark", meetingDay: "Saturdays", meetingTime: "6:00 PM - 7:30 PM", status: "Active", color: "#7C3AED" },
  { id: "YG-003", name: "Young Adults", ageGroup: "19 - 25", ageLabel: "19-25", members: 42, leader: "Grace Wilson", meetingDay: "Fridays", meetingTime: "7:00 PM - 8:30 PM", status: "Active", color: "#EA580C" },
  { id: "YG-004", name: "College & Career", ageGroup: "22 - 30", ageLabel: "22-30", members: 18, leader: "Michael Brown", meetingDay: "Sundays", meetingTime: "5:30 PM - 7:00 PM", status: "Inactive", color: "#DB2777" },
  { id: "YG-005", name: "Worship Team", ageGroup: "13 - 25", ageLabel: "13-25", members: 24, leader: "Amit Kumar", meetingDay: "Thursdays", meetingTime: "6:30 PM - 8:00 PM", status: "Active", color: "#2563EB" },
  { id: "YG-006", name: "Outreach Team", ageGroup: "13 - 25", ageLabel: "13-25", members: 15, leader: "Linda Scott", meetingDay: "Saturdays", meetingTime: "5:00 PM - 7:00 PM", status: "Active", color: "#0D9488" },
];

export const YOUTH_GROUPS_MOCK = YOUTH_GROUPS_SEED;

export const GROUP_DISTRIBUTION_BY_AGE_MOCK = {
  total: 156,
  breakdown: [
    { label: "10-12 Years", count: 28, pct: 18, color: "#16A34A" },
    { label: "13-18 Years", count: 64, pct: 41, color: "#7C3AED" },
    { label: "19-25 Years", count: 42, pct: 27, color: "#EA580C" },
    { label: "22-30 Years", count: 18, pct: 12, color: "#DB2777" },
    { label: "30+ Years", count: 4, pct: 2, color: "#0D9488" },
  ],
};

export const UPCOMING_MEETINGS_MOCK = [
  { month: "MAY", day: "18", groupName: "Junior Youth", time: "Sundays, 4:00 PM - 5:30 PM", badge: "Today" },
  { month: "MAY", day: "24", groupName: "Youth Fellowship", time: "Saturdays, 6:00 PM - 7:30 PM", badge: "" },
  { month: "MAY", day: "25", groupName: "Young Adults", time: "Fridays, 7:00 PM - 8:30 PM", badge: "" },
];

export const GROUP_ACTIVITIES_OVERVIEW_MOCK = {
  totalActivities: { value: 28, delta: "15%", trendUp: true },
  bibleStudies: { value: 12, delta: "8%", trendUp: true },
  fellowships: { value: 8, delta: "12%", trendUp: true },
  worshipEvents: { value: 5, delta: "25%", trendUp: true },
  outreachEvents: { value: 3, sub: "No change", flat: true },
};

export const NEW_YOUTH_GROUP_DEFAULTS = {
  groupName: "",
  ageGroup: "",
  groupType: "",
  meetingDay: "",
  startTime: "",
  endTime: "",
  location: "",
  maximumMembers: "",
  status: "Active",
  description: "",
  primaryLeader: "",
  coLeader: "",
  leaderEmail: "",
  leaderPhone: "",
  allowNewMembers: true,
  requireApproval: false,
  displayInDirectory: true,
  sendNotifications: true,
  imageName: "",
};

/** Full group detail record shown on the Youth Group Details page (matches YG-001 seed). */
export const YOUTH_GROUP_DETAIL_MOCK = {
  id: "YG-001",
  name: "Junior Youth",
  status: "Active",
  ageRange: "Ages 10-12",
  ageGroup: "10 - 12 Years",
  groupType: "Age-Based Group",
  leader: "Sarah Wilson",
  meetingDayTime: "Sundays, 4:00 PM - 5:30 PM",
  location: "Youth Room, Main Building",
  createdOn: "2024-04-10",
  lastUpdated: "2026-05-15",
  lastUpdatedBy: "Rev. Michael",
  description: "Junior Youth is a group for children between 10 to 12 years old. Our goal is to help them grow in faith, build friendships, and learn Christian values through fun activities and Bible teachings.",
  membersPreview: [
    { name: "Jacob Thomas", age: 11, initials: "JT" },
    { name: "Emily Grace", age: 12, initials: "EG" },
    { name: "Joshua Daniel", age: 10, initials: "JD" },
    { name: "Anna Ruth", age: 11, initials: "AR" },
    { name: "Samuel Paul", age: 12, initials: "SP" },
  ],
  moreMembersCount: 23,
  recentActivities: [
    { icon: "music", color: "#DB2777", title: "Worship Practice", date: "May 11, 2026", time: "4:00 PM - 5:00 PM", attendees: 24 },
    { icon: "book", color: "#16A34A", title: "Bible Study: Parables of Jesus", date: "May 4, 2026", time: "4:00 PM - 5:30 PM", attendees: 22 },
    { icon: "group", color: "#EA580C", title: "Community Service - Food Drive", date: "Apr 27, 2026", time: "3:00 PM - 6:00 PM", attendees: 20 },
  ],
  leaders: [
    { name: "Sarah Wilson", role: "Primary Leader", email: "sarah.wilson@stjohnschurch.org", phone: "+91 98765 43210", initials: "SW" },
    { name: "Daniel Mark", role: "Co-Leader", email: "daniel.mark@stjohnschurch.org", phone: "+91 91234 56789", initials: "DM" },
  ],
  upcomingMeeting: { month: "MAY", day: "18", title: "Regular Meeting", time: "4:00 PM - 5:30 PM", location: "Youth Room, Main Building", linkedActivity: "Bible Study: Faith in Action", badge: "In 2 days" },
  stats: { totalMembers: 28, activeMembers: 25, averageAttendance: 82, totalMeetingsThisYear: 18, activitiesThisYear: 12 },
};
