export const EVT_STATUS_OPTIONS = ["Upcoming", "Completed", "Scheduled"];
export const EVT_TYPE_OPTIONS = [
  { value: "Prayer", label: "Prayer", desc: "A time of prayer and worship", icon: "heart", color: "#DB2777" },
  { value: "Bible Study", label: "Bible Study", desc: "Study on the Word of God", icon: "book", color: "#7C3AED" },
  { value: "Fellowship", label: "Fellowship", desc: "Fellowship and sharing", icon: "users", color: "#EA580C" },
  { value: "Worship", label: "Worship", desc: "Worship and thanksgiving", icon: "cross", color: "#2563EB" },
  { value: "Outreach", label: "Outreach", desc: "Community outreach program", icon: "handHeart", color: "#16A34A" },
  { value: "Conference", label: "Conference", desc: "Conference or seminar", icon: "star", color: "#F59E0B" },
];
export const EVT_VENUE_OPTIONS = ["Fellowship Hall", "Room 2", "Main Church", "Church Auditorium", "City Orphanage"];
export const EVT_ORGANIZER_OPTIONS = ["Women's Fellowship Team", "Ruth Fellowship", "Esther Fellowship", "Martha Fellowship", "Outreach Team"];
export const EVT_REGISTRATION_REQUIRED_OPTIONS = ["Yes", "No"];

export const EVT_STATUS_VARIANT = { Upcoming: "info", Completed: "default", Scheduled: "accent" };

const EVT_ICON_COLORS = { Prayer: "#DB2777", "Bible Study": "#7C3AED", Fellowship: "#EA580C", Worship: "#2563EB", Outreach: "#16A34A", Conference: "#F59E0B" };

const EVENTS_SEED = [
  {
    id: "EVT-001", title: "Women's Prayer Meet", eventType: "Prayer", date: "2026-05-25", day: "Monday", time: "6:00 PM - 7:30 PM",
    venue: "Fellowship Hall", venueAddress: "CSI St. John's Church, 12, Church Road, Chennai - 600 001",
    status: "Upcoming", registered: 48, capacity: 60, description: "A time of prayer and worship to seek God's presence and strengthen our faith together.",
    organizer: "Women's Fellowship Team", registrationOpened: "2026-05-10", lastDateToRegister: "2026-05-24",
    agenda: [
      { time: "6:00 PM", item: "Opening Prayer" }, { time: "6:10 PM", item: "Praise & Worship" },
      { time: "6:35 PM", item: "Scripture Reading" }, { time: "6:50 PM", item: "Prayer Session" }, { time: "7:20 PM", item: "Closing Prayer" },
    ],
    dressCode: "Modest", bringWith: "Bible, Notebook",
    contact: { person: "Mrs. Sarah Wilson", number: "98765 43210", email: "sarah.wilson@example.com" },
    notes: [{ text: "Please encourage all members to invite new sisters to join us in prayer.", by: "Mrs. Sarah Wilson", date: "2026-05-10" }],
  },
  { id: "EVT-002", title: "Bible Study – Ruth", eventType: "Bible Study", date: "2026-05-31", day: "Sunday", time: "10:00 AM - 11:30 AM", venue: "Room 2", status: "Upcoming", registered: 32, capacity: 40, description: "Study on the Book of Ruth." },
  { id: "EVT-003", title: "Sisterhood Fellowship", eventType: "Fellowship", date: "2026-06-06", day: "Saturday", time: "5:00 PM - 7:00 PM", venue: "Fellowship Hall", status: "Upcoming", registered: 60, capacity: 70, description: "Fellowship and sharing." },
  { id: "EVT-004", title: "Special Worship Service", eventType: "Worship", date: "2026-06-12", day: "Friday", time: "9:30 AM - 11:00 AM", venue: "Main Church", status: "Completed", registered: 120, capacity: 150, description: "Worship and thanksgiving." },
  { id: "EVT-005", title: "Outreach Visit", eventType: "Outreach", date: "2026-06-20", day: "Saturday", time: "3:00 PM - 6:00 PM", venue: "City Orphanage", status: "Upcoming", registered: 25, capacity: 30, description: "Community outreach program." },
  { id: "EVT-006", title: "Women's Conference 2026", eventType: "Conference", date: "2026-07-04", day: "Saturday", time: "9:00 AM - 5:00 PM", venue: "Church Auditorium", status: "Upcoming", registered: 210, capacity: 250, description: "Annual women's conference." },
  { id: "EVT-007", title: "Praise & Worship Night", eventType: "Worship", date: "2026-07-18", day: "Saturday", time: "6:30 PM - 8:30 PM", venue: "Main Church", status: "Upcoming", registered: 75, capacity: 100, description: "An evening of praise." },
  { id: "EVT-008", title: "Christmas Celebration", eventType: "Fellowship", date: "2026-12-20", day: "Sunday", time: "4:00 PM - 8:00 PM", venue: "Church Auditorium", status: "Scheduled", registered: null, capacity: null, description: "Christmas fellowship & program." },
];

