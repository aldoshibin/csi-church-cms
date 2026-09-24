export const ACT_STATUS_OPTIONS = ["Upcoming", "Completed", "Scheduled"];
export const ACT_TYPE_OPTIONS = [
  { value: "Prayer", label: "Prayer", desc: "A time of prayer and worship", icon: "heart", color: "#DB2777" },
  { value: "Bible Study", label: "Bible Study", desc: "Study on the Word of God", icon: "book", color: "#7C3AED" },
  { value: "Fellowship", label: "Fellowship", desc: "Fellowship and sharing", icon: "users", color: "#EA580C" },
  { value: "Worship", label: "Worship", desc: "Worship and thanksgiving", icon: "cross", color: "#2563EB" },
  { value: "Outreach", label: "Outreach", desc: "Community outreach program", icon: "handHeart", color: "#16A34A" },
  { value: "Conference / Seminar", label: "Conference / Seminar", desc: "Conference or seminar", icon: "star", color: "#F59E0B" },
  { value: "Others", label: "Others", desc: "Other activities", icon: "moreHorizontal", color: "#64748B" },
];
export const ACT_VENUE_OPTIONS = ["Fellowship Hall", "Room 2", "Main Church", "Church Auditorium", "City Orphanage"];
export const ACT_FOCUS_AREA_OPTIONS = ["Prayer", "Bible Study", "Fellowship", "Worship", "Outreach", "Conference", "Others"];
export const ACT_DRESS_CODE_OPTIONS = ["Casual", "Modest", "Formal", "Traditional"];
export const ACT_ORGANIZER_OPTIONS = ["Women's Fellowship Team", "Ruth Fellowship", "Esther Fellowship", "Martha Fellowship", "Outreach Team"];

export const ACT_STATUS_VARIANT = { Upcoming: "info", Completed: "default", Scheduled: "accent" };
const ACT_ICON_COLORS = { Prayer: "#DB2777", "Bible Study": "#7C3AED", Fellowship: "#EA580C", Worship: "#2563EB", Outreach: "#16A34A", "Conference / Seminar": "#F59E0B", Others: "#64748B" };

const ACTIVITIES_SEED = [
  {
    id: "ACT-001", title: "Women's Prayer Meeting", activityType: "Prayer", date: "2026-05-25", day: "Monday", time: "6:00 PM - 7:30 PM",
    venue: "Fellowship Hall", venueAddress: "CSI St. John's Church, 12, Church Road, Chennai - 600 001",
    status: "Upcoming", participants: 48, capacity: 60, description: "A prayer gathering for all sisters to seek God's presence and strengthen our faith together.",
    focusArea: "Prayer", dressCode: "Modest", bringWith: "Bible, Prayer Book",
    registrationOpensOn: "2026-05-10", lastDateToRegister: "2026-05-24",
    agenda: [
      { time: "6:00 PM", item: "Opening Prayer" }, { time: "6:10 PM", item: "Praise & Worship" },
      { time: "6:30 PM", item: "Scripture Reading" }, { time: "6:45 PM", item: "Prayer Session" }, { time: "7:20 PM", item: "Closing Prayer" },
    ],
    notes: [
      { text: "Please encourage all members to invite new sisters to join us in prayer.", by: "Mrs. Sarah Wilson", date: "2026-05-10" },
      { text: "Prayer topics for this month: Family, Health, Church Ministry, Outreach Programs.", by: "Mrs. Sarah Wilson", date: "2026-05-12" },
    ],
  },
  { id: "ACT-002", title: "Bible Study – Ruth", activityType: "Bible Study", date: "2026-05-31", day: "Sunday", time: "10:00 AM - 11:30 AM", venue: "Room 2", status: "Upcoming", participants: 32, capacity: 40, description: "Study on the Book of Ruth." },
  { id: "ACT-003", title: "Sisterhood Fellowship", activityType: "Fellowship", date: "2026-06-06", day: "Saturday", time: "5:00 PM - 7:00 PM", venue: "Fellowship Hall", status: "Upcoming", participants: 60, capacity: 70, description: "Fellowship and sharing." },
  { id: "ACT-004", title: "Praise & Worship Night", activityType: "Worship", date: "2026-06-12", day: "Friday", time: "6:30 PM - 8:30 PM", venue: "Main Church", status: "Completed", participants: 120, capacity: 150, description: "An evening of praise & worship." },
  { id: "ACT-005", title: "Outreach Visit", activityType: "Outreach", date: "2026-06-20", day: "Saturday", time: "3:00 PM - 6:00 PM", venue: "City Orphanage", status: "Completed", participants: 25, capacity: 30, description: "Community outreach program." },
  { id: "ACT-006", title: "Women's Conference 2026", activityType: "Conference / Seminar", date: "2026-07-04", day: "Saturday", time: "9:00 AM - 5:00 PM", venue: "Church Auditorium", status: "Upcoming", participants: 210, capacity: 250, description: "Annual women's conference." },
  { id: "ACT-007", title: "Christmas Celebration", activityType: "Fellowship", date: "2026-12-20", day: "Sunday", time: "4:00 PM - 8:00 PM", venue: "Church Auditorium", status: "Scheduled", participants: null, capacity: null, description: "Christmas fellowship & program." },
  { id: "ACT-008", title: "Carol Singing", activityType: "Worship", date: "2026-12-23", day: "Wednesday", time: "5:30 PM - 7:30 PM", venue: "Main Church", status: "Scheduled", participants: null, capacity: null, description: "Christmas carol singing." },
];

