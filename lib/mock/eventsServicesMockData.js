
export const EVENTS_SERVICES_MOCK = {
  cards: {
    totalEvents: { value: 24, sublabel: "This Month" },
    services: { value: 16, sublabel: "This Month" },
    specialServices: { value: 4, sublabel: "This Month" },
    retreatsPrograms: { value: 3, sublabel: "This Month" },
    registrations: { value: 178, sublabel: "This Month" },
  },

  categories: ["All", "Events", "Services", "Special Services", "Programs", "Retreats", "Meetings"],
  dateRangeLabel: "18 May 2025 - 18 Aug 2025",


  rows: [
    {
      id: 1, day: "20", month: "MAY", weekday: "TUE", time: "06:00 PM",
      title: "Youth Fellowship Meeting", description: "A time of worship, fellowship and bible study for youth.",
      category: "Meeting", location: "Youth Hall", organizedBy: "Youth Ministry",
      registered: 45, capacity: 60, status: "Upcoming",
    },
    {
      id: 2, day: "25", month: "MAY", weekday: "SUN", time: "09:30 AM",
      title: "Sunday School Anniversary", description: "Thanksgiving service for Sunday School Anniversary.",
      category: "Special Service", location: "Main Auditorium", organizedBy: "Sunday School",
      registered: 120, capacity: 150, status: "Upcoming",
    },
    {
      id: 3, day: "01", month: "JUN", weekday: "SUN", time: "08:00 AM",
      title: "Holy Communion Service", description: "Holy Communion Service & Worship.",
      category: "Service", location: "Main Church", organizedBy: "Worship Committee",
      registered: null, capacity: null, status: "Upcoming",
    },
    {
      id: 4, day: "07", month: "JUN", weekday: "SAT", time: "04:00 PM",
      title: "Women's Fellowship Meeting", description: "Monthly fellowship and prayer meeting for women.",
      category: "Meeting", location: "Fellowship Hall", organizedBy: "Women's Fellowship",
      registered: 35, capacity: 50, status: "Upcoming",
    },
    {
      id: 5, day: "15", month: "JUN", weekday: "SUN", time: "05:00 PM",
      title: "Parish Council Meeting", description: "Monthly Parish Council Committee Meeting.",
      category: "Meeting", location: "Conference Room", organizedBy: "Parish Council",
      registered: 18, capacity: 20, status: "Upcoming",
    },
    {
      id: 6, day: "21", month: "JUN", weekday: "SAT", time: "09:00 AM",
      title: "Prayer Retreat", description: "One day prayer retreat for spiritual growth.",
      category: "Retreat", location: "Retreat Center", organizedBy: "Prayer Ministry",
      registered: 60, capacity: 80, status: "Upcoming",
    },
    {
      id: 7, day: "29", month: "JUN", weekday: "SUN", time: "06:00 PM",
      title: "Gospel Music Night", description: "An evening of gospel music and worship.",
      category: "Program", location: "Main Auditorium", organizedBy: "Choir & Worship Team",
      registered: 200, capacity: 250, status: "Upcoming",
    },
    {
      id: 8, day: "05", month: "JUL", weekday: "SAT", time: "10:00 AM",
      title: "Bible Convention 2025", description: "Annual Bible Convention with various speakers.",
      category: "Event", location: "Convention Center", organizedBy: "Parish Office",
      registered: 350, capacity: 500, status: "Upcoming",
    },
    {
      id: 9, day: "02", month: "AUG", weekday: "SAT", time: "04:00 PM",
      title: "Family Retreat", description: "Retreat for all families of the church.",
      category: "Retreat", location: "Hill View Resort", organizedBy: "Family Ministry",
      registered: 75, capacity: 100, status: "Upcoming",
    },
    {
      id: 10, day: "10", month: "AUG", weekday: "SUN", time: "10:00 AM",
      title: "Sunday English Service", description: "Weekly Sunday morning worship service.",
      category: "Service", location: "Main Church", organizedBy: "Worship Committee",
      registered: 210, capacity: 300, status: "Upcoming",
    },
  ],

  // TODO(backend): a thin reshape of the same Event queryset above into
  // { date: "YYYY-MM-DD", title } pairs for calendar cell rendering.
  calendarMonth: "May 2025",
  calendarEventsByDate: {
    "2025-05-20": "Youth Fellowship Meeting",
    "2025-05-25": "Sunday School Anniversary",
  },
  today: 18,
};


export const CATEGORY_TAB_MAP = {
  Events: ["Event"],
  Services: ["Service"],
  "Special Services": ["Special Service"],
  Programs: ["Program"],
  Retreats: ["Retreat"],
  Meetings: ["Meeting"],
};

export function filterRowsByTab(rows, activeTab) {
  if (activeTab === "All") return rows;
  const allowedCategories = CATEGORY_TAB_MAP[activeTab] ?? [];
  return rows.filter((row) => allowedCategories.includes(row.category));
}

const CATEGORY_BADGE_CLASS = {
  Meeting: "bg-purple-50 text-purple-600",
  "Special Service": "bg-interactive-50 text-interactive-600",
  Service: "bg-accent-50 text-accent-600",
  Retreat: "bg-success-50 text-success-600",
  Program: "bg-blue-50 text-blue-600",
  Event: "bg-emerald-50 text-emerald-600",
};

export function categoryBadgeClass(category) {
  return CATEGORY_BADGE_CLASS[category] ?? "bg-surface-muted text-ink-muted";
}


const CATEGORY_DATE_BOX_CLASS = {
  Meeting: "border-purple-200 bg-purple-50",
  "Special Service": "border-interactive-200 bg-interactive-50",
  Service: "border-accent-200 bg-accent-50",
  Retreat: "border-success-200 bg-success-50",
  Program: "border-blue-200 bg-blue-50",
  Event: "border-emerald-200 bg-emerald-50",
};

export function categoryDateBoxClass(category) {
  return CATEGORY_DATE_BOX_CLASS[category] ?? "border-border bg-surface-canvas";
}

const CATEGORY_TEXT_CLASS = {
  Meeting: "text-purple-600",
  "Special Service": "text-interactive-600",
  Service: "text-accent-600",
  Retreat: "text-success-600",
  Program: "text-blue-600",
  Event: "text-emerald-600",
};

export function categoryTextClass(category) {
  return CATEGORY_TEXT_CLASS[category] ?? "text-interactive-500";
}
