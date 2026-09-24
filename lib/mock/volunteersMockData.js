// Mock data for Volunteer Management — maps to volunteer_management/* views.py once wired up.

export const VOLUNTEER_MINISTRY_OPTIONS = ["Children Ministry", "Worship Team", "Altar Ministry", "Usher Ministry", "Prayer Ministry", "Maintenance Team", "Youth Ministry", "Hospitality Team"];
export const VOLUNTEER_ROLE_OPTIONS = ["Teacher", "Musician", "Coordinator", "Usher", "Intercessor", "Volunteer", "Assistant"];
export const VOLUNTEER_STATUS_OPTIONS = ["Active", "Inactive", "Pending", "On Break"];
export const VOLUNTEER_GENDER_OPTIONS = ["Male", "Female", "Other"];
export const VOLUNTEER_MARITAL_STATUS_OPTIONS = ["Single", "Married", "Widowed", "Divorced"];
export const VOLUNTEER_BLOOD_GROUP_OPTIONS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
export const VOLUNTEER_HEAR_ABOUT_OPTIONS = ["Friend/Family", "Church Announcement", "Social Media", "Website", "Walk-in", "Other"];
export const VOLUNTEER_MEMBER_STATUS_OPTIONS = ["Member", "Regular Attendee", "Visitor", "Non-Member"];
export const VOLUNTEER_RELATIONSHIP_OPTIONS = ["Spouse", "Parent", "Sibling", "Child", "Friend", "Other"];
export const VOLUNTEER_SKILL_OPTIONS = ["Teaching", "Music", "Counseling", "Administration", "Event Management", "Technical", "Hospitality", "Other"];
export const VOLUNTEER_INTEREST_OPTIONS = ["Children Ministry", "Youth Ministry", "Worship & Music", "Community Service", "Outreach", "Prayer Ministry"];

