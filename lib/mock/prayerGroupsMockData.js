// Mock data for Prayer Ministry > Prayer Groups — maps to prayer_ministry/groups/views.py once wired up.

export const GROUP_TYPE_OPTIONS = ["General", "Women", "Men", "Youth", "Children", "Healing", "Missions"];
export const GROUP_STATUS_OPTIONS = ["Active", "Inactive"];
export const GROUP_MEETING_DAY_OPTIONS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const GROUP_MEETING_MODE_OPTIONS = ["In-Person", "Online (Virtual)"];
export const GROUP_LOCATION_OPTIONS = ["St. John's Church", "Prayer Room - 1st Floor", "Fellowship Hall", "Online (Zoom/Google Meet)"];
export const GROUP_LANGUAGE_OPTIONS = ["English", "Hindi", "Tamil", "Telugu"];
export const GROUP_VISIBILITY_OPTIONS = ["All Church Members", "Leaders & Ministry Heads Only", "Only Group Members"];
export const GROUP_JOIN_POLICY_OPTIONS = ["Yes, allow anyone to request", "Leader approval required", "Invite only"];

export const GROUP_STATUS_VARIANT = { Active: "success", Inactive: "default" };
export const GROUP_TYPE_BADGE = {
  General: { bg: "bg-interactive-50", color: "text-interactive-600" },
  Women: { bg: "bg-[#FCE7F3]", color: "text-[#DB2777]" },
  Men: { bg: "bg-success-50", color: "text-success-600" },
  Youth: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  Children: { bg: "bg-interactive-50", color: "text-interactive-600" },
  Healing: { bg: "bg-warning-50", color: "text-warning-600" },
  Missions: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
};

const PRAYER_GROUPS_SEED = [
  { id: "PG-2026-001", name: "Morning Glory Prayer Group", tagline: "Start the day with prayer and faith", type: "General", leader: "John Samuel", members: 32, meetingDay: "Mon, Wed, Fri", meetingTime: "6:00 AM - 7:00 AM", status: "Active" },
  { id: "PG-2026-002", name: "Women of Prayer", tagline: "Praying for families and community", type: "Women", leader: "Melissa Grace", members: 28, meetingDay: "Tuesday", meetingTime: "10:30 AM - 12:00 PM", status: "Active" },
  { id: "PG-2026-003", name: "Youth Prayer Warriors", tagline: "Young hearts seeking God", type: "Youth", leader: "Daniel Paul", members: 24, meetingDay: "Saturday", meetingTime: "5:00 PM - 6:30 PM", status: "Active" },
  { id: "PG-2026-004", name: "Intercessory Prayer Group", tagline: "Interceding for church and nation", type: "General", leader: "Sophia Daniel", members: 18, meetingDay: "Thursday", meetingTime: "7:00 PM - 8:00 PM", status: "Active" },
  { id: "PG-2026-005", name: "Men of Faith", tagline: "Strengthening men through prayer", type: "Men", leader: "Isaac Thomas", members: 26, meetingDay: "Friday", meetingTime: "7:30 PM - 9:00 PM", status: "Active" },
  { id: "PG-2026-006", name: "Healing Prayer Group", tagline: "Praying for healing and restoration", type: "Healing", leader: "Anna Paul", members: 20, meetingDay: "Monday", meetingTime: "7:00 PM - 8:30 PM", status: "Active" },
  { id: "PG-2026-007", name: "Children's Prayer Group", tagline: "Teaching children the power of prayer", type: "Children", leader: "Maria Joseph", members: 16, meetingDay: "Sunday", meetingTime: "4:00 PM - 5:00 PM", status: "Active" },
  { id: "PG-2026-008", name: "Mission Prayer Group", tagline: "Praying for missions and evangelism", type: "Missions", leader: "Thomas Philip", members: 12, meetingDay: "Wednesday", meetingTime: "8:00 PM - 9:00 PM", status: "Inactive" },
];

/** Pad the seed list out to 18 entries to match "Showing 1 to 8 of 18 groups". */
export const PRAYER_GROUPS_LIST_MOCK = Array.from({ length: 18 }, (_, i) => {
  const seed = PRAYER_GROUPS_SEED[i % PRAYER_GROUPS_SEED.length];
  if (i < PRAYER_GROUPS_SEED.length) return seed;
  return { ...seed, id: `PG-2026-${String(i + 1).padStart(3, "0")}` };
});

