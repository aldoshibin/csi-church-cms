export const FG_STATUS_OPTIONS = ["Active", "Inactive"];
export const FG_MINISTRY_FOCUS_OPTIONS = ["Bible Study", "Prayer & Intercession", "Outreach & Service", "Fellowship & Care", "Worship & Praise"];
export const FG_MEETING_DAY_OPTIONS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const FG_MEETING_TIME_OPTIONS = ["9:00 AM", "10:00 AM", "10:30 AM", "2:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "6:00 PM"];
export const FG_MEETING_LOCATION_OPTIONS = ["Fellowship Hall", "Prayer Hall", "Room 1", "Room 2", "Room 3", "Main Hall"];
export const FG_LEADER_OPTIONS = ["Mrs. Sarah Wilson", "Mrs. Grace Thomas", "Mrs. Linda Scott", "Mrs. Mary Daniel", "Mrs. Anitha Kumar", "Mrs. Rebecca John", "Mrs. Jency Paul", "Mrs. Shiney David"];
export const FG_AGE_GROUP_OPTIONS = ["18 - 30 Years", "31 - 45 Years", "46 - 60 Years", "60+ Years", "All Ages"];

export const FG_STATUS_VARIANT = { Active: "success", Inactive: "default" };
export const FG_MINISTRY_FOCUS_VARIANT = {
  "Bible Study": "success",
  "Prayer & Intercession": "info",
  "Outreach & Service": "warning",
  "Fellowship & Care": "accent",
};

const FG_GROUPS_SEED = [
  {
    id: "WFG-001", name: "Ruth Fellowship", establishedYear: 2018, leader: "Mrs. Sarah Wilson", coLeader: "Mrs. Anitha Kumar",
    members: 28, meetingDay: "Every Sunday", meetingTime: "4:00 PM - 5:30 PM", location: "Fellowship Hall",
    status: "Active", icon: "sprout", color: "#16A34A", ministryFocus: "Prayer & Intercession",
    description: "Ruth Fellowship is a women's fellowship group focused on prayer, spiritual growth and supporting one another in faith.",
  },
  {
    id: "WFG-002", name: "Esther Fellowship", establishedYear: 2019, leader: "Mrs. Grace Thomas", coLeader: "",
    members: 32, meetingDay: "Every Saturday", meetingTime: "10:00 AM - 11:30 AM", location: "Room 2",
    status: "Active", icon: "crown", color: "#7C3AED", ministryFocus: "Bible Study",
    description: "Esther Fellowship gathers women for deep Bible study and courageous faith-building discussions.",
  },
  {
    id: "WFG-003", name: "Martha Fellowship", establishedYear: 2020, leader: "Mrs. Linda Scott", coLeader: "",
    members: 26, meetingDay: "Every Friday", meetingTime: "6:00 PM - 7:30 PM", location: "Fellowship Hall",
    status: "Active", icon: "heart", color: "#EA580C", ministryFocus: "Fellowship & Care",
    description: "Martha Fellowship focuses on hospitality, service and caring for the practical needs of the community.",
  },
  {
    id: "WFG-004", name: "Dorcas Fellowship", establishedYear: 2021, leader: "Mrs. Mary Daniel", coLeader: "",
    members: 24, meetingDay: "Every Tuesday", meetingTime: "10:30 AM - 12:00 PM", location: "Room 1",
    status: "Active", icon: "circle", color: "#DB2777", ministryFocus: "Outreach & Service",
    description: "Dorcas Fellowship serves the community through charitable work, sewing and outreach ministries.",
  },
  {
    id: "WFG-005", name: "Mary Fellowship", establishedYear: 2017, leader: "Mrs. Anitha Kumar", coLeader: "",
    members: 30, meetingDay: "Every Thursday", meetingTime: "5:00 PM - 6:30 PM", location: "Prayer Hall",
    status: "Active", icon: "cross", color: "#2563EB", ministryFocus: "Prayer & Intercession",
    description: "Mary Fellowship is devoted to worship, prayer and reflecting on the life of Christ together.",
  },
  {
    id: "WFG-006", name: "Tabitha Fellowship", establishedYear: 2022, leader: "Mrs. Rebecca John", coLeader: "",
    members: 22, meetingDay: "Every Wednesday", meetingTime: "10:00 AM - 11:30 AM", location: "Room 3",
    status: "Inactive", icon: "sprout", color: "#16A34A", ministryFocus: "Fellowship & Care",
    description: "Tabitha Fellowship focuses on acts of kindness and caring for widows and the elderly.",
  },
  {
    id: "WFG-007", name: "Hannah Fellowship", establishedYear: 2023, leader: "Mrs. Jency Paul", coLeader: "",
    members: 20, meetingDay: "Every Sunday", meetingTime: "2:30 PM - 4:00 PM", location: "Room 2",
    status: "Active", icon: "wheat", color: "#F59E0B", ministryFocus: "Prayer & Intercession",
    description: "Hannah Fellowship is a prayer-focused group encouraging perseverance and faith through trials.",
  },
  {
    id: "WFG-008", name: "Deborah Fellowship", establishedYear: 2024, leader: "Mrs. Shiney David", coLeader: "",
    members: 14, meetingDay: "Every Friday", meetingTime: "4:30 PM - 5:30 PM", location: "Room 3",
    status: "Active", icon: "star", color: "#7C3AED", ministryFocus: "Outreach & Service",
    description: "Deborah Fellowship raises up women in leadership and community outreach initiatives.",
  },
];

/** Pad the seed list out to 12 entries to match "Showing 1 to 8 of 12 groups". */
export const FG_GROUPS_MOCK = Array.from({ length: 12 }, (_, i) => {
  const seed = FG_GROUPS_SEED[i % FG_GROUPS_SEED.length];
  if (i < FG_GROUPS_SEED.length) return seed;
  return { ...seed, id: `WFG-${String(i + 1).padStart(3, "0")}` };
});

export const FG_UPCOMING_MEETINGS_MOCK = [
  { title: "Ruth Fellowship Meeting", date: "2026-05-25", day: "Sunday", time: "4:00 PM - 5:30 PM", location: "Fellowship Hall", badge: "Today" },
  { title: "Esther Fellowship Meeting", date: "2026-05-31", day: "Sunday", time: "10:00 AM - 11:30 AM", location: "Room 2", badge: "This Week" },
  { title: "Martha Fellowship Meeting", date: "2026-06-06", day: "Saturday", time: "6:00 PM - 7:30 PM", location: "Fellowship Hall", badge: "This Week" },
  { title: "Dorcas Fellowship Meeting", date: "2026-06-10", day: "Wednesday", time: "10:30 AM - 12:00 PM", location: "Room 1", badge: "Scheduled" },
];

export const FG_BY_MINISTRY_FOCUS_MOCK = {
  breakdown: [
    { label: "Bible Study", count: 4, pct: 33.3, color: "#16A34A" },
    { label: "Prayer & Intercession", count: 3, pct: 25.0, color: "#7C3AED" },
    { label: "Outreach & Service", count: 2, pct: 16.7, color: "#F59E0B" },
    { label: "Fellowship & Care", count: 2, pct: 16.7, color: "#06B6D4" },
    { label: "Others", count: 1, pct: 8.3, color: "#94A3B8" },
  ],
};

/** Extra detail shown only in the Group Details modal, keyed by group id. */
export const FG_DETAIL_EXTRA_MOCK = {
  totalMembers: 28,
  meetingsThisMonth: 4,
  activitiesThisMonth: 3,
  documents: 5,
};

export const NEW_FELLOWSHIP_GROUP_DEFAULTS = {
  groupName: "",
  leader: "",
  coLeader: "",
  ministryFocus: "",
  establishedYear: "",
  status: "",
  description: "",
  meetingDay: "",
  meetingTime: "",
  meetingLocation: "",
  room: "",
  meetsOnline: false,
  maximumMembers: "",
  ageGroup: "",
};
