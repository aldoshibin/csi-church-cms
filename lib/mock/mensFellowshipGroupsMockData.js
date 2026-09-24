export const MFG_STATUS_OPTIONS = ["Active", "Inactive", "Not Meeting"];
export const MFG_FOCUS_AREA_OPTIONS = ["Faith", "Fellowship", "Growth", "Prayer", "Outreach", "Discipleship"];
export const MFG_MEETING_DAY_OPTIONS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const MFG_MEETING_TIME_OPTIONS = ["7:00 AM", "7:30 AM", "6:00 PM", "6:30 PM", "7:00 PM"];
export const MFG_LEADER_OPTIONS = ["Mr. David Paul", "Mr. John Samuel", "Mr. Peter Jacob", "Mr. Michael Thomas", "Mr. Daniel Raj", "Mr. Sam Clifford", "Mr. Joseph Martin"];
export const MFG_ENABLE_OPTIONS = ["Enable", "Disable"];
export const MFG_YES_NO_OPTIONS = ["Yes", "No"];

export const MFG_STATUS_VARIANT = { Active: "success", Inactive: "default", "Not Meeting": "warning" };
const MFG_ICON_COLORS = ["#16A34A", "#DB2777", "#2563EB", "#F59E0B", "#7C3AED", "#0891B2", "#DC2626"];

const FELLOWSHIP_GROUPS_SEED = [
  {
    id: "MG-001", name: "Men of Faith", tagline: "Faith • Fellowship • Growth", leader: "Mr. David Paul", coLeader: "Mr. John Samuel",
    members: 45, meetingDay: "Sunday", meetingTime: "6:00 PM - 8:00 PM", location: "Fellowship Hall", attendanceRate: 84, status: "Active",
    groupId: "MG-001", establishedOn: "2023-05-15", focusArea: ["Faith", "Fellowship", "Growth"],
    description: "Men of Faith is a community of men who come together to grow in faith, support one another, and serve the church and the community.",
    attendance: { present: 84, presentCount: 38, absent: 10, absentCount: 5, notMeeting: 6, notMeetingCount: 2 },
    totalMeetings: 12,
    recentMeetings: [
      { title: "Monthly Fellowship Meeting", date: "2024-05-19", time: "6:00 PM - 8:00 PM", location: "Fellowship Hall", leader: "Mr. David Paul", attended: 38, total: 45 },
      { title: "Prayer & Praise Meeting", date: "2024-05-12", time: "6:00 PM - 7:30 PM", location: "Room 2", leader: "Mr. John Samuel", attended: 36, total: 45 },
      { title: "Bible Study - Book of James", date: "2024-05-05", time: "7:00 PM - 8:30 PM", location: "Room 3", leader: "Mr. Peter Jacob", attended: 40, total: 45 },
      { title: "Men's Breakfast Fellowship", date: "2024-04-28", time: "7:30 AM - 9:00 AM", location: "Fellowship Hall", leader: "Mr. David Paul", attended: 32, total: 45 },
      { title: "Discussion on Faith", date: "2024-04-21", time: "6:00 PM - 8:00 PM", location: "Room 4", leader: "Mr. John Samuel", attended: 34, total: 45 },
    ],
    upcomingActivities: [
      { title: "Outdoor Fellowship", date: "2024-06-14", time: "8:00 AM - 4:00 PM", location: "Green Valley Resort", organizedBy: "Mr. David Paul" },
      { title: "Community Service", date: "2024-06-22", time: "9:00 AM - 12:00 PM", location: "City Orphanage", organizedBy: "Mr. John Samuel" },
      { title: "Bible Study Session", date: "2024-06-30", time: "7:00 PM - 8:30 PM", location: "Room 3", organizedBy: "Mr. Peter Jacob" },
    ],
    groupLeaders: [
      { name: "Mr. David Paul", role: "Leader", email: "david.paul@stjohnschurch.org", phone: "+91 98765 43210" },
      { name: "Mr. John Samuel", role: "Co-Leader", email: "john.samuel@stjohnschurch.org", phone: "+91 91234 56789" },
      { name: "Mr. Peter Jacob", role: "Co-Leader", email: "peter.jacob@stjohnschurch.org", phone: "+91 99887 66554" },
    ],
    documents: 6, activitiesThisMonth: 18,
  },
  { id: "MG-002", name: "Warriors in Christ", tagline: "Strong in Faith", leader: "Mr. John Samuel", members: 32, meetingDay: "Saturday", meetingTime: "6:00 PM - 7:30 PM", location: "Room 2", attendanceRate: 80, status: "Active" },
  { id: "MG-003", name: "Truth Seekers", tagline: "Seeking Truth Together", leader: "Mr. Peter Jacob", members: 28, meetingDay: "Thursday", meetingTime: "7:00 PM - 8:30 PM", location: "Room 3", attendanceRate: 82, status: "Active" },
  { id: "MG-004", name: "Brothers United", tagline: "United in Christ", leader: "Mr. David Paul", members: 26, meetingDay: "Wednesday", meetingTime: "7:30 PM - 9:00 PM", location: "Fellowship Hall", attendanceRate: 75, status: "Active" },
  { id: "MG-005", name: "Overcomers", tagline: "More than Conquerors", leader: "Mr. Michael Thomas", members: 18, meetingDay: "Friday", meetingTime: "6:30 PM - 8:00 PM", location: "Room 4", attendanceRate: 72, status: "Active" },
  { id: "MG-006", name: "Faith Builders", tagline: "Building Strong Faith", leader: "Mr. Daniel Raj", members: 16, meetingDay: "Sunday", meetingTime: "7:00 AM - 8:30 AM", location: "Prayer Room", attendanceRate: 70, status: "Active" },
  { id: "MG-007", name: "Grace Men", tagline: "By Grace Through Faith", leader: "Mr. Sam Clifford", members: 12, meetingDay: "Tuesday", meetingTime: "7:00 PM - 8:30 PM", location: "Room 5", attendanceRate: 65, status: "Inactive" },
  { id: "MG-008", name: "New Beginnings", tagline: "A New Life in Christ", leader: "Mr. Joseph Martin", members: 10, meetingDay: "Saturday", meetingTime: "5:00 PM - 6:30 PM", location: "Room 2", attendanceRate: 60, status: "Inactive" },
];