/** Pad the seed list out to 36 entries to match "Showing 1 to 8 of 36 activities". */
export const ACTIVITIES_MOCK = Array.from({ length: 36 }, (_, i) => {
  const seed = ACTIVITIES_SEED[i % ACTIVITIES_SEED.length];
  const color = ACT_ICON_COLORS[seed.activityType] ?? "#94A3B8";
  if (i < ACTIVITIES_SEED.length) return { ...seed, color };
  return { ...seed, id: `ACT-${String(i + 1).padStart(3, "0")}`, color };
});

export const ACTIVITIES_STATS_MOCK = {
  totalActivities: { value: 36, delta: "12.5%", trendUp: true },
  upcomingActivities: { value: 12, delta: "9.1%", trendUp: true },
  completedActivities: { value: 20, delta: "18.2%", trendUp: true },
  totalParticipation: { value: 1256, delta: "15.3%", trendUp: true },
};

export const ACT_UPCOMING_MOCK = [
  { title: "Women's Prayer Meeting", date: "2026-05-25", time: "6:00 PM - 7:30 PM", venue: "Fellowship Hall", daysAway: 2 },
  { title: "Bible Study – Ruth", date: "2026-05-31", time: "10:00 AM - 11:30 AM", venue: "Room 2", daysAway: 8 },
  { title: "Sisterhood Fellowship", date: "2026-06-06", time: "5:00 PM - 7:00 PM", venue: "Fellowship Hall", daysAway: 14 },
  { title: "Praise & Worship Night", date: "2026-06-12", time: "6:30 PM - 8:30 PM", venue: "Main Church", daysAway: 20 },
];

export const ACT_BY_FOCUS_MOCK = {
  breakdown: [
    { label: "Prayer", count: 7, pct: 19.4, color: "#DB2777" },
    { label: "Bible Study", count: 6, pct: 16.7, color: "#7C3AED" },
    { label: "Fellowship", count: 8, pct: 22.2, color: "#F59E0B" },
    { label: "Worship", count: 6, pct: 16.7, color: "#2563EB" },
    { label: "Outreach", count: 4, pct: 11.1, color: "#16A34A" },
    { label: "Conference", count: 3, pct: 8.3, color: "#94A3B8" },
    { label: "Others", count: 2, pct: 5.6, color: "#CBD5E1" },
  ],
};

export const ACT_DETAIL_DEFAULTS = {
  focusArea: "Fellowship",
  dressCode: "Casual",
  bringWith: "—",
  registrationOpensOn: "2026-05-01",
  lastDateToRegister: "2026-05-20",
  agenda: [],
  notes: [],
};

export const NEW_ACTIVITY_DEFAULTS = {
  title: "",
  activityType: "",
  description: "",
  date: "",
  startTime: "",
  endTime: "",
  allDay: false,
  venue: "",
  address: "",
  roomHall: "",
  focusArea: "",
  dressCode: "",
  bringWith: "",
  organizer: "",
  contactPerson: "",
  contactNumber: "",
  email: "",
  registrationRequired: "Yes",
  registrationOpensOn: "",
  lastDateToRegister: "",
  totalCapacity: "",
  showInCalendar: true,
  sendEmailReminder: true,
  sendSmsReminder: true,
  reminderDate: "",
  reminderTime: "",
  documentNames: [],
};