export const VOLUNTEER_STATUS_VARIANT = { Active: "success", Inactive: "default", Pending: "warning", "On Break": "warning" };
export const VOLUNTEER_MINISTRY_BADGE = {
  "Children Ministry": { bg: "bg-interactive-50", color: "text-interactive-600" },
  "Worship Team": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Altar Ministry": { bg: "bg-warning-50", color: "text-warning-600" },
  "Usher Ministry": { bg: "bg-success-50", color: "text-success-600" },
  "Prayer Ministry": { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  "Maintenance Team": { bg: "bg-sky-50", color: "text-sky-700" },
  "Youth Ministry": { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  "Hospitality Team": { bg: "bg-interactive-50", color: "text-interactive-600" },
};

const VOLUNTEERS_SEED = [
  { id: "V-1001", name: "Sophia Daniel", ministry: "Children Ministry", role: "Teacher", phone: "+91 98765 43210", status: "Active", lastService: "2026-05-18" },
  { id: "V-1002", name: "John Samuel", ministry: "Worship Team", role: "Musician", phone: "+91 91234 56789", status: "Active", lastService: "2026-05-18" },
  { id: "V-1003", name: "Mary Grace", ministry: "Altar Ministry", role: "Coordinator", phone: "+91 99876 54321", status: "Active", lastService: "2026-05-11" },
  { id: "V-1004", name: "Daniel Paul", ministry: "Usher Ministry", role: "Usher", phone: "+91 90123 45678", status: "Active", lastService: "2026-05-18" },
  { id: "V-1005", name: "Lydia Benjamin", ministry: "Prayer Ministry", role: "Intercessor", phone: "+91 87654 32109", status: "On Break", lastService: "2026-04-27" },
  { id: "V-1006", name: "Thomas Philip", ministry: "Maintenance Team", role: "Volunteer", phone: "+91 93456 78901", status: "Active", lastService: "2026-05-04" },
  { id: "V-1007", name: "Anita Joseph", ministry: "Youth Ministry", role: "Coordinator", phone: "+91 98989 67890", status: "Pending", lastService: null },
  { id: "V-1008", name: "George Mathew", ministry: "Hospitality Team", role: "Volunteer", phone: "+91 90234 56780", status: "Inactive", lastService: "2026-03-15" },
];

/** Pad the seed list out to 128 entries to match "Showing 1 to 8 of 128 volunteers". */
export const VOLUNTEERS_LIST_MOCK = Array.from({ length: 128 }, (_, i) => {
  const seed = VOLUNTEERS_SEED[i % VOLUNTEERS_SEED.length];
  if (i < VOLUNTEERS_SEED.length) return seed;
  return { ...seed, id: `V-${String(1009 + i).padStart(4, "0")}` };
});

export const VOLUNTEER_OVERVIEW_STATS_MOCK = {
  newVolunteers: { value: 8, delta: "12%", trendUp: true },
  serviceHours: { value: 312, delta: "8%", trendUp: true },
  assignments: { value: 54, delta: "5%", trendUp: true },
  activeMinistries: { value: 18, delta: "No change", trendUp: null },
};

export const TOP_MINISTRIES_MOCK = {
  total: 128,
  breakdown: [
    { label: "Worship Team", count: 28, pct: 22, color: "#16A34A" },
    { label: "Children Ministry", count: 24, pct: 19, color: "#2563EB" },
    { label: "Altar Ministry", count: 18, pct: 14, color: "#7C3AED" },
    { label: "Usher Ministry", count: 16, pct: 13, color: "#F97316" },
    { label: "Others", count: 42, pct: 32, color: "#94A3B8" },
  ],
};

export const UPCOMING_ASSIGNMENTS_MOCK = [
  { title: "Sunday Service - Usher", date: "2026-05-25", time: "9:00 AM", volunteers: 12 },
  { title: "Youth Meeting Support", date: "2026-05-24", time: "4:00 PM", volunteers: 6 },
  { title: "Altar Preparation", date: "2026-05-25", time: "8:00 AM", volunteers: 4 },
];

/** Top-level stat cards for the standalone "Volunteers" list page. */
export const VOLUNTEER_LIST_STATS_MOCK = {
  totalVolunteers: 128,
  activeVolunteers: 96,
  activePercent: 75,
  ministriesTeams: 18,
  totalServiceHours: 1248,
};

export const NEW_VOLUNTEER_DEFAULTS = {
  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  gender: "",
  maritalStatus: "",
  bloodGroup: "",
  primaryPhone: "",
  alternatePhone: "",
  email: "",
  address: "",
  primaryMinistry: "",
  role: "",
  team: "",
  servingSince: "",
  hearAboutChurch: "",
  memberStatus: "",
  skills: [],
  interests: [],
  languagesKnown: "",
  specialTalents: "",
  emergencyContactName: "",
  relationship: "",
  emergencyPhone: "",
  photoName: "",
};

// ---------------------------------------------------------------------------
// Volunteer detail (Sophia Daniel) — full detail page
// ---------------------------------------------------------------------------

export const VOLUNTEER_DETAIL_MOCK = {
  id: "V-1001",
  name: "Sophia Daniel",
  status: "Active",
  ministry: "Children Ministry",
  phone: "+91 98765 43210",
  email: "sophia.daniel@example.com",
  location: "Chennai, Tamil Nadu, India",
  joinedOn: "2024-01-15",
  lastService: "2026-05-18",
  dob: "1990-06-12",
  gender: "Female",
  maritalStatus: "Married",
  address: "45, Park Street, Nungambakkam, Chennai - 600034, Tamil Nadu, India",
  alternatePhone: "+91 91234 56789",
  emergencyContact: "Daniel John (Husband)",
  emergencyPhone: "+91 91234 56789",
  bloodGroup: "B+",
  occupation: "Teacher",
  employer: "St. John's High School",
  memberSince: "2020-01-10",
  memberStatus: "Active",
  hearAboutUs: "Friend",
  parishMember: true,
  skills: ["Teaching", "Counseling", "Event Management"],
  interests: ["Children Ministry", "Community Service", "Outreach"],
  languagesKnown: "English, Tamil",
  remarks: "Dedicated and passionate about children's spiritual growth.",
  specialTalents: "Singing, Reading, Craft",
  availability: "Weekends, Wednesday Evenings",
  preferredContactMethod: "Email",
  notes: [
    { date: "2024-01-15", by: "Parish Office", text: "Volunteer registered and added to Children Ministry as Teacher." },
  ],
  recentAssignments: [
    { date: "2026-05-18", service: "Sunday School Class", ministry: "Children Ministry", role: "Teacher", status: "Completed" },
    { date: "2026-05-11", service: "Children's Worship", ministry: "Worship Team", role: "Assistant", status: "Completed" },
    { date: "2026-05-04", service: "VBS Planning Meeting", ministry: "Children Ministry", role: "Coordinator", status: "Completed" },
    { date: "2026-04-27", service: "Sunday School Class", ministry: "Children Ministry", role: "Teacher", status: "Completed" },
    { date: "2026-04-20", service: "Children's Special Program", ministry: "Children Ministry", role: "Coordinator", status: "Completed" },
  ],
  totalServiceHours: 128,
  rating: 4.8,
  role: "Teacher",
  team: "Sunday School Team",
  servingSince: "2024-01-15",
  serviceSummary: { totalAssignments: 24, completed: 22, upcoming: 2, cancelled: 0 },
};

export const RECENT_ASSIGNMENT_STATUS_VARIANT = { Completed: "success", Upcoming: "info", Cancelled: "danger" };

export function buildVolunteerDetailMock(id) {
  if (!id || id === VOLUNTEER_DETAIL_MOCK.id) return VOLUNTEER_DETAIL_MOCK;
  const fallback = VOLUNTEERS_LIST_MOCK.find((v) => v.id === id);
  if (!fallback) return { ...VOLUNTEER_DETAIL_MOCK, id };
  return {
    ...VOLUNTEER_DETAIL_MOCK,
    id,
    name: fallback.name,
    ministry: fallback.ministry,
    phone: fallback.phone,
    status: fallback.status,
    lastService: fallback.lastService,
    role: fallback.role,
  };
}