/** Pad the seed list out to 12 entries to match "Showing 1 to 8 of 12 groups". */
export const FELLOWSHIP_GROUPS_MOCK = Array.from({ length: 12 }, (_, i) => {
  const seed = FELLOWSHIP_GROUPS_SEED[i % FELLOWSHIP_GROUPS_SEED.length];
  const color = MFG_ICON_COLORS[i % MFG_ICON_COLORS.length];
  if (i < FELLOWSHIP_GROUPS_SEED.length) return { ...seed, color };
  return { ...seed, id: `MG-${String(i + 1).padStart(3, "0")}`, color };
});

export const MFG_STATUS_OVERVIEW_MOCK = {
  breakdown: [
    { label: "Active", count: 8, pct: 66.7, color: "#16A34A" },
    { label: "Inactive", count: 2, pct: 16.7, color: "#F59E0B" },
    { label: "Not Meeting", count: 2, pct: 16.6, color: "#94A3B8" },
  ],
};

export const MFG_TOP_GROUPS_MOCK = [
  { name: "Men of Faith", attendanceRate: 84 },
  { name: "Truth Seekers", attendanceRate: 82 },
  { name: "Warriors in Christ", attendanceRate: 80 },
  { name: "Brothers United", attendanceRate: 75 },
  { name: "Overcomers", attendanceRate: 72 },
];

export const MFG_RECENT_ACTIVITIES_MOCK = [
  { title: "Monthly Fellowship Meeting", group: "Men of Faith", date: "2026-05-24", icon: "users", color: "#16A34A" },
  { title: "Bible Study Session", group: "Truth Seekers", date: "2026-05-22", icon: "book", color: "#7C3AED" },
  { title: "Prayer & Praise Meeting", group: "Warriors in Christ", date: "2026-05-20", icon: "users", color: "#2563EB" },
  { title: "Outreach Activity", group: "Brothers United", date: "2026-05-18", icon: "handHeart", color: "#EA580C" },
];

export const MFG_ABOUT_MOCK = {
  about: "Men's Fellowship is a community of men who come together to grow in faith, support one another, and serve the church and the community.",
  mission: "To strengthen men in their walk with Christ and empower them to lead with faith.",
  vision: "To build a godly brotherhood that impacts families, church and society.",
  values: "Faith, Integrity, Brotherhood, Service and Discipleship.",
};

export const NEW_FELLOWSHIP_GROUP_DEFAULTS = {
  groupName: "",
  groupId: "MG-009",
  establishedOn: "",
  focusArea: "",
  meetingDay: "",
  meetingTime: "",
  description: "",
  attendanceTracking: "Enable",
  groupStatus: "Active",
  meetingReminder: "Enable",
  allowNewMembers: "Yes",
  tags: [],
  notes: "",
  leader: "",
  coLeader: "",
  avatarName: "",
};
