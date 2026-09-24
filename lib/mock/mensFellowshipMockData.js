// Mock data for Men's Fellowship module — maps to mens_fellowship/* views.py once wired up.

export const FELLOWSHIP_GROUP_OPTIONS = ["Men of Faith", "Warriors in Christ", "Truth Seekers", "Brothers United", "Overcomers"];
export const GROUP_ROLE_OPTIONS = ["Member", "Leader", "Co-Leader", "Secretary", "Treasurer"];
export const MARITAL_STATUS_OPTIONS = ["Single", "Married", "Widowed", "Divorced"];
export const MEMBER_STATUS_OPTIONS = ["Active", "Inactive"];

export const MEMBER_STATUS_VARIANT = {
  Active: "success",
  Inactive: "warning",
};

export const GROUP_BADGE = {
  "Men of Faith": { bg: "bg-success-50", color: "text-success-600" },
  "Warriors in Christ": { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Truth Seekers": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Brothers United": { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  "Overcomers": { bg: "bg-warning-50", color: "text-warning-600" },
};

// ---------------------------------------------------------------------------
// Members list
// ---------------------------------------------------------------------------

export const MEMBERS_STATS_MOCK = {
  totalMembers: { value: 156, delta: "12.5%", trendUp: true },
  activeMembers: { value: 132, delta: "14.3%", trendUp: true },
  inactiveMembers: { value: 18, delta: "5.6%", trendUp: true },
  newThisMonth: { value: 8, delta: "20.0%", trendUp: true },
  averageAge: { value: "38 Years", delta: null, trendUp: true },
};

const MEMBERS_SEED = [
  { id: "MEM-001", name: "Mr. David Paul", group: "Men of Faith", phone: "+91 98765 43210", email: "david.paul@stjohnschurch.org", status: "Active", joinedOn: "2023-05-15" },
  { id: "MEM-002", name: "Mr. John Samuel", group: "Warriors in Christ", phone: "+91 91234 56789", email: "john.samuel@stjohnschurch.org", status: "Active", joinedOn: "2023-05-20" },
  { id: "MEM-003", name: "Mr. Peter Jacob", group: "Truth Seekers", phone: "+91 99887 66554", email: "peter.jacob@stjohnschurch.org", status: "Active", joinedOn: "2023-06-01" },
  { id: "MEM-004", name: "Mr. Michael Thomas", group: "Brothers United", phone: "+91 90987 65432", email: "michael.thomas@stjohnschurch.org", status: "Active", joinedOn: "2023-06-05" },
  { id: "MEM-005", name: "Mr. Daniel Raj", group: "Men of Faith", phone: "+91 93456 78901", email: "daniel.raj@stjohnschurch.org", status: "Active", joinedOn: "2023-06-10" },
  { id: "MEM-006", name: "Mr. Sam Clifford", group: "Overcomers", phone: "+91 97864 32109", email: "sam.clifford@stjohnschurch.org", status: "Inactive", joinedOn: "2023-07-02" },
  { id: "MEM-007", name: "Mr. Joseph Martin", group: "Men of Faith", phone: "+91 88774 12345", email: "joseph.martin@stjohnschurch.org", status: "Active", joinedOn: "2023-07-08" },
  { id: "MEM-008", name: "Mr. George William", group: "Truth Seekers", phone: "+91 91586 34210", email: "george.william@stjohnschurch.org", status: "Active", joinedOn: "2023-07-15" },
  { id: "MEM-009", name: "Mr. Stephen Raj", group: "Warriors in Christ", phone: "+91 92456 78902", email: "stephen.raj@stjohnschurch.org", status: "Inactive", joinedOn: "2023-08-03" },
  { id: "MEM-010", name: "Mr. Allen Moses", group: "Brothers United", phone: "+91 96547 81230", email: "allen.moses@stjohnschurch.org", status: "Active", joinedOn: "2023-08-12" },
];

/** Pad the seed list out to 156 entries to match "Showing 1 to 10 of 156 members". */
export const MEMBERS_MOCK = Array.from({ length: 156 }, (_, i) => {
  const seed = MEMBERS_SEED[i % MEMBERS_SEED.length];
  if (i < MEMBERS_SEED.length) return seed;
  return { ...seed, id: `MEM-${String(i + 1).padStart(3, "0")}` };
});

export const MEMBER_STATUS_BREAKDOWN_MOCK = {
  total: 156,
  breakdown: [
    { label: "Active", count: 132, pct: 84.6, color: "#16A34A" },
    { label: "Inactive", count: 18, pct: 11.5, color: "#F97316" },
    { label: "Not Assigned", count: 6, pct: 3.9, color: "#94A3B8" },
  ],
};

export const MEMBERS_AGE_GROUP_MOCK = [
  { label: "18 - 25 Years", count: 12, pct: 7.7 },
  { label: "26 - 35 Years", count: 28, pct: 17.9 },
  { label: "36 - 45 Years", count: 46, pct: 29.5 },
  { label: "46 - 60 Years", count: 52, pct: 33.3 },
  { label: "60+ Years", count: 18, pct: 11.5 },
];

export const RECENT_JOINED_MEMBERS_MOCK = [
  { name: "Mr. Kevin Joshua", group: "Men of Faith", date: "2026-05-24", initials: "KJ" },
  { name: "Mr. James Peter", group: "Truth Seekers", date: "2026-05-20", initials: "JP" },
  { name: "Mr. Roy Samuel", group: "Warriors in Christ", date: "2026-05-18", initials: "RS" },
  { name: "Mr. Christopher Paul", group: "Brothers United", date: "2026-05-15", initials: "CP" },
];

export const NEW_MEMBER_DEFAULTS = {
  fullName: "",
  dob: "",
  gender: "",
  maritalStatus: "",
  spouseName: "",
  email: "",
  phone: "",
  phoneAlternate: "",
  address: "",
  fellowshipGroup: "",
  groupRole: "",
  joinedOn: "",
  occupation: "",
  notes: "",
  photoName: "",
  status: "Active",
};

// ---------------------------------------------------------------------------
// Member detail (profile)
// ---------------------------------------------------------------------------

export const MEMBER_DETAIL_MOCK = {
  id: "MEM-001",
  name: "Mr. David Paul",
  status: "Active",
  dob: "1988-05-10",
  age: 36,
  gender: "Male",
  maritalStatus: "Married",
  spouseName: "Mrs. Grace Paul",
  phone: "+91 98765 43210",
  phoneAlternate: "+91 91234 56789",
  email: "david.paul@stjohnschurch.org",
  address: "12, Grace Avenue, Nungambakkam, Chennai - 600034, Tamil Nadu, India",
  joinedOn: "2023-05-15",
  occupation: "Software Engineer",
  employer: "Tech Solutions Pvt. Ltd.",
  bloodGroup: "O+",
  onChurchRoll: "Yes",
  baptismDate: "1995-06-12",
  notes: "Active member and regular volunteer in men's fellowship activities.",
  group: {
    name: "Men of Faith",
    leader: "Mr. David Paul",
    coLeader: "Mr. John Samuel",
    role: "Leader",
    joinedOn: "2023-05-15",
    meetingDay: "Sunday",
    meetingTime: "6:00 PM - 8:00 PM",
    location: "Fellowship Hall",
  },
  stats: {
    meetingsAttended: 12,
    activitiesJoined: 8,
    bibleStudies: 5,
    documents: 2,
  },
  recentAttendance: [
    { title: "Monthly Fellowship Meeting", date: "2024-05-19", status: "Present" },
    { title: "Prayer & Praise Meeting", date: "2024-05-12", status: "Present" },
    { title: "Bible Study - Book of James", date: "2024-05-05", status: "Present" },
    { title: "Men's Breakfast Fellowship", date: "2024-04-28", status: "Present" },
    { title: "Discussion on Faith", date: "2024-04-21", status: "Absent" },
  ],
};

export function buildMemberDetailMock(id) {
  if (!id || id === MEMBER_DETAIL_MOCK.id) return MEMBER_DETAIL_MOCK;
  const fallback = MEMBERS_MOCK.find((m) => m.id === id);
  return {
    ...MEMBER_DETAIL_MOCK,
    id,
    name: fallback?.name ?? MEMBER_DETAIL_MOCK.name,
    status: fallback?.status ?? MEMBER_DETAIL_MOCK.status,
    email: fallback?.email ?? MEMBER_DETAIL_MOCK.email,
    phone: fallback?.phone ?? MEMBER_DETAIL_MOCK.phone,
    joinedOn: fallback?.joinedOn ?? MEMBER_DETAIL_MOCK.joinedOn,
    group: { ...MEMBER_DETAIL_MOCK.group, name: fallback?.group ?? MEMBER_DETAIL_MOCK.group.name },
  };
}

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

export const FELLOWSHIP_DASHBOARD_STATS_MOCK = {
  totalMembers: { value: 156, delta: "12.5%", trendUp: true },
  activeGroups: { value: 5, delta: "0.0%", trendUp: true },
  meetingsThisMonth: { value: 6, delta: "9.1%", trendUp: true },
  upcomingActivities: { value: 3, delta: null, trendUp: true },
};

export const UPCOMING_MEETINGS_MOCK = [
  { title: "Monthly Fellowship Meeting", group: "Men of Faith", date: "2026-06-14", time: "6:00 PM", location: "Fellowship Hall" },
  { title: "Bible Study - Book of Romans", group: "Truth Seekers", date: "2026-06-16", time: "7:00 PM", location: "Room 2" },
  { title: "Prayer & Praise Meeting", group: "Warriors in Christ", date: "2026-06-18", time: "6:30 PM", location: "Chapel" },
];

export const RECENT_ACTIVITY_MOCK = [
  { text: "Mr. Kevin Joshua joined Men of Faith", date: "2026-05-24", initials: "KJ" },
  { text: "Bible Study - Book of James completed", date: "2026-05-05", initials: "BS" },
  { text: "Men's Breakfast Fellowship held", date: "2026-04-28", initials: "MB" },
];

// ---------------------------------------------------------------------------
// Fellowship Groups
// ---------------------------------------------------------------------------

export const FELLOWSHIP_GROUPS_MOCK = [
  { id: "GRP-001", name: "Men of Faith", leader: "Mr. David Paul", coLeader: "Mr. John Samuel", members: 38, meetingDay: "Sunday", meetingTime: "6:00 PM - 8:00 PM", location: "Fellowship Hall", status: "Active" },
  { id: "GRP-002", name: "Warriors in Christ", leader: "Mr. Stephen Raj", coLeader: "Mr. Roy Samuel", members: 34, meetingDay: "Wednesday", meetingTime: "7:00 PM - 8:30 PM", location: "Chapel", status: "Active" },
  { id: "GRP-003", name: "Truth Seekers", leader: "Mr. George William", coLeader: "Mr. James Peter", members: 29, meetingDay: "Friday", meetingTime: "7:00 PM - 9:00 PM", location: "Room 2", status: "Active" },
  { id: "GRP-004", name: "Brothers United", leader: "Mr. Allen Moses", coLeader: "Mr. Christopher Paul", members: 31, meetingDay: "Saturday", meetingTime: "5:00 PM - 6:30 PM", location: "Parish Hall", status: "Active" },
  { id: "GRP-005", name: "Overcomers", leader: "Mr. Sam Clifford", coLeader: "—", members: 24, meetingDay: "Sunday", meetingTime: "4:00 PM - 5:30 PM", location: "Room 1", status: "Active" },
];

// ---------------------------------------------------------------------------
// Meetings
// ---------------------------------------------------------------------------

export const MEETING_STATUS_VARIANT = { Scheduled: "info", Completed: "success", Cancelled: "danger" };

export const MEETINGS_MOCK = [
  { id: "MTG-101", title: "Monthly Fellowship Meeting", group: "Men of Faith", date: "2026-06-14", time: "6:00 PM", location: "Fellowship Hall", attendance: "—", status: "Scheduled" },
  { id: "MTG-102", title: "Prayer & Praise Meeting", group: "Warriors in Christ", date: "2026-05-12", time: "6:30 PM", location: "Chapel", attendance: "27/34", status: "Completed" },
  { id: "MTG-103", title: "Bible Study - Book of James", group: "Truth Seekers", date: "2026-05-05", time: "7:00 PM", location: "Room 2", attendance: "22/29", status: "Completed" },
  { id: "MTG-104", title: "Men's Breakfast Fellowship", group: "Men of Faith", date: "2026-04-28", time: "8:00 AM", location: "Parish Hall", attendance: "31/38", status: "Completed" },
  { id: "MTG-105", title: "Discussion on Faith", group: "Brothers United", date: "2026-04-21", time: "5:00 PM", location: "Parish Hall", attendance: "19/31", status: "Completed" },
  { id: "MTG-106", title: "Leadership Planning Meeting", group: "Overcomers", date: "2026-06-21", time: "4:00 PM", location: "Room 1", attendance: "—", status: "Scheduled" },
];

// ---------------------------------------------------------------------------
// Activities
// ---------------------------------------------------------------------------

export const ACTIVITY_STATUS_VARIANT = { Upcoming: "info", Ongoing: "warning", Completed: "success" };

export const ACTIVITIES_MOCK = [
  { id: "ACT-201", title: "Men's Retreat 2026", group: "All Groups", date: "2026-07-10", type: "Retreat", participants: 84, status: "Upcoming" },
  { id: "ACT-202", title: "Community Outreach Drive", group: "Brothers United", date: "2026-06-20", type: "Outreach", participants: 22, status: "Upcoming" },
  { id: "ACT-203", title: "Sports Fellowship Day", group: "Warriors in Christ", date: "2026-05-30", type: "Fellowship", participants: 40, status: "Ongoing" },
  { id: "ACT-204", title: "Men's Breakfast Fellowship", group: "Men of Faith", date: "2026-04-28", type: "Fellowship", participants: 31, status: "Completed" },
  { id: "ACT-205", title: "Volunteer Day at Shelter", group: "Truth Seekers", date: "2026-04-12", type: "Outreach", participants: 18, status: "Completed" },
];

// ---------------------------------------------------------------------------
// Bible Studies
// ---------------------------------------------------------------------------

export const BIBLE_STUDY_STATUS_VARIANT = { Ongoing: "warning", Completed: "success", Upcoming: "info" };

export const BIBLE_STUDIES_MOCK = [
  { id: "BST-301", topic: "Book of Romans", group: "Truth Seekers", leader: "Mr. George William", schedule: "Weekly - Tuesdays", nextSession: "2026-06-16", status: "Ongoing" },
  { id: "BST-302", topic: "Book of James", group: "Men of Faith", leader: "Mr. David Paul", schedule: "Weekly - Sundays", nextSession: "2026-06-14", status: "Ongoing" },
  { id: "BST-303", topic: "Sermon on the Mount", group: "Warriors in Christ", leader: "Mr. Stephen Raj", schedule: "Bi-weekly - Wednesdays", nextSession: "2026-06-18", status: "Ongoing" },
  { id: "BST-304", topic: "Proverbs for Men", group: "Brothers United", leader: "Mr. Allen Moses", schedule: "Completed", nextSession: null, status: "Completed" },
  { id: "BST-305", topic: "Book of Nehemiah", group: "Overcomers", leader: "Mr. Sam Clifford", schedule: "Starts July", nextSession: "2026-07-05", status: "Upcoming" },
];

// ---------------------------------------------------------------------------
// Meeting Attendance
// ---------------------------------------------------------------------------

export const ATTENDANCE_STATUS_VARIANT = { Present: "success", Absent: "danger", Excused: "warning" };

export const MEETING_ATTENDANCE_MOCK = [
  { id: "ATD-401", member: "Mr. David Paul", memberId: "MEM-001", group: "Men of Faith", meeting: "Monthly Fellowship Meeting", date: "2024-05-19", status: "Present" },
  { id: "ATD-402", member: "Mr. John Samuel", memberId: "MEM-002", group: "Warriors in Christ", meeting: "Prayer & Praise Meeting", date: "2024-05-12", status: "Present" },
  { id: "ATD-403", member: "Mr. Peter Jacob", memberId: "MEM-003", group: "Truth Seekers", meeting: "Bible Study - Book of James", date: "2024-05-05", status: "Present" },
  { id: "ATD-404", member: "Mr. Michael Thomas", memberId: "MEM-004", group: "Brothers United", meeting: "Men's Breakfast Fellowship", date: "2024-04-28", status: "Excused" },
  { id: "ATD-405", member: "Mr. Daniel Raj", memberId: "MEM-005", group: "Men of Faith", meeting: "Discussion on Faith", date: "2024-04-21", status: "Absent" },
];

// ---------------------------------------------------------------------------
// Reports
// ---------------------------------------------------------------------------

export const FELLOWSHIP_REPORTS_MOCK = [
  { id: "RPT-501", title: "Member Directory Report", description: "Full list of members with contact and group details.", updatedOn: "2026-06-01" },
  { id: "RPT-502", title: "Attendance Summary Report", description: "Meeting attendance trends across all fellowship groups.", updatedOn: "2026-05-28" },
  { id: "RPT-503", title: "Group Growth Report", description: "New members and group size trends over time.", updatedOn: "2026-05-20" },
  { id: "RPT-504", title: "Activity Participation Report", description: "Participation counts across activities and outreach events.", updatedOn: "2026-05-15" },
];