export const GROUP_DISTRIBUTION_MOCK = {
  total: 18,
  breakdown: [
    { label: "General", count: 6, pct: 33, color: "#2563EB" },
    { label: "Women", count: 3, pct: 17, color: "#DB2777" },
    { label: "Youth", count: 2, pct: 11, color: "#7C3AED" },
    { label: "Men", count: 2, pct: 11, color: "#16A34A" },
    { label: "Healing", count: 2, pct: 11, color: "#F97316" },
    { label: "Children", count: 2, pct: 11, color: "#0EA5E9" },
    { label: "Missions", count: 1, pct: 6, color: "#94A3B8" },
  ],
};

export const GROUP_UPCOMING_MEETINGS_MOCK = [
  { title: "Morning Glory Prayer Group", meta: "Tomorrow", time: "6:00 AM - 7:00 AM" },
  { title: "Women of Prayer", meta: "Tomorrow", time: "10:30 AM - 12:00 PM" },
  { title: "Youth Prayer Warriors", meta: "May 24", time: "5:00 PM - 6:30 PM" },
  { title: "Intercessory Prayer Group", meta: "May 22", time: "7:00 PM - 8:00 PM" },
];

export const NEW_PRAYER_GROUP_DEFAULTS = {
  name: "",
  type: "",
  meetingMode: "In-Person",
  tagline: "",
  description: "",
  status: "Active",
  language: "English",
  meetingDays: ["Monday", "Tuesday", "Wednesday"],
  startTime: "06:00",
  endTime: "07:00",
  location: "",
  roomPlace: "",
  leader: "",
  contactNumber: "",
  email: "",
  focusTopics: "",
  notes: "",
  visibility: "All Church Members",
  joinPolicy: "Yes, allow anyone to request",
  invitedMembers: [],
};

// ---------------------------------------------------------------------------
// Prayer group detail (Morning Glory Prayer Group) — shown in the details drawer
// ---------------------------------------------------------------------------

export const PRAYER_GROUP_DETAIL_MOCK = {
  id: "PG-2026-001",
  name: "Morning Glory Prayer Group",
  status: "Active",
  type: "General",
  tagline: "Start the day with prayer and faith",
  leader: "John Samuel",
  leaderPhone: "+91 98765 43210",
  leaderEmail: "john.samuel@example.com",
  meetingDay: "Mon, Wed, Fri",
  meetingTime: "6:00 AM - 7:00 AM",
  location: "St. John's Church",
  locationDetail: "Prayer Room - 1st Floor",
  members: 32,
  meetingMode: "In-Person",
  language: "English",
  description: "Morning Glory Prayer Group is a prayer fellowship that meets early in the morning to seek God's presence, thank Him for His faithfulness, and intercede for our church, families, and the community.",
  focus: ["Personal spiritual growth", "Intercession for families", "Church growth and revival", "Community outreach and missions"],
  recentTopics: [
    { text: "Thanksgiving for Church Anniversary", date: "2026-05-24" },
    { text: "Pray for the Youth Camp", date: "2026-05-22" },
    { text: "Healing for the sick members", date: "2026-05-20" },
    { text: "Guidance for church missions", date: "2026-05-18" },
  ],
  memberAvatarsCount: 32,
  memberAvatarsExtra: 27,
  upcomingMeetings: [
    { day: "28", month: "MAY", weekday: "Wed", time: "6:00 AM - 7:00 AM" },
    { day: "30", month: "MAY", weekday: "Fri", time: "6:00 AM - 7:00 AM" },
  ],
};

export function buildPrayerGroupDetailMock(id) {
  if (!id || id === PRAYER_GROUP_DETAIL_MOCK.id) return PRAYER_GROUP_DETAIL_MOCK;
  const fallback = PRAYER_GROUPS_LIST_MOCK.find((g) => g.id === id);
  if (!fallback) return { ...PRAYER_GROUP_DETAIL_MOCK, id };
  return {
    ...PRAYER_GROUP_DETAIL_MOCK,
    id,
    name: fallback.name,
    tagline: fallback.tagline,
    type: fallback.type,
    leader: fallback.leader,
    members: fallback.members,
    meetingDay: fallback.meetingDay,
    meetingTime: fallback.meetingTime,
    status: fallback.status,
  };
}