/** Pad the seed list out to 24 entries to match "Showing 1 to 8 of 24 events". */
export const EVENTS_MOCK = Array.from({ length: 24 }, (_, i) => {
  const seed = EVENTS_SEED[i % EVENTS_SEED.length];
  const color = EVT_ICON_COLORS[seed.eventType] ?? "#94A3B8";
  if (i < EVENTS_SEED.length) return { ...seed, color };
  return { ...seed, id: `EVT-${String(i + 1).padStart(3, "0")}`, color };
});

export const EVT_UPCOMING_MOCK = [
  { title: "Women's Prayer Meet", date: "2026-05-25", time: "6:00 PM - 7:30 PM", venue: "Fellowship Hall", daysAway: 2 },
  { title: "Bible Study – Ruth", date: "2026-05-31", time: "10:00 AM - 11:30 AM", venue: "Room 2", daysAway: 8 },
  { title: "Sisterhood Fellowship", date: "2026-06-06", time: "5:00 PM - 7:00 PM", venue: "Fellowship Hall", daysAway: 14 },
  { title: "Outreach Visit", date: "2026-06-20", time: "3:00 PM - 6:00 PM", venue: "City Orphanage", daysAway: 28 },
];

export const EVT_BY_TYPE_MOCK = {
  breakdown: [
    { label: "Prayer", count: 6, pct: 25.0, color: "#DB2777" },
    { label: "Bible Study", count: 5, pct: 20.8, color: "#7C3AED" },
    { label: "Fellowship", count: 5, pct: 20.8, color: "#F59E0B" },
    { label: "Worship", count: 4, pct: 16.7, color: "#2563EB" },
    { label: "Outreach", count: 2, pct: 8.3, color: "#16A34A" },
    { label: "Conference", count: 2, pct: 8.3, color: "#94A3B8" },
  ],
};

export const EVT_DETAIL_DEFAULTS = {
  organizer: "Women's Fellowship Team",
  registrationOpened: "2026-05-01",
  lastDateToRegister: "2026-05-20",
  agenda: [],
  dressCode: "Modest",
  bringWith: "Bible",
  contact: { person: "Mrs. Sarah Wilson", number: "98765 43210", email: "sarah.wilson@example.com" },
  notes: [],
};

export const NEW_EVENT_DEFAULTS = {
  title: "",
  eventType: "",
  description: "",
  date: "",
  startTime: "",
  endTime: "",
  allDay: false,
  venue: "",
  address: "",
  roomHall: "",
  organizer: "",
  contactPerson: "",
  contactNumber: "",
  email: "",
  registrationRequired: "Yes",
  registrationOpensOn: "",
  lastDateToRegister: "",
  totalCapacity: "",
  showInCalendar: true,
  dressCode: "",
  bringWith: "",
  notes: "",
  sendEmailReminder: true,
  sendSmsReminder: true,
  reminderDate: "",
  documentNames: [],
};
